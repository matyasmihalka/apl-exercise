import styled, { css } from 'styled-components'

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

type HeaderItemProps = {
  isActive?: boolean
}

export const HeaderItem = styled.div<HeaderItemProps>`
  margin-right: 1rem;

  color: ${colors.text.secondary};

  &:hover {
    color: ${colors.text.base};
  }

  ${(props) =>
    props.isActive &&
    css`
      color: ${colors.text.base};
    `}

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
