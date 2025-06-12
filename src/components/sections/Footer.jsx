import React from 'react'

const Footer = () => {
    return (
        <section className='px-15 pt-5'>
            <footer class="dark:bg-gray-900">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0">
                            <a href="https://flowbite.com/" class="flex items-center">
                                <img src="/img/navLogo.png" class="h-15 me-3" alt="FlowBite Logo" />
                            </a>
                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3">
                            <div className='pe-8'>
                                <h2 className="font-cairo font-bold text-[18px] mb-6 text-sm text-gray-900 uppercase dark:text-white">Opening Hours</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-10 flex flex-col">
                                        <span className='mb-2 font-bold font-cairo text-[16px]'>Restaurants:</span>
                                        <span className='font-normal font-cairo text-[14px]'>Mon – Thu</span>
                                        <span className='font-normal font-cairo text-[14px]'>10:00am – 12:00am</span>
                                        <span className='font-normal font-cairo text-[14px]'>Fri – Sun</span>
                                        <span className='font-normal font-cairo text-[14px]'>10:00am – 12:45am</span>
                                    </li>
                                    <li class="mb-4 flex flex-col">
                                        <span className='mb-2 font-bold font-cairo text-[16px]'>Head Office:</span>
                                        <span className='font-normal font-cairo text-[16px]'>Mon – Thu</span>
                                        <span className='font-normal font-cairo text-[16px]'>10:00am – 12:00am</span>
                                        <span className='font-normal font-cairo text-[16px]'>Fri – Sun</span>
                                        <span className='font-normal font-cairo text-[16px]'>10:00am – 12:45am</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='pe-8'>
                                <h2 className="font-cairo font-bold text-[18px] mb-6 text-sm text-gray-900 uppercase dark:text-white">Follow us</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Instagram</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="pe-8">
                                <h2 className="font-cairo font-bold text-[18px] mb-6 text-sm text-gray-900 uppercase dark:text-white">Legal</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025. All Rights Reserved.
                        </span>
                    </div>
                </div>
            </footer>
        </section>

    )
}

export default Footer