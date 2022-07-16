import type { FC } from 'react'

import type { CommentType } from '~/features/articles/types'

import { InitialsIcon } from './parts/InitialsIcon'
import { AuthorRow, CommentContainer, LeftContainer, StyledP } from './styled'

type Props = {
  comment: CommentType
}

export const CommentCard: FC<Props> = ({ comment }) => {
  const [firstName, lastName] = comment.author.split(' ')

  return (
    <CommentContainer>
      <InitialsIcon initials={`${firstName[0]}${lastName[0]}`} />
      <LeftContainer>
        <AuthorRow>
          <h3>{comment.author}</h3>
          <span>{comment.createdAt}</span>
        </AuthorRow>
        <StyledP>{comment.content}</StyledP>
      </LeftContainer>
    </CommentContainer>
  )
}
