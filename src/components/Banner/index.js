import React from 'react'

const Banner = () => {
    return (
        <section className='grid sm:grid-cols-2 sm:rounded-full rounded-3xl  bg-white my-10 shadow-md  overflow-hidden'>
            <div className='w-full flex items-center justify-center'>
                <div>
                    <h2 className='text-6xl font-bold'>Space<span className='stroke-black text-cyan-700 italic font-normal'>X</span></h2>
                    <p className='italic pt-3 text-2xl text-cyan-700'>Capsules</p>
                </div>
            </div>
            <div className='w-full'>
                <img className='w-full object-cover' src='/images/capsule.jpg'  alt='capsule'/>
            </div>
        </section>
    )
}

export default Banner
