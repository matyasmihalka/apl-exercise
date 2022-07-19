import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import type { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import { CommentsSection } from '~/features/articles/components/CommentsSection'
import type {
  ArticleDetailTye,
  ArticleType,
  PerexProp,
} from '~/features/articles/types'

import { RelatedArticlesComponent } from './parts/RelatedArticlesComponent'
import {
  ArticleContainer,
  ImageWrapper,
  StyledAuthorContainer,
  StyledDiv,
  StyledH1,
  StyledH2,
} from './styled'

export type Props = {
  article: ArticleDetailTye
  img: string | StaticImageData
  relatedArticles: ArticleType[]
}

export const ArticleDetailComponent: FC<Props> = ({
  article,
  img,
  relatedArticles,
}) => {
  const perex = JSON.parse(article.perex) as PerexProp
  return (
    <ArticleContainer>
      <div>
        <StyledH1>{article.title}</StyledH1>
        <StyledAuthorContainer
          createdAt={article.createdAt}
          author={`${perex.firstName} ${perex.lastName}`}
        />
        <ImageWrapper>
          <Image
            src={img}
            layout="fill"
            alt="cute dog"
            objectFit="cover"
            priority
          />
        </ImageWrapper>
        <StyledDiv>
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </StyledDiv>

        <StyledH2>Comments ({article.comments.length})</StyledH2>
        <CommentsSection
          comments={article.comments}
          articleID={article.articleId}
        />
      </div>
      <RelatedArticlesComponent articles={relatedArticles} />
    </ArticleContainer>
  )
}
