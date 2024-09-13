// // NavBottom.jsx
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../../Assets/Img/Logo.png'
// import { Navbar, Nav, Container, NavDropdown, Offcanvas, Button } from 'react-bootstrap';
// import { GiHamburgerMenu } from "react-icons/gi";
// import '../../Assets/Css/nav_bottom.css'

// const NavBottom = (props ) => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     useEffect(() => {
//       const handleScroll = () => {
//         const scrollPosition = window.scrollY;
//         setIsScrolled(scrollPosition > 100);
//       };
  
//       window.addEventListener('scroll', handleScroll);
//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }, []);
    
//   return (
//     <>
//     <Navbar
//     expand="lg"
//     fixed="top"
//     bg={isScrolled ? 'white' : 'transparent'}
//     className='navbar-bottom'
//     style={{
//       backdropFilter: isScrolled ? 'blur(40px)' : 'none',
//       WebkitBackdropFilter: isScrolled ? 'blur(40px)' : 'none',
//       // borderTop: isScrolled ? '1px solid #ccc' : 'none',
//     }}
//   >
//     <Container fluid>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav navbarScroll " className='' />
//                     <Navbar.Collapse id="basic-navbar-nav navbarScroll ">
//                         <Nav className=" custom-nav fs-4 fw-medium col-md-6 offset-md-2" variant="underline">
//                         <Nav.Link onClick={handleShow} className='offcanvas-menu'><GiHamburgerMenu className='pb-1' />Menu</Nav.Link>
//                         <Offcanvas show={show} onHide={handleClose}>
//                           <Offcanvas.Header closeButton>
//                             <Offcanvas.Title>Close</Offcanvas.Title>
//                           </Offcanvas.Header>
//                           <Offcanvas.Body>
//                             <div className='fs-5'>
//                             <Nav.Link><Link to="/">Home</Link></Nav.Link>
//                             <Nav.Link><Link to="/news">News</Link></Nav.Link>
//                             <Nav.Link><Link to="/radio">Radio</Link></Nav.Link>
//                             <Nav.Link><Link to="/youtube">TV</Link></Nav.Link>
//                             <Nav.Link><Link to="/event">Events</Link></Nav.Link>
//                             <hr/>
//                             <Nav.Link><Link to="#">Sustainability</Link></Nav.Link>
//                             <Nav.Link><Link to="/contact">Advertising</Link></Nav.Link>
//                             <Nav.Link><Link to="#">Community</Link></Nav.Link>
//                             <Nav.Link><Link to="/contact">Contact Us</Link></Nav.Link>
//                             <Nav.Link><Link to="/about">About</Link></Nav.Link>
//                             </div>
//                           </Offcanvas.Body>
//                         </Offcanvas>
//                             {/* <NavDropdown title="City" id="navbarScrollingDropdown">
//                                 <NavDropdown.Item href="https://bandung.ozradio.id/" target='_blank'>Bandung (103.1 FM)</NavDropdown.Item>
//                                 <NavDropdown.Item href="https://ozradiojakarta.com/" target='_blank'>Jakarta (90.8 FM)</NavDropdown.Item>
//                                 <NavDropdown.Item href="https://ozradiobali.id/" target='_blank'>Bali (101.2 FM)</NavDropdown.Item>
//                                 <NavDropdown.Item href="#">Aceh (102.8 FM) </NavDropdown.Item>
//                             </NavDropdown> */}
//                                 </Nav>
//                         <Nav className=" custom-nav fs-4 fw-medium nav-underline">
//                                 <Nav.Link><Link to="/event">Events</Link></Nav.Link>
//                                 <Nav.Link><Link to="/about">Visit</Link></Nav.Link>
//                                 <Nav.Link><Link to="/playlist">Playlist</Link></Nav.Link>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//     <br/>
//     </>
//   );
// };

// export default NavBottom;
