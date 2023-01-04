import { useState } from 'react'
import { useGetCapsuleDetails, useGetCapsules } from './api/capsules'
import CapsulesTable from './CapsulesTable'
import Modal from '../Modal'
// Context
import { useCapsulesContext } from '../../context/capsulesContext'
import { useEffect } from 'react'

const DataGrid = () => {
    const [id, setId] = useState('')
    const [openModal, setOpenModal] = useState('')
    const { data } = useGetCapsules()
    const { data: capsuleDetails, isLoading, refetch } = useGetCapsuleDetails(id)

    useEffect(() => {
        if (id) refetch()
    }, [id])

    if (!data) return
    return (
        <section className='sm:rounded-[80px] rounded-3xl sm:p-8 p-2 bg-white shadow-md border border-gray-200'>
            <Modal data={capsuleDetails} isActive={openModal} closeModal={() => setOpenModal(false)} />
            <CapsulesTable data={data} rowClick={(id) => {
                setId(id)
                setOpenModal(true)
            }} />
        </section>
    )
}

export default DataGrid

