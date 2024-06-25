import React from "react";
import danilla from "../../Assets/Img/danilla_interview.jpg"
import rimba from "../../Assets/Img/rimba_interview.jpg"
import skastra from "../../Assets/Img/skastra_interview.jpg"
import jimijazz from "../../Assets/Img/jimijazz_interview.jpg"
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import Slider from "react-slick";
import { BsCollectionPlay } from "react-icons/bs";
import { Parallax, Background } from "react-parallax";
import podcast_2 from '../../Assets/Img/podcast_2.jpg'
import "./interviewPage.css"

const InterviewPage = () => {
 
  const styles = {
   width: "100%",
   backgroundSize: "cover", 
   height: '500px',
   marginTop: '30px'
  };

   return (
    <section>
      <div className="parallax-interview">
        <Parallax bgImage={podcast_2} strength={300} style={styles}>
          <div className="text-interview text-center text-white mt-5 pt-2">
            <h3 className="h3-interview mt-5 pt-5">Time To Listen</h3>
            <hr/>
            <h1 className="fs-bold display-1">Radio <span style={{ color:"#FCBB33" }}> Interviews </span></h1>
            <hr/>
            <p className="">by : <span style={{ color:"#FCBB33" }}>OZ RADIO</span></p>
          </div>
        </Parallax>
      </div>
    <Container>
      <div className="interview-page-container" data-aos="fade-up">
          <Row>
            <Col>
              <iframe 
                style={{ borderRadius:"12px"}} 
                src="https://open.spotify.com/embed/show/2os8ztmszBkBYNaLUGuxJ4?utm_source=generator&theme=0" 
                width="100%" 
                height="152" 
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
                src="https://open.spotify.com/embed/show/24P703f8q8xHnqOn6MCrPO?utm_source=generator&theme=0" 
                width="100%" 
                height="152" 
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
                  src="https://open.spotify.com/embed/episode/7c0Id3XQCOaT3KjGbjMsy9?utm_source=generator" 
                  width="100%" 
                  height="152" 
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
                  src="https://open.spotify.com/embed/episode/0SycJbWLOKCxzyVKD7pKQg?utm_source=generator" 
                  width="100%" 
                  height="152" 
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
