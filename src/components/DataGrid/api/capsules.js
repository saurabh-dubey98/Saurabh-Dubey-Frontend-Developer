import { useFetch } from '../../../lib/reactQuery'
import { getCapsules } from '../../../services/spaceXApi'

export const useGetCapsules = () => useFetch(["capsules"], () => getCapsules())
export const useGetCapsuleDetails = () => useFetch(["capsules"], () => getCapsules())