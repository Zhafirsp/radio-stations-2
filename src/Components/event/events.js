import React, { useState, useEffect, useContext } from "react";
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import CardEvent from "./cardEvent";
import '../../Assets/Css/event.css'
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";

const Event = () => {
  const { theme } = useContext(ThemeContext); // Use context

  return (
    <section style={{ backgroundColor: theme === 'light' ? "#f6f6f6" : "#090909" }} className="event mt-5" data-aos="fade-down" >
    <Container>
      <div className="py-5">
          <div className="mb-3">
            <h1 className="display-5 fw-bold text-center">
              Upcoming <span style={{ color:"#F49C27" }}>OZ Radio </span> Events + In-Studio Sessions
            </h1>
          </div>
      <CardEvent/>
          <div className="mt-3 text-center">
          <Link to="/event">
            <Button variant={theme === 'light' ? "outline-dark" : "outline-light"} className="rounded-pill py-2">More OZ Events</Button>
            </Link>
          </div>
      </div>
    </Container>
    </section>
  );
};

export default Event;
