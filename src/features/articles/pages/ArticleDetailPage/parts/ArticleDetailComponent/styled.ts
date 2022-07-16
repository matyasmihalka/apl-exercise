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
  height: 400px;
  margin-bottom: 2.4rem;
`

export const ArticleContainer = styled.section`
  width: 70%;
`

export const StyledP = styled.p`
  ${typography.paragraph.normal}
  color: ${colors.text.base};
`
