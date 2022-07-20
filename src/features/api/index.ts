import ky from 'ky'
import router from 'next/router'

import { Routes } from '../core/constants/routes'
import { getAccessToken } from '../login/storage'

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

const privateApi = publicApi.extend({
  hooks: {
    beforeRequest: [
      (request) => {
        const accessToken = getAccessToken()
        accessToken && request.headers.set('Authorization', accessToken)
      },
    ],
    afterResponse: [
      (request, options, response) => {
        if (response.status === 403 || response.status === 401) {
          void router.replace({
            pathname: Routes.LOGIN,
            // we need to clear persisted stuff and context
            query: { from: 'unauthorized' },
          })
          return response
        }
      },
    ],
  },
})

export { publicApi, privateApi }
