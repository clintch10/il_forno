import React from 'react'

const VisionMissionSection = () => {
  return (
    <>
      <section className='py-20 pb-30 relative'>
        <img src="/img/vissionmission_bg.jpg" alt="" srcset="" className='h-full w-full object-cover absolute -z-10 opacity-[.1] top-0 left-0 mask-y-from-70% mask-y-to-90%' />
        <div className='w-[80%] xl:w-[100%] mx-auto'>
          <h2 className='section-header'>Crafted with <span className="text-red-800">love</span>, served with <span className='text-green-800'>soul</span></h2>
          <h5 className='mx-auto w-[80%] lg:w-[70%] 2xl:w-[50%] text-center font-cairo text-[16px] 2xl:text-[18px] text-gray-600 mb-20'>We exist to bring the heart of Italy to every table—serving soulful cuisine, fostering genuine connection, and becoming a timeless gathering place where stories, flavors, and people are always welcome.</h5>
        </div>


        <div className='container mx-auto flex flex-wrap gap-20 items-center justify-center 2xl:w-[1380px]'>

          <div className='flex flex-col mb-10 w-[400px]'>
            <div className='flex flex-col justify-start items-center mb-10 lg:h-[150px] 2xl:h-[280px]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 576 512" className='text-green-700 mb-5'><path fill="currentColor" d="M288 144a110.94 110.94 0 0 0-31.24 5a55.4 55.4 0 0 1 7.24 27a56 56 0 0 1-56 56a55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"/></svg>
              <h3 className='text-center uppercase text-[2em] lg:text-[2.5em] font-bold font-cairo mb-5 text-green-900'>Our <span className='text-red-800'>Vision</span></h3>
              <p className='text-center text-[18px] text-gray-600 font-cairo'>
                To become the unrivaled beacon of Italian culinary excellence in the UAE.
              </p>
            </div>
            <div className='flex justify-center items-center p-0'>
              <img src="/img/vision_img.png" alt="" srcset="" className='object-contain rounded-xl h-[250px]' />
            </div>
          </div>

          <div className='flex flex-col mb-10 w-[400px]'>
            <div className='flex flex-col justify-start items-center mb-10 lg:h-[150px] 2xl:h-[280px]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" className='text-green-700 mb-5'><path fill="currentColor" d="M11.998 1.998c1.204 0 2.358.213 3.427.602L14.23 3.794a8.502 8.502 0 1 0 5.974 5.976l1.194-1.194A9.984 9.984 0 0 1 22 12c0 5.524-4.478 10.002-10.002 10.002c-5.524 0-10.002-4.478-10.002-10.002c0-5.524 4.478-10.002 10.002-10.002Zm0 4.002a6.01 6.01 0 0 1 1.502.19v1.567a4.5 4.5 0 1 0 2.742 2.743h1.567A6 6 0 1 1 12 6Zm2 6a2 2 0 1 1-1.217-1.841l1.72-1.72L14.5 5.25a.75.75 0 0 1 .22-.53l2.5-2.5a.75.75 0 0 1 1.28.53V5.5h2.75a.75.75 0 0 1 .53 1.28l-2.5 2.5a.75.75 0 0 1-.53.22h-3.19l-1.72 1.72c.102.24.158.503.158.78Zm4.441-4l1-1h-1.69a.75.75 0 0 1-.75-.75V4.56l-.999 1v2.381a.701.701 0 0 1 .059.06h2.38Z"/></svg>
              <h3 className='text-center uppercase text-[2em] lg:text-[2.5em] font-bold font-cairo mb-5 text-green-900'>Our <span className='text-red-800'>Mission</span></h3>
              <p className='text-center text-[18px] text-gray-600 font-cairo'>
                At Il Forno, our mission is to transport our guests to the heart of Italy through the art of authentic Italian cuisine.
              </p>
            </div>
            <div className='flex justify-center items-center p-0'>
              <img src="/img/mission_img.png" alt="" srcset="" className='object-contain rounded-xl h-[250px]' />
            </div>
          </div>

          <div className='flex flex-col mb-10 w-[400px]'>
            <div className='flex flex-col justify-start items-center mb-10 lg:h-[150px] 2xl:h-[280px]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" className='text-green-700 mb-5'><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.69 9.915h8.62m-8.62 0H2.75m4.94 0l3.65 10.051M7.69 9.915l2.4-3.933l.55-1.012m5.67 4.945h4.94m-4.94 0l-3.65 10.051m3.65-10.051l-2.4-3.933l-.566-1.012M2.75 9.915c0 .42.079.84.236 1.236c.212.535.642 1.028 1.5 2.013l3.467 3.976c1.397 1.602 2.095 2.404 2.923 2.698q.229.081.464.128M2.75 9.915c0-.42.079-.84.236-1.237c.212-.535.642-1.027 1.5-2.013c.467-.534.7-.801.97-1.008a3.36 3.36 0 0 1 1.361-.619c.334-.068.688-.068 1.397-.068h2.427M21.25 9.915c0 .42-.079.84-.236 1.236c-.212.535-.642 1.028-1.5 2.013l-3.467 3.976c-1.397 1.602-2.095 2.404-2.923 2.698a3.4 3.4 0 0 1-.464.128m8.59-10.051c0-.42-.079-.84-.236-1.237c-.212-.535-.642-1.027-1.5-2.013c-.467-.534-.7-.801-.97-1.008a3.36 3.36 0 0 0-1.361-.619c-.334-.068-.688-.068-1.397-.068h-2.442m-.684 14.996a3.4 3.4 0 0 1-1.32 0M13.344 4.97H10.64"/></svg>
              <h3 className='text-center uppercase text-[2em] lg:text-[2.5em] font-bold font-cairo mb-5 text-green-900'>Our <span className='text-red-800'>Values</span></h3>
              <p className='text-center text-[18px] text-gray-600 font-cairo'>
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