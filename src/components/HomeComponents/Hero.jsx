"use client"

import React from 'react'
import Customers from './Customer'
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='main h-[100vh] w-[100%]'>
        <div className='video'>
            <video src='./videoBg.mp4' className='w-[100%] h-screen object-cover' autoPlay loop muted  />
        </div>
        <div  className='content absolute top-0 w-[100%] h-[100%] flex '>
        <div className='grid grid-cols-2'>
        <div className='leftHero flex flex-col px-[80px] gap-[20px] mt-[120px] '>
        <h1 className='leftHero-text flex-wrap flex leading-[79px] font-semibold text-[#FFF] max-w-[600px] text-[50px]'>
        Transform Your Lab With High-Quality Chemicals
        </h1>
        <p className='leftHero-description text-[18px] leading-[35px] max-w-[600px] text-[#FAFAFA]'>
        A well determined positive approach and a steady growth rate have enabled us to expand our area of operation and gained us a wide client base.
        </p>
        <Customers />
      </div>
      <div className='rightHero'>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        navigation={true}
        modules={[Pagination,Autoplay, Navigation, EffectFade]}
        className="mySwiper shadow-2xl mt-[400px] h-[245px] text-white w-[432px] bg-[#4460F1]"
      >
        <SwiperSlide>
          <div className='pl-4'>
            <p className='text-[#FFF] font-semibold pt-4 text-[18px]'>Our Principles</p>
            <p className='text-[15px] pt-8 text-[#FFF] font-light leading-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reiciendis deserunt voluptas temporibus.heyy , apology for the delay
            </p>
            <div className='flex  mt-[20px] justify-around gap-[130px] items-center'>
              <p  className='font-semibold text-[40px] text-[#FFF]'>
                20%
              </p>
              <div className='relative rounded-sm bg-[#FFF] px-[14px] py-[17px]'>  
              <button className='  pr-6 text-black text-[13px] '>
                Let's Explore
              </button>
              <Image
              className='absolute top-6 ml-4 right-3'
              src="./redirectIcon.svg"
              alt="icon"
              width={15}
              height={15}
              />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide><div className='pl-4'>
            <p className='text-[#FFF] font-semibold pt-4 text-[18px]'>Our Principles</p>
            <p className='text-[15px] pt-8 text-[#FFF] font-light leading-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reiciendis deserunt voluptas temporibus.heyy , apology for the delay
            </p>
            <div className='flex  mt-[20px] justify-around gap-[130px] items-center'>
              <p  className='font-semibold text-[40px] text-[#FFF]'>
                20%
              </p>
              <div className='relative rounded-sm bg-[#FFF] px-[14px] py-[17px]'>  
              <button className='  pr-6 text-black text-[13px] '>
                Let's Explore
              </button>
              <Image
              className='absolute top-6 ml-4 right-3'
              src="./redirectIcon.svg"
              alt="icon"
              width={15}
              height={15}
              />
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div className='pl-4'>
            <p className='text-[#FFF] font-semibold pt-4 text-[18px]'>Our Principles</p>
            <p className='text-[15px] pt-8 text-[#FFF] font-light leading-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reiciendis deserunt voluptas temporibus.heyy , apology for the delay
            </p>
            <div className='flex  mt-[20px] justify-around gap-[130px] items-center'>
              <p  className='font-semibold text-[40px] text-[#FFF]'>
                20%
              </p>
              <div className='relative rounded-sm bg-[#FFF] px-[14px] py-[17px]'>  
              <button className='  pr-6 text-black text-[13px] '>
                Let's Explore
              </button>
              <Image
              className='absolute top-6 ml-4 right-3'
              src="./redirectIcon.svg"
              alt="icon"
              width={15}
              height={15}
              />
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div className='pl-4'>
            <p className='text-[#FFF] font-semibold pt-4 text-[18px]'>Our Principles</p>
            <p className='text-[15px] pt-8 text-[#FFF] font-light leading-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reiciendis deserunt voluptas temporibus.heyy , apology for the delay
            </p>
            <div className='flex  mt-[20px] justify-around gap-[130px] items-center'>
              <p  className='font-semibold text-[40px] text-[#FFF]'>
                20%
              </p>
              <div className='relative rounded-sm bg-[#FFF] px-[14px] py-[17px]'>  
              <button className='  pr-6 text-black text-[13px] '>
                Let's Explore
              </button>
              <Image
              className='absolute top-6 ml-4 right-3'
              src="./redirectIcon.svg"
              alt="icon"
              width={15}
              height={15}
              />
              </div>
            </div>
          </div></SwiperSlide>

      </Swiper>
      </div>
          </div>
        </div>
    </div>
  )
}

export default Hero