import { useState } from 'react'
import { Oval } from 'react-loader-spinner'
import { HiSearch } from 'react-icons/hi'
import { useSearchCapsules } from './api/queryCapsules'

const LoadingSpinner = () => {
    return <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-700/80'>
        <Oval
            color="#3256b8"
            width={25}
            height={25}
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#ffffff"
            strokeWidth={4}
            strokeWidthSecondary={4}

        />
    </div>
}


const Search = () => {
    const [search, setSearch] = useState({
        status: '',
        original_launch: '',
        type: ''
    })

    const { refetch, isFetching } = useSearchCapsules(search)

    const searchChangeHandler = (e) => {
        setSearch(prev => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }

    const searchSubmitHandler = e => {
        e.preventDefault()
        refetch()
    }

    const resetHandler = () => {
        setSearch({
            status: '',
            original_launch: '',
            type: ''
        })
    }

    return (
        <section className='sm:rounded-full rounded-3xl sm:py-8 py-6 sm:px-20 px-4 bg-white my-10 shadow-md border border-gray-200'>
            <form onSubmit={searchSubmitHandler}>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-5 sm:gap-x-3'>

                    <div className='my-2 flex flex-col'>
                        <label className='uppercase font-semibold text-gray-600 text-sm pb-1 inline-block' htmlFor='type'>Type</label>
                        <input placeholder='Capsule type' className='outline-none border-[1.7px] shadow-inner border-gray-200 p-2 rounded-full focus:border-blue-500 duration-200' type='text' id='type' value={search.type} name='type' onChange={searchChangeHandler} />
                    </div>
                    <div className='my-2 flex flex-col'>
                        <label className='font-semibold text-gray-600 text-sm pb-1 inline-block' htmlFor='original_launch'>Original launch</label>
                        <input className='outline-none border-[1.7px] shadow-inner border-gray-200 p-2 rounded-full focus:border-blue-500 duration-200' type='date' id='original_launch' value={search.original_launch} name='original_launch' onChange={searchChangeHandler} />
                    </div>

                    <div className='my-2 flex flex-col'>
                        <label className='font-semibold text-gray-600 text-sm pb-1 inline-block' htmlFor="status">Status</label>
                        <select className='outline-none border-[1.7px] shadow-inner border-gray-200 p-2 rounded-full focus:border-blue-500 duration-200' id='status' value={search.status} name='status' onChange={searchChangeHandler}>
                            <option value=''>Select</option>
                            <option value='active'>Active</option>
                            <option value='retired'>Retired</option>
                            <option value='destroyed'>Destroyed</option>
                            <option value='unknown'>Unknown</option>
                        </select>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <input onClick={resetHandler} type='checkbox' id='reset' />
                    <label htmlFor='reset' className='font-semibold text-gray-600 text-sm pb-1 inline-block cursor-pointer'>Reset and search</label>
                </div>
                <button type='submit' className={`mt-2 flex items-center outline-none shadow-inner py-2 px-3 rounded-full  text-white font-semibold border-none bg-gray-400 hover:bg-blue-400 active:bg-blue-500 duration-200 relative overflow-hidden ${isFetching ? 'pointer-events-none' : ''}`}>
                    <HiSearch className='h-5 w-5 mr-2' />
                    {isFetching && <LoadingSpinner />}Search

                </button>
            </form>
        </section>
    )
}

export default Search
