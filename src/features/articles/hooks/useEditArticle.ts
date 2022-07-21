// import { useRouter } from 'next/router'

import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from 'react-query'

import { privateApi } from '~/features/api'
import { Routes } from '~/features/core/constants/routes'

import type { ArticleType } from '../types'

export type ArticleInput = {
  title: string
  perex: string
  imageId: string
  content: string
}

type EditInput = {
  article: ArticleInput
  id: string
}

const useEditArticle = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const result = useMutation<ArticleType, Error, EditInput>(
    'publishArticle',
    async ({ id, article }) => {
      const response = await privateApi.patch(`articles/${id}`, {
        json: article,
      })

      if (!response.ok) {
        throw Error('Editing article failed')
      }

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      return (await response.json()) as ArticleType
    },
    {
      onSuccess: async () => {
        await router.push(Routes.DASHBOARD)
        await queryClient.invalidateQueries('articles')
      },
    }
  )

  return result
}

export { useEditArticle }
