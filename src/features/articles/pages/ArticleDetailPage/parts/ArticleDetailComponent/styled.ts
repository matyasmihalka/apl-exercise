import styled from 'styled-components'

import { AuthorContainer } from '~/features/articles/components/AuthorContainer'
import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'
import { typography } from '~/features/ui/theme/typography'

export const StyledH1 = styled.h1`
  ${typography.heading.h1}
  margin-bottom: 2.4rem;
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
  margin-top: 6rem;
  padding-bottom: 10rem;

  ${mq.medium} {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2.4rem;
  }
`

export const StyledDiv = styled.div`
  ${typography.paragraph.large}
  color: ${colors.text.base};
  line-height: 3.4rem;
  border-bottom: 1px ${colors.border.light} solid;
  padding-bottom: 4rem; ;
`

export const StyledH2 = styled.h2`
  ${typography.heading.h2}
  margin: 2.4rem 0;
`
