import type { ArticleType } from '../types'

const sortComments = () => (a: ArticleType, b: ArticleType) => {
  return a.createdAt < b.createdAt ? 1 : -1
}

export const articlesListBuilder = (comments: ArticleType[]) => {
  return comments.sort(sortComments())
}
