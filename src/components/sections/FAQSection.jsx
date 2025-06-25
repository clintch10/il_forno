import React from 'react'
import faqList from '../../assets/faq.json'

const FAQSection = () => {
    return (
        <section className='flex px-20 py-20 relative'>
            <img src="/img/downloadsection_bg.jpg" alt="" srcset="" className='h-full w-full object-cover absolute -z-10 opacity-[.2] top-0 left-0 mask-y-from-70% mask-y-to-90%' />
            <div className='mx-auto container flex flex-col justify-center md:px-10 lg:px-40 2xl:px-80'>
                <h3 className='font-cairo font-bold text-center text-[40px] text-gray-700 mb-20'>Frequently Asked Questions</h3>

                <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">

                    {
                        faqList && faqList.map(faqItems => {
                            return (
                                <div key={faqItems.id}>
                                    <h4 id={"accordion-flush-heading-" + faqItems.id}>
                                        <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3 cursor-pointer" data-accordion-target={"#accordion-flush-body-" + faqItems.id} aria-expanded="true" aria-controls={"accordion-flush-body-" + faqItems.id}>
                                            <span className='font-cairo text-[18px] font-bold text-gray-700 text-left'>{faqItems.question}</span>
                                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                            </svg>
                                        </button>
                                    </h4>
                                    <div id={"accordion-flush-body-" + faqItems.id} class="hidden" aria-labelledby={"accordion-flush-heading-" + faqItems.id}>
                                        <div class="py-10 border-b border-gray-200 dark:border-gray-700 font-cairo text-[16px] leading-8">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">
                                                {faqItems.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>

        </section>


    )
}

export default FAQSection