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
          const response = await axios.get(`https://streaming.ozradiojakarta.com:8443/status-json.xsl?mount=${selectedStation.mount}`);
          const data = response.data;
          if (data && data.icestats && data.icestats.source) {
            const { title, listenurl, server_url } = data.icestats.source;
            setCurrentTitle(title || '');
            setCurrentRadio(server_url || '');
            if (listenurl) {
              // Mengganti protokol HTTP menjadi HTTPS
              const secureListenurl = listenurl.replace(/^http:/, 'https:');
              setStreamUrl(secureListenurl || '');
            } else {
              console.error('Listen URL is not defined in the data');
            }
            console.log('Memutar musik dari:', listenurl);
          } else {
            console.error('Invalid or empty data received from API');
          }
        } 
        // else {
        //   console.error('Pilih stasiun terlebih dahulu');
        // }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  
    // Membuat interval untuk mengambil data setiap 10 detik
    const interval = setInterval(fetchData, 10000);
  
    // Membersihkan interval saat komponen tidak lagi digunakan
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
        {/* <div className={styles.currentTitle}>{currentTitle}</div> */}
        {/* <audio controls src={streamUrl} /> */}
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