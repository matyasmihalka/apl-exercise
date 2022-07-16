import { CircularProgress } from '@mui/material'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import blurredDoggo from '~/features/articles/fixtures/assets/chesterBlurred.jpg'
import { Layout } from '~/features/ui/components/Layout'

import { ArticleDetailComponent } from './parts/ArticleDetailComponent'
import { FlexMainContainer, PositionedSpinner } from './styled'

import { useArticleDetail } from '../../hooks/useArticleDetail'
import { useImage } from '../../hooks/useImage'

export const ArticleDetailPage: NextPage = () => {
  const router = useRouter()
  const { articleID = '' } = router.query
  const id = Array.isArray(articleID) ? '' : articleID
  const { articleDetail } = useArticleDetail(id)

  const { imageObjectURL } = useImage(articleDetail?.imageId)

  const img = imageObjectURL ? imageObjectURL : blurredDoggo

  return (
    <Layout>
      <FlexMainContainer>
        {!articleDetail ? (
          <PositionedSpinner>
            <CircularProgress color="primary" />
          </PositionedSpinner>
        ) : (
          <ArticleDetailComponent article={articleDetail} img={img} />
        )}
      </FlexMainContainer>
    </Layout>
  )
}
