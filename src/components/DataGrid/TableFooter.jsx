import { useEffect } from "react"

const TableFooter = ({ range, setPage, page, slice }) => {
    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
            setPage(page - 1)
        }
    }, [slice, page, setPage])
    return (
        <div
            className={`px-8 py-2 bg-gray-50 border-t border-gray-200`}
        >
            {range.map((el, idx) => (
                <button
                    className={`${el === page
                        ?
                        "bg-blue-500"
                        : "bg-white dark:bg-purple_5"
                        } ${el === page
                            ? "text-slate-200"
                            : "text-slate-700 dark:text-slate-200"
                        } px-5 py-1 dark:text-slate-200 text-sm font-bold  border border-gray-200`}
                    onClick={() => setPage(el)}
                    key={idx}
                >
                    {el}
                </button>
            ))}
        </div>
    )
}

export default TableFooter