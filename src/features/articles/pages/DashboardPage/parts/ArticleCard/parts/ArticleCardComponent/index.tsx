import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import doggo from '~/features/articles/fixtures/assets/doggo.webp'
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

export const ArticleCardComponent: FC = () => (
  <StyledArticle>
    <ImgWrapper>
      <Image
        src={doggo}
        width="272px"
        height="244px"
        layout="fixed"
        alt="cute dog"
        objectFit="cover"
        placeholder="blur"
        priority
      />
    </ImgWrapper>
    <StyledSection>
      <StyledH2>Dachshund Dog Breed Facts & Information</StyledH2>
      <AuthorContainer>
        John Newmann <span>&nbsp;&bull;</span> 12/7/2022
      </AuthorContainer>
      <StyledP>
        https://www.rover.com/blog/breeds/dachshund/ Clever, lively, courageous,
        entertaining: that’s the Dachshund. The Dachshund’s name comes from the
        German words for badger (dachs) and dog (hund), but you might know the
        Dachshund more informally as a doxie, wiener dog, hot dog, sausage dog,
        or badger dog.
      </StyledP>
      <div>
        <Link href={Routes.DASHBOARD}>
          <ArticleLink>Read whole article</ArticleLink>
        </Link>
        <Comments>4 Comments</Comments>
      </div>
    </StyledSection>
  </StyledArticle>
)
