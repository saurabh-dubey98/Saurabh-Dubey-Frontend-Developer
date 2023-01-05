import { useQuery } from "react-query"

export const useFetch = (key, callback, refetch = true) =>
	useQuery(key, callback, {
		keepPreviousData: true,
		onError: (error) => {
			const message = error?.response?.data || error.message || error.toString()
			console.log("Error ", message)
		},
		enabled: refetch,
	})