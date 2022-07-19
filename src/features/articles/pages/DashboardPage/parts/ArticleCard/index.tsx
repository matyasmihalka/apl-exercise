import type { FC } from 'react'

import blurredDoggo from '~/features/articles/fixtures/assets/chesterBlurred.jpg'
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
  const img = imageObjectURL ? imageObjectURL : blurredDoggo
  // const img = imageObjectURL
  //   ? imageObjectURL
  //   : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII='

  return (
    <ArticleCardComponent
      article={article}
      imgURL={img}
      articleDetail={articleDetail}
    />
  )
}
