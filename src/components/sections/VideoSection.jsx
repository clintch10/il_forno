import React from 'react'

const VideoSection = () => {
  return (
    <section className='flex px-20 py-20 relative'>
      <img src="/img/video_bg.png" alt="" srcset="" className='h-full w-full object-cover absolute -z-10 opacity-[.1] top-0 left-0 mask-y-from-70% mask-y-to-90%' />
      <div className='mx-auto container flex flex-col items-center'>
        <div className='flex flex-col items-center mb-10 2xl:mb-15'>
          <h1 className='font-cairo text-center text-gray-800 font-extrabold text-[40px] xl:text-[50px] mb-5 uppercase'>The true <span className='text-green-800'>Italian</span> <span className='text-red-800'>taste</span> and more</h1>
          <span className='block font-cairo text-gray-600 text-[18px] md:text-[20px] text-center w-[100%] xl:w-[80%] 2xl:w-[70%]'>Gather your loved ones for a flavorful feast in a warm, welcoming space. Every meal here is a chance to create unforgettable memories!</span>
        </div>

        <video class="w-[100%] lg:w-[80%] 2xl:w-[60%]" autoplay controls>
          <source src="/clip/Best_Italian_Restaurant.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>


    </section>
  )
}

export default VideoSection