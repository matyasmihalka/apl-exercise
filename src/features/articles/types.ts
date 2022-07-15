export type ArticleType = {
  articleId: string
  createdAt: string
  imageId: string
  lastUpdatedAt: string
  perex: string
  title: string
}

export type ArticlesResponse = {
  items: ArticleType[]
  pagination: {
    limit: number
    offset: number
    total: number
  }
}
