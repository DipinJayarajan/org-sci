import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const OurPartners = () => {
  return (
    <div>
    <div className='main  p-[80px]'>
      <div className='top flex gap-[90px] flex-row justify-start items-start'>
        <div className='text-[#175BFF] text-[18px] font-semibold'>
          Our Partners
        </div>
        <h1 className='font-semibold text-[28px] max-w-[300px] text-[#232323]'>We work with these prestige partners</h1>
      </div>
      </div>
      <div className='clientMain shadow-xl'>
        <div className='pic_container'>
          <Marquee gradient={false} pauseOnHover={true} speed={40} direction='right' >
            <div className='image_wrapper'>
              <Image 
              src="/image32.png"
              alt='logo'
              width={100}
              height={100}
              />
            </div>
            <div className='image_wrapper'>
              <Image 
              src="/image33.png"
              alt='logo'
              width={100}
              height={100}
              />
            </div>
            <div className='image_wrapper'>
              <Image 
              src="/image34.png"
              alt='logo'
              width={100}
              height={100}
              />
            </div>
            <div className='image_wrapper'>
              <Image 
              src="/image35.png"
              alt='logo'
              width={100}
              height={100}
              />
            </div>
            <div className='image_wrapper'>
              <Image 
              src="/image37.png"
              alt='logo'
              width={100}
              height={100}
              />
            </div>
            <div className='image_wrapper'>
              <Image 
              src="/image38.png"
              alt='logo'
              width={100}
              height={100}
              />
            </div>
            <div className='image_wrapper'>
              <Image 
              src="/image39.png"
              alt='logo'
              width={100}
              height={100}
              />
            </div>
            <div className='image_wrapper'>
              <Image 
              src="/image40.png"
              alt='logo'
              width={100}
              height={100}
              />
            </div>
          </Marquee>
          </div>
      </div>
      <div className='clientMain shadow-xl'>
        <div className='pic_container'>
          <Marquee className='pt-5' gradient={false} pauseOnHover={true} speed={40} direction='left' >
            <div className='image_wrapper'>
              <Image 
              src="/image32.png"
              alt='logo'
              width={100}
              height={100}
              />
            </div>
            <div className='image_wrapper'>
              <Image 
              src="/image33.png"
              alt='logo'
              width={100}
              height={100}
              />
            </div>
            <div className='image_wrapper'>
              <Image 
              src="/image34.png"
              alt='logo'
              width={100}
              height={100}
              />
            </div>
            <div className='image_wrapper'>
              <Image 
              src="/image35.png"
              alt='logo'
              width={100}
              height={100}
              />
            </div>
            <div className='image_wrapper'>
              <Image 
              src="/image37.png"
              alt='logo'
              width={100}
              height={100}
              />
            </div>
            <div className='image_wrapper'>
              <Image 
              src="/image38.png"
              alt='logo'
              width={100}
              height={100}
              />
            </div>
            <div className='image_wrapper'>
              <Image 
              src="/image39.png"
              alt='logo'
              width={100}
              height={100}
              />
            </div>
            <div className='image_wrapper'>
              <Image 
              src="/image40.png"
              alt='logo'
              width={100}
              height={100}
              />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default OurPartners