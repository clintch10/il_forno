import React from 'react'

const ContactHeroSection = () => {
    return (
        <section className='pt-30 pb-20 px-20 flex relative'>
            <img src="/img/contact_hero_bg.jpg" alt="" srcset="" className='h-full w-full object-cover absolute -z-10 opacity-[.1] left-0 top-10 mask-y-from-70% mask-y-to-90%' />
            <div className='flex flex-col justify-center items-center grow'>

                <h3 className='font-cairo font-bold text-center lg:text-left text-[14px] text-gray-600 uppercase tracking-widest mb-10'>Contact Us</h3>
                {/* <span><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" className='text-gray-400'><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 7.283c0 2.642-2.239 4.784-5 4.784q-.488 0-.967-.09c-.23-.043-.345-.064-.425-.052s-.194.072-.42.193a3.25 3.25 0 0 1-2.113.329a2.65 2.65 0 0 0 .544-1.175c.05-.265-.074-.522-.26-.71A4.66 4.66 0 0 1 12 7.283C12 4.642 14.239 2.5 17 2.5s5 2.142 5 4.783m-6.508.217h.008m2.992 0h.008m-10.998 14H4.718c-.323 0-.648-.046-.945-.173c-.966-.415-1.457-.964-1.685-1.307a.54.54 0 0 1 .03-.631c1.12-1.488 3.72-2.386 5.389-2.386c1.668 0 4.264.898 5.384 2.386c.141.187.16.436.03.631c-.229.343-.72.892-1.686 1.307a2.4 2.4 0 0 1-.945.173zm2.784-9.711a2.776 2.776 0 0 1-2.78 2.772a2.776 2.776 0 0 1-2.778-2.772a2.776 2.776 0 0 1 2.779-2.773a2.776 2.776 0 0 1 2.779 2.773" color="currentColor" /></svg></span> */}
                <h4 className='section-header'>Got <span className='text-green-800'>Questions</span>? <br /> We've Got <span className="text-red-800">Answers</span></h4>
                <span className='font-cairo text-[16px] text-center text-gray-600 lg:w-[80%] xl:w-[60%]'>We’d love to hear from you—whether it’s a question, suggestion, or just a friendly hello, our team is always ready to help. Reach out through our contact page and let’s connect.</span>
            </div>
        </section>
    )
}

export default ContactHeroSection