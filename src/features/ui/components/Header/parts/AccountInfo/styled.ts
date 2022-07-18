import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'

import { HeaderItem } from '../../styled'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderItemRight = styled(HeaderItem)`
  margin-left: 1rem;
  margin-right: 0;

  ${mq.medium} {
    margin-left: 4rem;
  }
`

export const PrimaryHeaderItemRight = styled(HeaderItemRight)`
  color: ${colors.accent.primary};
  cursor: pointer;

  &:hover {
    color: ${colors.accent.primaryHover};
  }
`
