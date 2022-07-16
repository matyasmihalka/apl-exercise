import type { FC } from 'react'
import TimeAgo from 'react-timeago'

import { useVoteDown } from '~/features/articles/hooks/useVoteDown'
import { useVoteUp } from '~/features/articles/hooks/useVoteUp'
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
  articleID: string
}

export const CommentCard: FC<Props> = ({ comment, articleID }) => {
  const [firstName, lastName] = comment.author.split(' ')

  const { score } = comment

  const { mutate: voteUpMutate } = useVoteUp(articleID)
  const { mutate: voteDownMutate } = useVoteDown(articleID)

  const voteUpHandler = () => {
    voteUpMutate(comment.commentId)
  }

  const voteDownHandler = () => {
    voteDownMutate(comment.commentId)
  }

  return (
    <CommentContainer>
      <InitialsIcon initials={`${firstName[0]}${lastName[0]}`} />
      <LeftContainer>
        <AuthorRow>
          <h3>{comment.author}</h3>
          <span>
            <TimeAgo date={comment.createdAt} />
          </span>
        </AuthorRow>
        <StyledP>{comment.content}</StyledP>
        <ActionsContainer>
          <span>{score ? (score > 0 ? `+${score}` : score) : '0'}</span>
          <Button type="button" onClick={voteUpHandler}>
            <UpIcon />
          </Button>
          <Button type="button" onClick={voteDownHandler}>
            <DownIcon />
          </Button>
        </ActionsContainer>
      </LeftContainer>
    </CommentContainer>
  )
}
