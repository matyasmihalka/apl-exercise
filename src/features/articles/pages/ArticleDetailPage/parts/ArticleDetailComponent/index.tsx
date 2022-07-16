import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import type { FC } from 'react'

import type { ArticleDetailTye } from '~/features/articles/types'

import {
  ArticleContainer,
  ImageWrapper,
  StyledAuthorContainer,
  StyledH1,
  StyledP,
} from './styled'

type Props = {
  article: ArticleDetailTye
  img: string | StaticImageData
}

export const ArticleDetailComponent: FC<Props> = ({ article, img }) => (
  <>
    <ArticleContainer>
      <StyledH1>{article.title}</StyledH1>
      <StyledAuthorContainer createdAt={article.createdAt} />
      <ImageWrapper>
        <Image
          src={img}
          layout="fill"
          alt="cute dog"
          objectFit="cover"
          priority
        />
      </ImageWrapper>
      <StyledP>{article.content}</StyledP>
    </ArticleContainer>
    <div>Related Articles</div>
  </>
)
