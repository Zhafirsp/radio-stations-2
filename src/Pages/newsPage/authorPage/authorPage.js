import React, { useState, useRef, useEffect, useContext } from "react";
import "../categoryPage/categoryPage.css";
// import "../mainContent/Ppost/ppost.css"
import Card from "../Card";
import { Button, Row, Col, Pagination } from "react-bootstrap";
import ads_img from '../../../Assets/Img/headerb.png'
import ads_img2 from '../../../Assets/Img/headera.png'
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../../../ThemeContext"

const Author = () => {
  const [posts, setPosts] = useState([]);
  const { authorName } = useParams(); // Membaca parameter kategori dari URL
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);  
  const { theme } = useContext(ThemeContext); // Use context

  useEffect(() => {
    // Panggil API untuk mendapatkan data penulis dan waktu
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://adminoz.santuy.info/api/posts?page=${currentPage}&authorName=${encodeURIComponent(authorName)}`
        );
        setPosts(response.data.posts.data );
        setTotalPages(response.data.posts.last_page);
      } catch (error) {
        console.error("Error fetching news data:", error);
        console.log("Response data:", error.response);
      }
    };

    fetchData();
  }, [currentPage, authorName]);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginationItems = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationItems.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <>
     {/* <section className="head-news">
        <div className="container my-5 d-flex justify-content-between">
          <div className="ads-topnews mx-auto">
            <img src={ads_img} width={500} alt="" className="img-fluid" />
          </div>
        </div>
      </section> */}

      <section className="single-page-news">
        <div className="">
          <Row className="row-news">
            <h1 
            className="category-single-event mx-auto display-3 fw-bold"  
            style={{ color:"#FCBA33", borderBottom: `2px solid ${theme === 'dark' ? '#ffffff' : '#090909'}` }} >
              <span style={{ background: `${theme === 'dark' ? '#121212' : '#ffffff'}` }}>{authorName}</span>
                </h1>
            <Row className="vertical-news mt-5">
            {posts.map((post) => (
                <Col key={post.id}  className="mb-4 rounded">
                  <Card post={post} showExcerpt={true} />
                </Col>
            ))}
          </Row>
          </Row>
          <div className="load-more text-center mb-5">
              <Pagination className="justify-content-center">{paginationItems}</Pagination>
          </div>
        </div>
      </section>
    </>

    

  );
};

export default Author;
