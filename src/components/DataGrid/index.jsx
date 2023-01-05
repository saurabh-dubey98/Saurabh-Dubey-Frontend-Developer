import { useState, useEffect } from 'react'
import { useGetCapsuleDetails, useGetCapsules } from './api/capsules'
import CapsulesTable from './CapsulesTable'
import Modal from '../Modal'
import RenderIf from '../RenderIf/Index'

const DataGrid = () => {
    const [id, setId] = useState('')
    const [openModal, setOpenModal] = useState('')
    const { data, isLoading } = useGetCapsules()
    const { data: capsuleDetails, refetch, isFetching } = useGetCapsuleDetails(id)

    useEffect(() => {
        if (id) refetch()
    }, [id, refetch])

    return (
        <section className='sm:rounded-[80px] rounded-3xl sm:p-8 sm:pt-3 p-2 bg-white shadow-md border border-gray-200'>
            <Modal data={capsuleDetails} isActive={openModal} closeModal={() => setOpenModal(false)} isLoading={isFetching} />
            {openModal && <div className="fixed top-0 left-0 w-full h-full bg-black  opacity-40 duration-500"></div>}
            <h2 className='pb-3 font-normal text-gray-500   text-xl text-center'>-- All capsules --</h2>
            <RenderIf isLoading={!data || isLoading}>

                <CapsulesTable data={data} rowClick={(id) => {
                    setId(id)
                    setOpenModal(true)
                }} />
            </RenderIf>
        </section>
    )
}

export default DataGrid

