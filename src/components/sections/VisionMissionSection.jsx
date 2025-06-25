import React from 'react'

const VisionMissionSection = () => {
  return (
    <>
      <section className='py-20 pb-10 relative'>
        <img src="/img/vissionmission_bg.jpg" alt="" srcset="" className='h-full w-full object-cover absolute -z-10 opacity-[.1] top-0 left-0 mask-y-from-70% mask-y-to-90%' />
        <h2 className='section-header'>Crafted with <span className="text-red-800">love</span>, served with <span className='text-green-800'>soul</span></h2>
        <h5 className='mx-auto w-[80%] lg:w-[70%] 2xl:w-[50%] text-center font-cairo text-[16px] 2xl:text-[18px] text-gray-600 mb-30'>We exist to bring the heart of Italy to every table—serving soulful cuisine, fostering genuine connection, and becoming a timeless gathering place where stories, flavors, and people are always welcome.</h5>

        <div className='container mx-auto flex flex-wrap gap-20 items-center justify-center 2xl:w-[1380px]'>

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