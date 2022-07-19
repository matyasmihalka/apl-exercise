import CircularProgress from '@mui/material/CircularProgress'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

// import { AuthorContainer } from '~/features/articles/components/AuthorContainer'
import type {
  ArticleDetailTye,
  ArticleType,
  PerexProp,
} from '~/features/articles/types'
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
}) => {
  const perex = JSON.parse(article.perex) as PerexProp
  return (
    <StyledArticle>
      <ImgWrapper>
        {imgURL ? (
          <Image
            src={imgURL}
            width="272px"
            height="244px"
            layout="fixed"
            alt="cute dog"
            objectFit="cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
          />
        ) : (
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
            width="272px"
            height="244px"
            layout="fixed"
            alt="blurred placeholder"
            objectFit="cover"
            priority
          />
        )}
      </ImgWrapper>
      <StyledSection>
        <StyledH2>{article.title}</StyledH2>

        <StyledAuthorContainer
          createdAt={article.createdAt}
          author={`${perex.firstName} ${perex.lastName}`}
        />

        <StyledP>{perex.perex}</StyledP>
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
}
