import React, { lazy, useState } from "react";

import {Container, Row, Button, Form, Col, Modal} from 'react-bootstrap';
import '../../Assets/Css/footer.css'
import { Link } from 'react-router-dom';

const SubscribeFooter = lazy(() => import ('./subscribeFooter'));
const CategoryFooter = lazy(() => import ('./categoryFooter'));
const EventFooter = lazy(() => import ('./eventFooter'));
const SocialFooter = lazy(() => import ('./socialFooter'));
const AboutFooter = lazy(() => import ('./aboutFooter'));
const Terms = lazy(() => import ('./terms'));
const Policy = lazy(() => import ('./policy'));


const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="footer">
      <div className="logo_nav">
            <ul className="nav justify-content-center fw-bold fs-4">
              <li><Link to="/about" className="px-5">ABOUT</Link></li>
              <li><Link to="/pp_terms" className="px-5 ">PRIVACY/TERMS</Link></li>
              <li><Link to="/contact" className="px-5">CONTACT</Link></li>
            </ul>
        </div>
    {/* <svg className="getwaves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#FE9E0D" fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,192C1120,192,1280,224,1360,240L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    </svg> */}
     <div className="footer-wrapper mx-5">
      <div className="footer-section-one col-md-3 ms-5">
        <div className="footer-section-columns ms-5">
          <CategoryFooter/>
        </div>
       </div>
      <div className="footer-section-two col-md-3 me-5">
        <div className="footer-section-columns me-5">
        <EventFooter/>
        </div>
      </div>
      <div className="footer-section-three col-md-3 me-5">
        <div className="footer-section-columns me-5">
        <AboutFooter/>
        </div>
      </div>
      <div className="footer-section-four col-md-4 me-5">
      <SocialFooter/>
        <div className="footer-section-columns me-5">
        <SubscribeFooter/>
        </div>
      </div>
    </div>
      <div className="container bottom-footer">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-12 d-flex align-items-center">
           <p>2024 OZ Radio Limited. All Rights Reserved. OZ Radio &copy; is a registered trademark of OZ Radio Indonesia. 
            <Terms/>
             | 
            <Policy/> | 
            <Link className="terms"> Cookie Policy</Link>
            </p>
           <p className="ms-auto fw-bold "><Link to="#" className="terms">Indonesia</Link></p>
          </div>
        </footer>
      </div>
      </div>
  );
};

export default Footer;
