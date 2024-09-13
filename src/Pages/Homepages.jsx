import React, { lazy } from "react"
import { Container } from "react-bootstrap";
import Hero from '../Components/Hero';
import Interview from '../Components/interview';
import Event from '../Components/event/events';
import Logo from '../Components/Logo';
import Videos from "../Components/Videos/Videos";
import News from "./newsPage/News";
import ListRadio from "../Components/listRadio/listRadio";
import Section from '../Assets/Img/Section.png'
import CardEvent from "../Components/event/cardEvent";
import Ads from "../Components/ads";

const Home = () => {
  return (
    <>
    {/* <Container fluid> */}
      <Hero />
       <Ads />
        <CardEvent/>
      <News isHomePage={true}/>
        {/* <Interview /> */}
        {/* <Logo /> */}
        <Videos />
        <ListRadio />
      {/* </Container> */}
    </>
  )
}

export default Home
