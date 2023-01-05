import axios from '../lib/axios'

export const getCapsules = async () => {
    const res = await axios.get('/capsules')
    return res.data
}

export const getCapsuleDetails = async (id) => {
    const res = await axios.get(`/capsules/${id}`)
    return res.data
}

export const getCapsulesBySearch = async (data) => {
    const res = await axios.get(`/capsules/?type=${data?.type || ''}&landings=${data?.landings || ''}&status=${data?.status || ''}`)
    return res.data
}