import { format } from 'date-fns'
import type { FC } from 'react'

import { StyledDiv } from './styled'

type Props = {
  createdAt: string
  className?: string
}

export const AuthorContainer: FC<Props> = ({ createdAt, className }) => (
  <StyledDiv className={className}>
    {' '}
    John Newmann <span>&nbsp;&bull;</span>{' '}
    {format(new Date(createdAt), 'dd/MM/yyyy')}
  </StyledDiv>
)
