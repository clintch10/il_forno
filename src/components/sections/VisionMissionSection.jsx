import React from 'react'

const VisionMissionSection = () => {
  return (
    <section className='p-20 lg:pb-30 bg-gray-50'>
      <div className='container px-0 mx-auto flex flex-col lg:flex-row 2xl:w-[1280px] pb-30'>
        <div className='order-2 lg:order-1 basis-1/3 lg:basis-2/4 flex justify-center items-center'>
          <img src="/img/mission_img.png" alt="" srcset="" className='object-contain h-auto w-[60%] lg:w-[80%] xl:w-[70%]' />
        </div>
        <div className='order-1 lg:order-2 basis-2/3 lg:basis-2/4 flex flex-col justify-center items-center lg:items-start lg:pe-0 pb-10 ps-10'>
          <h3 className='text-center lg:text-left text-[2em] lg:text-[3em] xl:text-[4em] font-bold font-cairo mb-10 text-green-900 leading-15'>Our Mission</h3>
          <p className='text-center lg:text-left text-[18px] xl:text-[20px] text-gray-700 font-cairo'>
            At Il Forno, our mission is to transport our guests to the heart of Italy through the art of authentic Italian cuisine.
          </p>
        </div>
      </div>

      <div className='container px-0 mx-auto flex flex-col lg:flex-row 2xl:w-[1280px]'>
        <div className='order-1 lg:order-2 basis-1/3 lg:basis-2/4 flex justify-center items-center'>
          <img src="/img/mission_img.png" alt="" srcset="" className='object-contain h-auto w-[60%] lg:w-[80%] xl:w-[70%]' />
        </div>
        <div className='order-2 lg:order-1 basis-2/3 lg:basis-2/4 flex flex-col justify-center items-center lg:items-start lg:pe-0 pb-10 ps-10'>
          <h3 className='text-center lg:text-left text-[2em] lg:text-[3em] xl:text-[4em] font-bold font-cairo mb-10 text-green-900 leading-15'>Our Vision</h3>
          <p className='text-center lg:text-left text-[18px] xl:text-[20px] text-gray-700 font-cairo'>
            To become the unrivaled beacon of Italian culinary excellence in the UAE.
          </p>
        </div>
      </div>

    </section>
  )
}

export default VisionMissionSection