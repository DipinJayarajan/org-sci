"use client"

import React from 'react'
import testimonials from '../json/data'
import Image from 'next/image'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurReviews = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='main w-[100%] h-[100vh] p-[80px]'>
      <div className='top flex gap-[90px] flex-row justify-start items-start'>
        <div className='text-[#175BFF] text-[18px] font-semibold'>
          Our Reviews
        </div>
        <h1 className='font-semibold text-[28px] max-w-[300px] text-[#232323]'>Feedback from our favorite customers</h1>
      </div>
      <div>
        <div className='testimonial pt-[150px]'>
      <Slider {...settings}>
          {
            testimonials?.map((data, index) => (
              <div className='test_main  gap-[120px] text-black'>
                <div className='rounded-full '>
                  <Image
                  src="./Logo.svg"
                  width={120}
                  height={120}
                  alt='profile_img'
                  className='rounded-full border w-[120px] h-[120px] border-b-2 border-black'
                  />
                </div>
                <div className='flex flex-col '>
                  <p className='text inline'>
                <span className="font-bold">{data.index.split('/')[0]}</span><span>{'/'}</span>
    <span>{data.index.split('/')[1]}</span>
                  </p>
                  <p className='max-w-[700px] text-[18px] italic font-normal leading-[38.4px] text-[#232323]'>"{data.testimonials}"</p>
                  <p className='pt-4 font-bold text-[#000] text-[23px]'>{data.name} {data.surname}</p>
                  <p className='text-[#000] text-[18px] font-normal'>{data.post} </p>
                </div>
              </div>
            ))
          }
        </Slider>
        </div>
      </div>
      </div>
  )
}

export default OurReviews