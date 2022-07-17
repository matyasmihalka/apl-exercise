import CircularProgress from '@mui/material/CircularProgress'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

// import { AuthorContainer } from '~/features/articles/components/AuthorContainer'
import type { ArticleDetailTye, ArticleType } from '~/features/articles/types'
import { Routes } from '~/features/core/constants/routes'

import {
  ArticleLink,
  Comments,
  ImgWrapper,
  StyledArticle,
  StyledAuthorContainer,
  StyledH2,
  StyledP,
  StyledSection,
} from './styled'

export type Props = {
  article: ArticleType
  imgURL: string | StaticImageData
  articleDetail: ArticleDetailTye | undefined
}

export const ArticleCardComponent: FC<Props> = ({
  article,
  imgURL,
  articleDetail,
}) => (
  <StyledArticle>
    <ImgWrapper>
      <Image
        src={imgURL}
        width="272px"
        height="244px"
        layout="fixed"
        alt="cute dog"
        objectFit="cover"
        priority
      />
    </ImgWrapper>
    <StyledSection>
      <StyledH2>{article.title}</StyledH2>

      <StyledAuthorContainer createdAt={article.createdAt} />

      <StyledP>{article.perex}</StyledP>
      <div>
        <Link href={`${Routes.ARTICLES}/${article.articleId}`}>
          <ArticleLink>Read whole article</ArticleLink>
        </Link>
        <Comments>
          {articleDetail ? (
            articleDetail.comments.length
          ) : (
            <CircularProgress size={10} color="primary" />
          )}{' '}
          Comments
        </Comments>
      </div>
    </StyledSection>
  </StyledArticle>
)
