// NavBottom.jsx
import React, { useContext, useState, useEffect } from 'react';
import Broadcaster from '../Components/Broadcaster';
import { Container } from 'react-bootstrap';
import Compro from "../Assets/Img/compro.png";
import ComproDark from "../Assets/Img/compro_dark.png";
import ComproPdf from "../Assets/files/COMPANY PROFILE OZ RADIO BANDUNG 2024.pdf";
import { ThemeContext } from "../ThemeContext";
import Sponsor from '../Components/Sponsor';


const About = () => {

  const { theme } = useContext(ThemeContext); // Use context
  return (
    <>
    <Container>
    <h1 className="header-about"> <span style={{ color:"#FCBB33" }} className="home-oz">OZ Radio</span> Profile</h1>
      <hr />
      <div className='d-flex flex-wrap justify-content-between align-items-center mx-5'>
        <div className='col-md-5 align-items-start left-paragraph'>
          <h4 className='fw-light'><span className='fw-bold'>Radio OZ</span> lahir dari sebuah ide kreatif dan semangat anak muda yang diawali pada 25 Desember 1971. Radio OZ pertama kali ON-AIR di Kota Bandung dengan format anak muda yang bertahan sampai sekarang. <span className='fw-bold'>Radio OZ</span> handal dalam mengelola radio anak muda dalam menyampaikan pesan kepada target anak muda di setiap zamannya.</h4>
          <h4 className='fw-light'><span className='fw-bold'>Radio OZ</span> sekarang menjangkau empat kota besar di Indonesia, diawali dengan :</h4>
            <ul className='fw-bold'>
              <li><a href='https://bandung.ozradio.id/' target='_blank'>103.1FM OZ Radio Bandung</a></li>
              <li><a href='https://ozradiojakarta.com/' target='_blank'>101.2FM D'OZ Radio Bali</a></li>
              <li><a href='https://ozradiobali.id/' target='_blank'>90.8FM OZ Radio Jakarta</a></li>
            </ul>
            <h4 className='fw-light'><span className='fst-italic fw-bold'>Your Friendly Station </span>menjadi tagline <span className='fw-bold'>OZ Radio</span> disesuaikan dengan perkembangan jaman di setiap jejaring radionya yang akan selalu berpacu untuk menjadi Pioneer radio anak muda yang <span className='fw-bold'>Dinamis, Kreatif,</span> dan menjadi <span className='fw-bold'>Trendsetter.</span></h4>
          {/* <br/>
            <ul>
              <li>Substereo Radio</li>
              <li>OZdiscoland Radio</li>
              <li>OZ Rewind</li>
              <li>Percikan Iman Radio</li>
            </ul>
          <p>Hal ini pertama kalinya di Indonesia, sebuah radio memiliki radio dengan format khusus Kenal lebih dekat dengan OZ Radio yang bisa diakses dimanapun dan kapanpun, melalui website www.ozradio.id, Instagram, Twitter, Facebook, Tiktok dan Youtube</p> */}
        </div>
        {/* <Button variant={theme === 'light' ? "outline-dark" : "outline-light"} className="rounded-pill py-2">More OZ Events</Button> */}
        <div className='col-md-6 align-item-end d-flex'>
        <a href={ComproPdf} target="_blank" rel="noopener noreferrer">
          <img src={theme === 'light' ? Compro : ComproDark} alt="" width={"1500px"} className='thumbnail-image d-block mx-auto' />
          </a>
        </div>
     </div>
    <Broadcaster/>
    {/* <div className="head-news">
      <div className="container mb-5">
          <div className="ads-topnews">
            <img src={Media} alt={`Media Exposure`} className="img-fluid d-block mx-auto"/>
          </div>
          <div className="container mb-5">
          <div className="ads-topnews">
            <img src={Partner} alt={`Our Partner`} className="img-fluid d-block mx-auto"/>
          </div>
          </div>
      </div>
    </div> */}
    </Container>
    <Sponsor/>
    </>

  );
};

export default About;
