import ky from 'ky'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const API_URL = process.env.NEXT_PUBLIC_API_URL

if (!API_URL) {
  throw new Error('Missing NEXT_PUBLIC_API_URL environment variable')
}

if (!API_KEY) {
  throw new Error('Missing NEXT_PUBLIC_API_KEY environment variable')
}

const publicApi = ky.create({
  prefixUrl: API_URL,
  headers: {
    'X-API-KEY': API_KEY,
  },
})

export { publicApi }
