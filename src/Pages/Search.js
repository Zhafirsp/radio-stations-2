// NavBottom.jsx
import React, { useState, useEffect } from 'react';
import { Container, Form, InputGroup, Button } from 'react-bootstrap';
import { IoSearchCircle  } from "react-icons/io5";


const Search = () => {
  return (
    <>
    <div className='search-page'>
        <Container>
        <h1 className="header-about"><span style={{ color:"#FCBB33" }}>Search</span></h1>
        <Form action="https://www.google.com/search" target='_blank'>
            {/* <IoSearchCircle className='text-warning'/> */}
            <Form.Control type="input" placeholder="Search OZ" name="q" style={{ borderRadius:"25px", marginBottom:"50px" }}></Form.Control>
        </Form>
        </Container>
      </div>
    </>

  );
};

export default Search;
