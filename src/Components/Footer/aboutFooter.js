import React, { useState } from "react"
import { Link } from "react-router-dom"

const AboutFooter = () => {

  return (
    <>
     <h2>About Us</h2>
        <h5><Link to="/about">About</Link></h5>
        <h5><Link to="/radio">OZ Radio</Link></h5>
        <h5><Link to="/youtube">OZ TV</Link></h5>
        <h5><Link to="/contact">Partnership</Link></h5>
        <h5><Link to= "#">Service</Link></h5>
    </>
  )
}

export default AboutFooter