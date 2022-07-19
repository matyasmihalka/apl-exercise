import Link from 'next/link'
import type { FC } from 'react'

import type { ArticleType, PerexProp } from '~/features/articles/types'
import { Routes } from '~/features/core/constants/routes'

import {
  ArticleWrapper,
  Container,
  StyledAside,
  StyledH3,
  StyledH4,
  StyledP,
} from './styled'

type Props = {
  articles: ArticleType[]
}

export const RelatedArticlesComponent: FC<Props> = ({ articles }) => {
  return (
    <StyledAside>
      <Container>
        <StyledH3>Related Articles</StyledH3>
        {articles.map((article) => {
          const perex = JSON.parse(article.perex) as PerexProp
          return (
            <Link
              href={`${Routes.ARTICLES}/${article.articleId}`}
              key={article.articleId}
            >
              <ArticleWrapper>
                <StyledH4>{article.title}</StyledH4>
                <StyledP>{perex.perex}</StyledP>
              </ArticleWrapper>
            </Link>
          )
        })}
      </Container>
    </StyledAside>
  )
}
