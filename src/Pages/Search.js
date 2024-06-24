// NavBottom.jsx
import React, { useState, useEffect } from 'react';
import { Container, Form, InputGroup, Button } from 'react-bootstrap';
import { IoSearchCircle  } from "react-icons/io5";


const Search = () => {
  return (
    <>
      <Container>
      <h1 className="header-about"><span style={{ color:"#FCBB33" }}>Search</span></h1>
      <Form action="https://www.google.com/search" target='_blank'>
          <Form.Control type="input" placeholder="Search OZ" name="q" style={{ borderRadius:"25px" }}></Form.Control>
          {/* <IoSearchCircle className='text-warning'/> */}
      </Form>
      </Container>
    </>

  );
};

export default Search;
