import React from "react"
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import CardEvent from "../../Components/event/cardEvent";
import satine from '../../Assets/Img/satine_interview.jpg'
import '../eventsPage/evenPage.css'
import danilla from "../../Assets/Img/danilla_interview.jpg"
import rimba from "../../Assets/Img/rimba_interview.jpg"

const EventPages = () => {
  return (
    <div className="eventPage">
      <div className="about-section-text-container py-5 event-header">
        <h1 className="display-5 fw-bold text-center event-header-text">
            Upcoming <span style={{ color:"#F49C27" }} className="home-oz">OZ Radio </span> Events
        </h1>
      </div>
    <section style={{ backgroundColor:"#f6f6f6" }} className="event">
    <Container>
      <div className="about-section-text-container py-5">
        <div className="card_container d-flex">
          <article className="card__article container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-lg-6">
                <div className="card__content">
                  <img src={danilla} alt="image" width={"350px"} className="img-fluid" />
                  <div className="card__data">
                        <span className="card__description">April 21</span>
                        <h3 className="card__title fw-bold fs-5"><a href="/single-event">DJ Shadow session on OZ Radio (BROADCAST ONLY)</a></h3>
                        <a href="/single-event" className="card__button">OZ - STUDIO (NW ROOMS)</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div div className="card__content">
                  <img src={rimba} alt="image" width={"350px"} className="img-fluid"/>
                  <div className="card__data">
                    <span className="card__description">April 20</span>
                    <h2 className="card__title fw-bold fs-5">Black History is Now</h2>
                    <a href="#" className="card__button">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Container>
    </section>
      <div className="event-showcase py-5" data-aos="fade-left">
        <Row>
          <Col className="mb-3">
            <h1 className="display-5 fw-bold text-center">
              <span style={{ color:"#F49C27" }} className="home-oz">MoPOP's 2024 </span> Sound Off! Showcase
            </h1>
          </Col>
        </Row>
        <div className="container col-xxl-8 px-4 " style={{ height: 757 }}>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 mt-3">Special Music Event on <span className="span-hero">MoPOP’s Sound Off! </span>Showcase</h1> 
                <p className="lead fw-lighter">is your chance to witness the next big thing in NW music as young artists from around the region take to the Sky Church stage for three nights of heart, guts, and glory.</p>
                <p className="lead fw-lighter">As a legacy under-21 music showcase in the Pacific Northwest, MoPOP’s Sound Off! connects young artists with the tools and resources to dig into their sound, grow their business skills, and level up their artistry.</p>
              <Button variant="outline-dark" className="text-center  py-2 px-4 border border-secondary rounded-pill fs-5"><a href="https://mopop.org/sound-off" target="_blank">Get Tickets Now</a></Button>
              </div>
              <div className="col-10 col-sm-8 col-lg-6">
                <img src={satine} className="hero-img d-block mx-lg-auto img-fluid ms-4" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
              </div>
            </div>
          </div>
          <Container>
          <table className="table table-borderless table-striped table-responsive table-event my-5">
            <thead>
              <tr>
                <th scope="col" className="text-secondary">April 20TH</th>
                <th scope="col" className="text-secondary">April 24TH</th>
                <th scope="col" className="text-secondary">May 2ND</th>
              </tr>
            </thead>
            <tbody className="fs-6">
              <tr>
                <td scope="row">Lucia Flores-Wiseman</td>
                <td>Sophia Shoshana</td>
                <td>Rae</td>
              </tr>
              <tr>
                <td scope="row">The Rat Utopia Experiment</td>
                <td>Joint Souls</td>
                <td>miacompactdisk</td>
              </tr>
              <tr>
                <td scope="row">LCN!</td>
                <td>Smooth Sailing</td>
                <td>King Zaae</td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td>Brannon Warn-Johnston</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div 
          style={{ 
            float:"none", 
            clear: "both", 
            width: "100%", 
            position: "relative", 
            paddingBottom: "56.25%", 
            paddingTop: "25px", 
            height: "0", 
            }}
            className="container-fluid">
            <iframe 
            width="770" 
            height="415" 
            src="https://www.youtube.com/embed/DxbRSL8-nB8?si=FEQCmpi5p3Z1oECK&autoplay=1" 
            title="YouTube video player"
            className="mb-5 d-block ms-auto me-auto"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
            style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
            >
            </iframe>
          </div>
          </Container>
          <section style={{ backgroundColor:"#f6f6f6" }} data-aos="fade-down">
            <Container fluid>
              <div className="my-5">
                <Row>
                  <Col className="my-5">
                    <h1 className="display-5 fw-bold text-center">
                      Upcoming <span style={{ color:"#F49C27" }}>OZ Radio </span> Events + In-Studio Sessions
                    </h1>
                  </Col>
                </Row>
                <article className=" mx-5">
              <div className="card__content">
                <img src={danilla} alt="image" className="event_img img-fluid mb-3" />
                <div className="card__data">
                  <Row>
                      <span className="card__description">April 21</span>
                      <h3 className="card__title fw-bold fs-5"><a href="/single-event">DJ Shadow session on OZ Radio (BROADCAST ONLY)</a></h3>
                      <a href="/single-event" className="card__button">OZ - STUDIO (NW ROOMS)</a>
                  </Row>
                </div>
              </div>
      
              <div className="col-md-6 offset-md-3">
                <Row>
                    <Col sm={2} className="my-3">
                      <span className=" fw-lighter primary-text text-center fs-6 ">April<br/>23</span>
                    </Col>
                    <Col className="my-3">
                      <span className=" fs-5 mt-3"><a href="#">DeVotchKa LIVE on OZ (OPEN TO THE PUBLIC)</a></span>
                      <br/>
                      <span className=""><a href="#">OZ - GATHERING SPACE</a></span>
                    </Col>
                    <hr style={{ color:"#F49C27" }}/>
                    <Col sm={2} className="my-3">
                      <span className=" fw-lighter primary-text text-center fs-6">April<br/>25</span>
                    </Col>
                    <Col className="my-3">
                      <span className=" fs-5"><a href="#">DJ Shadow session on OZ (BROADCAST ONLY)</a></span>
                      <br/>
                      <span className=""><a href="#">OZ - STUDIO (NW ROOMS)</a></span>
                    </Col >
                    <hr style={{ color:"#F49C27" }}/>
                    <Col sm={2} className="my-3">
                      <span className=" fw-lighter primary-text text-center fs-6">April<br/>27</span>
                    </Col>
                    <Col className="my-3">
                      <span className=" fs-5"><a href="#">Drinking Boys and Girls Choir Live on OZ (OPEN TO THE PUBLIC)</a></span>
                      <br/>
                      <span className=""><a href="#">OZ - STUDIO (NW ROOMS)</a></span>
                    </Col>
                  </Row>
              </div>
            </article>
              </div>
            </Container>
            </section>
      </div>
    </div>
  )
}

export default EventPages
