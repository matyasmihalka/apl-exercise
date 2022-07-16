import styled from 'styled-components'

import { MainContainer } from '~/features/ui/components/MainContainer'

export const PositionedSpinner = styled.div`
  display: flex;
  margin: auto;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const FlexMainContainer = styled(MainContainer)`
  display: flex;
  padding-bottom: 8rem;
`
