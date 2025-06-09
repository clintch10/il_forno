import React from 'react'

const HeroSection = () => {
  return (
    <section className='flex relative'>
      <img src="/img/hero_bg.jpg" alt="" srcset="" className='h-full w-full object-cover absolute -z-10 opacity-[.1]'/>
      <div className='mx-auto pt-40 pb-20 px-20 lg:ps-15 lg:pe-0 xl:pe-0 2xl:pe-0 lg:pt-20 lg:pb-0 xl:ps-20 flex flex-col lg:flex-row'>
        <div className='flex flex-col justify-center items-center lg:items-start lg:p-[5%]'>
          <span className='flex flex-row items-center font-cairo text-[14px] font-bold uppercase text-gray-600'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 me-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
          </svg>
            Best Italian Restaurant in UAE!
          </span>

          <h1 className='text-center lg:text-left font-cairo text-[45px] md:text-[50px] lg:text-[40px] xl:text-[50px] 2xl:text-[80px] font-bold text-gray-800 leading-15 2xl:leading-25'>Handcrafted <span className='text-green-800'>Italian</span>,  <br />Straight from the <span className='text-red-700'>Heart</span>.</h1>
          <h3 className='text-[20px] font-cairo text-gray-600 mb-15 text-center lg:text-left'>More than a meal—an experience to savor. Every dish tells a story, crafted with passion and shared with warmth.</h3>

          <button type="button" class="btn-default">Order Now</button>
        </div>
        <div className='flex justify-end'>
          <img src="/img/hero_img.png" alt="" srcset="" className='hidden lg:block xl:max-h-210 ' />
        </div>
      </div>
    </section>
  )
}

export default HeroSection