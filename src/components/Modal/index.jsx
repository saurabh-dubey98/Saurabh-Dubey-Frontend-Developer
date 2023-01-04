import { HiArrowNarrowRight, HiXCircle } from 'react-icons/hi'

const Modal = (data, isActive) => {
    return (
        <section className={`fixed top-0 p-6 left-0 w-[80%] h-screen bg-white shadow-xl rounded-r-[80px] border border-gray-200`}>
            <HiXCircle className='absolute top-8 right-8 w-10 h-10 text-red-500/70 hover:text-red-600 duration-200 active:text-red-700 cursor-pointer' />

            <div>
                <h2 className='text-4xl font-light flex items-center gap-3'>
                    <span className='block'>
                        Capsule details
                    </span>
                    <HiArrowNarrowRight className='text-gray-600 mt-2  block' />
                </h2>

                <div>

                </div>
            </div>
        </section>
    )
}

export default Modal
