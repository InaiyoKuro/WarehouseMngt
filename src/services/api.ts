import axios from "axios";
import { formatDate } from "../utils/DateUtils";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use(
  async(config) => {
    const accessToken = Cookies.get("accessToken")
    
    if(accessToken){
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  }, (err) => {
    return Promise.reject(err)
})

api.interceptors.response.use(
  (res) => { return res },
  async(err) => {
    const originRequest = err.config

    if(err.response.status === 401 && !originRequest._retry){
      originRequest._retry = true

      const refreshToken = Cookies.get("refreshToken")
      if(!refreshToken) return Promise.reject(err)
      
      try {
        const res = await api.post("/api/auth/refresh-token", { token: refreshToken })
        const newAccessToken = res.data.accessToken

        Cookies.set("accessToken", newAccessToken)

        originRequest.headers.Authorization = `Bearer ${newAccessToken}`

        return api(originRequest)

      } catch(err) {
        Cookies.remove("accessToken")
        Cookies.remove("refreshToken")

        return Promise.reject(err)
      }
    }
  }
)

const getProducts = () => {
  return api.get("/api/products").then(res => {
    return res.data.map((item: any) => ({
      ...item,
      nsxFormatted: formatDate(item.nsx),
      hsdFormatted: formatDate(item.hsd),
    }))
  })
}

export { api, getProducts }