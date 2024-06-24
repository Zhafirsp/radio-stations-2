import React, { lazy } from "react"
import Head from "../Components/common/header/Head";
import { Container } from "react-bootstrap";
import Hero from '../Components/Hero';
import Interview from '../Components/interview';
import Event from '../Components/event/events';
import Logo from '../Components/Logo';

const Home = () => {
  return (
    <>
    <Container fluid>
        <Hero />
        <Interview />
        <Head />
        <Event/>
        <Head />
        <Logo />
      </Container>
    </>
  )
}

export default Home
