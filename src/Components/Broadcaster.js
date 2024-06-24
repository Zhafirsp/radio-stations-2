import React from "react";
import ProfilePic from "../Assets/Img/john-doe-image.png";
import { Carousel } from 'react-bootstrap';
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTiktok   } from "react-icons/fa";
import BannerBackground from "../Assets/Img/bg1.png";
import BannerBackground2 from "../Assets/Img/bg2.png";
import Kinta from "../Assets/Img/DevinaKinta.png";
import Fifi from "../Assets/Img/Fifi.png";
import Slider from "react-slick";


const Broadcaster = () => {
  const casterData = [
    {
      image: Kinta,
      title: "Devana Kinta",
      socialMedia: [
        { link: "https://www.instagram.com/ozradiobandung/", icon: <BsInstagram /> },
        { link: "https://twitter.com/ozradiobandung?s=20", icon: <BsTwitter /> },
        { link: "https://www.tiktok.com/@ozradio?lang=en", icon: <FaTiktok /> },
      ],
    },
    {
      image: Fifi,
      title: "John Dier",
      socialMedia: [
        { link: "https://www.instagram.com/ozradiobandung/", icon: <BsInstagram /> },
        { link: "https://twitter.com/ozradiobandung?s=20", icon: <BsTwitter /> },
        { link: "https://www.tiktok.com/@ozradio?lang=en", icon: <FaTiktok /> },
      ],
    },
    {
      image: Kinta,
      title: "John Fast",
      socialMedia: [
        { link: "https://www.instagram.com/ozradiobandung/", icon: <BsInstagram /> },
        { link: "https://twitter.com/ozradiobandung?s=20", icon: <BsTwitter /> },
        { link: "https://www.tiktok.com/@ozradio?lang=en", icon: <FaTiktok /> },
      ],
    },
    {
      image: Fifi,
      title: "John Fast",
      socialMedia: [
        { link: "https://www.instagram.com/ozradiobandung/", icon: <BsInstagram /> },
        { link: "https://twitter.com/ozradiobandung?s=20", icon: <BsTwitter /> },
        { link: "https://www.tiktok.com/@ozradio?lang=en", icon: <FaTiktok /> },
      ],
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 5,
    dots: false,
    autoplay: true,
    speed: 1000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
      <section>
    <div className="work-section-wrapper" id="broadcaster" data-aos="fade-up">
      <div className="work-section-top">
        {/* <div className="broadcast-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="broadcast2-bannerImage-container">
          <img src={BannerBackground2} alt="" />
        </div> */}
        <h1 className="primary-heading">Broadcaster</h1>
      </div>
      <div className="slider-container">
      <Slider {...settings}>
        {casterData.map((data, index) => (
          <div key={index}>
            <div className="">
              <div className="text-center my-5" key={data.image}>
                <img src={data.image} alt="" className="rounded-5 px-1" />
                <h2>{data.title}</h2>
                <div className="testimonials-stars-container">
                  {data.socialMedia.map((social, i) => (
                    <a key={i} href={social.link} className="text-reset">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
    </section>
  );
};

export default Broadcaster;
