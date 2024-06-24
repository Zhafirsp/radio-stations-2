import React from "react"
import Discover from "./discover/Discover"
// import Hero from "./hero/Hero"
import Homes from "./mainContent/homes/Home"
import Youtube from '../../Components/Youtube';
import Program from '../../Components/Program';
import Hero from '../../Components/Hero';
import SinglePageSlider from "../singlePages/slider/singlePageSlider";
import Interview from "../../Components/interview";
import Event from "../../Components/event/events";
import Logo from "../../Components/Logo";
import Head from "../../Components/common/header/Head";
import Radio from "../../Components/Radio/Radio";

const Homepages = () => {
  return (
    <>
      <Hero />
      {/* <Hero/> */}
      <Interview />
      <Head />
      <Event/>
      <Head />
      <Logo />
      {/* <RadioPlayer /> */}
      {/* <Youtube /> */}
      {/* <Program /> */}
      {/* <Homes /> */}
      {/* <SinglePageSlider /> */}
      {/* <Discover /> */}
    </>
  )
}

export default Homepages
