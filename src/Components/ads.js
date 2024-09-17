import React, { useState, useEffect } from "react";
import ColorThief from 'colorthief';
import axios from "axios";
import '../Assets/Css/ads.css';
import { Link } from "react-router-dom";

const Ads = () => {
  const [ad, setAd] = useState(null); // Ubah menjadi satu objek ad

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://adminoz.santuy.info/api/advertisement');
        const fetchedAds = response.data.data;

        // Filter iklan yang valid berdasarkan tanggal
        const validAds = fetchedAds.filter(ad => {
          const now = new Date();
          const startDate = new Date(ad.start_date);
          const endDate = new Date(ad.end_date);
          return now >= startDate && now <= endDate;
        });

        // Pilih iklan dengan start_date terdekat
        if (validAds.length > 0) {
          const closestAd = validAds.reduce((closest, currentAd) => {
            const closestDate = new Date(closest.start_date);
            const currentDate = new Date(currentAd.start_date);
            return currentDate < closestDate ? currentAd : closest;
          });

          setAd(closestAd);

          // Mengatur warna latar belakang untuk iklan yang dipilih
          // const colorThief = new ColorThief();
          // const img = new Image();
          // img.crossOrigin = 'Anonymous';
          // img.src = getImageUrl(closestAd.image);

          // img.onload = () => {
          //   const dominantColor = colorThief.getColor(img);
          //   const adElement = document.getElementById(`ad-${closestAd.id}`);
          //   if (adElement) {
          //     adElement.style.backgroundColor = `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`;
          //   }
          // };
        }
      } catch (error) {
        console.error("Error fetching advertisement data:", error);
      }
    };

    fetchData();
  }, []);

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

  // Jika tidak ada ad yang valid, tidak menampilkan apa-apa
  if (!ad) {
    return null;
  }

  return (
    <div className="head-news">
      <div className="container mb-5">
        <div id={`ad-${ad.id}`} className="ads-topnews">
          <Link href="#" rel="noopener noreferrer">
          <img src={getImageUrl(ad.image)} alt={`Advertisement ${ad.id}`} className="img-fluid d-block mx-auto"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ads;
