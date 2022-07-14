import styled from 'styled-components'

import { mq, ScreenSize } from '~/features/ui/theme/mq'

export const MainContainer = styled.div`
  margin: 0rem auto;
  padding: 0 0.8rem;
  max-width: ${ScreenSize.large / 10}rem;
  box-sizing: border-box;
  width: 100%;

  ${mq.medium} {
    padding: 0 2rem;
    margin: 0 auto;
  }

  ${mq.large} {
    padding: 0 4rem;
  }
`
