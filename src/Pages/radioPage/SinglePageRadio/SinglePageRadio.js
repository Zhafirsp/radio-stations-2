import React, { useState, useEffect, useContext } from "react";
import { Col, Button, Row } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../../../ThemeContext";
import { BsYoutube  } from "react-icons/bs";
import { FaFacebookF, FaSpotify, FaTiktok } from "react-icons/fa";
import './singlePageRadio.css';

const SinglePageRadio  = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const [radio, setRadio] = useState(null);

  useEffect(() => {
    const fetchRadio = async () => {
      try {
        const response = await axios.get(`https://adminoz.santuy.info/api/radios/${id}`);
        setRadio(response.data.radio); // Perhatikan response.data.radio, karena radio adalah properti dari objek response.data
      } catch (error) {
        console.error("Error fetching radio data:", error);
      }
    };

    fetchRadio();
  }, [id]);

  const getImageUrl = (imageUrl) => {
    if (!imageUrl) return ""; 
    
    const baseUrl = 'https://adminoz.santuy.info/storage/';
    
    if (imageUrl.includes('public')) {
      return baseUrl + imageUrl.replace('public', 'storage');
    } else {
      return baseUrl + imageUrl;
    }
  };

  // Memastikan radio tidak null sebelum mencoba mengakses propertinya
  if (!radio) {
    return <div>Loading...</div>;
  }

  // Handle case when body is null or undefined
  const bodyContent = radio.body ? radio.body : "Description not available";

  return (
    <div className="">
      <section className="singlepageradio">
        <div className="radio-showcase py-5" data-aos="fade-left">
        <ol class="breadcrumb justify-content-center">
              <li class="breadcrumb-item breadcrumb-history"><Link to={"/"}>Home</Link></li>
              <li class="breadcrumb-item breadcrumb-history"><Link to={"/radio/category/:category"}>Radio</Link></li>
              <li class="breadcrumb-item active" aria-current="page" style={{ color:"#FCBA33" }}>{radio.title}</li>
          </ol>
          <Col className="mb-3 mx-5">
            <h1 style={{ color: theme === 'light' ? "#000" : '#fff' }} className="display-5 fw-bold text-center">Special Radio Show <br/>
              <span style={{ color:"#F49C27" }}>{radio.title}</span>
            </h1>
          </Col>
          <div className="container col-xxl-8 " style={{ height: 991 }}>
            <Row className="justify-content-center g-5 py-5">
              <Col lg={3} sm={12} className="">
                <img src={getImageUrl(radio.image)} className="d-block mx-auto img-fluid" alt="Radio Show" width="300" height="300" loading="lazy"/>
              </Col>
              <Col lg={6} sm={12} className="">
              <p className="lead fw-lighter">{radio.excerpt}</p>
              <p>subscribe here</p>
              <ul className="d-flex list-unstyled icons-footer">
                  <li><a href="https://www.youtube.com/@OZRADIO" target="_blank" className="text-white" aria-label="youtube"><BsYoutube className="youtube"  style={{ color: theme === 'light' ? "#000" : "#fff" }}/></a></li>
                  <li><a href="https://open.spotify.com/show/24P703f8q8xHnqOn6MCrPO?si=7861e36e3c264fe3&nd=1&dlsi=20c956f09a774cff" target="_blank" className="text-white" aria-label="spotify"><FaSpotify className="spotify"  style={{ color: theme === 'light' ? "#000" : "#fff" }}/></a></li>
                </ul>
              </Col>
              <div className="">
                <p className="lead fw-lighter" dangerouslySetInnerHTML={{ __html: bodyContent }}></p>
              </div>
            </Row>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SinglePageRadio;
