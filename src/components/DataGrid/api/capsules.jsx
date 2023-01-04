import { useFetch } from '../../../lib/reactQuery'
import { getCapsules, getCapsuleDetails } from '../../../services/spaceXApi'

export const useGetCapsules = () => useFetch(["capsules"], () => getCapsules())

export const useGetCapsuleDetails = (id) => useFetch(["capsules-details", id], () => getCapsuleDetails(id), false)