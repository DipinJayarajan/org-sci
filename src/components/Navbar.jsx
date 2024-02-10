import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='bg-black flex justify-around  items-center p-5'>
        <div className='Logoright'>
            <Image 
            src="/Logo.svg"
            alt='logo'
            width={146}
            height={40}
            />
        </div>
        <div className='routesMiddle text-white flex gap-[75px] '>
            <div>
                Home
            </div>
            <div>
                Our Principles
            </div>
            <div>
                Impurities & Standards
            </div>
            <div>
                About Us
            </div>
        </div>
        <div className='LEFT flex gap-5'>
            <div className='search'>
                <input type='text' placeholder='search' className='w-[243px] h-[40px] rounded-lg placeholder:pl-4 text-[16px] placeholder:text-[16px]' />
            </div>
            <div className='button'>
                <button className='bg-blue-50 font-sans px-[20px] py-[10px] text-[13px] rounded-md'>
                    Contact Us
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar