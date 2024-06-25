import React, { useState, useRef, useEffect } from "react";
import "./news.css";
// import "../mainContent/Ppost/ppost.css"
import Card from "./Card";
import { Button, Row, Col, Pagination } from "react-bootstrap";
import ads_img from '../../Assets/Img/headerb.png'
import ads_img2 from '../../Assets/Img/headera.png'
import { Link } from "react-router-dom";
import axios from "axios";

const News = ({isHomePage = false}) => {
  const [posts, setPosts] = useState([]);
  const [displayedCategories, setDisplayedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // const [visibleItems, setVisibleItems] = useState(4); // Jumlah item yang akan ditampilkan secara awal
  const newsRef = useRef(null); // Ref untuk elemen newsmenyimpan kategori yang sudah dilihat

  useEffect(() => {
    // Panggil API untuk mendapatkan data penulis dan waktu
    const fetchData = async () => {
      try {
        // const response = await axios.get(`${process.env.NEWS_API_HOST}`);
        const response = await axios.get(`https://adminoz.santuy.info/api/posts?page=${currentPage}`);
        setPosts(response.data.posts.data );
        setTotalPages(response.data.posts.last_page);
      } catch (error) {
        console.error("Error fetching news data:", error);
        console.log("Response data:", error.response);
      }
    };

    fetchData();
  }, [currentPage]);

  // Memperbarui daftar kategori yang ditampilkan saat posting diubah
useEffect(() => {
  if (posts.length > 0) {
    const newCategories = posts.map((post) => post.category.name);
    setDisplayedCategories((prevCategories) => {
      return [...new Set([...prevCategories, ...newCategories])];
    });
  }
}, [posts]);

  // const loadMore = () => {
  //   setVisibleItems((prevValue) => prevValue + 4); // Menambah 4 item setiap kali tombol "Load More" diklik
  //   if (newsRef.current) {
  //     newsRef.current.classList.add("newly-added");
  //   }
  // };

  // const totalItems = posts ? posts.length : 0;

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
            <h1 className="display-5 fw-bolder mb-5">Catch Up On The News</h1>
            <Col sm={10} className="">
             {posts && posts.map((post) => (
              <>
                  <Card key={post.id} post={post}/>
                  <br />
                  </>
             ))}
              </Col>
              <Col> 
                <h2 className="display-6 fw-bolder">List Category</h2>
                 {/* Mapping categories from posts */}
                 {/* {posts.length > 0 && Array.from(new Set(posts.map((post) => post.category.name))).map((categoryName, index) => (
                  <Link key={index} to={`/category/${categoryName}`}>
                    <h4 className="ms-1">{categoryName}</h4>
                  </Link>
                ))} */}
                {displayedCategories.map((categoryName, index) => (
                    <h4 className="ms-1 "><Link key={index} to={`/category/${categoryName}`} className="news-category">{categoryName}</Link></h4>
                ))}

                <img src={ads_img2} alt="" className="mt-3"/>
              </Col>
          </Row>
          <div className="load-more text-center mt-5">
            {isHomePage ? (
              <Link to="/news">
                <Button variant="outline-dark" className="rounded-pill py-2">
                  View All news
                </Button>
              </Link>
            ) : (
              // totalItems > visibleItems && (
              // <Button variant="outline-dark"  className="rounded-pill py-2" onClick={loadMore}>
              //   Load More
              // </Button>
              // )
              <Pagination className="justify-content-center">{paginationItems}</Pagination>
            )}
          </div>
        </div>
      </section>
    </>

    

  );
};

export default News;
