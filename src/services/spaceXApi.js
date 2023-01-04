import axios from '../lib/axios'

export const getCapsules = async () => {
    const res = await axios.get('/capsules')
    return res.data
}

export const getCapsulesBySearch = async (data) => {
    const res = await axios.get(`/capsules/?type=${data?.type || ''}&original_launch=${data?.original_launch || ''}&status=${data?.status || ''}`)
    return res.data
}