import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import SinglePageSlider from "../singlePages/slider/singlePageSlider";
import heroImg from '../../Assets/Img/concert.jpg'
import heroImg1 from '../../Assets/Img/concert1.jpg'
import heroImg2 from '../../Assets/Img/concert2.jpg'
import heroImg3 from '../../Assets/Img/concert3.jpg'
import { Link } from "react-router-dom";
import './oztv.css';
import { Container } from "react-bootstrap";
import axios from "axios";

const OZTV = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://adminoz.santuy.info/api/tvoz');
        if (response.data && response.data.data) {
          setVideos(response.data.data);
        } else {
          console.error("Invalid response structure:", response.data);
        }
      } catch (error) {
        console.error("Error fetching videos data:", error);
      }
    };

    fetchData();
  }, []);

  const getImageUrl = (imageUrl) => {
    if (!imageUrl) return ""; // Tambahkan pengecekan kondisi agar tidak memanggil replace pada nilai null
    
    const baseUrl = 'https://adminoz.santuy.info/';
    // Cek apakah URL mengandung 'public', jika iya, ganti dengan 'storage', jika tidak, tambahkan base URL
    if (imageUrl.includes('public')) {
      return baseUrl + imageUrl.replace('public', 'storage');
    } else {
      return baseUrl + imageUrl;
    }
  };

  
  return (
    <Container fluid className="container-oztv" style={{ marginTop:"100px" }}>
      <h1 className="display-4 mx-auto">JUST LAUNCHED</h1>
      <p>Just Launched OZ regularly hosts both local and international artists for in-studio performances 
        in our live room, concerts in the Gathering Space, and live broadcasts from music festivals. 
        Not only can you enjoy these performances on the air, but you can also relive the experience 
        with our live videos. Subscribe to the <Link to={"https://www.youtube.com/hashtag/ozclusive"} className="fw-bold" target="_blank">OZ Youtube channel</Link> for more great live sessions like 
        these. And check out some of the recent performances from our Seattle Center studios below.</p>
          {videos.map((video, index) => (
                <Card 
                  key={video.id}
                  videoTitle={video.title} 
                  videoBody={video.body} 
                  thumbnailUrl={getImageUrl(video.image)} 
                />
            ))}
    </Container>
  );
};

export default OZTV;
