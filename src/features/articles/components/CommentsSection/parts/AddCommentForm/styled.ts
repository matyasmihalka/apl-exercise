import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'

export const AuthorWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`

export const CommentWrapper = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`

export const StyledForm = styled.form`
  margin-bottom: 2.4rem;
`
export const ErrorP = styled.p`
  color: ${colors.accent.error};
`
