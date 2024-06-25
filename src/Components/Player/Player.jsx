import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import styles from "./Player.module.css";
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import axios from "axios";


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

const PlayerButton = React.memo(({ station, toggle, playing}) => (
  <div className="play-control">
    <a 
      disabled={!station}
      className="play-button text-warning" 
      id="RadioPlayer" 
      onClick={toggle} 
      allow="autoplay"
    >
      {playing 
      ? 
      <BsPauseCircle/>
      : 
      <BsPlayCircle/>}
    </a>
  </div>
));

const Player = ({ station, playing, toggle }) => {
  
  const audioRef = useRef(null);
  

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