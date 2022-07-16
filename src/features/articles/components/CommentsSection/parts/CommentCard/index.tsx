import type { FC } from 'react'

import type { CommentType } from '~/features/articles/types'

import { DownIcon } from './parts/DownIcon'
import { InitialsIcon } from './parts/InitialsIcon'
import { UpIcon } from './parts/UpIcon'
import {
  ActionsContainer,
  AuthorRow,
  Button,
  CommentContainer,
  LeftContainer,
  StyledP,
} from './styled'

type Props = {
  comment: CommentType
}

export const CommentCard: FC<Props> = ({ comment }) => {
  const [firstName, lastName] = comment.author.split(' ')

  const { score } = comment

  return (
    <CommentContainer>
      <InitialsIcon initials={`${firstName[0]}${lastName[0]}`} />
      <LeftContainer>
        <AuthorRow>
          <h3>{comment.author}</h3>
          <span>{comment.createdAt}</span>
        </AuthorRow>
        <StyledP>{comment.content}</StyledP>
        <ActionsContainer>
          <span>{score ? (score > 0 ? `+${score}` : score) : '0'}</span>
          <Button type="button">
            <UpIcon />
          </Button>
          <Button type="button">
            <DownIcon />
          </Button>
        </ActionsContainer>
      </LeftContainer>
    </CommentContainer>
  )
}
