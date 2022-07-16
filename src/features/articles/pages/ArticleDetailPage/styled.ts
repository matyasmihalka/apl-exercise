import styled from 'styled-components'

import { typography } from '~/features/ui/theme/typography'

import { AuthorContainer } from '../../components/AuthorContainer'

export const StyledH1 = styled.h1`
  ${typography.heading.h1}
  margin: 6rem 0 2.4rem 0;
`

export const StyledAuthorContainer = styled(AuthorContainer)`
  margin-bottom: 2.4rem;
`
