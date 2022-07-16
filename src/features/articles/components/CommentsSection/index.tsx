import type { FC } from 'react'

import { CommentCard } from './parts/CommentCard'

import type { CommentType } from '../../types'

type Props = {
  comments: CommentType[]
}

export const CommentsSection: FC<Props> = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <CommentCard key={comment.commentId} comment={comment} />
      ))}
    </div>
  )
}
