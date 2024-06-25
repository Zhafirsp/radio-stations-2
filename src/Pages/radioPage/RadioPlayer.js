// import React, { useState, useRef, useEffect  } from 'react';
// import BannerBackground from "../../Assets/Img/home-banner-background.png";
// import BannerImage from "../../Assets/Img/Logo2.jpeg";
// import PlayButton  from "./PlayButton";
// import RadioStationPicker from './RadioStationPicker';
// import { ToastContainer, toast } from "react-toastify";
// import { Container } from 'react-bootstrap';

// const RadioPlayer = () => {
//   const audioRef = useRef(null);
//   const [selectedStation, setSelectedStation] = useState('');
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isRotating, setIsRotating] = useState(false);
//   // const [volume, setVolume] = useState(50);

//   const radioStations = [
//     { name: 'Bandung', frequency: '103.1 FM', url: 'https://streaming.ozradiojakarta.com:8443/ozradiobandung' },
//     { name: 'Jakarta', frequency: '90.8 FM', url: 'https://streaming.ozradiojakarta.com:8443/ozjakarta' },
//     { name: 'Bali', frequency: '101.2 FM', url: 'https://streaming.ozradiojakarta.com:8443/ozradiobali' },
//     // { name: 'Aceh', frequency: '102.8 FM', url: 'http://103.29.212.166:9968/;stream/1' },
//   ];

//   const handleStationChange = (e) => {
//     const selectedStationInfo = radioStations.find(station => station.name === e.target.value);
//     setSelectedStation(selectedStationInfo);
//     setIsPlaying(false);
//     setIsRotating(false);
//   };

//   useEffect(() => {
//     const audio = audioRef.current;
//     const handleCanPlay = () => {
//       // Audio telah dimuat, lakukan sesuatu jika diperlukan
//     };
//     audio.addEventListener('canplaythrough', handleCanPlay);
//     return () => {
//       audio.removeEventListener('canplaythrough', handleCanPlay);
//     };
//   }, []);

//   const handlePlayPause = () => {
//     const audio = audioRef.current;

//     if (!selectedStation) {
//       // Jika pengguna belum memilih stasiun radio, tampilkan alert
//       toast("Please Select the Radio Station", {
//         type: "error",
//         theme:"dark",
//         pauseOnFocusLoss: false
//       });
//       return; // Hentikan eksekusi lebih lanjut dari fungsi
//     }

//     if (audio.readyState >= audio.HAVE_ENOUGH_DATA) {
//       // Elemen audio sudah siap untuk diputar
//     if (isPlaying) {
//       audio.pause();
//       setIsRotating(false);
//     } else {
//       audio.play();
//       setIsRotating(true);
//     }
//     setIsPlaying(!isPlaying);
//     } else {
//     toast("Still Loading Please Wait", {
//       type: "warning",
//       theme:"dark",
//       pauseOnFocusLoss: false
//     });
//   }
// };
//   // const handleVolumeChange = (e) => {
//   //   const newVolume = parseInt(e.target.value, 10);
//   //   setVolume(newVolume);
//   //   audioRef.current.volume = newVolume / 100;
//   // };

//   return (
//     <section>
//       <ToastContainer />
//       <Container>
//     <div className="home-container" id="Home" data-aos="fade-up">
//       <div className="home-banner-container">
//         <div className="home-bannerImage-container">
//           {/* <img src={BannerBackground} alt="" /> */}
//         </div>
//         <div className="home-text-section">
//           <h1 className="primary-heading">
//             <span style={{ color:"#FCBB33" }} className="home-oz">OZ Radio</span> <br/>
//           </h1>
//             <div className="scroller">
//               <span>
//                 Your <br/> 
//                 Friendly <br/> 
//                 Station <br/> 
//                 Stream Now <br/> 
//               </span>
//             </div>
//             <div>
//             <RadioStationPicker
//               radioStations={radioStations}
//               selectedStation={selectedStation}
//               onStationChange={handleStationChange}
//             />
//           <PlayButton onPlayPause={handlePlayPause} isPlaying={isPlaying} />
//             </div>
//           <div>
//             <audio ref={audioRef} src={selectedStation?.url} />
//           </div>
//         </div>
//         <div className="home-image-section my-5">
//             <img  
//             className={`rotating-image ${isRotating ? 'rotate' : ''}`} 
//             src={BannerImage} alt="" 
//             />
//         </div>
//       </div>
//     </div>
//     </Container>
//     </section>
//   );
// };

// export default RadioPlayer;
