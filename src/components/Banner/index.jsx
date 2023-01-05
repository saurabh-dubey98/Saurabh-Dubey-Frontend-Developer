const Banner = () => {
    return (
        <>
            <section className='sm:block hidden h-[350px] rounded-full  bg-white my-10 shadow-md  overflow-hidden'>
                <div className='w-full relative h-full grid grid-cols-2'>
                    <div className='w-full flex items-center justify-center'>
                        <div>
                            <h2 className='text-7xl font-bold text-black'>Space<span className=' text-cyan-700 italic font-normal'>X</span></h2>
                            <p className='italic pt-3 text-2xl text-cyan-700'>Capsules</p>
                        </div>
                    </div>
                    <img className='w-full overflow-hidden h-full' src='/images/capsule.jpg' alt='capsule' />
                </div>
            </section>
            <section className='sm:hidden h-[300px] rounded-3xl  bg-white my-10 shadow-md  overflow-hidden'>
                <div className='w-full relative h-full'>
                    <div className='absolute top-0 left-0 w-full h-full bg-black/60'></div>
                    <div className='w-full flex items-center justify-center absolute h-full'>
                        <div>
                            <h2 className='text-5xl font-bold text-cyan-100'>Space<span className=' text-cyan-400 italic font-normal'>X</span></h2>
                            <p className='italic pt-3 text-xl text-cyan-400'>Capsules</p>
                        </div>
                    </div>
                    <img className='w-full overflow-hidden object-cover h-full' src='/images/capsule.jpg' alt='capsule' />
                </div>
            </section>

        </>
    )
}

export default Banner
