import React, { useState } from "react"
import { Link } from "react-router-dom"
import {Container, Row, Button, Form, Col, Modal} from 'react-bootstrap';
import Terms from "./terms";
import Policy from "./policy";

const SubscribeFooter = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p className="fw-bold mt-3">Never miss the latest news from OZ Radio by Signing up</p>
        <form className="d-flex" role="submit">
          <input className="form-control me-2" type="email" placeholder="Email" aria-label="email"/>
          <Button type="submit" className="btn btn-warning">Subscribe</Button>
        </form>
            <p className="">By subscribing, you agree to our
            <Terms/> 
            and 
            <Policy/> 
            </p>
    </>
  )
}

export default SubscribeFooter