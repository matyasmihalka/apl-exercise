import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export const StyledDiv = styled.div`
  ${typography.paragraph.small}
  color: ${colors.text.secondary};

  span {
    margin: 0 0.5rem;
  }
`
