import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export const StyledArticle = styled.article`
  display: flex;
  width: 70%;
`

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
`

export const ImgWrapper = styled.div`
  margin-right: 2.4rem;
`

export const StyledH2 = styled.h2`
  ${typography.heading.h2}
  margin-bottom: 1.6rem;
  color: ${colors.text.base};
`

export const AuthorContainer = styled.div`
  ${typography.paragraph.small}
  color: ${colors.text.secondary};
  margin-bottom: 1.6rem;

  span {
    margin: 0 0.5rem;
  }
`

export const StyledP = styled.p`
  ${typography.paragraph.normal}
  margin-bottom: 2rem;
`

export const ArticleLink = styled.a`
  ${typography.paragraph.small}
  color: ${colors.accent.primary};
  cursor: pointer;
  padding: 0 0.8rem;
  margin-right: 1rem;
`

export const Comments = styled.span`
  ${typography.paragraph.small}
  color: ${colors.text.secondary};
`
