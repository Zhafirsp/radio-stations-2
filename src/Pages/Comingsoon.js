import React, { lazy, useState, useRef, useEffect, useCallback } from "react";
import "../Assets/Css/comingsoon.css";
import v1 from "../Assets/Video/v1.mp4";
import v2 from "../Assets/Video/v1.mp4";
import v3 from "../Assets/Video/v1.mp4";
import img from "../Assets/Img/gradient1.png";
import StationSelector from "../Components/StationSelector/StationSelector";
import oz_bdg from "../Assets/Img/logo_oz_bdg.png";
import oz_jkt from "../Assets/Img/logo_oz_jkt.png";
import oz_bali from "../Assets/Img/logo_oz_bali.png";
import axios from "axios";
import default_img from "../Assets/Img/bg-vinyl.png";
import IcecastMetadataPlayer from "icecast-metadata-player";
import { ToastContainer, toast } from "react-toastify";
import Player from "../Components/Player/Player";
import { Link } from "react-router-dom";
import { IoSearchCircle, IoCloseCircle } from "react-icons/io5";

const NOW_PLAYING = <span style={{ color: "#7BA142" }}>Now Playing</span>;
const VISIT_STATION = "Visit OZ ";
const ICECAST_METADATA_JS_DEMO = "Icecast Metadata JS Demo";
const SELECT_STATION = "Select a station";
const SELECT_OR_PLAY = "Press play";
const LOADING = "Loading...";
const RECONNECTING = "Lost Connection. Reconnecting...";
const CONNECTED = "Waiting metadata...";
const SWITCHING = "Switching...";

const stations = [
  {
    name: "Bali",
    mount: "/ozradiobali",
    image: oz_bali,
    frequency: "101.2 FM",
    link: "https://ozradiobali.id/",
    endpoints: [
      {
        endpoint: "https://streaming.ozradiojakarta.com:8443/ozradiobali",
        codec: "AAC",
        metadataTypes: ["icestats"],
        statsSources: ["icy", "icestats"],
      },
    ],
  },
  {
    name: "Jakarta",
    mount: "/ozjakarta",
    image: oz_jkt,
    frequency: "90.8 FM",
    link: "https://ozradiojakarta.com/",
    endpoints: [
      {
        endpoint: "https://streaming.ozradiojakarta.com:8443/ozjakarta",
        codec: "AAC",
        metadataTypes: ["icestats"],
        statsSources: ["icy", "icestats"],
      },
    ],
  },
  {
    name: "Bandung",
    mount: "/ozradiobandung",
    image: oz_bdg,
    frequency: "103.1 FM",
    link: "https://bandung.ozradio.id/",
    endpoints: [
      {
        endpoint: "https://streaming.ozradiojakarta.com:8443/ozradiobandung",
        codec: "AAC",
        metadataTypes: ["icestats"],
        statsSources: ["icy", "icestats"],
      },
    ],
  },
];
const NavTop = () => {
  const audioRef = useRef(null);
  const [audioElement] = useState(new Audio());
  const [station, setStation] = useState();
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [metadata, setMetadata] = useState(SELECT_STATION);
  const [icecast, setIcecast] = useState();

  const [selectedStation, setSelectedStation] = useState("");
  const [castSession, setCastSession] = useState();
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");
  // const [currentRadio, setCurrentRadio] = useState('');
  const [streamUrl, setStreamUrl] = useState("");
  const [albumArtworkURL, setAlbumArtworkURL] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedStation) {
          const response = await axios.get(
            `https://streaming.ozradiojakarta.com:8443/status-json.xsl?mount=${selectedStation.mount}`
          );
          const data = response.data;
          if (data && data.icestats && data.icestats.source) {
            const { title, listenurl, server_url } = data.icestats.source;
            setCurrentTitle(title || "");
            // setCurrentRadio(server_url || '');
            if (listenurl) {
              // Mengganti protokol HTTP menjadi HTTPS
              const secureListenurl = listenurl.replace(/^http:/, "https:");
              setStreamUrl(secureListenurl || "");
            } else {
              console.error("Listen URL is not defined in the data");
            }
            console.log("Memutar musik dari:", listenurl);
            // Panggil pencarian album artwork hanya jika ada judul lagu yang baru
            if (title) {
              const searchResponse = await axios.get(
                `https://ozbackend.santuy.info/api/song/search?q=${encodeURIComponent(
                  title
                )}`
              );
              const searchData = searchResponse.data;

              // Ambil URL gambar album dari respons data
              if (
                searchData &&
                Array.isArray(searchData) &&
                searchData.length > 0 &&
                searchData[0].thumbnails &&
                searchData[0].thumbnails.length > 0
              ) {
                // Get the URL of the first thumbnail
                const thumbnailURL = searchData[0].thumbnails[1].url;
                // Manipulasi URL untuk mendapatkan gambar dengan ukuran w300-h300
                // const thumbnailURL = thumbnailURLImage.replace(/=w\d+-h\d+-/, "=w1000-h1000-");
                setAlbumArtworkURL(thumbnailURL);
              } else {
                console.error("Thumbnail not found in search data");
                setAlbumArtworkURL(default_img);
              }
            }
          } else {
            console.error("Invalid or empty data received from API");
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setAlbumArtworkURL(default_img);
      }
    };

    fetchData();

    // Membuat interval untuk mengambil data setiap 10 detik
    const interval = setInterval(fetchData, 10000);

    // Membersihkan interval saat komponen tidak lagi digunakan
    return () => clearInterval(interval);
  }, [selectedStation]);

  // const handlePlay = () => {
  //   if (setStreamUrl) {
  //     setPlaying(true)
  //     setStreamUrl('Playing');
  //     const audioElement = document.getElementById('audio-element');
  //     audioElement.play(); // Memulai pemutaran audio
  //   } else {
  //     setPlaying(false)
  //     setStreamUrl('Paused');
  //     const audioElement = document.getElementById('audio-element');
  //     audioElement.pause(); // Memulai pemutaran audio
  //   }
  // }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*=============== SEARCH BAR JS ===============*/
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const namespace = "urn:x-cast:icecast-metadata-js-demo";
  const castAPIId = "E3C20492";

  const sendCastMessage = useCallback(
    (msg) => {
      castSession?.sendMessage(namespace, msg);
    },
    [castSession]
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.gstatic.com/cv/js/sender/v1/cast_sender.js";
    document.body.appendChild(script);

    window.__onGCastApiAvailable = (loaded) => {
      if (loaded) {
        const sessionRequest = new window.chrome.cast.SessionRequest(castAPIId);

        const apiConfig = new window.chrome.cast.ApiConfig(
          sessionRequest,
          (session) => {
            setCastSession(session);
          },
          () => {}
        );

        window.chrome.cast.initialize(apiConfig);
      }
    };
  }, []);

  const changeStation = useCallback(
    async (newStation) => {
      setSelectedStation(newStation);
      setAlbumArtworkURL(default_img); // Tetapkan gambar default saat memilih stasiun baru
      const selectedStationInfo = stations.find((s) => s.name === station);
      if (
        selectedStationInfo &&
        icecast &&
        station &&
        icecast.state !== "stopped" &&
        newStation.name === station.name &&
        newStation.switchable !== false &&
        station.switchable !== false
      ) {
        icecast.switchEndpoint(newStation.endpoint, newStation);
        setStreamUrl(selectedStationInfo.streamUrl || "");
      } else {
        if (icecast) {
          await icecast.stop();
          sendCastMessage({ command: "stop" });
          icecast.detachAudioElement();
        }

        sendCastMessage({
          command: "change station",
          enableCodecUpdate: true,
          ...newStation,
        });

        let currentMetadata = "";

        const player = new IcecastMetadataPlayer(newStation.endpoint, {
          onMetadata: (meta) => {
            console.log(meta);
            currentMetadata = meta;
            setMetadata(meta);
          },
          onPlay: () => {
            setPlaying(true);
          },
          onStop: () => {
            setPlaying(false);
            currentMetadata = "";
            setMetadata(SELECT_OR_PLAY);
          },
          onLoad: () => {
            setPlaying(true);
            setMetadata(LOADING);
          },
          onError: (error) => {
            currentMetadata = "";
            setMetadata(error?.message || error);
          },
          onRetry: () => {
            currentMetadata = "";
            setMetadata(RECONNECTING);
          },
          onStreamStart: () => {
            setMetadata(
              newStation.metadataTypes.length
                ? currentMetadata || CONNECTED
                : ""
            );
          },
          onSwitch: () => {
            setMetadata(SWITCHING);
          },
          icyDetectionTimeout: 5000,
          icyCharacterEncoding: newStation.icyCharacterEncoding,
          enableLogging: true,
          metadataTypes: newStation.metadataTypes,
          bufferLength: newStation.bufferLength,
          audioElement,
          retryTimeout: 1000,
          endpointOrder: "random",
        });

        player.play();
        sendCastMessage({ command: "play" });

        setIcecast(player);
      }

      setStation(newStation);
    },
    [
      icecast,
      station,
      audioElement,
      sendCastMessage,
      setSelectedStation,
      selectedStation,
    ]
  );

  const play = useCallback(() => {
    if (!selectedStation) {
      toast.error("Please select streaming radio first", {
        type: "warning",
        theme: "dark",
        pauseOnFocusLoss: false,
      });
      return;
    }
    icecast.play();
    sendCastMessage({ command: "play" });
  }, [icecast, sendCastMessage]);

  const stop = useCallback(() => {
    icecast.stop();
    sendCastMessage({ command: "stop" });
  }, [icecast, sendCastMessage]);

  const toggle = useCallback(() => {
    playing ? stop() : play();
  }, [playing, stop, play]);

  const [playStates, setPlayStates] = useState({
    Bandung: false,
    Jakarta: false,
    Bali: false,
  });

  const handlePlayPause = (stationName) => {
    const audio = audioRef.current;
    const isPlaying = playStates[stationName];

    if (isPlaying) {
      try {
        audio.pause();
        setPlayStates((prevState) => ({
          ...prevState,
          [stationName]: false,
        }));
      } catch (error) {
        toast.error("Failed to pause audio playback.", {
          type: "error",
          theme: "dark",
          pauseOnFocusLoss: false,
        });
      }
    } else {
      // Stop playing all stations
      Object.keys(playStates).forEach((key) => {
        if (playStates[key]) {
          try {
            audio.pause();
            setPlayStates((prevState) => ({
              ...prevState,
              [key]: false,
            }));
          } catch (error) {
            toast.error("Failed to pause audio playback.", {
              type: "error",
              theme: "dark",
              pauseOnFocusLoss: false,
            });
          }
        }
      });

      // Start playing the selected station
      const selectedStation = stations.find(
        (station) => station.name === stationName
      );
      if (selectedStation) {
        const endpoint = selectedStation.endpoints[0]; // Ambil endpoint pertama
        const streamUrl = endpoint.endpoint; // Dapatkan URL streaming dari endpoint
        try {
          audio.src = streamUrl;
          audio.play();
          setPlayStates((prevState) => ({
            ...prevState,
            [stationName]: true,
          }));
        } catch (error) {
          toast.error("Failed to start audio playback.");
        }
      }
    }
  };

  const Metadata = React.memo(({ metadata }) => (
    <div>
      {metadata && typeof metadata === "object" && metadata.StreamTitle ? (
        <>{metadata.StreamTitle}</>
      ) : (
        <>
          {metadata &&
            (metadata.ARTIST
              ? `${metadata.ARTIST} - ${metadata.TITLE}`
              : metadata.TITLE) &&
            (metadata.ARTIST || metadata.TITLE)}
        </>
      )}
    </div>
  ));

  const VisitStationLink = React.memo(
    ({ station }) =>
      station?.link && (
        <div>
          {NOW_PLAYING}
          <br />
          {VISIT_STATION}
          <a
            className="text-white"
            href={station.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {station.name}
          </a>
        </div>
      )
  );

  return (
    <div className="comingsoon">
      <div className="row kotak-awal">
        <div className="col-4 border-kotak">
          <video autoPlay muted loop>
            <source src={v1} type="video/mp4" />
          </video>
          <div className="caption">{/* <h2>Your caption here</h2> */}</div>
        </div>
        <div className="col-4 border-kotak">
          <video autoPlay muted loop>
            <source src={v2} type="video/mp4" />
          </video>
          <div className="caption">{/* <h2>Your caption here</h2> */}</div>
        </div>
        <div className="col-4 border-kotak">
          <video autoPlay muted loop>
            <source src={v3} type="video/mp4" />
          </video>
          <div className="caption">{/* <h2>Your caption here</h2> */}</div>
        </div>
      </div>
      <img src={img} className="img-comingsoon"></img>
      <label className="capt-comingsoon">WE ARE COMING SOON</label>

      <div className="streaming-radio-comingsoon">
        <div className="song-player-comingsoon d-flex">
          <Player
            allow="autoplay"
            toggle={toggle}
            playing={playing}
            volume={volume}
            setVolume={setVolume}
          />
          <img
            src={selectedStation ? albumArtworkURL : default_img}
            alt=""
            className="img-cover-comingsoon mx-1 mb-5 img-radio img-fluid"
            loading="lazy"
          />
          <div className="song-text-comingsoon">
            <p className="fw-lighter text-title">
              <VisitStationLink station={station} />
              {currentTitle}
            </p>
          </div>
          
        </div>
        <div className="station-selector-comingsoon fs-5 fw-medium mt-4 ">
          <p className="station-streaming-comingsoon">Streaming: </p>
          <StationSelector
            allow="autoplay"
            stations={stations}
            changeStation={changeStation}
            selectedStation={station}
            // currentTitle={currentTitle}
          />
        </div>
      </div>
    </div>
  );
};

export default NavTop;
