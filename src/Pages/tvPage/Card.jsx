import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { BsPlayCircleFill } from 'react-icons/bs';
import { AiOutlineCloseCircle } from "react-icons/ai";

const Card = ({ videoTitle, thumbnailUrl, videoBody }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
  };

  const extractYouTubeUrl = (body) => {
    const match = body.match(/<iframe.*?src="(https:\/\/www\.youtube\.com\/embed\/[^"]+)".*?<\/iframe>/);
    return match ? match[1] : null;
  };

  const youtubeUrl = extractYouTubeUrl(videoBody);

   // Buat URL dengan tambahan parameter autoplay=1
   const youtubeEmbedUrl = youtubeUrl ? `${youtubeUrl}&autoplay=1` : '';


  return (
    <>
      <section className='videos mt-4 mx-auto'>
        <div className="videos-image-container">
          <div className="video-thumbnail" onClick={handleClick}>
            <img src={thumbnailUrl} alt="Video Thumbnail" className="thumbnail-image d-block mx-auto" />
            <p className="videos-playbutton"><BsPlayCircleFill /></p>
          </div>
          <p className="video-title fs-4 text-secondary mt-5 text-center">{videoTitle}</p>
        </div>

        <Modal show={isPlaying} onHide={handleClose} size="lg" centered className="custom-modal">
          <Modal.Body className="p-0">
            <iframe
              width="100%"
              height="500px"
              src={youtubeEmbedUrl}
              title={videoTitle}
              allowFullScreen
            ></iframe>
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
};

export default Card;
