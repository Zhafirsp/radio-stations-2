import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './eventSinglePage.css';
import NotFoundPage from "../../NotFoundPage";
import ModalImage from "react-modal-image";
import { FacebookEmbed, InstagramEmbed, LinkedInEmbed, PinterestEmbed, TikTokEmbed, TwitterEmbed } from "react-social-media-embed";

const EventSinglePage = () => {
  const { eventId } = useParams(); // Ambil ID event dari URL
  const [event, setEvent] = useState(null); // State untuk menyimpan data event

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://adminoz.santuy.info/api/events/${eventId}`);
        setEvent(response.data.event); // Data event dari response
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

  const processEventBody = (text) => {
    const processedText = text.replace(
      /(<iframe.*?src="https:\/\/www\.youtube\.com\/embed\/.*?<\/iframe>)/g,
      '<div class="singlePageIframeContainer">$1</div>'
    );

    return processedText;
  };

  const extractAndEmbedLinks = (text) => {
    const linkPatterns = {
      facebook: /<iframe.*?src="(https:\/\/www\.facebook\.com\/plugins\/post\.php.*?<\/iframe>)/g,
      instagram: /(https:\/\/www\.instagram\.com\/p\/[a-zA-Z0-9_-]+\/?)/g,
      // linkedin: /(https:\/\/www\.linkedin\.com\/posts\/[a-zA-Z0-9_-]+\/?)/g,
      // pinterest: /(https:\/\/www\.pinterest\.com\/pin\/[0-9]+\/?)/g,
      tiktok: /(https:\/\/www\.tiktok\.com\/@.*\/video\/[0-9]+\/?)/g,
      twitter: /(https:\/\/twitter\.com\/.*\/status\/[0-9]+\/?)/g,
    };

    const embeds = {};
    let newText = text;

    for (const [key, pattern] of Object.entries(linkPatterns)) {
      const matches = newText.match(pattern);
      if (matches) {
        matches.forEach(match => {
          embeds[key] = match;
          if (key === 'twitter') {
            const twitterBlockquotePattern = /<blockquote class="twitter-tweet">[\s\S]*?<\/blockquote>/g;
            const blockquoteMatch = newText.match(twitterBlockquotePattern);
            if (blockquoteMatch) {
              newText = newText.replace(blockquoteMatch[0], ''); // Remove the blockquote from the text
            }
          } else if (key === 'facebook') {
            const modifiedIframe = match.replace(
              '<iframe',
              '<iframe class="embedded-facebook" width="300"'
            );
            newText = newText.replace(match, modifiedIframe);
          } else {
            newText = newText.replace(match, ''); // Remove the link from the text
          }
        });
      }
    }

    return { newText, embeds };
  };

  let processedBody = "";
  let cleanedBody = "";
  let embeds = {};

  if (event) {
    processedBody = processEventBody(event.body);
    ({ newText: cleanedBody, embeds } = extractAndEmbedLinks(processedBody));
  }

  return (
    <>
      {event ? (
        <div className="single-event">
          <section className="event">
            <Container>
              <Row className="flex-row-reverse g-5">
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

          <div className="event-showcase" data-aos="fade-left">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item breadcrumb-history"><Link to={"/"}>Home</Link></li>
              <li className="breadcrumb-item breadcrumb-history"><Link to={"/event"}>Event</Link></li>
              <li className="breadcrumb-item active" aria-current="page" style={{ color:"#FCBA33" }}>{event.title}</li>
            </ol>
            <div>
              <Col className="mb-3">
                <h1 className="display-5 fw-bold text-center mt-5">Special Event <br/>
                  <span style={{ color:"#F49C27" }} className="">{event.title} </span>
                </h1>
              </Col>
              <div className="container col-xxl-8 " style={{ height: 991 }}>
                <div className="row flex-lg-row align-items-center g-5 py-5">
                  <p className="lead fw-lighter" dangerouslySetInnerHTML={{ __html: cleanedBody }}></p>
                  <div className="social-media-embed">
                    {embeds.facebook && <FacebookEmbed url={embeds.facebook} className="embedded-link" />}
                    {embeds.instagram && <InstagramEmbed url={embeds.instagram} className="embedded-link" />}
                    {embeds.linkedin && <LinkedInEmbed url={embeds.linkedin} className="embedded-link" />}
                    {embeds.pinterest && <PinterestEmbed url={embeds.pinterest} className="embedded-link" />}
                    {embeds.tiktok && <TikTokEmbed url={embeds.tiktok} className="embedded-link" />}
                    {embeds.twitter && <TwitterEmbed url={embeds.twitter} className="embedded-link" />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Container fluid className="my-5 py-5">
          <NotFoundPage />
        </Container>
      )}
    </>
  );
}

export default EventSinglePage;
