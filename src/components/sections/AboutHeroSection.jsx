import React from 'react'

const AboutHeroSection = () => {
    return (
        // <section className='py-30 px-20 flex relative'>
        //     <img src="/img/about_hero_bg.png" alt="" srcset="" className='h-full w-full object-cover absolute -z-10 opacity-[.1] left-0 top-0 mask-y-from-70% mask-y-to-90%' />
        //     <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 2xl:px-20 2xl:pt-20'>
        //         <div className='flex flex-col justify-center mb-2 py-5 lg:pe-10 xl:pe-20'>
        //             <h4 className='font-cairo font-bold text-center lg:text-left text-[16px] text-gray-600 uppercase tracking-widest mb-5'>About Us</h4>
        //             <h2 className='font-cairo font-bold text-[45px] text-center lg:text-left text-green-800 mb-10 leading-12'>From Italy to the Emirates</h2>
        //             <p className='text-center lg:text-left font-cairo text-[18px] text-gray-800 mb-6 leading-8'>In the vibrant culinary scene of UAE, one man stood out as a trailblazer, our Founder. Born and raised in Lebanon, his passion for food was ignited at an early age and it was his fascination with Italian food that would shape his destiny and inspire the creation of Il Forno.</p>
        //             <p className='text-center lg:text-left font-cairo text-[18px] text-gray-800 mb-5 leading-8'>Today, Il Forno stands as a testament to our founders vision and passion for Italian cuisine. With its rustic charm, warm hospitality, and mouthwatering dishes, it continues to transport diners on a culinary journey to the heart of Italy.</p>
        //         </div>
        //         <div className='flex justify-center items-center'>
        //             <img src="/img/about_hero.jpg" alt="" srcset="" className='w-[100%]' />
        //         </div>

        //     </div>
        // </section>

        <section className='pt-30 pb-20 px-20 flex relative'>
            <img src="/img/about_hero_bg.png" alt="" srcset="" className='h-full w-full object-cover absolute -z-10 opacity-[.2] left-0 top-0 mask-y-from-70% mask-y-to-90%' />
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 2xl:px-20 2xl:pt-20'>
                <div className='flex flex-col justify-center mb-2 py-5 lg:pe-10 xl:pe-20'>
                    <h4 className='font-cairo font-bold text-center lg:text-left text-[16px] text-gray-600 uppercase tracking-widest mb-5'>About Us</h4>
                    <h2 className='font-cairo font-bold text-[45px] text-center lg:text-left text-green-800 mb-10 leading-12'>From Italy to the Emirates</h2>
                    <p className='text-center lg:text-left font-cairo text-[18px] text-gray-800 mb-6 leading-8'>In the vibrant culinary scene of UAE, one man stood out as a trailblazer, our Founder. Born and raised in Lebanon, his passion for food was ignited at an early age and it was his fascination with Italian food that would shape his destiny and inspire the creation of Il Forno.</p>
                    <p className='text-center lg:text-left font-cairo text-[18px] text-gray-800 mb-5 leading-8'>Today, Il Forno stands as a testament to our founders vision and passion for Italian cuisine. With its rustic charm, warm hospitality, and mouthwatering dishes, it continues to transport diners on a culinary journey to the heart of Italy.</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img src="/img/about_hero.jpg" alt="" srcset="" className='w-[100%] rounded-xl' />
                </div>
            </div>
        </section>
    )
}

export default AboutHeroSection