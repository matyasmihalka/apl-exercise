import styled from 'styled-components'

import { MainContainer } from '~/features/ui/components/MainContainer'
import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export const PositionedMainContainer = styled(MainContainer)`
  margin-top: 4.8rem;
`

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
`

export const StyledH1 = styled.h1`
  ${typography.heading.h1}
  color: ${colors.text.base};
  margin-right: 4.4rem;
`
