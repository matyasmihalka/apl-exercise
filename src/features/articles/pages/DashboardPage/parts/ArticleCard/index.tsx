import type { FC } from 'react'

import { useArticleDetail } from '~/features/articles/hooks/useArticleDetail'
import { useImage } from '~/features/articles/hooks/useImage'
import type { ArticleType } from '~/features/articles/types'

import { ArticleCardComponent } from './parts/ArticleCardComponent'

type Props = {
  article: ArticleType
}

export const ArticleCard: FC<Props> = ({ article }) => {
  const { imageObjectURL } = useImage(article.imageId)
  const { articleDetail } = useArticleDetail(article.articleId)

  return (
    <ArticleCardComponent
      article={article}
      imgURL={imageObjectURL}
      articleDetail={articleDetail}
    />
  )
}
