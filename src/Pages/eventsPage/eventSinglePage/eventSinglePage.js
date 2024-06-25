import React, { useEffect, useState } from "react"
// import satine from '../../../Assets/Img/satine_interview.jpg'
// import danilla from "../../../Assets/Img/danilla_interview.jpg"
import { Button, Col, Container, Row } from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import './eventSinglePage.css';
import NotFoundPage from "../../NotFoundPage";
import ModalImage from "react-modal-image";


const EventSinglePage = () => {

  const { eventId } = useParams(); // Ambil ID post dari URL
  const [event, setEvent] = useState(null); // State untuk menyimpan data post

  useEffect(() => {
    // Panggil API untuk mendapatkan data penulis dan waktu
    const fetchData = async () => {
      try {
        // const response = await axios.get(`${process.env.NEWS_API_HOST}${id}`);
        const response = await axios.get(`https://adminoz.santuy.info/api/events/${eventId}`);
        setEvent(response.data.event); // Data post dari response
      } catch (error) {
        console.error("Error fetching author, category and time data:", error);
      }
    };

    fetchData();
  }, [eventId]);
  

  const getImageUrl = (imageUrl) => {
    if (!imageUrl) return ""; // Tambahkan pengecekan kondisi agar tidak memanggil replace pada nilai null
    
    const baseUrl = 'https://adminoz.santuy.info/storage/';
    // Cek apakah URL mengandung 'public', jika iya, ganti dengan 'storage', jika tidak, tambahkan base URL
    if (imageUrl.includes('public')) {
      return baseUrl + imageUrl.replace('public', 'storage');
    } else {
      return baseUrl + imageUrl;
    }
  };

  return (
    <>
    {event ? (
      <div className="single-event">
      <section className="event">
      <Container>
      <Row className=" flex-row-reverse g-5">
              <Col lg={12} md={12} sm={12} className="card__content">
                <ModalImage
                    small={getImageUrl(event.image) + "?w=1600&h=auto"} // Ukuran kecil (thumbnail)
                    large={getImageUrl(event.image)} // Ukuran besar (asli)
                    alt={event.title}
                    className="img-fluid modal-image-small"
                    hideDownload="false"
                    hideZoom="false"
                  />
                </Col>
              </Row>
      </Container>
      </section>
      
        <div className="event-showcase py-5" data-aos="fade-left">
          <ol class="breadcrumb justify-content-center">
              <li class="breadcrumb-item breadcrumb-history"><Link to={"/"}>Home</Link></li>
              <li class="breadcrumb-item breadcrumb-history"><Link to={"/event"}>Event</Link></li>
              <li class="breadcrumb-item active" aria-current="page" style={{ color:"#FCBA33" }}>{event.title}</li>
          </ol>
          {/* {EventSinglePageData.map((data, index) => ( */}
            <div>
              <Col className="mb-3">
                <h1 className="display-5 fw-bold text-center mt-5">Special Event <br/>
                  <span style={{ color:"#F49C27" }} className="">{event.title} </span>
                </h1>
              </Col>
            <div className="container col-xxl-8 " style={{ height: 991 }}>
                <div className="row flex-lg-row align-items-center g-5 py-5">
                  {/* <div className="col-10 col-sm-8 col-lg-6 d-block mx-auto">
                    <img src={getImageUrl(event.image)} className="satine-img img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                  </div> */}
                {/* <div className="col-lg-6"> */}
                    {/* <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 mt-3">Special Music Event on <span className="span-hero">{event.title} </span>Showcase</h1>  */}
                    <p className="lead fw-lighter" dangerouslySetInnerHTML={{ __html: event.body }}></p>
                  {/* </div> */}
                </div>
                    {/* <Button variant="outline-dark mx-auto" className="text-center py-2 border border-secondary rounded-pill fs-5"><a href="https://mopop.org/sound-off" target="_blank" rel="noreferrer">Get Tickets Now</a></Button> */}
              </div>
            </div>
          {/* ))} */}
        </div>
      </div>
    ) : (
      <Container fluid className="my-5 py-5">
          <NotFoundPage/>
       </Container>
    )}
    </>
  )
}

export default EventSinglePage
