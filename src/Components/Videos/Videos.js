import React, { useState, useEffect } from "react";
import Card from "../../Pages/tvPage/Card";
import { Col, Row, Button, Container } from 'react-bootstrap';
import '../../Assets/Css/videos.css';
import { Link } from "react-router-dom";
import axios from "axios";
import heroImg from '../../Assets/Img/concert.jpg'
import heroImg1 from '../../Assets/Img/concert1.jpg'
import heroImg2 from '../../Assets/Img/concert2.jpg'
import heroImg3 from '../../Assets/Img/concert3.jpg'

const Videos = () => {
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
    <Container fluid>
      <section className='videos mt-4'>
        <p className="text-videos fs-1 fw-bold ms-4">Find out more from Videos</p>
        <Container fluid className="">
          <Row>
            {videos.map((video) => (
              <Col lg={4} md={12} key={video.id} className="mb-4">
                <Card 
                  videoTitle={video.title} 
                  videoBody={video.body} 
                  thumbnailUrl={getImageUrl(video.image)} 
                />
              </Col>
            ))}
          </Row>
        </Container>
        <div className="text-center">
          <Link to="/oztv">
            <Button variant="outline-dark" className="btn-videos rounded-pill my-5">
              View All Videos
            </Button>
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default Videos;
