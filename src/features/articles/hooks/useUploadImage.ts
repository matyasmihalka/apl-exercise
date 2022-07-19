// import { useRouter } from 'next/router'

import { useMutation } from 'react-query'

import { privateApi } from '~/features/api'

export type ResponseType = {
  imageId: string
  name: string
}

const useUploadImage = () => {
  const result = useMutation<ResponseType[], Error, File>(
    'uploadImage',
    async (file) => {
      const formData = new FormData()
      formData.append('image', file)
      const response = await privateApi.post('images', { body: formData })

      if (!response.ok) {
        throw Error('Uploading image failed')
      }

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      return (await response.json()) as ResponseType[]
    }
    // {
    //   onSuccess: async (event: ArticleType) => {
    //     console.log(event)
    //     await privateApi.post(`/events/${event.id}/attendees/me`)

    //     await router.push(Routes.DASHBOARD)
    //   },
    // }
  )

  //   console.log('Response from image upload')
  //   console.log(result)

  return result
}

export { useUploadImage }
