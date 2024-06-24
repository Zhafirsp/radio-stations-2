import React, { useState } from "react"
import { Link } from "react-router-dom"
const EventFooter = () => {

  return (
    <>
     <h2>Event</h2>
        <h5><a href = "#">Live Music</a></h5>
        <h5><a href = "#">Live Concert</a></h5>
        <h5><a href = "#">Music Festival</a></h5>
        <h5><Link to="/interview">Interviews</Link></h5>
    </>
  )
}

export default EventFooter