import React, { useState, useEffect, useContext } from "react";
import { Col, Row, Button, Container } from 'react-bootstrap';
import './advertising.css';
import { Link } from "react-router-dom";
import axios from "axios";
import Logo_Jkt from '../../Assets/Img/logo_oz_jkt1.png'
import Logo_Bali from '../../Assets/Img/logo_oz_bali1.png'
import Logo_Bdg from '../../Assets/Img/logo_oz_bdg1.png'
import Compro_Bali from '../../Assets/files/COMPRO & PENAWARAN OZ BALI.pdf'
import Compro_Jkt from '../../Assets/files/OZ Radio Jakarta_Deck Update.pdf'
import Compro_Bdg from '../../Assets/files/RATE CARD OZ BDG.pdf'
import { ThemeContext } from "../../ThemeContext";
import Card_Ads from "./Card";

const Advertising = () => {

  const adsData = [
    {
      image: Logo_Bali,
      title: "OZ BALI",
      Compro: Compro_Bali
    },
    {
      image: Logo_Jkt,
      title: "OZ JAKARTA",
      Compro: Compro_Jkt
    },
    {
      image: Logo_Bdg,
      title: "OZ BANDUNG",
      Compro: Compro_Bdg
    },
  ];

  // const [videos, setVideos] = useState([]);
  const { theme } = useContext(ThemeContext); // Use context

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://adminoz.santuy.info/api/tvoz');
  //       if (response.data && response.data.data) {
  //         setVideos(response.data.data);
  //       } else {
  //         console.error("Invalid response structure:", response.data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching videos data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const getImageUrl = (imageUrl) => {
  //   if (!imageUrl) return ""; // Tambahkan pengecekan kondisi agar tidak memanggil replace pada nilai null
    
  //   const baseUrl = 'https://adminoz.santuy.info/';
  //   // Cek apakah URL mengandung 'public', jika iya, ganti dengan 'storage', jika tidak, tambahkan base URL
  //   if (imageUrl.includes('public')) {
  //     return baseUrl + imageUrl.replace('public', 'storage');
  //   } else {
  //     return baseUrl + imageUrl;
  //   }
  // };

  return (
    <Container fluid>
      <section className='ads' style={{ marginTop:"" }}>
        <p className="text-ads fs-1 fw-bold ms-4">Advertisement from our company</p>
        {/* <Container fluid className="container-oztv"> */}
          <Row className="">
            {adsData.map((ads) => (
              <Col key={ads.id} className="mb-4" lg={4}>
                <Card_Ads 
                  adsTitle={ads.title} 
                  adsPdf={ads.Compro} 
                  imageUrl={ads.image} 
                />
              </Col>
            ))}
          </Row>
        {/* </Container> */}
        <div className="text-center my-5">
          {/* <Link to="/oztv">
          <button 
                variant={theme === 'light' ? "outline-dark" : "outline-light"} 
                className="button-news py-2"
                style={{ 
                  backgroundColor: theme === "light" ? "#090909" : "#f9f9f9", 
                  color: theme === "light" ? "#fff" : "#000" }}>
              View All Videos
            </button>
          </Link> */}
        </div>
      </section>
    </Container>
  );
};

export default Advertising;
