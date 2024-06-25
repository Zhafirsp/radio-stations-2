import React, { useState, useRef, useEffect } from "react";
import "../newsPage/news.css";
// import "../mainContent/Ppost/ppost.css"
import Card from "../newsPage/Card";
import { Button, Row, Col, Pagination } from "react-bootstrap";
import ads_img from '../../Assets/Img/headerb.png'
import ads_img2 from '../../Assets/Img/headera.png'
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Category = () => {
  const [posts, setPosts] = useState([]);
  const { categoryName } = useParams(); // Membaca parameter kategori dari URL
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Panggil API untuk mendapatkan data penulis dan waktu
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://adminoz.santuy.info/api/posts?page=${currentPage}&category=${categoryName.toLowerCase()}`
        ); // Mengubah kategori menjadi huruf kecil sebelum menambahkannya ke URL
        setPosts(response.data.posts.data );
        setTotalPages(response.data.posts.last_page);
      } catch (error) {
        console.error("Error fetching news data:", error);
        console.log("Response data:", error.response);
      }
    };

    fetchData();
  }, [currentPage, categoryName]);


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
     <section className="head-news">
        <div className="container my-5 d-flex justify-content-between">
          <div className="ads-topnews mx-auto">
            <img src={ads_img} width={500} alt="" className="img-fluid" />
          </div>
        </div>
      </section>

      <section className="single-page-news">
        <div className="">
          <Row className="row-news">
            <h1 className="display-5 fw-bolder">{categoryName} Category</h1>
            <Col sm={10} className="">
             {posts && posts.map((post) => (
              <>
                  <Card key={post.id} post={post}/>
                  <br />
                  </>
             ))}
              </Col>
          </Row>
          <div className="load-more text-center mb-5">
              <Pagination className="justify-content-center">{paginationItems}</Pagination>
          </div>
        </div>
      </section>
    </>

    

  );
};

export default Category;
