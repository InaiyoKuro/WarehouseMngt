import axios from "axios";
import { formatDate } from "../utils/DateUtils";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

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