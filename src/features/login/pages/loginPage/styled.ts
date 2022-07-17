import styled from 'styled-components'

import { mq } from '~/features/ui/theme/mq'
import { typography } from '~/features/ui/theme/typography'

export const Wrapper = styled.section`
  margin-top: 6rem;
  width: 95%;

  ${mq.medium} {
    width: 40%;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledH1 = styled.h1`
  ${typography.heading.h2}
  margin-bottom: 2.4rem;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`
