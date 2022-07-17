import type { FC } from 'react'

import type { ArticleType } from '~/features/articles/types'

import { Container, StyledAside, StyledH3, StyledH4, StyledP } from './styled'

type Props = {
  articles: ArticleType[]
}

export const RelatedArticlesComponent: FC<Props> = ({ articles }) => {
  return (
    <StyledAside>
      <Container>
        <StyledH3>Related Articles</StyledH3>
        {articles.map((article) => (
          <div key={article.articleId}>
            <StyledH4>{article.title}</StyledH4>
            <StyledP>{article.perex}</StyledP>
          </div>
        ))}
      </Container>
    </StyledAside>
  )
}
