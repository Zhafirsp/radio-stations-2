import React, { useState, useEffect, useContext } from "react";
import { Col, Row, Container, Button, Modal, Card } from 'react-bootstrap';
import './evenPage.css'
import { Link } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../../ThemeContext";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const EventPages = () => {
  
  const { theme } = useContext(ThemeContext); // Use context
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);


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
          return eventDate >= new Date(currentDate.setMonth(currentDate.getMonth() - 1));
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
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const dateObj = new Date(dateString);
    const day = days[dateObj.getDay()];
    const date = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    return `${day}, ${date} ${month} ${year}`;
  };

  const handleDateClick = (info) => {
    // Filter the events to find the ones that match the clicked date
    const filtered = events.filter(e => new Date(e.start).toDateString() === new Date(info.dateStr).toDateString());
    setFilteredEvents(filtered);
    setSelectedDate(info.dateStr);
  };

  const dayCellContent = (arg) => {
    
    const classNames = ["custom-cell"]; // kelas tambahan yang Anda tentukan

    return (
      <div className={classNames.join(" ")}>
        <span className="day-number" style={{ color: theme === 'light' ? "#000" : "#fff" }}>{arg.date.getDate()}</span>
      </div>
    );
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
          <Row className="flex-row g-5 py-3">
          <Col lg={6} md={12} sm={12} className="calendar-container" style={{ zIndex:"0" }}>
          {events.length > 0 ? (
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={events}
              dateClick={handleDateClick}
              editable={false}
              selectable={false}
              navLinks={false}
              dayCellContent={dayCellContent}
              headerToolbar={{
                left: 'prev',
                center: 'title',
                right: 'next'
              }}
              headerToolbarClassNames="custom-toolbar"
            />
          ) : (
            <p>Loading events...</p>
          )}

            </Col>
            <Col lg={6} md={12} sm={12}>
            {filteredEvents.length > 0 ? (
                filteredEvents.map((event, index) => (
                  <>
                  <h1 className="fw-light mb-4">
                    {formatDate(event.start)}
                  </h1>
                  <Card key={index} className="mb-3" style={{ backgroundColor: theme === 'light' ? "#fff" : "#000" }}>
                    <Card.Body>
                    <Row className="">
                      <Col lg={6} md={12} sm={12}>
                      {event.image && (
                        <Link to={`/event/${event.id}`}>
                        <img
                          src={getImageUrl(event.image)}
                          alt={event.title}
                          className="img-fluid"
                        />
                        </Link>
                      )}
                      </Col>
                      <Col lg={6} md={12} sm={12}>
                      <Link to={`/event/${event.id}`}><h2 className="fw-bold" style={{ color: "#E48A0D" }}>{event.title}</h2></Link>
                      <h5 className="" style={{ color: theme === 'light' ? "#000" : "#fff" }}>{event.location}</h5>
                      <p className="" style={{ color: theme === 'light' ? "#000" : "#fff" }}>{event.description}</p>
                      <Link to={`/event/${event.id}`}>
                        <div class="more-event-button" style={{ color: theme === 'light' ? "#000" : "#fff" }}>
                          More
                          <div class="arrow">›</div>
                        </div>
                      </Link>
                      </Col>
                    </Row>
                    </Card.Body>
                  </Card>
                  </>
                ))
              ) : (
                <h1 className="text-center">No events on this date.</h1>
              )}
            </Col>
          </Row>
        </Container>
      </section>
      {/* <div className="event-showcase py-5" data-aos="fade-left">
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
      </div> */}
    </div>
  )
}

export default EventPages
