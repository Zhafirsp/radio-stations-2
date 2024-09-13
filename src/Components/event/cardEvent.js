import React, { useState, useEffect, useContext } from "react";
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import '../../Assets/Css/event.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../../ThemeContext";

const CardEvent = () => {
  const [events, setEvents] = useState([]);
  const { theme } = useContext(ThemeContext); // Use context
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://adminoz.santuy.info/api/events`);
        // Sort events by event_date
        const sortedEvents = response.data.events.data.sort((a, b) => new Date(a.event_date) - new Date(b.event_date));
        // Filter events that are not older than one month
        const currentDate = new Date();
        const filteredEvents = sortedEvents.filter(event => {
          const eventDate = new Date(event.event_date);
          return eventDate >= new Date(currentDate.setDate(currentDate.getDate() - 1));
        });

        const eventList = filteredEvents.map(event => ({
          id: event.id,
          title: event.title,
          start: event.event_date,
          description: event.excerpt,
          location: event.category.name,
          image: event.image
        }));
        
          setEvents(eventList);
          setFilteredEvents(eventList); // Initially display all events

         // Update CSS class for centering the column
         const col1 = document.querySelector('.col1');
         if (eventList.length <= 3) {
           col1.classList.add('center-col');
         } else {
           col1.classList.remove('center-col');
         }
       } catch (error) {
         console.error('Error fetching event data:', error);
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
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const dateObj = new Date(dateString);
    const day = days[dateObj.getDay()];
    const date = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    return `${day}, ${date} ${month} ${year}`;
  };

  return (
    <section style={{ backgroundColor: theme === 'light' ? "#f6f6f6" : "#090909" }} className="event" data-aos="fade-down" >
      <Container fluid className="conteiner-card-event">
      <Row className={`row-card-event justify-content-center ${events.length <= 4 ? 'center-column' : ''}`}>
        <Col lg={events.length <= 4 ? 12 : 6} sm={12}>
            <Carousel controls={false} touch={true} className="mb-5">
              {events.slice(0, 3).map((event, index) => (
                <Carousel.Item key={index}>
                  <Link to={`/event/${event.id}`}>
                    <img src={getImageUrl(event.image)} alt={`image${index}`} className="d-block mx-auto img-fluid event-img-primary rounded-4" width={1300} height={670}  />
                  </Link>
                  <Carousel.Caption>
                    <span className="text-white card__description">{formatDate(event.start)}</span>
                    <h3 className="fw-bold fs-5 event-header-title">
                      <Link to={`/event/${event.id}`} className="card__title">{event.title}</Link>
                    </h3>
                    <Link to={"/"} style={{ color: "#FCBA33" }} className="card__button">{event.location.name}</Link>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
        </Col>
        {events.length > 4 && (
    <Col lg={3} className="d-block">
      <Carousel controls={false} touch={true} indicators={false} className="">
        {events.length > 4 && (
          <Carousel.Item >
            <Link to={`/event/${events[4].id}`}>
              <img src={getImageUrl(events[4].image)} className="d-block mx-auto img-fluid event-img rounded-4"  width={1300} height={670} />
            </Link>
            <Carousel.Caption>
              <span className="text-white card__description">{formatDate(events[4].start)}</span>
              <h3 className="fw-bold fs-5 event-header-title">
                <Link to={`/event/${events[4].id}`} className="card__title">{events[4].title}</Link>
              </h3>
              <Link to={"/"} style={{ color: "#FCBA33" }} className="card__button">{events[4].location.name}</Link>
            </Carousel.Caption>
          </Carousel.Item>
        )}
      </Carousel>
      <Carousel controls={false} touch={true} indicators={false} className="my-5">
        {events.length > 5 && (
          <Carousel.Item >
            <Link to={`/event/${events[5].id}`}>
              <img src={getImageUrl(events[5].image)} className="d-block mx-auto img-fluid event-img rounded-4"  width={1300} height={670} />
            </Link>
            <Carousel.Caption>
              <span className="text-white card__description">{formatDate(events[5].start)}</span>
              <h3 className="fw-bold fs-5 event-header-title">
                <Link to={`/event/${events[5].id}`} className="card__title">{events[5].title}</Link>
              </h3>
              <Link to={"/"} style={{ color: "#FCBA33" }} className="card__button">{events[5].location.name}</Link>
            </Carousel.Caption>
          </Carousel.Item>
        )}
      </Carousel>
    </Col>
  )}
</Row>
       </Container>
    </section>
  );
};

export default CardEvent;
