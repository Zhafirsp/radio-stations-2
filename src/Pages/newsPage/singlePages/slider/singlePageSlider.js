import React from "react"
import Slider from "react-slick"
import "./singlePageSlider.css"
import { popular } from "../../../../Data/dummyData"

// same code of popular and change some part
const SinglePageSlider = () => {
  //change
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <section className='singlePopular mx-5'>
        <div className='content'>
          <Slider {...settings}>
            {popular.map((val) => {
              return (
                <div className='items'>
                  <div className='box'>
                    <div className='images'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h1 className='title'>{val.title}</h1>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default SinglePageSlider