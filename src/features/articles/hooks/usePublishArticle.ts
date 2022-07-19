// import { useRouter } from 'next/router'

import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

import { privateApi } from '~/features/api'
import { Routes } from '~/features/core/constants/routes'

import type { ArticleType } from '../types'

export type ArticleInput = {
  title: string
  perex: string
  imageId: string
  content: string
}

const usePublishArticle = () => {
  const router = useRouter()

  const result = useMutation<ArticleType, Error, ArticleInput>(
    'publishArticle',
    async (article) => {
      const response = await privateApi.post('articles', {
        json: article,
      })

      if (!response.ok) {
        throw Error('Publishing article failed')
      }

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      return (await response.json()) as ArticleType
    },
    {
      onSuccess: async () => {
        await router.push(Routes.DASHBOARD)
      },
    }
  )

  //   console.log('Response from image upload')
  //   console.log(result)

  return result
}

export { usePublishArticle }
