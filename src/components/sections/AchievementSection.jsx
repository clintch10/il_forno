import React from 'react'

const AchievementSection = () => {
    return (
        <section className='p-20 lg:pb-30 relative'>
            <img src="/img/announcement_bg.jpg" alt="" srcset="" className='h-full w-full object-cover absolute -z-10 opacity-[.5] top-0 left-0 mask-y-from-70% mask-y-to-90%' />
            <h3 className='text-center text-[2em] lg:text-[3em] uppercase font-bold font-cairo mb-20 text-gray-800 '>Exciting news from <span className='text-green-800'>IL</span> <span className='text-red-800'>FORNO</span></h3>
            <div className='container px-0 mx-auto flex flex-col lg:flex-row 2xl:w-[1280px]'>
                <div className='basis-1/3 lg:basis-2/4 flex justify-center items-center pb-5 lg:pb-0'>
                    <img src="/img/awards.png" alt="" srcset="" className='object-contain h-auto w-[50%] lg:w-[80%] xl:w-[70%]' />
                </div>
                <div className='basis-2/3 lg:basis-2/4 flex flex-col justify-center items-center lg:pe-20'>
                    <p className='text-center text-[18px] text-gray-700 font-cairo'>We are thrilled to announce that IL FORNO has been awarded
                        <span className='px-10 lg:px-0 text-[1.5em] lg:text-[36px] font-extrabold my-6 block text-green-900 uppercase'>“Best Upscale Italian Dining Experience UAE 2024”</span>
                        by Luxlife Magazine UK. A heartfelt thank you to our amazing customers and dedicated team for making this possible. Come dine with us and experience award-winning italian cuisine like never before!</p>
                </div>
            </div>

        </section>
    )
}

export default AchievementSection