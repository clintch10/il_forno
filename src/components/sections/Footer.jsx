import React from 'react'

const Footer = () => {
    return (
        <section className='px-15 pt-10 bg-gray-100'>
            <footer class="dark:bg-gray-900">
                <div class="mx-auto w-full max-w-screen-xl lg:py-8">
                    <div class="flex flex-col md:flex-row md:justify-between">
                        <div class="flex flex-row md:flex-col justify-center md:justify-start items-center md:items-start mb-10 md:mb-0 grow">
                            <a href="https://flowbite.com/" class="flex items-center">
                                <img src="/img/navLogo.png" class="h-15 me-3" alt="FlowBite Logo" />
                            </a>
                            <div className='flex flex-col'>
                                <div className='flex flex-'>
                                    <div className="flex justify-center px-2 w-[4em]">
                                        <svg className='text-green-800' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.6 14.521c-2.395 2.521-8.504-3.533-6.1-6.063c1.468-1.545-.19-3.31-1.108-4.609c-1.723-2.435-5.504.927-5.39 3.066c.363 6.746 7.66 14.74 14.726 14.042c2.21-.218 4.75-4.21 2.214-5.669c-1.267-.73-3.008-2.17-4.342-.767Z" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center grow"><span className='font-cairo text-gray-500 text-[14px]'>02 658 7798</span></div>
                                </div>
                                <div className='flex flex-row'>
                                    <div className="flex justify-center p-2 w-[4em]">
                                        <svg className='text-green-800' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M14.95 3.684L8.637 8.912a1 1 0 0 1-1.276 0l-6.31-5.228A.999.999 0 0 0 1 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a.999.999 0 0 0-.05-.316M2 2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m-.21 1l5.576 4.603a1 1 0 0 0 1.27.003L14.268 3z" /></svg>
                                    </div>
                                    <div className="flex items-center grow"><span className='font-cairo text-gray-500 text-[14px]'>admin@ilfornogroup.com</span></div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
                            {/* <div className='pe-8 col-span-2'>
                                <h2 className="font-cairo font-bold text-[18px] mb-6 text-sm text-gray-900 uppercase dark:text-white">Opening Hours</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium flex flex-row">
                                    <li class="mb-10 flex flex-col grow">
                                        <span className='mb-2 font-bold font-cairo text-[16px]'>Restaurants:</span>
                                        <span className='font-normal font-cairo text-[14px]'>Mon – Thu</span>
                                        <span className='font-normal font-cairo text-[14px]'>10:00am – 12:00am</span>
                                        <span className='font-normal font-cairo text-[14px]'>Fri – Sun</span>
                                        <span className='font-normal font-cairo text-[14px]'>10:00am – 12:45am</span>
                                    </li>
                                    <li class="mb-4 flex flex-col grow">
                                        <span className='mb-2 font-bold font-cairo text-[16px]'>Head Office:</span>
                                        <span className='font-normal font-cairo text-[14px]'>Mon – Thu</span>
                                        <span className='font-normal font-cairo text-[14px]'>10:00am – 12:00am</span>
                                        <span className='font-normal font-cairo text-[14px]'>Fri – Sun</span>
                                        <span className='font-normal font-cairo text-[14px]'>10:00am – 12:45am</span>
                                    </li>
                                </ul>
                            </div> */}

                            <div className="pe-8 col-span-2">
                                <h4 className='font-bold font-cairo text-[18px] text-gray-700 mb-4 uppercase'>Working Hours</h4>
                                <ul className='mb-5'>
                                    <li className='font-cairo text-[16px] font-bold text-gray-500 mb-2'>
                                        Restaurants
                                    </li>
                                    <li className='flex flex-row py-1'>
                                        <div className='me-3'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='text-gray-500'><path fill="currentColor" d="M15.098 12.634L13 11.423V7a1 1 0 0 0-2 0v5a1 1 0 0 0 .5.866l2.598 1.5a1 1 0 1 0 1-1.732ZM12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8Z" /></svg></div>
                                        <div className='grow text-[14px] text-gray-500 font-cairo'>Monday to Thursday</div>
                                        <div className='text-[14px] text-gray-500 font-cairo'>10:00am - 12:00am</div>
                                    </li>
                                    <li className='flex flex-row py-1'>
                                        <div className='me-3'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='text-gray-500'><path fill="currentColor" d="M15.098 12.634L13 11.423V7a1 1 0 0 0-2 0v5a1 1 0 0 0 .5.866l2.598 1.5a1 1 0 1 0 1-1.732ZM12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8Z" /></svg></div>
                                        <div className='grow text-[14px] text-gray-500 font-cairo'>Friday to Saturday</div>
                                        <div className='text-[14px] text-gray-500 font-cairo'>10:00am - 12:45am</div>
                                    </li>
                                </ul>
                                <ul>
                                    <li className='font-cairo text-[16px] font-bold text-gray-500 mb-2'>
                                        Head Office
                                    </li>
                                    <li className='flex flex-row py-1'>
                                        <div className='me-3'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='text-gray-500'><path fill="currentColor" d="M15.098 12.634L13 11.423V7a1 1 0 0 0-2 0v5a1 1 0 0 0 .5.866l2.598 1.5a1 1 0 1 0 1-1.732ZM12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8Z" /></svg></div>
                                        <div className='grow text-[14px] text-gray-500 font-cairo'>Monday to Saturday</div>
                                        <div className='text-[14px] text-gray-500 font-cairo'>10:00am - 6:00pm</div>
                                    </li>
                                </ul>
                            </div>
                            <div className='pe-8'>
                                <h4 className='font-bold font-cairo text-[18px] text-gray-700 mb-4 uppercase'>Follow Us</h4>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4 flex flex-row items-center">
                                        <span className='me-2'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" /><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825" /></svg></span>
                                        <a href="https://github.com/themesberg/flowbite" class="hover:underline"><span className='font-cairo text-[14px] text-gray-500'>Facebook</span></a>
                                    </li>
                                    <li class="mb-4 flex flex-row items-center">
                                        <span className='me-2'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60" /><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60" /><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604h.031Zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563v.025Zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12v.004Zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355h.002Zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334Z" /><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#FD5" /><stop offset=".1" stop-color="#FD5" /><stop offset=".5" stop-color="#FF543E" /><stop offset="1" stop-color="#C837AB" /></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771C8" /><stop offset=".128" stop-color="#3771C8" /><stop offset="1" stop-color="#60F" stop-opacity="0" /></radialGradient></defs></g></svg></span>
                                        <a href="https://www.instagram.com/ilfornouae/tagged/" class="hover:underline"><span className='font-cairo text-[14px] text-gray-500'>Instagram</span></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="pe-8">
                                <h4 className='font-bold font-cairo text-[18px] text-gray-700 mb-4 uppercase'>Legal</h4>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline"><span className='font-cairo text-[14px] text-gray-500'>Privacy Policy</span></a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline"><span className='font-cairo text-[14px] text-gray-500'>Terms &amp; Conditions</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr class="my-6-gray-50 sm:mx-auto dark:border-gray-50 lg:my-8" />
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