import React, { useState } from "react"
import { Link } from "react-router-dom"
import {Container, Row, Button, Form, Col, Modal} from 'react-bootstrap';

const CategoryFooter = () => {
  return (
    <>
      <h2 className="mt-4">Category</h2>
          <Row>
            <Col>
              <h5><a href="#"   className="text-decoration-none">Music</a></h5>
              <h5><a href="#"   className="text-decoration-none">Sport</a></h5>
              <h5><a href="#"  className="text-decoration-none">Lifestyle</a></h5>
              <h5><a href="#"  className="text-decoration-none">Education</a></h5>
              <h5><a href="#"  className="text-decoration-none">Politic</a></h5>
            </Col>
            <Col>
              <h5><a href="#"  className="text-decoration-none">Comedy</a></h5>
              <h5><a href="#"  className="text-decoration-none">Technology</a></h5>
              <h5><a href="#"  className="text-decoration-none">Religy</a></h5>
              <h5><a href="#"  className="text-decoration-none">Art</a></h5>
            </Col>
          </Row>
    </>
  )
}

export default CategoryFooter