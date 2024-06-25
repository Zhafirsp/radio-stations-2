// import React, { useState } from "react";
// import heroImg from '../../Assets/Img/concert.jpg'
// import heroImg1 from '../../Assets/Img/concert1.jpg'
// import heroImg2 from '../../Assets/Img/concert2.jpg'
// import heroImg3 from '../../Assets/Img/concert3.jpg'
// import { Parallax, Background } from "react-parallax";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { Button } from "react-bootstrap";
// import { BsPlayCircleFill  } from "react-icons/bs";


// const VideoThumbnail = styled.div`
//   position: relative;
//   // width: 590px;
//   // height: 333px;
//   overflow: hidden;
//   cursor: pointer;
// `;

// const PlayButton = styled.p`
//   position: absolute;
//   color: white;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   font-size: 50px;
//   // z-index: 1;
//   opacity:0.77;
// `;

// const ThumbnailImage = styled.img`
//   width: 550px;
//   height: 333px;
// `;


// const SingleVideo = ({videoUrl, thumbnailUrl, videoTitle}) => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handleClick = () => {
//     setIsPlaying(true);
//   };
//   return (
//     <>
//       <section className='videos mt-4 mx-auto' >
//       {isPlaying ? (
//         <iframe
//           width="550"
//           height="333"
//           src={`${videoUrl}&autoplay=1`}
//           className="d-block mx-auto"
//           allowFullScreen
//         ></iframe>
//       ) : (
//       <VideoThumbnail onClick={handleClick}>
//         <img src={thumbnailUrl} alt="Video Thumbnail" className="thumbnail-image d-block mx-auto"/>
//         <PlayButton variant="outline-light" size="lg"><BsPlayCircleFill /></PlayButton>
//       </VideoThumbnail>
//       )}
//       <p className="fs-4 text-secondary mt-3 text-center">{videoTitle}</p>
//       </section>
//     </>
//   )
// }

// export default SingleVideo