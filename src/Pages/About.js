// NavBottom.jsx
import React, { useState, useEffect } from 'react';
import Broadcaster from '../Components/Broadcaster';
import aboutImg from '../Assets/Img/concert1.jpg';
import { Container } from 'react-bootstrap';


const About = () => {
  return (
    <>
    <Container>
    <h1 className="header-about"> <span style={{ color:"#FCBB33" }} className="home-oz">OZ Radio</span> Profile</h1>
      <hr />
      <div className='d-flex flex-wrap justify-content-between align-items-center mx-5'>
        <div className='col-md-6 align-items-start left-paragraph'>
          <p>
          Lahir dari sebuah ide kreatif dan semangat anak muda Bandung yang diawali pada 25 Desember 1971, dan menjadi radio anak muda pertama di kota Bandung yang bertahan hingga sekarang OZ Radio, dengan tagline ‘Your Friendly Station’ dalam kesehariannya selalu berupaya menjadi teman terbaik buat ozzers, lewat lagu lagu hits dan singable, penyiar yang seru, berita dan content yang up-to-date serta menghibur yang bisa dinikmati baik di 
          <br/>
            <ul>
              <li><a href='https://bandung.ozradio.id/' target='_blank'>OZ Radio Bandung (103.1 Fm )</a></li>
              <li><a href='https://ozradiojakarta.com/' target='_blank'>OZ Radio Jakarta (90.8 Fm)</a></li>
              <li><a href='https://ozradiobali.id/' target='_blank'>OZ Radio Bali(101.2 Fm)</a></li>
            </ul>
          Selain itu, OZ Radio pun memiliki 4 radio streaming yang bisa didengar melalui www.ozradio.id dengan format khusus, yaitu 
          <br/>
            <ul>
              <li>Substereo Radio</li>
              <li>OZdiscoland Radio</li>
              <li>OZ Rewind</li>
              <li>Percikan Iman Radio</li>
            </ul>
          Hal ini pertama kalinya di Indonesia, sebuah radio memiliki radio dengan format khusus Kenal lebih dekat dengan OZ Radio yang bisa diakses dimanapun dan kapanpun, melalui website www.ozradio.id, Instagram, Twitter, Facebook, Tiktok dan Youtube</p>
        </div>
        <div className='col-md-6 align-item-end d-flex'>
          <img src={aboutImg} alt="" width={"1500px"} className='' />
        </div>
     </div>
    <Broadcaster/>    
    </Container>
    </>

  );
};

export default About;
