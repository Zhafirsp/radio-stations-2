import React, { useState, useEffect } from 'react';
import Player from "../Player/Player";
import styles from "./StationSelector.module.css";
import axios from 'axios';

const CodecButton = ({
  station,
  selectedStation,
  changeStation,
  codecButtonNotSelectedStyle,
  codecButtonWidthStyle,
  endpoint,
}) => (
  <div>
    <input
      type="radio"
      className="player-button"
      name="stations"
      id={station.name + endpoint.codec}
      onChange={() => changeStation({ ...station, ...endpoint })}
      hidden
    />
    <label
      className={`${styles.codecLabel} ${codecButtonWidthStyle} ${
        selectedStation?.endpoint === endpoint.endpoint
          ? styles.codecSelected
          : codecButtonNotSelectedStyle
      }`}
      htmlFor={station.name + endpoint.codec}
    >
    </label>
  </div>
);

const CodecButtonGroup = ({
  station,
  selectedStation,
  changeStation,
  codecButtonNotSelectedStyle,
  codecButtonWidthStyle,
  codecButtonsPerGroup,
}) => {
  const codecButtonGroups = [];

  for (let i = 0; i < station.endpoints.length; i += codecButtonsPerGroup) {
    codecButtonGroups.push(
      <div key={i / codecButtonsPerGroup} className={styles.codecs}>
        {station.endpoints
          .slice(i, i + codecButtonsPerGroup)
          .map((endpoint, idx) => (
            <CodecButton
              key={idx}
              station={station}
              endpoint={endpoint}
              codecButtonNotSelectedStyle={codecButtonNotSelectedStyle}
              codecButtonWidthStyle={codecButtonWidthStyle}
              selectedStation={selectedStation}
              changeStation={changeStation}
            />
          ))}
      </div>,
    );
  }

  return codecButtonGroups;
};

const codecButtonWidths = {
  4: styles.codecGroupFour,
  5: styles.codecGroupFive,
};

const Station = ({ station, selectedStation, changeStation }) => {

  const [currentRadio, setCurrentRadio] = useState('');
  const [streamUrl, setStreamUrl] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedStation) {
          // Array URL tanpa menggunakan mount
          const urls = [
            `https://streaming.ozradiojakarta.com:8443/status-json.xsl?mount=${selectedStation.mount}`,
            `https://streaming.ozradiobali.id:8443/status-json.xsl?mount=${selectedStation.mount}`,
            // `https://streaming.ozradiobandung.com:8443/status-json.xsl?mount=${selectedStation.mount}`,
            'https://s3.vinhostmedia.com:10987/'
          ];

          let response;
          // Looping melalui array URL untuk mencoba tiap link
          for (let i = 0; i < urls.length; i++) {
            try {
              response = await axios.get(urls[i]);
              if (response.data && response.data.icestats && response.data.icestats.source) {
                break; // Keluar dari loop jika respons valid ditemukan
              }
            } catch (error) {
              console.warn(`Gagal mengambil data dari ${urls[i]}, mencoba link berikutnya...`);
            }
          }

          if (response && response.data && response.data.icestats && response.data.icestats.source) {
            const { title, listenurl, server_url } = response.data.icestats.source;
            setCurrentTitle(title || '');
            setCurrentRadio(server_url || '');
            if (listenurl) {
              const secureListenurl = listenurl.replace(/^http:/, 'https:');
              setStreamUrl(secureListenurl || '');
            } else {
              console.error('Listen URL tidak tersedia dalam data');
            }
            console.log('Memutar musik dari:', listenurl);
          } else {
            console.error('Data tidak valid atau kosong dari API');
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, [selectedStation]);


  let stationLabelStyle, codecButtonNotSelectedStyle;

  if (selectedStation?.name === station.name) {
    stationLabelStyle = styles.selected;
    codecButtonNotSelectedStyle = styles.codecNotSelected;
  } else {
    stationLabelStyle = styles.notSelected;
    codecButtonNotSelectedStyle = styles.codecNotSelectedNotPlaying;
  }

  const codecButtonsPerGroup = station.codecButtonsPerGroup || 3;
  const codecButtonWidthStyle = codecButtonWidths[codecButtonsPerGroup];

  return (
    <>
       <label
        className={`${styles.stationLabel} ${stationLabelStyle}`}
        htmlFor={station.name + station.endpoints[0].codec}
      >
        <div className={styles.stationName}>{station.name}</div>
        <CodecButtonGroup
          station={station}
          selectedStation={selectedStation}
          changeStation={changeStation}
          codecButtonNotSelectedStyle={codecButtonNotSelectedStyle}
          codecButtonWidthStyle={codecButtonWidthStyle}
          codecButtonsPerGroup={codecButtonsPerGroup}
        />
      </label>
    </>
  );
};



const StationSelector = (props) => {

  if (!props.stations || props.stations.length === 0) {
    return null; // Atau tindakan lain sesuai kebutuhan Anda
  }
  
  return props.stations.map((station, idx) => (
    <>
      <Station
        key={idx}
        station={station}
        selectedStation={props.selectedStation}
        changeStation={props.changeStation}
      />
    </>
  ));
};

export default React.memo(StationSelector);
