import React, { useContext, useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../Assets/Css/list_radio.css";
import { ThemeContext } from "../../ThemeContext";
import axios from "axios";

const ListRadio = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const { theme } = useContext(ThemeContext);
  const [radioData, setRadioData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [latestCategorySlug, setLatestCategorySlug] = useState('');

  useEffect(() => {
    // Fetch radio data
    axios.get("https://adminoz.santuy.info/api/radios")
      .then(response => {
        const fetchedData = response.data.radios.data.map(item => ({
          id: item.id,
          image: item.image ? `https://adminoz.santuy.info/${item.image}` : null,
          title: item.title,
          paragraph: item.excerpt,
          categorySlug: item.category.slug,
          categoryName: item.category.name,
        }));

        // Extract unique categories from the fetched data
        const uniqueCategories = Array.from(new Set(response.data.radios.data.map(item => item.category.slug)))
          .map(slug => {
            const categoryItem = response.data.radios.data.find(item => item.category.slug === slug);
            return {
              slug: categoryItem.category.slug,
              name: categoryItem.category.name
            };
          });

        // Sort the radio data by created_at to find the latest category
        const sortedData = response.data.radios.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        const latestCategory = sortedData[0]?.category.slug || ''; // Get the latest category slug

        setRadioData(fetchedData);
        setCategories(uniqueCategories);
        setLatestCategorySlug(latestCategory);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the radio data!", error);
      });
  }, []);

  useEffect(() => {
    // Update latestCategorySlug when category parameter changes
    setLatestCategorySlug(category);
  }, [category]);

  const handleCategoryChange = (categorySlug) => {
    setLatestCategorySlug(categorySlug);
    navigate(`/radio/category/${categorySlug}`);
  };

  const getImageUrl = (imageUrl) => {
    if (!imageUrl) return ""; // Handle null or undefined imageUrl
    
    const baseUrl = 'https://adminoz.santuy.info/';
    
    // Modify the imageUrl based on your requirement
    // Example implementation (you may need to adjust it based on your imageUrl structure)
    if (imageUrl.startsWith(baseUrl)) {
      if (!imageUrl.includes('/storage/')) {
        const parts = imageUrl.split(baseUrl);
        return baseUrl + 'storage/' + parts[1];
      }
      return imageUrl;
    }
    
    return baseUrl + 'storage/' + imageUrl;
  };

  // Filter data to display based on the latestCategorySlug
  const dataToDisplay = latestCategorySlug ? radioData.filter(radio => radio.categorySlug === latestCategorySlug) : [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="list-Radio py-4" style={{ backgroundColor: theme === 'light' ? "#f6f6f6" : "#090909" }} data-aos="fade-down">
      <Container fluid>
        <h1 className="header-radio display-5 fw-bolder ms-3 pt-5">Listen to the <span style={{ color:"#F49C27" }}>OZ Radio</span></h1>
      </Container>
      <br/>
      <Row className="row">
        <Col>
          <ul className="nav category-radio d-flex fw-normal fs-3 ms-4">
            {categories.map(cat => (
              <li key={cat.slug}>
                <Link to={`/radio/category/${cat.slug}`}
                      className={`ms-2 me-5 list-category-radio ${latestCategorySlug === cat.slug ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(cat.slug)}>
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <section className="cardlist-radio">
        <div className="container-fluid">
          {dataToDisplay.map((data, index) => (
            <Row key={index} className="g-5 mb-5">
              <Col lg={3} md={12} sm={12}>
                <div className="img-container-radio">
                {data.image ? (
                  // Jika post.image tersedia, tampilkan gambar dari getImageUrl
                  <img 
                    src={getImageUrl(data.image)}
                    width={300}
                    className="img-radios d-block mx-auto img-fluid rounded-4" 
                    alt="" 
                    loading="lazy"
                  /> 
                ) : (
                  // Jika post.image tidak tersedia, tampilkan gambar default
                  <img 
                    src={`https://source.unsplash.com/featured/?${data.categoryName}`}
                    className="d-block mx-auto img-fluid rounded-4"
                    width={300}
                    height="auto" 
                    alt="" 
                    loading="lazy" 
                  />
                )}
                  <div className="listen-now d-block mx-auto rounded-bottom-4">
                    <Link to={`/radio/${data.id}`} className="listen-nows text-white">LISTEN NOW</Link>
                  </div>
                </div>
              </Col>
              <Col lg={9} md={12} sm={12}>
                <div className="text-news">
                  <Link to={`/radio/${data.id}`}><h3 className="fw-bold">{data.title}</h3></Link>
                  <p className="col-md-8" dangerouslySetInnerHTML={{ __html: data.paragraph }}></p>
                </div>
              </Col>
            </Row>
          ))}
        </div>
        <div className="mx-4">
          <iframe src="https://open.spotify.com/embed/show/6c6e9hsmeUkADqdw037ccT?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <iframe src="https://open.spotify.com/embed/show/2os8ztmszBkBYNaLUGuxJ4?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <iframe src="https://open.spotify.com/embed/show/24P703f8q8xHnqOn6MCrPO?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </section>
    </section>
  );
};

export default ListRadio;
