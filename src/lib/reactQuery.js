import { useQuery, useMutation, useQueryClient } from "react-query"

export const useFetch = (key, callback, refetch = true) =>
	useQuery(key, callback, {
		keepPreviousData: true,
		onError: (error) => {
			const message = error?.response?.data || error.message || error.toString()
			console.log("Error ", message)
		},
		enabled: refetch,
	})

export const useMutate = (key, callback) => {
	const queryClient = useQueryClient()
	return useMutation(callback, {
		onSuccess: (data) => {
			// Invalidate and refetch
			queryClient.invalidateQueries(key)
		},
		onError: (error) => {
			const message = error?.response?.data || error.message || error.toString()
			console.log("Error ", message)
		},
	})
}