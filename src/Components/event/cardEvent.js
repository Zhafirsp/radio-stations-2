import React, { useState, useEffect } from "react";
import { Col, Row } from 'react-bootstrap';
import '../../Assets/Css/event.css';
import { Link } from "react-router-dom";
import axios from "axios";

const CardEvent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://adminoz.santuy.info/api/events`);
         // Mengurutkan events berdasarkan tanggal updated_at secara descending
        const sortedEvents = response.data.events.data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setEvents(sortedEvents);
      } catch (error) {
        console.error("Error fetching events data:", error);
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
    <div className="event card_container">
      <div className="my-5">
        {/* Tampilkan satu data pertama */}
        {events.length > 0 && (
          <div className="img-container-event mb-3">
            <img src={getImageUrl(events[0].image)} alt={`image0`} className="d-block mx-auto img-fluid event-img" width={1100} height={670} />
            <div className="img-event-data">
              <Row>
                <span className="text-white">{formatDate(events[0].updated_at)}</span>
                <h3 className="fw-bold fs-5 event-header-title"><Link to={`/event/${events[0].id}`} className="event-title">{events[0].title}</Link></h3>
                <Link to={"/"} style={{ color:"#FCBA33" }}>{events[0].category.name}</Link>
              </Row>
            </div>
          </div>
        )}
  
        {/* Tampilkan data sisanya */}
        {events.length > 1 && (
          <div className="col-md-10 offset-md-1">
            {events.slice(1, 4).map((event, index) => (
              <Row key={index} className="row-event">
                <Col xl={1} sm={2} className="mt-4">
                <span className="primary-text text-center fs-6">{formatDate(events[1].updated_at)}</span>
                </Col>
                <Col className="my-1">
                  <span className="fs-4 fw-bold event-title-list"><Link to={`/event/${event.id}`} className="event-title-list">{event.title}</Link></span>
                  <br/>
                  <span><Link to={"/"}  className="event-category-list fw-bold">{event.category.name}</Link></span>
                </Col>
                <hr style={{ color:"#FCBA33" }}/>
              </Row>
            ))}
          </div>
        )}
      </div>
    </div>
  );  
};

export default CardEvent;
