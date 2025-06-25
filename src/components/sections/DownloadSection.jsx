import React from 'react'

const DownloadSection = () => {
    return (
        <section className='p-20 relative'>
            <img src="/img/downloadsection_bg.jpg" alt="" srcset="" className='h-full w-full object-cover absolute -z-10 opacity-[.2] top-0 left-0 mask-y-from-70% mask-y-to-90%' />
            <div className='container mx-auto px-10 flex flex-col lg:flex-row justify-between 2xl:w-[1280px]'>
                <div className="lg:basis-2/3 flex flex-col items-center lg:items-start justify-center lg:pe-20">
                    <h2 className='lg:w-[100%] mb-3 font-cairo text-green-900 text-[40px] lg:text-[50px] xl:text-[60px] text-center lg:text-left leading-12 lg:leading-16 xl:leading-18 font-extrabold'>Savor the Finest Italian Flavors — Just a Tap Away!</h2>
                    <span className='font-cairo text-[18px] text-gray-700 text-center lg:text-left mb-10'>Either you make an order, pickup your food or you dine in IL Forno app has it all!</span>
                    <div className='flex'>
                        <a href='https://play.google.com/store/apps/details?id=com.dishop.ilforno&hl=en' class="flex justify-center items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm ps-3 pe-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer">
                            <img src="/img/playstore.png" alt="playstore" srcset="" className='size-6 mx-2' />
                            <div className='flex flex-col items-start'>
                                <span className='font-product text-[10px] uppercase leading-none'>Get it on</span>
                                <span className='font-product text-[18px] leading-none'>Google Play</span>
                            </div>
                        </a>
                        <a href='https://apps.apple.com/us/app/il-forno-uae/id1567883169' type="button" class="flex justify-center items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm ps-3 pe-5  py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer">
                            <img src="/img/apple.png" alt="appstore" srcset="" className='size-6 mx-2' />
                            <div className='flex flex-col items-start'>
                                <span className='font-myriad text-[10px] tracking-[.1em] leading-none'>Download on the</span>
                                <span className='font-myriad text-[18px] leading-none'>AppStore</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="basis-full lg:basis-1/3 py-10 flex items-center justify-center">
                    <img src="/img/app.png" alt="" srcset="" className='object-contain w-[70%] lg:w-[100%]' />
                </div>
            </div>
        </section>
    )
}

export default DownloadSection