import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import carouselList from "../../assets/carousel.json"

const MenuSection = () => {
    return (
        <section className='flex px-20 py-20 relative'>
            <img src="/img/menu_bg.png" alt="" srcset="" className='h-full w-full object-cover absolute -z-10 opacity-[.2] top-0 left-0 mask-y-from-70% mask-y-to-90%' />
            <div className='container mx-auto'>
                <div className='flex flex-col items-center mb-10 lg:mb-20 xl:mb-30'>
                    <h1 className='section-header'>Where Every <span className='text-green-800'>Bite</span> is a <span className='text-red-700'>Celebration!</span></h1>
                    <span className='block font-cairo text-gray-500 text-[18px ] md:text-[20px] text-center w-[100%] xl:w-[80%] 2xl:w-[70%]'>From the delicate aroma of simmering tomatoes to the perfect twirl of al dente pasta, every bite of this authentic Italian masterpiece is a journey through centuries of tradition, passion, and pure culinary artistry.</span>
                </div>

                <div className='px-0 md:px-10 lg:px-20 relative'>
                    <button type="button" className='slide-prev h-fit m-auto absolute left-0 md:left-5 top-0 bottom-0 z-50 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-green-600 hover:text-green-800">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button type="button" className='slide-next h-fit absolute m-auto right-0 md:right-5 top-0 bottom-0 z-50 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-green-600 hover:text-green-800">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>


                    </button>
                    <Swiper className='mb-15'
                        // spaceBetween={50}
                        // slidesPerView={1}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        navigation={{
                            nextEl: ".slide-next",
                            prevEl: ".slide-prev",
                        }}
                        modules={[Autoplay, Navigation]}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 5,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            }
                        }}

                    >
                        {
                            carouselList && carouselList.map(menuItem => {
                                return (
                                    <SwiperSlide>
                                        <div className='flex flex-col items-center justify-center w-fit' key={menuItem.id}>
                                            <img src={menuItem.imgPath} alt="" className='w-[60%] lg:w-[80%] xl:w-[80%] mb-5' />
                                            <h4 className='font-cairo font-bold text-[24px] text-green-900'>{menuItem.dishName}</h4>
                                            <span className='font-opensans text-[22px] text-shadow-black text-gray-500'>{menuItem.dishPrice}</span>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>


                <div className='flex justify-center'>
                    <a href='https://order.ilforno.me/' className='mx-auto btn-default'>See our Menu</a>
                </div>

            </div>
        </section>
    )
}

export default MenuSection