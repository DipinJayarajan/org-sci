"use client"

import React, { useState } from 'react'
import faq from '../../json/faq'
import Image from 'next/image';


const FAQAccordian = () => {

  const [ isToggle , setIsToggle ] = useState(faq.map(() => false));

  // const handleToggle = () => {
  //   setIsToggle(!isToggle)
  // }

  const handleToggle = (index) => {
    setIsToggle(prevState => {
      const newStateFaq = [...prevState];
      newStateFaq[index] = !newStateFaq[index]
      return newStateFaq;
    })
  }

  return (
    <div className='main p-[80px] h-[100vh] w-[100%]'>
      <div className='top flex gap-[90px] flex-row justify-start items-start'>
        <div className='text-[#175BFF] text-[18px] pt-1 font-semibold'>
        Recent FAQ's
        </div>
        <div className='flex flex-col w-[80%] '>
        <h1 className='font-semibold text-[28px] max-w-[300px] text-[#232323]'>Common questions from our clients</h1>
        <p className='font-semibold text-[14px] max-w-[500px] leading-[28px] text-slate-600'>
        Our team is committed to providing comprehensive responses to
your inquiries, ensuring a thorough understanding of your concerns.
        </p>
        <div className=''>
        {faq?.map((data, index) => (
          <div key={data.index} className='flex border-b-2 flex-col py-[30px]'>
            <div className='flex justify-between items-center gap-5 flex-row'>
              <p className='text-[18px] font-medium text-[#232323]'>{data.question}</p>
              
              <p onClick={() => handleToggle(index)} className='cursor-pointer'> {isToggle[index] ? <span>
                <Image
                  src="./Cross.svg"
                  alt='plus'
                  width={40}
                  height={40}
                  />
              </span> : 
              <span>
                <Image 
                
                src="./Plus.svg"
                alt='cross'
                width={40}
                height={40}
                />
              </span>
              } </p>
            </div>
            <div className=' '>
            {isToggle[index] && (
              <p className='max-w-[750px] pt-4 text-[15px] text-slate-700 font-normal'>{data.answer}</p>
            )}
            </div>
        </div>
        ))}
      </div>
        </div>
      </div>
      
    </div>
  )
}

export default FAQAccordian