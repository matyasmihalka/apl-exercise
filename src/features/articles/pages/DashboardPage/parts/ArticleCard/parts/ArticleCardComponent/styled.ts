import styled from 'styled-components'

import { AuthorContainer } from '~/features/articles/components/AuthorContainer'
import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export const StyledArticle = styled.article`
  display: flex;
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

export const StyledAuthorContainer = styled(AuthorContainer)`
  margin-bottom: 1.6rem;
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
