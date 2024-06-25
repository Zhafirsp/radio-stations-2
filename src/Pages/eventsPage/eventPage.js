import React, { useState, useEffect, useContext } from "react";
import { Col, Row, Container, Button } from 'react-bootstrap';
import './evenPage.css'
import { Link } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../../ThemeContext";

const EventPages = () => {
  
  const { theme } = useContext(ThemeContext); // Use context
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await axios.get(`https://adminoz.santuy.info/api/events`);
          const sortedEvents = response.data.events.data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
          setEvents(sortedEvents);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchData();
  }, []);

  const getImageUrl = (imageUrl) => {
    if (!imageUrl) return ""; // Tambahkan pengecekan kondisi agar tidak memanggil replace pada nilai null
    
    const baseUrl = 'https://adminoz.santuy.info/storage/';
    // Cek apakah URL mengandung 'public', jika iya, ganti dengan 'storage', jika tidak, tambahkan base URL
    if (imageUrl.includes('public')) {
      return baseUrl + imageUrl.replace('public', 'storage');
    } else {
      return baseUrl + imageUrl;
    }
  };

  const formatDate = (dateString) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dateObj = new Date(dateString);
    const month = months[dateObj.getMonth()];
    const day = dateObj.getDate();
    return `${month} ${day}`;
  };
  
  return (
    <div className="eventPage">
      <div className="event-page-container py-5 event-header">
        <h1 className="display-5 fw-bold text-center event-header-text">
            Upcoming <span style={{ color:"#F49C27" }} className="home-oz">OZ Radio </span> event
        </h1>
      </div>
    <section style={{ backgroundColor: theme === 'light' ? "#f6f6f6" : "#090909" }} className="event">
    <Container>
    <Row className=" flex-row-reverse g-5 py-3">
            <Col lg={7} md={12} sm={12} className="card__content">
              {events && events.length > 0 && (
                <>
                <img 
                  src={getImageUrl(events[0].image)} 
                  alt={`image0`}
                  className="img-fluid mx-auto d-block"
                />
                  <div className="card__data" >
                        <div>
                          <span className="card__description">{formatDate(events[0].updated_at)}</span>
                          <h2 className="card__title fw-bold fs-5"><Link className="text-white eventpage-title" to={`/event/${events[0].id}`}>{events[0].title}</Link></h2>
                          <Link to={`/event`} className="card__button">{events[0].category.name}</Link>
                          </div>
                    </div>
                  </>
              )}
              </Col>
            <Col lg={5} md={12} sm={12} className="card__content">
            {events && events.length > 1 && (
                <>
                <img 
                  src={getImageUrl(events[1].image)} 
                  alt={`image1`} 
                  className="img-fluid mx-auto d-block"
                  />
                  <div className="card__data" >
                  <div>
                    <span className="card__description">{formatDate(events[1].updated_at)}</span>
                    <h2 className="card__title fw-bold fs-5"><Link className="text-white eventpage-title" to={`/event/${events[1].id}`}>{events[1].title}</Link></h2>
                    <Link to={"/event"} className="card__button">{events[1].category.name}</Link>
                    </div>
              </div>
            </>
        )}
                <div className="mt-2">
                {events && events.length > 1 && (
              <div>
                  {events.slice(2, 5).map((eventItem, index) => (
                    <Row key={index}>
                          <hr style={{ color:"#F49C27" }}/>
                          <Col sm={2} className="mt-1">
                          <span className="primary-text eventpage-date-list text-center fs-6">{formatDate(eventItem.updated_at)}</span>
                          </Col>
                          <Col sm={10} className="">
                            <span className="fs-5 eventpage-title-list"><Link to={`/event/${eventItem.id}`}>{eventItem.title}</Link></span>
                            <br/>
                            <Link to={"/single-event"} className="card__button">{eventItem.category.name}</Link>
                          </Col>
                </Row>
              ))}
              </div>
            )}
            </div>
              </Col>
            </Row>
    </Container>
    </section>
      <div className="event-showcase py-5" data-aos="fade-left">
        {events && events.length > 0 && (
          <>
           <Col className="mb-3 mx-5">
              <h1 className="special-event display-5 fw-bold text-center">Special Event <br/>
                <span style={{ color:"#F49C27" }} className="">{events[0].title}</span>
              </h1>
            </Col>
          <div className="container col-xxl-8 " style={{ height: 991 }}>
              <div className="row flex-lg-row align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6 d-block mx-auto">
                  <img src={getImageUrl(events[0].image)} className="satine-img img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                </div>
              <div className="col-lg-6">
                  <h1 className="special-event display-5 text-body-emphasis lh-1 mb-3 mt-3">Special Event <br/> <span className="span-hero">{events[0].title}</span></h1> 
                  <p className="lead fw-lighter" dangerouslySetInnerHTML={{ __html: events[0].excerpt }}></p>
                  <Link to={`/event/${events[0].id}`}  rel="noreferrer"><Button variant="outline-dark" className="text-center px-4 py-2 border border-secondary rounded-pill fs-5">Event Detail</Button></Link>
                </div>
              </div>
            </div>
            </>
        )}
      </div>
    </div>
  )
}

export default EventPages
