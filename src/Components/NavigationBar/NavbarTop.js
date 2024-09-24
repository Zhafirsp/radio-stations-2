import React, { lazy, useState, useRef, useEffect, useCallback, useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown, Dropdown, Offcanvas, Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import oz_logo from '../../Assets/Img/Logo2.png'
import default_img from '../../Assets/Img/bg-vinyl.png'
import '../../Assets/Css/nav_top.css'
import Player from "../Player/Player";
import StationSelector from "../StationSelector/StationSelector";
import IcecastMetadataPlayer from "icecast-metadata-player";
import { useTheme } from '../../ThemeContext';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import '../../Assets/Css/nav_bottom.css'
import { IoSearchCircle, IoCloseCircle  } from "react-icons/io5";
import axios from 'axios';
import stations from './../../Data/stations.json'
import { MdLightMode, MdDarkMode  } from "react-icons/md";

const NOW_PLAYING = <span className='now-playing-text'>Now Playing</span>;
const VISIT_STATION = <span className='text-title'>Visit OZ </span>;
const SELECT_STATION = "Select a station";
const SELECT_OR_PLAY = "Press play";
const LOADING = "Loading...";
const RECONNECTING = "Lost Connection. Reconnecting...";
const CONNECTED = "Waiting metadata...";
const SWITCHING = "Switching...";


const NavTop = () => {
  const audioRef = useRef(null);
  const [audioElement] = useState(new Audio());
  const [station, setStation] = useState();
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [metadata, setMetadata] = useState(SELECT_STATION);
  const [icecast, setIcecast] = useState();

  const [selectedStation, setSelectedStation] = useState('');
  const [castSession, setCastSession] = useState();
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');
  // const [currentRadio, setCurrentRadio] = useState('');
  const [streamUrl, setStreamUrl] = useState('');
  const [albumArtworkURL, setAlbumArtworkURL] = useState('');

  const { theme, toggleTheme, ref } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedStation) {
          let response;
          const urls = [
            `https://streaming.ozradiojakarta.com:8443/status-json.xsl?mount=${selectedStation.mount}`,
            `https://streaming.ozradiobali.id:8443/status-json.xsl?mount=${selectedStation.mount}`,
            // `https://streaming.ozradiobandung.com:8443/status-json.xsl?mount=${selectedStation.mount}`,
            `https://s3.vinhostmedia.com:10987/`
          ];
  
          for (let url of urls) {
            try {
              response = await axios.get(url, {
                headers: {
                  "Content-Type": "application/json",
                }
              });
              if (response.data && response.data.icestats && response.data.icestats.source) {
                break; // Berhenti pada URL pertama yang berhasil
              }
            } catch (error) {
              console.warn(`Failed to fetch from ${url}:`, error);
            }
          }
  
          if (response && response.data && response.data.icestats && response.data.icestats.source) {
            const { title, listenurl } = response.data.icestats.source;
            setCurrentTitle(title || '');
            
            if (listenurl) {
              const secureListenurl = listenurl.replace(/^http:/, 'https:');
              setStreamUrl(secureListenurl || '');
            } else {
              console.error('Listen URL is not defined in the data');
            }
  
            // Mencari album artwork jika judul lagu ditemukan
            if (title) {
              const searchResponse = await axios.get(`https://ozbackend.santuy.info/api/song/search?q=${encodeURIComponent(title)}`, {
                headers: {
                  "Content-Type": "application/json",
                }
              });
              const searchData = searchResponse.data;
              if (searchData && Array.isArray(searchData) && searchData.length > 0 && searchData[0].thumbnails && searchData[0].thumbnails.length > 0) {
                const thumbnailURL = searchData[0].thumbnails[1].url;
                setAlbumArtworkURL(thumbnailURL);
              } else {
                setAlbumArtworkURL(default_img);
              }
            }
          } else {
            console.error('Invalid or empty data received from all APIs');
            setAlbumArtworkURL(default_img);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setAlbumArtworkURL(default_img);
      }
    };
  
    fetchData();
  
    // Membuat interval untuk mengambil data setiap 10 detik
    const interval = setInterval(fetchData, 10000);
  
    // Membersihkan interval saat komponen tidak lagi digunakan
    return () => clearInterval(interval);
  }, [selectedStation]);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

/*=============== SEARCH BAR JS ===============*/
const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const namespace = "urn:x-cast:OZ MEDIA";
  const castAPIId = "E3C20492";

  const sendCastMessage = useCallback(
    (msg) => {
      castSession?.sendMessage(namespace, msg);
    },
    [castSession],
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
          () => {},
        );

        window.chrome.cast.initialize(apiConfig);
      }
    };
  }, []);
  
  const changeStation = useCallback(
    async (newStation) => {
    setSelectedStation(newStation);
    setAlbumArtworkURL(default_img); // Tetapkan gambar default saat memilih stasiun baru
    const selectedStationInfo = stations.find(s => s.name === station);
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
        setStreamUrl(selectedStationInfo.streamUrl || '');
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
                : "",
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
    [icecast, station, audioElement, sendCastMessage, setSelectedStation, selectedStation],
  );

  const play = useCallback(() => {
    if (!selectedStation) {
      toast.error("Please select streaming radio first", {
        type: "warning",
        theme:"dark",
        pauseOnFocusLoss: false
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
    Bali: false
  });

  const handlePlayPause = (stationName) => {
    const audio = audioRef.current;
    const isPlaying = playStates[stationName];

    if (isPlaying) {
        try {
          audio.pause(); 
          setPlayStates(prevState => ({
            ...prevState,
            [stationName]: false
          }));
        } catch (error) {
          toast.error("Failed to pause audio playback.", {
            type: "error",
            theme:"dark",
            pauseOnFocusLoss: false
          });
      }
    } else {
      // Stop playing all stations
      Object.keys(playStates).forEach((key) => {
        if (playStates[key]) {
          try {
            audio.pause();
            setPlayStates(prevState => ({
              ...prevState,
              [key]: false
            }));
          } catch (error) {
            toast.error("Failed to pause audio playback.", {
              type: "error",
              theme:"dark",
              pauseOnFocusLoss: false
            });
          }
        }
      });

      // Start playing the selected station
      const selectedStation = stations.find(station => station.name === stationName);
      if (selectedStation) {
      const endpoint = selectedStation.endpoints[0]; // Ambil endpoint pertama
      const streamUrl = endpoint.endpoint; // Dapatkan URL streaming dari endpoint
        try {
          audio.src = streamUrl;
          audio.play();
          setPlayStates(prevState => ({
            ...prevState,
            [stationName]: true
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
          <br/>
          {VISIT_STATION}
          <a
            className='text-white visit-oz-station'
            href={station.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {station.name}
          </a>
        </div>
      ),
  );

  const handleThemeToggle = () => {
    toggleTheme();
    handleClose();
  };

  return (
    <>
    <div className='navbar'>
        {/* <div className="blur-navtop" style={{ backgroundImage: `url(${song})` }} /> */}
        <audio ref={audioRef} />
        <ToastContainer
          closeOnClick
          position="top-center"
          pauseOnHover={false}
        />
        <Container fluid>
          <Navbar 
          className="navbar-top navbar-song custom-nav pt-3 blur-navtop" 
          variant="underline" 
          style={{ 
            // backdropFilter: isScrolled ? 'blur(40px)' : 'none',
            // WebkitBackdropFilter: isScrolled ? 'blur(40px)' : 'none',
            // backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bg_atas})`,
            // backgroundColor:"black"

            }}>
              <div className='logo_topbar'>
              <Link to="/">
                <img className='nav-logo navbar-brand pb-5' src={oz_logo} width={150} alt='logo-navtop'/>
                </Link>
                </div>
                <div className='song-player d-flex col-md-12'>
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
                          className=" mx-1 mb-5 img-radio img-fluid"
                          loading='lazy'
                        />
                      <div className='mt-4 ms-2 song-text col-md-12'>
                            <p className='fw-lighter text-title'>
                            <VisitStationLink station={station} />
                            {currentTitle}
                            </p>
                        </div>
                        <Link to="/search" className='search__icon text-warning' aria-label='search-top'><IoSearchCircle /></Link>
                  </div>
          </Navbar>
        </Container>
      <Navbar
    expand="lg"
    fixed="top"
    className='navbar-bottom'
    id='navbar-bottom'
    style={{
      // filter: !isScrolled ? 'blur(5px)' : 'none',
      // WebkitBackdropFilter: isScrolled ? 'blur(5px)' : 'none',
      // backgroundImage: selectedStation ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${albumArtworkURL})` : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${default_img})`
      // backgroundColor:"black"
      // backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bg_bawah})`

    }}
  >
    <Container fluid>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav navbarScroll " className='' />
                    <Navbar.Collapse id="basic-navbar-nav navbarScroll "> */}
                        <Nav className="custom-nav fs-5 fw-medium">
                        <Link to="/">
                          <img className='logo_bottom' src={oz_logo} width={50} alt='logo-navbottom'/>
                        </Link>
                        <Nav.Link onClick={handleShow} className='offcanvas-menu text-white'><GiHamburgerMenu className='pb-1' />Menu</Nav.Link>
                        <Offcanvas show={show} onHide={handleClose} className='offcanvas-bg'>
                          <Offcanvas.Header closeButton closeVariant='white'>
                            <Offcanvas.Title className='offcanvas-title'>Menu</Offcanvas.Title>
                            <div onClick={handleThemeToggle} className="theme-toggle">
                            {theme === 'light' ? <MdDarkMode size={24} className='icon--moon' /> : <MdLightMode size={24} className='icon--sun' />}
                            </div>
                          </Offcanvas.Header>
                          <Offcanvas.Body className='fs-5 offcanvas-body'>
                            {/* <form action="https://www.google.com/search" target='_blank' className={`search ${showSearch ? 'show-search' : ''}`} id="search-bar">
                            <input type="search" placeholder="Search..." name="q" className="search__input"/>
                                <div class="search__button3" id="search-button" onClick={toggleSearch}>
                                <IoSearchCircle className='search__icon text-warning'/>
                                <IoCloseCircle className='search__close text-warning'/>
                                </div>
                            </form> */}
                            <Form action="https://www.google.com/search" target='_blank' className='search-offcanvas'>
                                <Form.Control type="input" placeholder="Search OZ" name="q" style={{ borderRadius:"25px", marginBottom:"20px", width:"250px", paddingTop:"10px" }}></Form.Control>
                                {/* <IoSearchCircle className='text-warning'/> */}
                            </Form>
                              <Nav.Link><Link to="/" className='text-white' onClick={handleClose}>Home</Link></Nav.Link>
                              <Nav.Link><Link to="/news" className='text-white' onClick={handleClose}>News</Link></Nav.Link>
                              <Nav.Link><Link to="/radio/category/:category" className='text-white' onClick={handleClose}>Radio</Link></Nav.Link>
                              <Nav.Link><Link to="/oztv" className='text-white' onClick={handleClose}>TV</Link></Nav.Link>
                              <Nav.Link><Link to="/event" className='text-white' onClick={handleClose}>Events</Link></Nav.Link>
                              <Nav.Link><Link to="/playlist" className='text-white' onClick={handleClose}>Playlist</Link></Nav.Link>
                            <hr className='devider-offcanvas'/>
                              <Nav.Link><Link to="#" className='text-white' onClick={handleClose}>Sustainability</Link></Nav.Link>
                              <Nav.Link><Link to="/ads" className='text-white' onClick={handleClose}>Advertising</Link></Nav.Link>
                              <Nav.Link><Link to="#" className='text-white' onClick={handleClose}>Community</Link></Nav.Link>
                              <Nav.Link><Link to="/contact" className='text-white' onClick={handleClose}>Contact Us</Link></Nav.Link>
                              <Nav.Link><Link to="/about" className='text-white' onClick={handleClose}>About</Link></Nav.Link>
                          </Offcanvas.Body>
                        </Offcanvas>
                            {/* <NavDropdown title="City" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="https://bandung.ozradio.id/" target='_blank'>Bandung (103.1 FM)</NavDropdown.Item>
                                <NavDropdown.Item href="https://ozradiojakarta.com/" target='_blank'>Jakarta (90.8 FM)</NavDropdown.Item>
                                <NavDropdown.Item href="https://ozradiobali.id/" target='_blank'>Bali (101.2 FM)</NavDropdown.Item>
                                <NavDropdown.Item href="#">Aceh (102.8 FM) </NavDropdown.Item>
                            </NavDropdown> */}
                                </Nav>
                            <Link to="/search" aria-label='search-bottom'><IoSearchCircle className='search__icon2 text-warning'/></Link>
                            
                                {/* <form action="https://www.google.com/search" target='_blank' className={`search ${showSearch ? 'show-search' : ''}`} id="search-bar"> */}
                              {/* </form> */}
                          {/* </Navbar.Collapse> */}
                        <div className="station-selector d-flex col-md-8 col-lg-12">
                          <p className='station-streaming'>Streaming: </p>
                          <StationSelector 
                            allow="autoplay"
                              stations={stations}
                              changeStation={changeStation}
                              selectedStation={station}
                              // currentTitle={currentTitle}
                            />
                          </div>
                </Container>
            </Navbar>
            </div>
    </>
  );
};

export default NavTop;
