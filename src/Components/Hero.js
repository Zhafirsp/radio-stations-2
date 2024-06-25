import React, { useState } from "react";
import '../Assets/Css/hero.css';
import heroImg from '../Assets/Img/concert.jpg'
import heroImg1 from '../Assets/Img/concert1.jpg'
import heroImg2 from '../Assets/Img/concert2.jpg'
import heroImg3 from '../Assets/Img/concert3.jpg'
import { Parallax, Background } from "react-parallax";
import Slider from "react-slick";

const Hero = () => {

  const styles = {
    width: "100%",
    backgroundSize: "cover", 
    height: '100%'
   };

   const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };

  return (
    <>
      <section className='hero mt-4' data-aos="fade-down" >
        {/* Latar belakang blur */}
        {/* <div className="hero-background" style={{ backgroundImage: `url(${heroImg})` }}></div> */}
        <Slider {...settings}>
        <Parallax bgImage={heroImg} strength={500} style={styles} blur={10}>
        {/* Konten utama */}
          <div className="container col-xxl-8 px-4 py-5" style={{ height: 757 }}>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-lg-6 px-4">
              <span className="span-hero fs-2">February 25, 2024</span>
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 mt-3">Special Music Event on <span className="span-hero">OZ Jakarta </span></h1>
                <h3 className="fw-bolder text-body-emphasis lh-1 mb-5">(OPEN FOR PUBLIC)</h3>
                <p className="lead fw-lighter">Join our special music event on February 25, 2024. Enjoy live performances from renowned artists, and the opportunity to meet your favorite musicians!</p>
              </div>
              <div className="col-10 col-sm-8 col-lg-6">
                <img src={heroImg} className="hero-img d-block mx-lg-auto img-fluid ms-4" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
              </div>
            </div>
          </div>
        </Parallax>
        <Parallax bgImage={heroImg1} strength={500} style={styles} blur={10}>
        {/* Konten utama */}
          <div className="container col-xxl-8 px-4 py-5" style={{ height: 757 }}>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-lg-6 px-4">
              <span className="span-hero fs-2">February 27, 2024</span>
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 mt-3">Special Music Event on <span className="span-hero">OZ Bali </span></h1>
                <h3 className="fw-bolder text-body-emphasis lh-1 mb-5">(OPEN FOR PUBLIC)</h3>
                <p className="lead fw-lighter">Join our special music event on February 27, 2024. Enjoy live performances from renowned artists, and the opportunity to meet your favorite musicians!</p>
              </div>
              <div className="col-10 col-sm-8 col-lg-6">
                <img src={heroImg1} className="hero-img d-block mx-lg-auto img-fluid ms-4" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
              </div>
            </div>
          </div>
        </Parallax>
        <Parallax bgImage={heroImg2} strength={500} style={styles} blur={10}>
        {/* Konten utama */}
          <div className="container col-xxl-8 px-4 py-5" style={{ height: 757 }}>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-lg-6 px-4">
              <span className="span-hero fs-2">February 28, 2024</span>
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 mt-3">Special Music Event on <span className="span-hero">OZ Bandung </span></h1>
                <h3 className="fw-bolder text-body-emphasis lh-1 mb-5">(OPEN FOR PUBLIC)</h3>
                <p className="lead fw-lighter">Join our special music event on February 28, 2024. Enjoy live performances from renowned artists, and the opportunity to meet your favorite musicians!</p>
              </div>
              <div className="col-10 col-sm-8 col-lg-6">
                <img src={heroImg2} className="hero-img d-block mx-lg-auto img-fluid ms-4" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
              </div>
            </div>
          </div>
        </Parallax>
        <Parallax bgImage={heroImg3} strength={500} style={styles} blur={10}>
        {/* Konten utama */}
          <div className="container col-xxl-8 px-4 py-5" style={{ height: 757 }}>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-lg-6 px-4">
              <span className="span-hero fs-2">March 5, 2024</span>
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 mt-3">Special Music Event on <span className="span-hero">OZ Bali </span></h1>
                <h3 className="fw-bolder text-body-emphasis lh-1 mb-5">(OPEN FOR PUBLIC)</h3>
                <p className="lead fw-lighter">Join our special music event on March 5, 2024. Enjoy live performances from renowned artists, and the opportunity to meet your favorite musicians!</p>
              </div>
              <div className="col-10 col-sm-8 col-lg-6">
                <img src={heroImg3} className="hero-img d-block mx-lg-auto img-fluid ms-4" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
              </div>
            </div>
          </div>
        </Parallax>
        </Slider>
      </section>
    </>
  )
}

export default Hero