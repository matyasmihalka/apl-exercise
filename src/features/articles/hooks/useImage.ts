import { useQuery } from 'react-query'

import { publicApi } from '~/features/api'

const useImage = (id: string | undefined) => {
  const result = useQuery(
    ['images', id],
    async () => {
      const response = await publicApi.get(`images/${id}`)

      if (!response.ok) {
        throw new Error(`Failed to load image`)
      }

      const blob = await response.blob()

      const imageObjectURL = URL.createObjectURL(blob)

      return imageObjectURL
    },
    { enabled: !!id }
  )

  const imageObjectURL = result.data

  // const imageObjectURL = result.isSuccess
  //   ? URL.createObjectURL(result.data)
  //   : ''

  return { ...result, imageObjectURL }
}

export { useImage }
