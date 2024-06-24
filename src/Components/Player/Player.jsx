import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import styles from "./Player.module.css";
import { PiPlayCircleThin , PiPauseCircleThin  } from "react-icons/pi";
import {
  IoMdVolumeHigh,
  IoMdVolumeOff,
  IoMdVolumeLow,
} from 'react-icons/io';
import axios from "axios";

const VISIT_STATION = "Visit this station at ";
const ICECAST_METADATA_JS_DEMO = "Icecast Metadata JS Demo";

const CodecInfo = React.memo(({ codecInfo }) => {
  const canvas = useRef();

  useEffect(() => {
    if (canvas.current) {
      const context = canvas.current.getContext("2d");
      context.clearRect(0, 0, canvas.current.width, canvas.current.height);

      if (codecInfo) {
        context.font = `${
          Math.min(canvas.current.width, canvas.current.height) / 25
        }px monospace`;
        context.fillText(
          `${codecInfo.bitrate} kb/s ${codecInfo.sampleRate} Hz`,
          canvas.current.width,
          canvas.current.height,
        );
      }
    }
  }, [codecInfo?.bitrate, codecInfo?.sampleRate]);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (canvas.current) {
        window.requestAnimationFrame(() => {
          canvas.current.height = window.innerHeight * 2;
          canvas.current.width = window.innerWidth * 2;
        });
      }
    });

    resizeObserver.observe(document.body);
    return () => resizeObserver.disconnect();
  }, []);

  const title =
    codecInfo &&
    Object.entries(codecInfo).reduce(
      (acc, [k, v]) => acc + `${k}: ${v}\x0A`,
      "",
    );

  return <canvas ref={canvas} title={title} className={styles.codecInfo} />;
});

const PlayerButton = React.memo(({ station, toggle, playing, volume, setVolume, muteVolume, setMuteVolume }) => (
  <div className="play-control">
    <a 
      disabled={!station}
      className="play-button text-warning" 
      id="RadioPlayer" 
      onClick={toggle} 
      allow="autoplay"
    >
      {playing ? <PiPauseCircleThin /> : <PiPlayCircleThin />}
    </a>
  </div>
));

const Player = ({ station, playing, toggle, codecInfo }) => {
  
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = muteVolume ? 0 : volume / 100;
    }
  }, [volume, muteVolume]);

  
  const handleToggleMute = () => {
    setMuteVolume((prevMuteVolume) => !prevMuteVolume);
  };
  


  const title = metadata?.StreamTitle || metadata?.TITLE;
  document.title = title ? `${title} | ${ICECAST_METADATA_JS_DEMO}` : ICECAST_METADATA_JS_DEMO;

  return (
    <>
    <audio ref={audioRef}/>
      <div className={styles.player}>
        <PlayerButton 
        station={station} 
        playing={playing} 
        toggle={toggle} 
        />
      </div>
    </>
  );
};

export default Player;