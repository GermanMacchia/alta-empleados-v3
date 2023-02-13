import axios from 'axios'

const base = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
})

const api = async ({ ...options }) => {
  base.defaults.headers.common.Authorization = JSON.parse(
    localStorage.getItem('user')!
  )

  return await base(options)
}

export { api }
