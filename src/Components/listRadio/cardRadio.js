import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";

const CardRadio = ({ radio }) => {

  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    // Panggil API untuk mendapatkan data penulis dan waktu
    const fetchData = async () => {
      try {
        // const response = await axios.get(`${process.env.NEWS_API_HOST}${id}`);
        const response = await axios.get(`https://adminoz.santuy.info/api/radios/${radio.id}`);
        const radioData = response.data; // Data post dari response
        setAuthor(radioData.author);
        setCategory(radioData.category);
        setTitle(radioData.title);
        setExcerpt(radioData.excerpt);
        setImage(radioData.image);
      } catch (error) {
        console.error("Error fetching author, category and time data:", error);
      }
    };

    fetchData();
  }, [radio.id]);

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

  return (
    <div className="card">
      <Link to={`/radio/${radio.id}`} className="card-link">
        <div className="card-body">
          <h5 className="card-title">{radio.name}</h5>
          <p className="card-text">{radio.description}</p>
          <p className="card-text"><small className="text-muted">{radio.frequency}</small></p>
        </div>
      </Link>
    </div>
  );
};

export default CardRadio;
