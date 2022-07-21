import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'
import { typography } from '~/features/ui/theme/typography'

export const StyledAside = styled.aside`
  margin-top: 1.6rem;
  display: none;

  ${mq.medium} {
    display: block;
  }
`

export const StyledH3 = styled.h3`
  ${typography.heading.h3}
  color: ${colors.text.base};
  margin-bottom: 3.2rem;
`

export const StyledH4 = styled.h4`
  ${typography.heading.h4}
  color: ${colors.text.base};
  margin-bottom: 0.8rem;
`

export const StyledP = styled.p`
  ${typography.paragraph.small}
  color: ${colors.text.secondary};
  margin-bottom: 2.4rem;
`

export const Container = styled.div`
  border-left: 1px ${colors.border.light} solid;
  padding-bottom: 6rem;
  padding-left: 2.4rem;
`

export const ArticleWrapper = styled.a`
  cursor: pointer;

  &:hover {
    background-color: ${colors.background.dimmed};
  }
`

export const UList = styled.ul`
  list-style: none;
  padding: 0;
`
