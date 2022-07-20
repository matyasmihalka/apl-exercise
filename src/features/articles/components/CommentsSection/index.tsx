import type { FC } from 'react'

import { AddCommentForm } from './parts/AddCommentForm'
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
      <AddCommentForm articleId={articleID} />
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
