import React from "react"
import Heading from "../../../Components/common/heading/Heading"
import "./style.css"
import { discover } from "../../../Data/dummyData"

const Discover = () => {
  return (
    <>
      <section className='discover'>
        <div className='container'>
          <Heading title='Discover' />
          <div className='content'>
            {discover.map((val) => {
              return (
                <div key={val} className='box'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <h1 className='title'>{val.title}</h1>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Discover
