// import { useRouter } from 'next/router'

import { useMutation, useQueryClient } from 'react-query'

import { privateApi } from '~/features/api'

import type { CommentType } from '../types'

export type CommentInput = {
  author: string
  content: string
  articleId: string
}

const useAddComment = (articleId: string) => {
  const queryClient = useQueryClient()

  const result = useMutation<CommentType, Error, CommentInput>(
    'addComment',
    async (comment) => {
      const response = await privateApi.post('comments', {
        json: comment,
      })

      if (!response.ok) {
        throw Error('Adding comment failed')
      }

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      return (await response.json()) as CommentType
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(['articles', 'detail', articleId])
      },
    }
  )

  //   console.log('Response from image upload')
  //   console.log(result)

  return result
}

export { useAddComment }
