import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import type { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import { CommentsSection } from '~/features/articles/components/CommentsSection'
import type { ArticleDetailTye } from '~/features/articles/types'

import {
  ArticleContainer,
  ImageWrapper,
  StyledAuthorContainer,
  StyledH1,
  StyledH2,
  StyledHr,
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
      <StyledP>
        <ReactMarkdown>*React-Markdown* is **Awesome**</ReactMarkdown>
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </StyledP>
      <StyledHr />
      <StyledH2>Comments ({article.comments.length})</StyledH2>
      <CommentsSection comments={article.comments} />
    </ArticleContainer>
    <div>Related Articles</div>
  </>
)
