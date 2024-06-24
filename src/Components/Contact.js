import React from "react";

const Contact = () => {
  return (
    <section>
    <div className="contact-page-wrapper" id="contact-us" data-aos="fade-down">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Contact Us</h1>
      <div className="contact-oz">
        <p className="mt-5 fw-bold fs-3">101.2 FM OZ Radio Bali</p>
        <div className="custom-border"></div>
        <p className="primary-text">
        <a href="https://maps.app.goo.gl/8egLbd2N97EBE5JKA">
          Kompleks Pertokoan Sunset Indah IIB Blok 5<br/>
          Sunset Road Kuta, Bali 80361</a><br/>
          Ph : <a href = "https://wa.me/628999401012 ">+62 899 940 101 2</a><br/>
          Email: <a href = "mailto: programozbali@gmail.com">programozbali@gmail.com</a><br/>
          Instagram:
             <a 
              className="text-decoration-none" 
              href="https://www.instagram.com/d_ozradiobali/">
                @d_ozradiobali
            </a> 
          </p>
        </div>
        <div className="contact-oz">
        <p className="mt-5 fw-bold fs-3">90.8 FM OZ Radio Jakarta</p>
        <div className="custom-border"></div>
        <p className="primary-text">
        <a href="https://maps.app.goo.gl/YAeU3hh9Sh1sKrRf7">
          Jl. Bangka Raya No.5 A, Mampang Prpt.<br/>
          Kota Jakarta Selatan 12720</a><br/>
          Ph : <a href = "https://wa.me/6281210104908 ">+62 812 101 049 08</a> <br/>
          Email: <a href = "mailto: info@ozradiojakarta.com">info@ozradiojakarta.com</a><br/>
          Instagram:
             <a 
              className="text-decoration-none" 
              href="https://www.instagram.com/ozradiojakarta/">
                @ozradiojakarta
            </a> 
        </p>
        </div>
      <div className="contact-oz">
        <p className="mt-5 fw-bold fs-3">103.1 FM OZ Radio Bandung</p>
        <div className="custom-border"></div>
        <p className="primary-text">
          <a href="https://maps.app.goo.gl/AnUiRBRNTJNHPY8J7">
          Jl. Setrasari II No.14, Sukarasa<br/>
          Kota Bandung 40152</a><br/>
          Ph : <a href = "https://wa.me/62817771031 ">+62 817 771 031</a><br/>
          Instagram:
            <a 
              className="text-decoration-none" 
              href="https://www.instagram.com/ozradiobandung/">
                @ozradiobandung
            </a>
          </p>
        </div>
        <div className="contact-oz">
        <p className="mt-5 fw-bold fs-3">Advertise With Us</p>
          <div className="custom-border"></div>
          <p className="primary-text">phone: <a href = "https://wa.me/6281210104908 ">+6281210104908</a><br/>
            email: <a href = "mailto: jelita@ozradiojakarta.com">jelita@ozradiojakarta.com</a>
          </p>
          {/* <svg className="getwaves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FE9E0D" fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,192C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
          </div>
        </div>
    </section>
  );
};

export default Contact;
