import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Row, Col, Container,  } from "react-bootstrap"
import axios from "axios";

// Objek untuk menyimpan warna yang dihasilkan untuk setiap kategori
const categoryColors = {};

const Card = ({ post, isHorizontal, showExcerpt }) => {
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [created_at, setCreatedAt] = useState("");
  const [updated_at, setUpdated_at] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    // Panggil API untuk mendapatkan data penulis dan waktu
    const fetchData = async () => {
      try {
        // const response = await axios.get(`${process.env.NEWS_API_HOST}${id}`);
        const response = await axios.get(`https://adminoz.santuy.info/api/posts/${post.id}`);
        const postData = response.data; // Data post dari response
        setAuthor(postData.author);
        setCategory(postData.category);
        setTitle(postData.title);
        setExcerpt(postData.excerpt);
        setUpdated_at(postData.updated_at);
        setImage(postData.image);
      } catch (error) {
        console.error("Error fetching author, category and time data:", error);
      }
    };

    fetchData();
  }, [post.id]);

  // const partialDesc = desc.substring(0,100)  // Mengambil 100 karakter pertama dari deskripsi
  // const partialDesc = desc.split('.').slice(0, 5).join('.') + '.';

  // // Fungsi untuk menghasilkan warna secara acak
  // const getRandomColor = () => {
  //   return '#' + Math.floor(Math.random()*16777215).toString(16);
  // }

  //  // Fungsi untuk mendapatkan warna kategori
  //  const getCategoryColor = (category) => {
  //   // Jika warna untuk kategori sudah ada, kembalikan warna yang sudah ada
  //   if (categoryColors[post.category.id]) {
  //     return categoryColors[post.category.id];
  //   }
  //   // Jika warna untuk kategori belum ada, hasilkan warna baru, simpan, dan kembalikan
  //   const newColor = getRandomColor();
  //   categoryColors[post.category.id] = newColor;
  //   return newColor;
  // }

  // // Mendapatkan warna untuk kategori
  // const categoryColor = getCategoryColor(category);

    // Fungsi untuk mengubah format tanggal
    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "short", day: "numeric" };
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", options);
    }
  
    // Mengubah format tanggal updated_at
    const formattedUpdatedAt = formatDate(post.updated_at);

    const getImageUrl = (imageUrl) => {
      if (!imageUrl) return ""; // Tambahkan pengecekan kondisi agar tidak memanggil replace pada nilai null
      
      const baseUrl = 'https://adminoz.santuy.info/';
      // Cek apakah URL mengandung 'public', jika iya, ganti dengan 'storage', jika tidak, tambahkan base URL
      if (imageUrl.includes('public')) {
        return baseUrl + imageUrl.replace('public', 'storage');
      } else {
        return baseUrl + imageUrl;
      }
    };

    // Fungsi untuk membatasi jumlah kata dalam teks
  const limitWords = (text, wordLimit) => {
    if (!text) return "Loading..."; // Jika teks tidak ada, kembalikan string default
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const displayTitle = isHorizontal ? limitWords(post.title, 8) : post.title; // Batasi judul jika isHorizontal

  return (
      <Container fluid>
       <div className={`news-item ${isHorizontal ? "horizontal" : "vertical"}`}>
          <div className="news-image-container">
          {post.image ? (
              <Link to={`/news/${post.id}`}>
                <img
                  src={getImageUrl(post.image)}
                  className={`img-fluid news-img ${isHorizontal ? "news-img-horizontal mx-auto d-block" : "news-img-vertical"}`}
                  alt=""
                  loading="lazy"
                />
              </Link>
            ) : (
              <Link to={`/news/${post.id}`}>
                <img
                  src={`https://source.unsplash.com/featured/?${post.category.name}`} 
                  className={`img-fluid news-img ${isHorizontal ? "news-img-horizontal  mx-auto d-block" : "news-img-vertical"}`}
                  alt=""
                  loading="lazy"
                />
              </Link>
            )}
          </div>
          <div className="text-news">
          <h3 className={`mt-3 ${isHorizontal ? "news-title-horizontal" : "news-title-vertical"}`}>
            <Link to={`/news/${post.id}`} className="news-title">{displayTitle}</Link>
            </h3>
            {showExcerpt && (
            <p className={`mt-3 ${isHorizontal ? "news-excerpt-horizontal" : "news-excerpt-vertical"}`} dangerouslySetInnerHTML={{ __html: post.excerpt }}></p>
          )}
          {!isHorizontal && (
            <Link
              className={`category py-1 px-4 category-${post.category.name.toLowerCase()}`}
              to={`/category/${post.category.name}`} 
            >
              <span className="category-text">{post.category.name}</span>
            </Link>
          )}
          </div>
      </div>
    </Container>
            
  )
}

export default Card
