import type { FC } from 'react'

import { CommentCard } from './parts/CommentCard'

// import { useVoteUp } from '../../hooks/useVoteUp'
import type { CommentType } from '../../types'

type Props = {
  comments: CommentType[]
  articleID: string
}

export const CommentsSection: FC<Props> = ({ comments, articleID }) => {
  return (
    <div>
      {comments.map((comment) => (
        <CommentCard
          key={comment.commentId}
          comment={comment}
          articleID={articleID}
        />
      ))}
    </div>
  )
}
