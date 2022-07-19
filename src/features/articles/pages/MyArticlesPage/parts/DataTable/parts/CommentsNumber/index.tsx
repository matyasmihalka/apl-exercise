import type { FC } from 'react'

import { useArticleDetail } from '~/features/articles/hooks/useArticleDetail'

type Props = {
  id: string
}

export const CommentsNumber: FC<Props> = ({ id }) => {
  const { articleDetail } = useArticleDetail(id)
  //   const [commentCount, setCommentCount] = useState(0)

  return <p>{articleDetail?.comments.length}</p>
}
