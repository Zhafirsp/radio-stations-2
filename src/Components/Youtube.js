import React from "react";
import AboutBackground from "../Assets/Img/about-background.png";
import { Container } from 'react-bootstrap';

const Youtube = () => {
  return (
    <section>
    <Container>
      {/* <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div> */}
      <div className="about-section-text-container" data-aos="fade-up">
        <h1 className="primary-heading">
          Youtube <span style={{ color:"#FCBB33" }}>OZ Radio</span>
        </h1>
        <div className="about-section-image-container ratio ratio-16x9">
         <iframe src="https://www.youtube.com/embed/videoseries?si=5laDsCde24-eNESR&amp;list=PLm64bs3A73om9WjfuXZvmIwTj7rqEdaG_" title="OzClusive" allowFullScreen></iframe>
      </div>
      </div>
    </Container>
    </section>
  );
};

export default Youtube;
