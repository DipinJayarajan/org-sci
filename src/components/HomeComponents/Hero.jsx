import React from 'react'
import Customers from './Customer'

const Hero = () => {
  return (
    <div className='main h-[100vh] w-[100%]'>
        <div className='video'>
            <video src='./videoBg.mp4' className='w-[100%] h-screen object-cover' autoPlay loop muted  />
        </div>
        <div  className='content absolute top-0 w-[100%] h-[100%] flex '>
        <div className='leftHero'>
        <h1 className='leftHero-text'>
        Transform Your Lab With High-Quality Chemicals
        </h1>
        <p className='leftHero-description'>
        A well determined positive approach and a steady growth rate have enabled us to expand our area of operation and gained us a wide client base.
        </p>


        <Customers />


      </div>
        </div>
    </div>
  )
}

export default Hero