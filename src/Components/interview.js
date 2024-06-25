import React from "react";
import danilla from "../Assets/Img/danilla_interview.jpg"
import rimba from "../Assets/Img/rimba_interview.jpg"
import skastra from "../Assets/Img/skastra_interview.jpg"
import jimijazz from "../Assets/Img/jimijazz_interview.jpg"
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import Slider from "react-slick";
import { BsCollectionPlay } from "react-icons/bs";
import '../Assets/Css/interview.css'
import { Link } from "react-router-dom";

const Interview = () => {
  const interviewData = [
    {
      image: danilla,
      title: "JAM MALAM VS DANILLA",
      text: "November, 24 2023",
      link: "Radio Interview",
      href: "https://open.spotify.com/episode/4EOTYY5Ery3rpCldBP7VEw?si=ac20028fea384f65",
    },
    {
      image: rimba,
      title: "GET IN THE MOZ Feat. RIMBA",
      text: "October, 24 2023",
      link: "Radio Interview",
      href: "https://open.spotify.com/episode/0z3dS498zBkj7iSe7izYuc?si=7e9f251df4754f8d",
    },
    {
      image: skastra,
      title: "JAM MALAM Feat. SKASTRA",
      text: "October, 26 2023",
      link: "Radio Interview",
      href: "https://open.spotify.com/episode/7gLCTP7UyqtqhDh4ViDsv7?si=16d76fde0803421a",
    },{
      image: jimijazz,
      title: "JAM MALAM x JIMI JAZZ",
      text: "February, 7 2024",
      link: "Radio Interview",
      href: "https://open.spotify.com/episode/7n8tFmDuj1Q3yf9DRCBYIt?si=0f5d75d4421946e3",
    },
  ];

  const settings = {
    className: 'slider-interview',
    infinite: true,
    slidesToShow: 4,
    dots: false,
    autoplay: true,
    speed: 1000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <Container>
      <div className="interview" data-aos="fade-up">
        <Row className="text-interview">
          <Col className="mb-3">
            <h1 className="display-5 fw-bold">
              Catch up with the laters interviews
            </h1>
          </Col>
          <Col sm={1} lg={2} className="mt-3 button-interview">
            <Link to="/interview"><Button variant="outline-dark">Load More</Button></Link>
          </Col>
        </Row>
        <Row lg={12} className="g-2 slider-row ">
      <Slider {...settings}>
        {interviewData.map((data) => (
        <Col key={data.image}>
            <Card style={{ marginLeft:'10px' }}>
              <div className="info-boxes-img-container">
                <Card.Img src={data.image} alt="" width={"100px"} />
              </div>
              <Card.Body>
                <Card.Title><h3 className="fw-light">{data.title}</h3></Card.Title>
                <Card.Text><p>{data.text}</p></Card.Text>
                <Card.Text><a href={data.href} target="_blank" rel="noreferrer"><p>{data.link} <BsCollectionPlay/></p></a></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Slider>
      </Row>
      </div>
    </Container>
    </section>
  );
};

export default Interview;
