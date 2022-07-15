import { useQuery } from 'react-query'

import type { ArticlesResponse } from '../types'

const apiUrl = process.env.NEXT_PUBLIC_API_URL
const initialData: ArticlesResponse = {
  items: [],
  pagination: {
    limit: 0,
    offset: 0,
    total: 0,
  },
}

const useArticles = () => {
  const result = useQuery<ArticlesResponse, Error>('articles', async () => {
    const response = await fetch(`${apiUrl}/articles`, {
      method: 'GET',
      headers: {
        'X-API-KEY': '568bb63d-f9c5-456f-9d5d-bb73e3ecefed',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to load articles`)
    }

    return (await response.json()) as ArticlesResponse
  })

  const { data = initialData } = result
  const articles = data.items

  return { ...result, articles }
}

export { useArticles }
