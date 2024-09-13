import "./App.css";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import NavTop from "./Components/NavigationBar/NavbarTop";
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./Pages/About";
import SinglePage from "./Pages/newsPage/singlePages/singlePage";
import InterviewPage from "./Pages/interviewPage";
import EventPages from "./Pages/eventsPage/eventPage";
import EventSinglePage from "./Pages/eventsPage/eventSinglePage/eventSinglePage";
import News from "./Pages/newsPage/News";
import RadioPlayer from "./Pages/radioPage/RadioPlayer";
import PlaylistPage from "./Pages/playlistPage";
import PP_Terms from "./Pages/privacyPolicy";
import Home from "./Pages/Homepages";
import Search from "./Pages/Search";
import Comingsoon from "./Pages/Comingsoon";
import NotFoundPage from "./Pages/NotFoundPage";
import Unauthorized from "./Components/Unauthorized";
import Category from "./Pages/newsPage/categoryPage/categoryPage";
import Author from "./Pages/newsPage/authorPage/authorPage";
import ListRadio from "./Components/listRadio/listRadio";
import SinglePageRadio from "./Pages/radioPage/SinglePageRadio/SinglePageRadio";
import OZTV from "./Pages/tvPage/OztvPage";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import Advertising from "./Pages/adsPage/advertising";

function ScrollTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

const LayoutWithFooter = ({ children }) => (
  <>
    <ScrollTop />
    <div className="navbar-container">
      <NavTop />
    </div>
    {children}
    <Footer />
  </>
);

const LayoutWithoutFooter = ({ children }) => <>{children}</>;

function useScrollEffect(isLoading) {
  useEffect(() => {
    if (isLoading) return;

    let lastScrollTop = 0;
    const navbarTop = document.querySelector('.navbar-top');
    const navbarBottom = document.querySelector('.navbar-bottom');
    const searchButton2 = document.querySelector('.search__icon2');
    const logoButton = document.querySelector('.logo_bottom');

    if (navbarTop && navbarBottom && searchButton2 && logoButton) {
      searchButton2.classList.remove('showsearch');
      logoButton.classList.remove('showlogo');

      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;

        if (scrollTop > lastScrollTop && scrollTop > windowHeight / 10) {
          navbarTop.style.top = "-110px";
          navbarBottom.style.top = "-140px";
          searchButton2.classList.add("showsearch");
          logoButton.classList.add("showlogo");
        } else {
          navbarTop.style.top = "0";
          navbarBottom.style.top = "0";
          searchButton2.classList.remove("showsearch");
          logoButton.classList.remove("showlogo");
        }
        lastScrollTop = scrollTop;
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isLoading]);
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulasi pemuatan data, misalnya 3 detik
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.documentElement.classList.add("no-scroll");
      document.body.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
    }
  }, [isLoading]);

  useScrollEffect(isLoading);

  
  useEffect(() => {
    if (location.pathname === "*") {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [location.pathname]);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
        <ScrollToTop smooth className="scroll_to_top" />
        <Routes>
          <Route path="/" element={<LayoutWithFooter><Home /></LayoutWithFooter>} />
          <Route path="/about" element={<LayoutWithFooter><About /></LayoutWithFooter>} />
          <Route path="/search" element={<LayoutWithFooter><Search /></LayoutWithFooter>} />
          <Route path="/radio" element={<LayoutWithFooter><RadioPlayer /></LayoutWithFooter>} />
          <Route path="/contact" element={<LayoutWithFooter><Contact /></LayoutWithFooter>} />
          <Route path="/event" element={<LayoutWithFooter><EventPages /></LayoutWithFooter>} />
          <Route path="/event/:eventId" element={<LayoutWithFooter><EventSinglePage /></LayoutWithFooter>} />
          <Route path="/interview" element={<LayoutWithFooter><InterviewPage /></LayoutWithFooter>} />
          <Route path="/news/:newsId" element={<LayoutWithFooter><SinglePage /></LayoutWithFooter>} />
          <Route path="/oztv" element={<LayoutWithFooter><OZTV /></LayoutWithFooter>} />
          <Route path="/news" element={<LayoutWithFooter><News /></LayoutWithFooter>} />
          <Route path="/playlist" element={<LayoutWithFooter><PlaylistPage /></LayoutWithFooter>} />
          <Route path="/pp_terms" element={<LayoutWithFooter><PP_Terms /></LayoutWithFooter>} />
          <Route path="/category/:categoryName" element={<LayoutWithFooter><Category /></LayoutWithFooter>} />
          <Route path="/Author/:authorName" element={<LayoutWithFooter><Author /></LayoutWithFooter>} />
          <Route path="/radio/category/:category" element={<LayoutWithFooter><ListRadio /></LayoutWithFooter>} />
          <Route path="/radio/:id" element={<LayoutWithFooter><SinglePageRadio /></LayoutWithFooter>} />
          <Route path="/ads" element={<LayoutWithFooter><Advertising /></LayoutWithFooter>} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="/comingsoon" element={<LayoutWithoutFooter><Comingsoon /></LayoutWithoutFooter>} />
        </Routes>
        </>
      )}
    </div>
  );
}

export default App;
