import styled from 'styled-components'

import { AuthorContainer } from '~/features/articles/components/AuthorContainer'
import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export const StyledH1 = styled.h1`
  ${typography.heading.h1}
  margin: 6rem 0 2.4rem 0;
`

export const StyledAuthorContainer = styled(AuthorContainer)`
  margin-bottom: 2.4rem;
`

export const ImageWrapper = styled.div`
  position: relative;
  height: 40vh;
  margin-bottom: 2.4rem;
`

export const ArticleContainer = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  padding-bottom: 10rem;
`

export const StyledP = styled.p`
  ${typography.paragraph.large}
  color: ${colors.text.base};
  line-height: 3.4rem;
  margin-bottom: 4rem;
`

export const StyledHr = styled.hr`
  border-color: ${colors.border.light};
  border-width: 1px 0 0 0;
`

export const StyledH2 = styled.h2`
  ${typography.heading.h2}
  margin: 2.4rem 0;
`
