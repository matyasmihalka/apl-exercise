import { useQuery } from 'react-query'

import { publicApi } from '~/features/api'

const useImage = (id: string) => {
  const result = useQuery(['images', id], async () => {
    const response = await publicApi.get(`images/${id}`)

    if (!response.ok) {
      throw new Error(`Failed to load image`)
    }

    return await response.blob()
  })

  const imageObjectURL = result.isSuccess
    ? URL.createObjectURL(result.data)
    : ''

  return { ...result, imageObjectURL }
}

export { useImage }
