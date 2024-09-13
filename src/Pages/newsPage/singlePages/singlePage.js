import React, { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import "./singlePage.css"
import SinglePageSlider from "./slider/singlePageSlider"
import { Breadcrumb, Col, Container, Row } from "react-bootstrap"
import { FaEnvelope, FaFacebook, FaPinterest, FaQuoteLeft, FaTwitter } from "react-icons/fa"
import NotFoundPage from "../../NotFoundPage"
import axios from "axios"
import ads_img2 from '../../../Assets/Img/headera.png'
import Card from "../../newsPage/Card"
import ModalImage from "react-modal-image";
import { FacebookEmbed, InstagramEmbed, LinkedInEmbed, PinterestEmbed, TikTokEmbed, TwitterEmbed } from "react-social-media-embed";
import { ThemeContext } from "../../../ThemeContext"

const SinglePage = () => {
  
  const navigate = useNavigate();
  const { newsId } = useParams(); // Ambil ID post dari URL
  const [post, setPost] = useState(null); // State untuk menyimpan data post
  const [posts, setPosts] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]); // State untuk menyimpan berita terkait
  const [popularPosts, setPopularPosts] = useState([]); // State untuk menyimpan berita populer
  const [recentPosts, setRecentPosts] = useState([]); // State untuk menyimpan berita terbaru
  const [excludedNewsId, setExcludedNewsId] = useState(""); // ID berita yang akan dikecualikan
  const { theme } = useContext(ThemeContext); // Use context

  useEffect(() => {
  const fetchData = async () => {
    try {
      const categories = await axios.get(`https://adminoz.santuy.info/api/posts/`);
      setPosts(categories.data.posts.data);
      const response = await axios.get(`https://adminoz.santuy.info/api/posts/${newsId}`);
      setPost(response.data.post); // Simpan data post ke dalam state
      } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };

  fetchData();
}, [newsId]);

useEffect(() => {
  // Panggil fungsi untuk mendapatkan berita terkait, berita populer, dan berita terbaru
  if (post && posts.length > 0) {
    fetchRelatedPosts();
    fetchPopularPosts();
    fetchRecentPosts();
  }
}, [post, posts]);


  // Fungsi untuk mendapatkan berita terkait
const fetchRelatedPosts = () => {
  if (!post || !posts.length) return;
  // Mendapatkan berita terkait berdasarkan kategori atau tag
  const related = posts.filter(p => p.category === post.category && p.id !== post.id);
  setRelatedPosts(related);
};

// Fungsi untuk mendapatkan berita populer
const fetchPopularPosts = () => {
  if (!post || !posts.length) return;
  // Menampilkan berita populer berdasarkan jumlah kunjungan atau jumlah komentar
  const popular = posts.filter(p => p.id !== post.id).sort((a, b) => b.views - a.views).slice(0, 3);
  setPopularPosts(popular);
};

// Fungsi untuk mendapatkan berita terbaru
const fetchRecentPosts = () => {
  if (!post || !posts.length) return;
  // Menampilkan berita terbaru berdasarkan tanggal publikasi
  const recent = posts.filter(p => p.id !== post.id).sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)).slice(0, 3);
  setRecentPosts(recent);
};

 
  if (!post) {
    return <div>Loading...</div>; // Tampilkan pesan loading jika data post belum dimuat
  }

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

       // Fungsi untuk menavigasi ke halaman kategori dengan nama kategori yang diberikan
  const goToCategory = (categoryName) => {
    navigate(`/category/${categoryName}`);
  };

  const goToAuthor = (authorName) => {
    navigate(`/author/${encodeURIComponent(authorName)}`);
  };

         // JavaScript untuk menambahkan kelas CSS '.responsive-video' ke elemen <iframe>
      // if (post.body) {
      //   // Temukan indeks awal elemen <iframe>
      //   const iframeIndex = post.body.indexOf("<iframe");
      
      //   // Temukan indeks pertama dari atribut "class" setelah elemen <iframe>
      //   const classIndex = post.body.indexOf("class=", iframeIndex);
      
      //   // Temukan indeks pertama dari tanda kutip setelah indeks atribut "class"
      //   const quoteIndex = post.body.indexOf('"', classIndex);
      
      //   // Sisipkan kelas CSS "responsive-video" sebelum tanda kutip pertama
      //   const modifiedBody = post.body.substring(0, quoteIndex) + " responsive-video" + post.body.substring(quoteIndex);
      
      //   // Setel kembali properti post.body dengan string yang dimodifikasi
      //   post.body = modifiedBody;
      // }

      const processPostBody = (text) => {
        const processedText = text.replace(
          /(<iframe.*?src="https:\/\/www\.youtube\.com\/embed\/.*?<\/iframe>)/g,
          '<div class="singlePageIframeContainer">$1</div>'
        );
    
        return processedText;
      };
    
      const processedBody = processPostBody(post.body);
    
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
              // Modifikasi iframe Facebook
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
      
    
      const { newText: cleanedBody, embeds } = extractAndEmbedLinks(processedBody);

  return (
    <>
      {post ? (
          <Container className='singlepage'>
            <section className='mainContent details'>
            <Breadcrumb>
              <Breadcrumb.Item active 
                className="category-single-event mx-auto display-3 fw-bold" 
                style={{ color:"#FCBA33", borderBottom: `2px solid ${theme === 'dark' ? '#ffffff' : '#090909'}` }} 
                onClick={() => goToCategory(post.category.name)}> 
                <span style={{ background: `${theme === 'dark' ? '#121212' : '#ffffff'}` }}>{post.category.name}</span>
                  </Breadcrumb.Item>
              </Breadcrumb>
              <h1 className='title'>{post.title}</h1>
              <div className='author fw-light' style={{ marginTop:"-5px" }}>
                <span></span>
                {/* <img src={author.authorImg} alt='' /> */}
                <p 
                className="single-news-author fw-normal" 
                onClick={() => goToAuthor(post.author.name)}>
                  {post.author.username}
                  </p>
                <p className="ms-auto fw-normal">{formattedUpdatedAt}</p>
              </div>
              <Col lg={12} style={{ marginTop:"-20px" }}>
              {post.image ? (
                  // Jika post.image tersedia, tampilkan gambar dari getImageUrl
                  <ModalImage
                  small={getImageUrl(post.image) + "?w=1600&h=auto"} // Ukuran kecil (thumbnail)
                  large={getImageUrl(post.image)} // Ukuran besar (asli)
                  alt={post.title}
                  className="img-fluid modal-image-small"
                  hideDownload="false"
                  hideZoom="false"
                />
                ) : (
                  // Jika post.image tidak tersedia, tampilkan gambar default
                  <ModalImage
                  small={`https://source.unsplash.com/featured/?${post.category.name}` + "?w=1600&h=auto"} // Ukuran kecil (thumbnail)
                  large={`https://source.unsplash.com/featured/?${post.category.name}`} // Ukuran besar (asli)
                  alt={post.title}
                  className="img-fluid modal-image-small"
                  hideDownload="false"
                  hideZoom="false"
                />
                )}
                </Col>
                <Col lg={8} style={{ marginTop:"-30px" }}>
                <div
                  className="desctop mb-5"
                  dangerouslySetInnerHTML={{ __html: cleanedBody }}
                />
                 <div className="social-media-embed">
                  {embeds.facebook && <FacebookEmbed url={embeds.facebook} className="embedded-link" />}
                  {embeds.instagram && <InstagramEmbed url={embeds.instagram} className="embedded-link" />}
                  {embeds.linkedin && <LinkedInEmbed url={embeds.linkedin} className="embedded-link" />}
                  {embeds.pinterest && <PinterestEmbed url={embeds.pinterest} className="embedded-link" />}
                  {embeds.tiktok && <TikTokEmbed url={embeds.tiktok} className="embedded-link" />}
                  {embeds.twitter && <TwitterEmbed url={embeds.twitter} className="embedded-link" />}
                </div>
                </Col>
                
              {/* Tampilkan berita terkait */}
                {/* Render recent posts */}
                {recentPosts.length > 0 && (
                  <div className="recent-posts mb-5">
                    <h2 className="recent-post mx-auto" style={{ color:"#FCBA33", borderBottom: `2px solid ${theme === 'dark' ? '#ffffff' : '#090909'}` }} >
                      <span style={{ background: `${theme === 'dark' ? '#121212' : '#ffffff'}` }}>RECENT NEWS</span>
                      </h2>
                    <div className="card-container card-recent-post">
                      {recentPosts.map(recentPost => (
                        <Col key={recentPosts.id}>
                            <Card key={recentPost.id} post={recentPost} isHorizontal={true} />
                        </Col>
                      ))}
                    </div>
                  </div>
                )}
                {/* Render popular posts */}
                {/* {popularPosts.length > 0 && (
                  <div className="recent-posts mb-5">
                    <h2 className="recent-post mx-auto"><span>Popular Posts</span></h2>
                    <div className="card-container card-recent-post">
                      {popularPosts.map(popularPost => (
                        <div key={popularPost.id}>
                          <Card post={popularPost} />
                        </div>
                      ))}
                    </div>
                  </div>
                )} */}
              {/* Render related posts */}
                {/* {relatedPosts.length > 0 && (
                  <div className="related-posts">
                    <h2>Related Posts</h2>
                    <div className="card-container">
                      {relatedPosts.map(relatedPost => (
                        <div key={relatedPost.id} className="card-wrapper">
                          <Card post={relatedPost} />
                        </div>
                      ))}
                    </div>
                  </div>
                )} */}
              {/* <Col> 
                  <h2 className="display-6 fw-bolder">List Category</h2>
                  {posts.length > 0 && Array.from(new Set(posts.map((post) => post.category.name))).map((categoryName, index) => (
                      <h4><Link key={index} to={`/category/${categoryName}`}  className="single-news-category">{categoryName}</Link></h4>
                  ))}
                  <img src={ads_img2} alt="" className="mt-3"/>
              </Col> */}
            </section>
          </Container>
      ) : (
        <Container fluid className="my-5 py-5">
          <NotFoundPage/>
       </Container>
      )}
    </>
  )
}

export default SinglePage;
