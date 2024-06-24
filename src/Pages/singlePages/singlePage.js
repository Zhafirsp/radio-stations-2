import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Side from "../home/sideContent/side/Side"
import "../home/mainContent/homes/style.css"
import "./singlePage.css"
import "../home/sideContent/side/side.css"
import SinglePageSlider from "./slider/singlePageSlider"
import { hero } from "../../Data/dummyData"
import { Container } from "react-bootstrap"
import { FaEnvelope, FaFacebook, FaPinterest, FaQuoteLeft, FaTwitter } from "react-icons/fa"

const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    const item = hero.find((item) => item.id === parseInt(id))
    window.scrollTo(0, 0)
    if (item) {
      setItem(item)
    }
  }, [id])

  return (
    <>
      {item ? (
        <Container Fluid>
        <SinglePageSlider />
          <div className='container'>
            <section className='mainContent details'>
              <h1 className='title'>{item.title}</h1>

              <div className='author'>
                <span>by</span>
                <img src={item.authorImg} alt='' />
                <p> {item.authorName} on</p>
                <label>{item.time}</label>
              </div>

              <div className='social'>
                <div className='socBox'>
                  <FaFacebook className="fab fa-facebook-f" />
                  <span>SHARE</span>
                </div>
                <div className='socBox'>
                  <FaTwitter className="fab fa-twitter" />
                  <span>TWITTER</span>
                </div>
                <div className='socBox'>
                  <FaPinterest className="fab fa-pinterest" />
                  <span>PINTEREST</span>
                </div>
                <div className='socBox'>
                  <FaEnvelope className="fab fa-envelope" />
                  <span>EMAIL</span>
                </div>
              </div>

              <div className='desctop'>
                {item.desc.map((val) => {
                  return (
                    <>
                      <p>{val.para1}</p>
                      <p>{val.para2}</p>
                    </>
                  )
                })}
              </div>
              <img src={item.cover} alt='' />
              {item.desc.map((val) => (
                <p>{val.para3}</p>
              ))}

              <div className='descbot'>
                {item.details.map((data) => {
                  return (
                    <>
                      <h1>{data.title}</h1>
                      <p>{data.para1}</p>
                    </>
                  )
                })}
              </div>

              <div className='quote'>
                <FaQuoteLeft className="fa fa-quote-left"/>
                {item.details.map((data) => (
                  <p>{data.quote}</p>
                ))}
              </div>

              <div className='desctop'>
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para2}</p>
                      <p>{data.para3}</p>
                    </>
                  )
                })}
              </div>
            </section>
            {/* <section className='sideContent'>
              <Side />
            </section> */}
          </div>
        </Container>
      ) : (
        <h1>not found</h1>
      )}
    </>
  )
}

export default SinglePage