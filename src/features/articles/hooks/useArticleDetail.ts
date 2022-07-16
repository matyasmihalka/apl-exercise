import { useQuery } from 'react-query'

import { publicApi } from '~/features/api'

import type { ArticleDetailTye, CommentType } from '../types'

const sortComments = () => (a: CommentType, b: CommentType) => {
  return a.createdAt < b.createdAt ? 1 : -1
}

const listBuilder = (comments: CommentType[]) => {
  return comments.sort(sortComments())
}

const useArticleDetail = (id: string) => {
  const result = useQuery<ArticleDetailTye, Error>(
    ['articles', 'detail', id],
    async () => {
      const response = await publicApi.get(`articles/${id}`)

      if (!response.ok) {
        throw new Error(`Failed to load article detail`)
      }

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      return (await response.json()) as ArticleDetailTye
    },
    { enabled: !!id }
  )

  const articleDetail = result.data
  if (articleDetail) {
    articleDetail.comments = listBuilder(articleDetail.comments)
  }

  return { ...result, articleDetail }
}

export { useArticleDetail }
