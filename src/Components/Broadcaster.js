import React from "react";
import { Carousel } from 'react-bootstrap';
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTiktok   } from "react-icons/fa";
import Vivi from "../Assets/Img/broadcaster/announ7.png";
import Aura from "../Assets/Img/broadcaster/announ8.png";
import Diki from "../Assets/Img/broadcaster/announ9.png";
import Rosa from "../Assets/Img/broadcaster/announ10.png";
import Nabila from "../Assets/Img/broadcaster/announ11.png";
import Dama from "../Assets/Img/broadcaster/announ12.png";
import Oit from "../Assets/Img/broadcaster/announ1.png";
import Amoy from "../Assets/Img/broadcaster/announ2.png";
import Widi from "../Assets/Img/broadcaster/announ3.png";
import Tama from "../Assets/Img/broadcaster/announ4.png";
import Vj from "../Assets/Img/broadcaster/announ5.png";
import Momon from "../Assets/Img/broadcaster/announ6.png";
import Slider from "react-slick";


const Broadcaster = () => {
  const casterData = [
    {
      image: Vivi,
      title: "Vivi",
      socialMedia: [
        // { link: "https://www.instagram.com/", icon: <BsInstagram /> },
      ],
    },
    {
      image: Aura,
      title: "Aura",
      socialMedia: [
        // { link: "https://www.instagram.com/", icon: <BsInstagram /> },
      ],
    },
    {
      image: Diki,
      title: "Dicky",
      socialMedia: [
        { link: "https://www.instagram.com/dickyyshu", icon: <BsInstagram /> },
      ],
    },
    {
      image: Rosa,
      title: "Rosa",
      socialMedia: [
        { link: "https://www.instagram.com/rosanadila_", icon: <BsInstagram /> },
      ],
    },
    {
      image: Nabila,
      title: "Nabila",
      socialMedia: [
        { link: "https://www.instagram.com/nabilaoriza", icon: <BsInstagram /> },
      ],
    },
    {
      image: Dama,
      title: "Dama",
      socialMedia: [
        { link: "https://www.instagram.com/kayradama", icon: <BsInstagram /> },
      ],
    },
    {
      image: Oit,
      title: "Oit",
      socialMedia: [
        { link: "https://www.instagram.com/ooiit.io", icon: <BsInstagram /> },
      ],
    },
    {
      image: Amoy,
      title: "Amoy",
      socialMedia: [
        { link: "https://www.instagram.com/fahmiiamoy", icon: <BsInstagram /> },
      ],
    },
    {
      image: Widi,
      title: "Widi",
      socialMedia: [
        { link: "https://www.instagram.com/widikaluna", icon: <BsInstagram /> },
      ],
    },
    {
      image: Tama,
      title: "Tama",
      socialMedia: [
        { link: "https://www.instagram.com/de.woeste", icon: <BsInstagram /> },
      ],
    },
    {
      image: Vj,
      title: "Vj",
      socialMedia: [
        { link: "https://www.instagram.com/jayahadivj", icon: <BsInstagram /> },
      ],
    },
    {
      image: Momon,
      title: "Momon",
      socialMedia: [
        { link: "https://www.instagram.com/monicariana_", icon: <BsInstagram /> },
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
    <div className="" id="broadcaster" data-aos="fade-up" style={{ marginTop:"-100px" }}>
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
                {data.socialMedia && (
                      <div className="testimonials-stars-container">
                        {data.socialMedia.map((social, i) => (
                          <a key={i} href={social.link} target="_blank" className="text-reset">
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    )}
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
