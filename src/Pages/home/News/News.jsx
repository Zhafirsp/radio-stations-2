import React, { useState, useRef, useEffect } from "react";
import "./news.css";
import "../mainContent/Ppost/ppost.css"
import Card from "./Card";
import { hero, popular } from "../../../Data/dummyData";
import { Button, Row, Col } from "react-bootstrap";

const News = () => {
  const [items, setItems] = useState(hero);
  const [items2, setItems2] = useState(popular);
  const [visibleItems, setVisibleItems] = useState(4); // Jumlah item yang akan ditampilkan secara awal
  const newsRef = useRef(null); // Ref untuk elemen news

  const loadMore = () => {
    setVisibleItems((prevValue) => prevValue + 4); // Menambah 4 item setiap kali tombol "Load More" diklik
    if (newsRef.current) {
      newsRef.current.classList.add("newly-added");
    }
  };


  return (
    <>
      <section className="news">
        <div className="container my-5">
          {items.slice(0, visibleItems).map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </section>
        <div className="container my-5 loaded-item">
          <Row>
          <h1 className="display-5 fw-bold text-center">
              Popular News from <span style={{ color:"#F49C27" }} className="home-oz">OZ Radio </span>
            </h1>
            {items2.slice(0, visibleItems).map((items2) => (
              <Col lg={6} className="news-load">
                <Card key={items2.id} item={items2} />
              </Col>
            ))}
          </Row>
        </div>
          <div className="load-more text-center">
            <Button variant="outline-dark" className="" onClick={loadMore}>Load More</Button>
          </div>
    </>
  );
};

export default News;
