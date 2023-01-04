import { useFetch } from '../../../lib/reactQuery'
import { getCapsulesBySearch } from '../../../services/spaceXApi'

export const useSearchCapsules = (data) => useFetch(["capsules"], () => getCapsulesBySearch(data), false)