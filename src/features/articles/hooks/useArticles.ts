import { useQuery } from 'react-query'

import { publicApi } from '~/features/api'

import type { ArticlesResponse, ArticleType } from '../types'

const initialData: ArticlesResponse = {
  items: [],
  pagination: {
    limit: 0,
    offset: 0,
    total: 0,
  },
}

const sortComments = () => (a: ArticleType, b: ArticleType) => {
  return a.createdAt < b.createdAt ? 1 : -1
}

const listBuilder = (comments: ArticleType[]) => {
  return comments.sort(sortComments())
}

const useArticles = () => {
  const result = useQuery<ArticlesResponse, Error>('articles', async () => {
    const response = await publicApi.get('articles')

    if (!response.ok) {
      throw new Error(`Failed to load articles`)
    }

    //This type assertion is necessary, have no idea why eslint thinks its not
    // For know I will leave it like this as it works
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return (await response.json()) as ArticlesResponse
  })

  const { data = initialData } = result
  let articles = data.items
  if (articles) {
    articles = listBuilder(articles)
  }

  return { ...result, articles }
}

export { useArticles }
