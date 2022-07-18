import { useMutation } from 'react-query'

import { publicApi } from '~/features/api'

import { useUserContext } from '../contexts/userContext'
import { setAccessToken, setPersistedUser } from '../storage'

type LoginInput = {
  username: string
  password: string
}

type ResponseType = {
  access_token: string
  expires_in: number
  token_type: string
}

export const useLogin = () => {
  const { setUsername } = useUserContext()
  const result = useMutation<ResponseType, Error, LoginInput>(
    'login',
    async (credentials) => {
      const response = await publicApi.post('login', {
        json: credentials,
      })

      if (!response.ok) {
        throw Error('Login Failed')
      }

      if (response.ok) {
        setUsername(credentials.username)
        setPersistedUser(credentials.username)
      }

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      const returnedResponse = (await response.json()) as ResponseType
      setAccessToken(returnedResponse.access_token)

      return returnedResponse
    }
  )
  return result
}
