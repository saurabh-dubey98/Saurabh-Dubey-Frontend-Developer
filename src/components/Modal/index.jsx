import { HiInformationCircle, HiXCircle } from 'react-icons/hi'
import RenderIf from '../RenderIf/Index'

const Modal = ({ data, isActive, closeModal, isLoading }) => {
    return (
        <section className={`fixed top-0 p-6 z-50 ${isActive ? "left-0" : "-left-full"} overflow-hidden duration-200 md:w-[50%] w-full h-screen bg-white shadow-xl rounded-r-[80px] border border-gray-200`}>
            <HiXCircle onClick={closeModal} className='absolute top-8 right-8 w-10 h-10 text-red-500/70 hover:text-red-600 duration-200 active:text-red-700 cursor-pointer' />

            <div className='overflow-y-auto h-full '>
                <h2 className='sm:text-4xl text-2xl font-light flex items-center gap-3 text-grey-700'>
                    <span className='block'>
                        Capsule details
                    </span>
                    <HiInformationCircle className='text-green-600/80 mt-2  block' />
                </h2>

                <RenderIf isLoading={isLoading}>
                    <div className='mt-10 divide-y-[1.5px] divide-gray-200'>
                        <div className='py-3'>
                            <h3 className='font-bold'>
                                Type
                            </h3>
                            <p>{data?.type}</p>
                        </div>
                        <div className='py-2'>
                            <h3 className='font-bold'>
                                Status
                            </h3>
                            <p>{data?.status}</p>
                        </div>
                        <div className='py-2'>
                            <h3 className='font-bold'>
                                Capsule serial
                            </h3>
                            <p>{data?.capsule_serial}</p>
                        </div>
                        <div className='py-2'>
                            <h3 className='font-bold'>
                                Original launch unix
                            </h3>
                            <p>{data?.original_launch_unix}</p>
                        </div>
                        <div className='py-2'>
                            <h3 className='font-bold'>
                                No. of landing
                            </h3>
                            <p>{data?.landings}</p>
                        </div>
                        <div className='py-2'>
                            <h3 className='font-bold'>
                                Reuse
                            </h3>
                            <p>{data?.reuse_count}</p>
                        </div>
                        <div className='py-2'>
                            <h3 className='font-bold'>
                                Details
                            </h3>
                            <p>{data?.details}</p>
                        </div>
                        <div className='py-2'>
                            <h3 className='font-bold'>
                                Missions
                            </h3>
                            <p>{data?.missions?.map(item => (
                                <span key={item?.name}>{item?.name} (Flights: {item?.flight})</span>
                            ))}</p>
                        </div>
                    </div>
                </RenderIf>
            </div>
        </section>
    )
}

export default Modal
