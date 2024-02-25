"use client"

// import Button from '@/Atoms/Button'
import Image from 'next/image'
import React from 'react'
import Button from '../../Atoms/Button'

const AboutUs = () => {
  return (
    <div className='main p-[80px] h-[100vh] w-[100%]'>
      <div className='sec-1 grid grid-cols-2'>
        <div className='flex flex-row '>
        <div className='title w-1/2 text-[#175BFF] text-[18px] font-semibold'>
          About Us
        </div>
        <div className='desc flex flex-col gap-8'>
          <h1 className='font-semibold text-[30px] text-[#232323]'>Elevate your lab with premium chemicals</h1>
          <p>Our strong determination and positive mindset have paved the way for our remarkable expansion and steady growth.</p>
          <div>
          <Button  style={{ backgroundColor: '#4460F1', color: 'white', fontSize:"13px", borderRadius:"4px" ,color: "white", fontWeight:"500", padding: "20px 35px 20px 35px", width:"30%", cursor: "pointer"  }}>
             Know More
          </Button>
          </div>
        </div>
        </div>
        <div>
          <Image 
          src="./Building.svg"
          alt='building'
          width={619}
          height={337}
          />
        </div>
      </div>
      <div className='sec-2'>
        <div className='relative'>
        <div className='absolute top-3 right-[15%] font-bold text-[120px] text-[#175BFF]/25'>
          <h1>Why Choose Us</h1>
        </div>
        </div>
        <div className='flex flex-wrap pt-[100px] justify-between items-center'>
        <div className='flex flex-col gap-2'>
          <p className='text-[30px] font-semibold text-[#232323]'>01</p>
          <p className='text-[18px] max-w-[250px] font-normal text-[#232323]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-[30px] font-semibold text-[#232323]'>01</p>
          <p className='text-[18px] max-w-[250px] font-normal text-[#232323]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-[30px] font-semibold text-[#232323]'>01</p>
          <p className='text-[18x] max-w-[250px] font-normal text-[#232323]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-[30px] font-semibold text-[#232323]'>01</p>
          <p className='text-[18px] max-w-[250px] font-normal text-[#232323]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs