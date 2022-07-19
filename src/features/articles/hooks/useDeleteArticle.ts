// import { useRouter } from 'next/router'

import { useMutation, useQueryClient } from 'react-query'

import { privateApi } from '~/features/api'

export type ArticleInput = {
  title: string
  perex: string
  imageId: string
  content: string
}

const useDeleteArticle = () => {
  const queryClient = useQueryClient()

  const result = useMutation<{ deleted: boolean }, Error, string>(
    'deleteArticle',
    async (id) => {
      const response = await privateApi.delete(`articles/${id}`)

      if (!response.ok) {
        throw Error('Deleting article failed')
      }

      return { deleted: true }
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries('articles')
      },
    }
  )

  //   console.log('Response from image upload')
  //   console.log(result)

  return result
}

export { useDeleteArticle }
