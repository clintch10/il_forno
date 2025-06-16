import React from 'react'

const VisionMissionSection = () => {
  return (
    <>

      {/* <section className='p-20 lg:pb-30 bg-gray-50'>
        <div className='container px-0 mx-auto 2xl:w-[1280px]'>
          <div className='flex flex-col'>
            <div className='order-2 lg:order-1 basis-1/3 lg:basis-2/4 flex justify-center items-center'>
              <img src="/img/mission_img.png" alt="" srcset="" className='object-contain h-auto w-[60%] lg:w-[80%] xl:w-[70%]' />
            </div>
            <div className='order-1 lg:order-2 basis-2/3 lg:basis-2/4 flex flex-col justify-center items-center lg:items-start lg:px-0 pb-10 px-10'>
              <h3 className='text-center lg:text-left text-[2em] lg:text-[3em] xl:text-[4em] font-bold font-cairo mb-10 text-green-900 leading-15'>Our Mission</h3>
              <p className='text-center lg:text-left text-[18px] xl:text-[20px] text-gray-700 font-cairo'>
                At Il Forno, our mission is to transport our guests to the heart of Italy through the art of authentic Italian cuisine.
              </p>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='order-2 lg:order-2 basis-1/3 lg:basis-2/4 flex justify-center items-center'>
              <img src="/img/vision_img.png" alt="" srcset="" className='object-contain h-auto w-[80%] lg:w-[100%] mask-x-from-70% mask-x-to-100% mask-y-from-70% mask-y-to-100%' />
            </div>
            <div className='order-1 lg:order-1 basis-2/3 lg:basis-2/4 flex flex-col justify-center items-center lg:items-start lg:pe-20 pb-10'>
              <h3 className='text-center lg:text-left text-[2em] lg:text-[3em] xl:text-[4em] font-bold font-cairo mb-10 text-green-900 leading-15'>Our Vision</h3>
              <p className='text-center lg:text-left text-[18px] xl:text-[20px] text-gray-700 font-cairo'>
                To become the unrivaled beacon of Italian culinary excellence in the UAE.
              </p>
            </div>
          </div>

        </div>
      </section> */}

      <section className='py-20 pb-10 bg-gray-50'>
        <h1 className='text-center font-cairo font-bold text-[32px] lg:text-[40px] 2xl:text-[50px] text-green-800 mb-5'>Crafted with love, served with <span className='text-red-800'>soul</span></h1>
        <h5 className='mx-auto w-[80%] lg:w-[70%] 2xl:w-[50%] text-center font-cairo text-[16px] 2xl:text-[18px] text-gray-600 mb-20'>We exist to bring the heart of Italy to every table—serving soulful cuisine, fostering genuine connection, and becoming a timeless gathering place where stories, flavors, and people are always welcome.</h5>

        <div className='container mx-auto flex flex-wrap gap-10 items-center justify-center 2xl:w-[1440px]'>

          <div className='flex flex-col mb-20 w-[400px]'>
            <div className='flex flex-col justify-start mb-10 lg:h-[150px] 2xl:h-[230px]'>
              <h3 className='text-center uppercase text-[2.5em] lg:text-[2.8em] xl:text-[3em] font-bold font-cairo mb-5 text-green-900'>Our <span className='text-red-800'>Vision</span></h3>
              <p className='text-center text-[18px] xl:text-[20px] text-gray-600 font-cairo'>
                To become the unrivaled beacon of Italian culinary excellence in the UAE.
              </p>
            </div>
            <div className='flex justify-center items-center p-0'>
              <img src="/img/vision_img.png" alt="" srcset="" className='object-contain rounded-xl h-[250px]' />
            </div>
          </div>

          <div className='flex flex-col mb-20 w-[400px]'>
            <div className='flex flex-col justify-start mb-10 lg:h-[150px] 2xl:h-[230px]'>
              <h3 className='text-center uppercase text-[2.5em] lg:text-[2.8em] xl:text-[3em] font-bold font-cairo mb-5 text-green-900'>Our <span className='text-red-800'>Mission</span></h3>
              <p className='text-center text-[18px] xl:text-[20px] text-gray-600 font-cairo'>
                At Il Forno, our mission is to transport our guests to the heart of Italy through the art of authentic Italian cuisine.
              </p>
            </div>
            <div className='flex justify-center items-center p-0'>
              <img src="/img/mission_img.png" alt="" srcset="" className='object-contain rounded-xl h-[250px]' />
            </div>
          </div>

          <div className='flex flex-col mb-20 w-[400px]'>
            <div className='flex flex-col justify-start mb-10 lg:h-[150px] 2xl:h-[230px]'>
              <h3 className='text-center uppercase text-[2.5em] lg:text-[2.8em] xl:text-[3em] font-bold font-cairo mb-5 text-green-900'>Our <span className='text-red-800'>Values</span></h3>
              <p className='text-center text-[18px] xl:text-[20px] text-gray-600 font-cairo'>
                Our dedication to quality, tradition, and innovation sets us apart, making Il Forno the ultimate destination for Italian gastronomy in the UAE.
              </p>
            </div>
            <div className='flex justify-center items-center p-0'>
              <img src="/img/values_img.png" alt="" srcset="" className='object-contain rounded-xl h-[250px]' />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default VisionMissionSection