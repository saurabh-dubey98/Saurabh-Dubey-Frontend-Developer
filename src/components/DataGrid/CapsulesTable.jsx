import { useState } from 'react'
import { HiCheckCircle, HiMinusCircle, HiXCircle, HiStop } from 'react-icons/hi'
import moment from 'moment'
import { useTable } from "../../hooks/useTable"
import TableFooter from "./TableFooter"
import Chips from '../Chips'

const CapsulesTable = ({ data, rowClick }) => {
	const [page, setPage] = useState(1)
	const { slice, range } = useTable(data, page, 10)
	return (
		<div className="flex flex-col ">
			<div className="overflow-x-auto">
				<div className="w-full inline-block align-middle">
					<div className="overflow-hidden border sm:rounded-[55px] rounded-3xl">
						<table className="min-w-full divide-y divide-gray-200 overflow-x-scroll">
							<thead className="bg-gray-50">
								<tr>
									<th
										scope="col"
										className="px-8 py-3 text-xs font-bold text-left text-gray-500 uppercase "
									>
										Type
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
									>
										Reuse count
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
									>
										Status
									</th>
									<th
										scope="col"
										className="px-8 py-3 text-xs font-bold text-right text-gray-500 uppercase "
									>
										Launch date
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200">
								{slice?.map(item => (
									<tr key={item?.capsule_serial} onClick={() => rowClick(item?.capsule_serial)} className='cursor-pointer hover:bg-slate-200/40 duration-200 active:bg-slate-200/70'>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											{item.type}
										</td>
										<td className="px-6 py-4 text-sm text-gray-500 font-normal whitespace-nowrap">
											{item.reuse_count}
										</td>
										<td className="px-6 py-4 text-sm text-gray-500 font-normal whitespace-nowrap">
											{item?.status === 'active' && <Chips text={item?.status} Icon={HiCheckCircle} green />}
											{item?.status === 'destroyed' && <Chips text={item?.status} Icon={HiXCircle} red />}
											{item?.status === 'unknown' && <Chips text={item?.status} Icon={HiMinusCircle} yellow />}
											{item?.status === 'retired' && <Chips text={item?.status} Icon={HiStop} blue />}

										</td>
										<td className="px-6 py-4 text-sm text-gray-500 font-normal whitespace-nowrap text-right">
											{moment(item?.original_launch).format('DD-M-yyyy')}
										</td>
									</tr>
								))
								}

								{(Array.isArray(data) && data?.length < 1) ? <span className='block font-medium text-center m-auto py-2 text-gray-500'>Found nothing!</span> : null}
							</tbody>
						</table>
						<TableFooter range={range} setPage={setPage} page={page} slice={slice} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default CapsulesTable
