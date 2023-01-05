import axios from "axios"
const apiUrl = "https://api.spacexdata.com/v3"

const instance = axios.create({
	baseURL: apiUrl,
})


export default instance