import styled from 'styled-components'

import { colors } from '../../theme/colors'
import { mq } from '../../theme/mq'
import { MainContainer } from '../MainContainer'

export const StyledHeader = styled.header`
  background: ${colors.background.dimmed};
`

export const HeaderContainer = styled(MainContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderItem = styled.div`
  margin-right: 1rem;

  color: ${colors.text.base};

  ${mq.medium} {
    margin-right: 4rem;
  }
`

export const HeaderIcon = styled.div`
  margin-right: 1rem;

  ${mq.medium} {
    margin-right: 4rem;
  }
`

export const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;

  ${HeaderItem}:nth-child(3) {
    color: ${colors.text.secondary};
  }
`

export const LoginLink = styled.a`
  color: ${colors.accent.primary};
  cursor: pointer;
`
