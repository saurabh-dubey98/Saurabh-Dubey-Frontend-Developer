import { useGetCapsules } from './api/capsules'
import CapsulesTable from './CapsulesTable'
import Modal from '../Modal'
// Context
import { useCapsulesContext } from '../../context/capsulesContext'

const DataGrid = () => {
    const { data } = useGetCapsules()

    if (!data) return
    return (
        <section className='rounded-[80px] p-8 bg-white shadow-md border border-gray-200'>
            <Modal />
            <CapsulesTable data={data} />
        </section>
    )
}

export default DataGrid

