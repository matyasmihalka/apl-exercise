import type { FC } from 'react'

import blurredDoggo from '~/features/articles/fixtures/assets/chesterBlurred.jpg'
import { useImage } from '~/features/articles/hooks/useImage'
import type { ArticleType } from '~/features/articles/types'

import { ArticleCardComponent } from './parts/ArticleCardComponent'

type Props = {
  article: ArticleType
}

export const ArticleCard: FC<Props> = ({ article }) => {
  const { imageObjectURL } = useImage(article.imageId)
  const img = imageObjectURL ? imageObjectURL : blurredDoggo
  return <ArticleCardComponent article={article} imgURL={img} />
}
