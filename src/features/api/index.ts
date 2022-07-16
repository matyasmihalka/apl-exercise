import ky from 'ky'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const API_URL = process.env.NEXT_PUBLIC_API_URL

const publicApi = ky.create({
  prefixUrl: API_URL,
  headers: {
    'X-API-KEY': API_KEY,
  },
})

export { publicApi }
