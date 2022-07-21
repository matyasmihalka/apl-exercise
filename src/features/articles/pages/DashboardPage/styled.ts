import styled from 'styled-components'

import { mq } from '~/features/ui/theme/mq'
import { typography } from '~/features/ui/theme/typography'

export const StyledH1 = styled.h1`
  ${typography.heading.h1}
  margin: 6rem 0;
`

export const PageLayout = styled.div`
  ${mq.large} {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`

export const StyledAside = styled.aside`
  display: none;

  ${mq.large} {
    display: block;
  }
`

export const UList = styled.ul`
  list-style: none;
  padding: 0;
`
