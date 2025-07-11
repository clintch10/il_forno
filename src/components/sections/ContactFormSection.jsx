import React from 'react'

const ContactFormSection = () => {
    return (
        <section className='p-20 pb-10 relative'>
            <img src="/img/contact_form_bg.jpg" alt="" srcset="" className='h-full w-full object-cover absolute -z-10 opacity-[.2] top-0 left-0 mask-y-from-70% mask-y-to-90% rotate-180' />
            <div className='md:px-5 mx-auto lg:container 2xl:px-20'>
                <div className='mb-15'>
                    <h2 className='section-header'>Let's Get <span className='text-green-800'>In</span> <span className='text-red-800'>Touch</span></h2>
                    <p className='font-cairo text-[18px] text-center text-gray-600'>Fill out the form below or schedule a reservation with us at your convenience.</p>
                </div>


                <div class="grid gap-6 mb-6 lg:grid-cols-2">
                    <div className='flex flex-col justify-center lg:p-10 mb-5'>
                        <h4 className='md:mx-auto md:w-[80%] lg:w-full font-cairo text-[26px] lg:text-[40px] xl:text-[50px] 2xl:text-[50px] xl:leading-18 text-gray-700 font-bold text-center lg:text-left mb-4'>
                            Any questions? Write of call <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" className='inline-block text-green-800'><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13.5 2s2.334.212 5.303 3.182c2.97 2.97 3.182 5.303 3.182 5.303m-7.778-4.949s.99.282 2.475 1.767c1.485 1.485 1.768 2.475 1.768 2.475" /><path fill="currentColor" d="m15.1 15.027l-.543-.516l.544.516Zm.456-.48l.544.517l-.544-.516Zm2.417-.335l-.374.65l.374-.65Zm1.91 1.1l-.374.65l.374-.65Zm.539 3.446l.543.517l-.543-.517Zm-1.42 1.496l-.545-.517l.544.517Zm-1.326.71l.074.745l-.074-.746Zm-9.86-4.489l.543-.516l-.544.516Zm-4.813-9.51l-.749.041l.749-.04Zm6.475 1.538l.543.517l-.543-.517Zm.156-2.81l.613-.433l-.613.433ZM8.374 3.91l-.613.433l.612-.433ZM5.26 3.609l.544.516l-.544-.516ZM3.691 5.26l-.543-.516l.544.516Zm7.372 7.795l.544-.517l-.544.517Zm4.582 2.488l.455-.48l-1.088-1.033l-.455.48l1.088 1.033Zm1.954-.682l1.91 1.1l.748-1.3l-1.91-1.1l-.748 1.3Zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496l-1.087-1.033Zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717l-.147-1.492Zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986l1.087-1.033Zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302l1.088 1.033Zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783l1.226-.866Zm-5.53-2.168L3.149 4.745l1.088 1.033l1.57-1.653l-1.088-1.033Zm4.474 5.713a38.223 38.223 0 0 0-.545-.515l-.002.002l-.003.003a.822.822 0 0 0-.05.058a1.592 1.592 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019a.249.249 0 0 1-.028.037a.705.705 0 0 1-.018.02s-.002 0-.545-.516Zm1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.52 1.52 0 0 0 .421-.25a.922.922 0 0 0 .036-.034l.014-.014a.369.369 0 0 0 .007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003a.241.241 0 0 0 .005-.005l.01-.01a.446.446 0 0 1 .037-.032c.01-.006.009-.004-.004.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929l-1.088 1.033ZM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218l1.225-.866ZM3.752 6.926c-.022-.4.152-.8.484-1.148L3.148 4.745c-.536.564-.943 1.347-.894 2.261l1.498-.08Zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939l-1.088-1.032ZM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86L10.02 9.02Zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613l-.749 1.3Zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47l1.088 1.032Z" /></g></svg> us. We will write back within asap.
                        </h4>
                        <div className="w-full flex flex-row flex-wrap lg:flex-col">
                            <div className="grow flex flex-row items-center px-5 py-2 lg:px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='text-gray-600 me-4'><path fill="currentColor" d="M5.856 6.84a.75.75 0 0 0-1.106.66V17a.75.75 0 0 0 1.5 0V8.756l5.394 2.904c.222.12.49.12.712 0l5.394-2.904V17a.75.75 0 0 0 1.5 0V7.5a.75.75 0 0 0-1.106-.66L12 10.148L5.856 6.84Z" /><path fill="currentColor" fill-rule="evenodd" d="M17.31 3.722a59.632 59.632 0 0 0-10.62 0l-1.518.135a3.53 3.53 0 0 0-3.179 3.006a35.508 35.508 0 0 0 0 10.274a3.53 3.53 0 0 0 3.18 3.005l1.516.136c3.534.316 7.088.316 10.622 0l1.517-.136a3.53 3.53 0 0 0 3.179-3.005a35.508 35.508 0 0 0 0-10.274a3.53 3.53 0 0 0-3.18-3.006l-1.516-.135ZM6.824 5.216a58.133 58.133 0 0 1 10.354 0l1.517.136a2.03 2.03 0 0 1 1.829 1.728a34.005 34.005 0 0 1 0 9.84a2.03 2.03 0 0 1-1.829 1.728l-1.517.136c-3.444.308-6.91.308-10.354 0l-1.517-.136a2.03 2.03 0 0 1-1.829-1.728a34.008 34.008 0 0 1 0-9.84a2.03 2.03 0 0 1 1.829-1.728l1.517-.136Z" clip-rule="evenodd" /></svg>
                                <span className='font-cairo text-[14px] text-gray-500 font-bold'>admin@ilfornogroup.com</span>
                            </div>
                            <div className="grow flex flex-row items-center px-5 py-2 lg:px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='text-gray-600 me-4'><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.6 14.521c-2.395 2.521-8.504-3.533-6.1-6.063c1.468-1.545-.19-3.31-1.108-4.609c-1.723-2.435-5.504.927-5.39 3.066c.363 6.746 7.66 14.74 14.726 14.042c2.21-.218 4.75-4.21 2.214-5.669c-1.267-.73-3.008-2.17-4.342-.767Z" /></svg>
                                <span className='font-cairo text-[14px] text-gray-500 font-bold'>02 658 7798</span>
                            </div>
                            <div className="grow flex flex-row items-center px-5 py-2 lg:px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='text-gray-600 me-4'><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M14.7 2c1.68 0 2.52 0 3.162.34a3.06 3.06 0 0 1 1.311 1.359c.327.665.327 1.536.327 3.279v10.044c0 1.743 0 2.614-.327 3.28a3.06 3.06 0 0 1-1.311 1.359C17.22 22 16.38 22 14.7 22H9.3c-1.68 0-2.52 0-3.162-.34a3.06 3.06 0 0 1-1.311-1.359c-.327-.665-.327-1.536-.327-3.279V6.978c0-1.743 0-2.614.327-3.28A3.06 3.06 0 0 1 6.138 2.34C6.78 2 7.62 2 9.3 2z"/><path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21M10 6H8m2 4H8m8-4h-2m2 4h-2"/></g></svg>
                                <span className='font-cairo text-[14px] text-gray-500 font-bold'>9th Floor, Abu Dhabi University Building, Muroor Road, Al Nahyan Camp Area, Abu Dhabi</span>
                            </div>
                        </div>

                    </div>
                    <form>
                        <div className=' lg:px-10 xl:px-20'>
                            <div className='mb-10'>

                                <div className='mb-6'>
                                    <label for="full_name" class="input-label">Full name</label>
                                    <input type="text" id="full_name" class="input-field" placeholder="John" required />
                                </div>
                                <div class="mb-6">
                                    <label for="email" class="input-label">Email address</label>
                                    <input type="email" id="email" class="input-field" placeholder="john.doe@company.com" required />
                                </div>
                                <div className='mb-6'>
                                    <label for="message" class="input-label">Your message</label>
                                    <textarea id="message" rows="4" class="input-field" placeholder="Write your request or reservation here..."></textarea>
                                </div>

                                <button type="submit" class="btn-default w-full justify-center rounded-lg ">Send Request</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default ContactFormSection