import "./App.css";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import NavTop from "./Components/NavigationBar/NavbarTop";
import NavBottom from "./Components/NavigationBar/NavbarBottom";
import React, { useEffect } from "react";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import About from "./Pages/About";
import Homepages from "./Pages/home/Homepages";
import SinglePage from "./Pages/singlePages/singlePage";
import Culture from "./Components/culture/Culture"
import SinglePageSlider from "./Pages/singlePages/slider/singlePageSlider";
import InterviewPage from "./Pages/interviewPage";
import Youtube from "./Components/Youtube";
import TV from "./Pages/tvPage/TvPage";
import Video from "./Pages/tvPage/pages/Video";
import EventPages from "./Pages/eventsPage/eventPage";
import EventSinglePage from "./Pages/eventsPage/eventSinglePage/eventSinglePage";
import News from "./Pages/home/News/News";
import RadioPlayer from "./Pages/radioPage/RadioPlayer";
import PlaylistPage from "./Pages/playlistPage";
import PP_Terms from "./Pages/privacyPolicy";
import Home from "./Pages/Homepages";
import Search from "./Pages/Search";
import Comingsoon from "./Pages/Comingsoon";

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

  function useScrollEffect() {
    useEffect(() => {
      let lastScrollTop = 0;
      const navbarTop = document.querySelector('.navbar-top');
      const navbarBottom = document.querySelector('.navbar-bottom');
      const searchButton2 = document.querySelector('.search__icon2');
      const logoButton = document.querySelector('.logo_bottom');
  
      if (navbarTop && navbarBottom && searchButton2 && logoButton) {
        searchButton2.classList.remove('showsearch');
        logoButton.classList.remove('showlogo');
  
        window.addEventListener('scroll', function () {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const windowHeight = window.innerHeight;
  
          if (scrollTop > lastScrollTop && scrollTop > windowHeight / 10) {
            navbarTop.style.top = "-90px";
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
        });
      }
    }, []);
  }
  
  function App() {
    useScrollEffect();
  return (
    <>
    <div className="App">
    <div className="navbar-container"></div>
    <Routes>
      
        <Route path="/" element={<LayoutWithoutFooter><Comingsoon /></LayoutWithoutFooter>} />
        {/* <Route path="/" element={<LayoutWithFooter><Home /></LayoutWithFooter>} />
        <Route path="/about" element={<LayoutWithFooter><About /></LayoutWithFooter>} />
        <Route path="/search" element={<LayoutWithFooter><Search /></LayoutWithFooter>} />
        <Route path="/radio" element={<LayoutWithFooter><RadioPlayer /></LayoutWithFooter>} />
        <Route path="/contact" element={<LayoutWithFooter><Contact /></LayoutWithFooter>} />
        <Route path="/event" element={<LayoutWithFooter><EventPages /></LayoutWithFooter>} />
        <Route path="/single-event" element={<LayoutWithFooter><EventSinglePage /></LayoutWithFooter>} />
        <Route path="/interview" element={<LayoutWithFooter><InterviewPage /></LayoutWithFooter>} />
        <Route exact path='/singlepage/:id' element={<LayoutWithFooter><SinglePage/></LayoutWithFooter>} />
        <Route path="/youtube" element={<LayoutWithFooter><TV /></LayoutWithFooter>} />
        <Route path="/news" element={<LayoutWithFooter><News /></LayoutWithFooter>} />
        <Route path="/playlist" element={<LayoutWithFooter><PlaylistPage /></LayoutWithFooter>} />
        <Route exact path='/culture' component={Culture} />
        <Route path="/video/test" element={<LayoutWithFooter><Video /></LayoutWithFooter>} />
        <Route path="/pp_terms" element={<LayoutWithFooter><PP_Terms /></LayoutWithFooter>} /> */}
        <Route
            path="/comingsoon"
            element={
              <LayoutWithoutFooter>
                <Comingsoon />
              </LayoutWithoutFooter>
            }
          />
      </Routes>
    </div>
    </>
  );
}

export default App;
