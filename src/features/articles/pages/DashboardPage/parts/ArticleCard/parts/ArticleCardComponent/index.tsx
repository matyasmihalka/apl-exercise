import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import type { ArticleType } from '~/features/articles/types'
// import doggo from '~/features/articles/fixtures/assets/chester.jpg'
import { Routes } from '~/features/core/constants/routes'

import {
  ArticleLink,
  AuthorContainer,
  Comments,
  ImgWrapper,
  StyledArticle,
  StyledH2,
  StyledP,
  StyledSection,
} from './styled'

export type Props = {
  article: ArticleType
  imgURL: string | StaticImageData
}

export const ArticleCardComponent: FC<Props> = ({ article, imgURL }) => (
  <StyledArticle>
    <ImgWrapper>
      <Image
        src={imgURL}
        width="272px"
        height="244px"
        layout="fixed"
        alt="cute dog"
        objectFit="cover"
        // placeholder="blur"
        priority
      />
    </ImgWrapper>
    <StyledSection>
      <StyledH2>{article.title}</StyledH2>
      <AuthorContainer>
        John Newmann <span>&nbsp;&bull;</span> {article.createdAt}
      </AuthorContainer>
      <StyledP>{article.perex}</StyledP>
      <div>
        <Link href={Routes.DASHBOARD}>
          <ArticleLink>Read whole article</ArticleLink>
        </Link>
        <Comments>4 Comments</Comments>
      </div>
    </StyledSection>
  </StyledArticle>
)
