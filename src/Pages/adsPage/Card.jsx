import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import { BsPlayCircleFill } from 'react-icons/bs';
// import { AiOutlineCloseCircle } from "react-icons/ai";

const Card_Ads = ({ adsTitle, imageUrl, adsPdf }) => {


  return (
    <>
      <section className='videos mt-4 mx-auto'>
        <div className="videos-image-container">
          {/* <div className="video-thumbnail" onClick={handleClick}> */}
          <a href={adsPdf} target="_blank" rel="noopener noreferrer">
            <img src={imageUrl} alt="Video Thumbnail" className="thumbnail-image d-block mx-auto" />
          </a>
            {/* <p className="videos-playbutton"><BsPlayCircleFill /></p> */}
          {/* </div> */}
          <p className="video-title fs-4 text-secondary mt-5 text-center">{adsTitle}</p>
          {/* <a target='_blank' className="video-title fs-4 text-secondary mt-5 text-center">{adsPdf}</a> */}
        </div>

      </section>
    </>
  );
};

export default Card_Ads;
