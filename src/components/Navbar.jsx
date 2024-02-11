import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex bg-transparent justify-around  items-center p-5'>
        <div className='Logoright'>
            <Image 
            src="/Logo.svg"
            alt='logo'
            width={146}
            height={40}
            />
        </div>
        <div className='routesMiddle text-white flex gap-[75px] '>
            <div className='underline decoration-2 underline-offset-8 decoration-blue-600'>
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
            <div className='search relative'>
                <input type='text' placeholder='Search Impurities...' className='w-[243px] h-[40px] rounded-3xl bg-transparent tracking-wide font-light pl-5 border text-[14px] placeholder:text-[#FFF] text-[#FFF] placeholder:text-[14px] focus:outline-none focus-visible:outline-none' />
                <Image 
                src="./Search.svg"
                alt='searchIcon'
                width={16}
                height={16}
                className='absolute top-3 right-4 text-slate-600 '
                />
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