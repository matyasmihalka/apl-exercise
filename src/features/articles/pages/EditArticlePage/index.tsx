import { CircularProgress } from '@mui/material'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { useArticleDetail } from '~/features/articles/hooks/useArticleDetail'
import { Layout } from '~/features/ui/components/Layout'

import { FlexMainContainer, PositionedSpinner } from './styled'

// import { Layout } from '~/features/ui/components/Layout'

import { CreateArticlePage } from '../CreateArticlePage'

export const EditArticlePage: NextPage = () => {
  const router = useRouter()
  const { articleID = '' } = router.query
  const id = Array.isArray(articleID) ? '' : articleID
  const { articleDetail } = useArticleDetail(id)

  return (
    <div>
      {!articleDetail ? (
        <Layout>
          <FlexMainContainer>
            <PositionedSpinner>
              <CircularProgress color="primary" />
            </PositionedSpinner>
          </FlexMainContainer>
        </Layout>
      ) : (
        <CreateArticlePage articleToEdit={articleDetail} />
      )}
    </div>
  )
}
