import { useQuery } from 'react-query'

import type { ArticleDetailTye } from '../types'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

const useArticleDetail = (id: string) => {
  const result = useQuery<ArticleDetailTye, Error>(
    ['articles', id],
    async () => {
      const response = await fetch(`${apiUrl}/articles/${id}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': '568bb63d-f9c5-456f-9d5d-bb73e3ecefed',
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to load articles`)
      }

      return (await response.json()) as ArticleDetailTye
    }
  )

  const articleDetail = result.data

  return { ...result, articleDetail }
}

export { useArticleDetail }
