import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export const CommentContainer = styled.div`
  display: flex;
  margin-bottom: 2.4rem;
`

export const AuthorRow = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.8rem;

  h3 {
    ${typography.heading.h4}
    color: ${colors.text.base};
    margin-right: 0.8rem;
  }

  span {
    ${typography.paragraph.small}
    color: ${colors.text.secondary};
  }
`

export const StyledP = styled.p`
  ${typography.paragraph.normal}
  color: ${colors.text.base};
`

export const LeftContainer = styled.div`
  margin-left: 2.4rem;
`
