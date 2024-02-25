"use client"

import React from 'react'

const OurReviews = () => {
  return (
    <div className='main w-[100%] h-[100vh] p-[80px]'>
      <div className='top flex gap-[90px] flex-row justify-start items-start'>
        <div className='text-[#175BFF] text-[18px] font-semibold'>
          Our Reviews
        </div>
        <h1 className='font-semibold text-[28px] max-w-[300px] text-[#232323]'>Feedback from our favorite customers</h1>
      </div>
      {/* <div>
      <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </div> */}
      </div>
  )
}

export default OurReviews