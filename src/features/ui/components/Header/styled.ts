import styled from 'styled-components'

import { colors } from '../../theme/colors'
import { MainContainer } from '../MainContainer'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background: ${colors.background.dimmed};
`

export const HeaderContainer = styled(MainContainer)`
  display: flex;
  justify-content: space-between;
  /* padding: 0 2rem; */
`

export const HeaderItem = styled.div`
  margin-right: 4rem;
  padding: 1.7rem 0;
  color: ${colors.text.base};
`

export const HeaderIcon = styled.div`
  margin-right: 4rem;
`

export const LeftSideContainer = styled.div`
  display: flex;

  ${HeaderItem}:nth-child(3) {
    color: ${colors.text.secondary};
  }
`
