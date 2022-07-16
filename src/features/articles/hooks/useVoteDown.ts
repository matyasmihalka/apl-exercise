import { useMutation, useQueryClient } from 'react-query'

import { publicApi } from '~/features/api'

import type { ArticleDetailTye, CommentType } from '../types'

const useVoteDown = (articleID: string) => {
  const queryClient = useQueryClient()

  const commentUpdater = (updatedComment: CommentType, articleID: string) => {
    queryClient.setQueryData<ArticleDetailTye | undefined>(
      ['articles', 'detail', articleID],
      (article) => {
        if (article) {
          const comments = article.comments.map((oldComment) =>
            oldComment.commentId === updatedComment.commentId
              ? updatedComment
              : oldComment
          )
          article.comments = comments
        }

        return article
      }
    )
  }

  const result = useMutation<CommentType, Error, string>(
    'voteUp',
    async (id) => {
      const response = await publicApi.post(`comments/${id}/vote/down`)

      if (!response.ok) {
        throw Error('Vote up failed')
      }

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      return (await response.json()) as CommentType
    },
    {
      onSuccess: (updatedComment) => commentUpdater(updatedComment, articleID),
    }
  )

  return result
}

export { useVoteDown }
