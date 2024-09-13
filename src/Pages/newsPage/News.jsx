import React, { useState, useRef, useEffect, useContext } from "react";
import "./news.css";
// import "../mainContent/Ppost/ppost.css"
import Card from "./Card";
import { Button, Row, Col, Pagination } from "react-bootstrap";
import ads_img from '../../Assets/Img/headerb.png'
import ads_img2 from '../../Assets/Img/headera.png'
import { Link } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../../ThemeContext";

const News = ({isHomePage = false}) => {
  const [posts, setPosts] = useState([]);
  const [displayedCategories, setDisplayedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // const [visibleItems, setVisibleItems] = useState(4); // Jumlah item yang akan ditampilkan secara awal
  const newsRef = useRef(null); // Ref untuk elemen newsmenyimpan kategori yang sudah dilihat
  const { theme } = useContext(ThemeContext); // Use context

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
      <section className="single-page-news">
        <div className="">
            <h1 className="display-5 fw-bolder my-4 home-oz" style={{ color:"#E48A0D", textDecoration:"underline" }}>Special Update</h1>
            <p className="border-bottom border-5"></p>
              {/* Display first three news items horizontally */}
          <Row className="row-news">
          {posts.slice(0, 3).map((post) => (
              <Col key={post.id} lg={4} className="rounded">
                <Card post={post} isHorizontal={true} showExcerpt={true} />
                <p className="border-exerpt my-3" style={{ color: theme === 'light' ? "#090909" : "#f6f6f6" }}></p>
              </Col>
            ))}
          </Row>

          {/* Display the rest of the news items vertically */}
          <Row className="vertical-news mt-5">
            {posts.slice(3).map((post) => (
                <Col key={post.id}  className="mb-4 rounded">
                  <Card post={post} showExcerpt={true} />
                </Col>
            ))}
          </Row>
              {/* <Col> 
                <h2 className="display-6 fw-bolder mt-5">List Category</h2>
                {displayedCategories.map((categoryName, index) => (
                    <h4 className="ms-1 "><Link key={index} to={`/category/${categoryName}`} className="news-category">{categoryName}</Link></h4>
                ))}

                <img src={ads_img2} alt="" className="mt-3"/>
              </Col> */}
          <div className="load-more text-center mt-5">
            {isHomePage ? (
              <Link to="/news">
                <button 
                variant={theme === 'light' ? "outline-dark" : "outline-light"} 
                className="button-news py-2"
                style={{ 
                  backgroundColor: theme === "light" ? "#090909" : "#f9f9f9", 
                  color: theme === "light" ? "#fff" : "#000" }}>
                  View All News
                  </button>

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
