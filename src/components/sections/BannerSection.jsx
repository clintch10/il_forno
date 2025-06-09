import React from 'react'

const BannerSection = (props) => {
  return (
    <section>
        <div className='p-15 flex justify-center bg-gray-100'>
            <h3 className='text-center text-4xl font-bold font-cairo text-gray-700'>{props.caption}</h3>
        </div>
    </section>
  )
}

export default BannerSection