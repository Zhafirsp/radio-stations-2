import React from "react";
import danilla from "../../Assets/Img/danilla_interview.jpg"
import rimba from "../../Assets/Img/rimba_interview.jpg"
import skastra from "../../Assets/Img/skastra_interview.jpg"
import jimijazz from "../../Assets/Img/jimijazz_interview.jpg"
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import Slider from "react-slick";
import { BsCollectionPlay } from "react-icons/bs";
import { Parallax, Background } from "react-parallax";
import playlistImg from '../../Assets/Img/concert_bg.jpg'

const InterviewPage = () => {
 
  const styles = {
   width: "100%",
   backgroundSize: "cover", 
   height: '500px'
  };

   return (
    <section>
      <div className="parallax-interview">
        <Parallax bgImage={playlistImg} strength={300} style={styles}>
          <div className="text-interview text-center text-white mt-5 pt-2">
            <h3 className="h3-interview mt-5 pt-5">Time To Listen</h3>
            <hr/>
            <h1 className="fs-bold display-1">Radio <span style={{ color:"#FCBB33" }}> Playlist </span></h1>
            <hr/>
            <p className="">by : <span style={{ color:"#FCBB33" }}>OZ RADIO</span></p>
          </div>
        </Parallax>
      </div>
    <Container>
      <div className="about-section-text-container" data-aos="fade-up">
          <Row>
            <Col>
              <iframe 
                style={{ borderRadius:"12px"}} 
                src="https://open.spotify.com/embed/playlist/25nV8tDjjpLUFX9Zj5K0LL?utm_source=generator" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="mb-3"
              >
              </iframe>
            </Col>
            <Col>
              <iframe 
                style={{ borderRadius:"12px"}} 
                src="https://open.spotify.com/embed/playlist/04zw0dEQMHuKCixYpxUmlK?utm_source=generator" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="mb-3"
              >
              </iframe>
            </Col>
          </Row>
          <Row>
            <Col>
              <iframe 
                  style={{ borderRadius:"12px",}} 
                  src="https://open.spotify.com/embed/playlist/1Tel3nbnk1F1cOpemZG5YH?utm_source=generator" 
                  width="100%" 
                  height="352" 
                  frameBorder="0" 
                  allowFullScreen="" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  className="mb-3"
                >
              </iframe>
            </Col>
            <Col>
              <iframe 
                  style={{ borderRadius:"12px",}} 
                  src="https://open.spotify.com/embed/playlist/6PzZvTg5yKW76cIh04zXv6?utm_source=generator" 
                  width="100%" 
                  height="352" 
                  frameBorder="0" 
                  allowFullScreen="" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  className="mb-3"
                >
              </iframe>
            </Col>
          </Row>
      </div>
    </Container>
    </section>
  );
};

export default InterviewPage;
