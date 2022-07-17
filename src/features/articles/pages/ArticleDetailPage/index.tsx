import { CircularProgress } from '@mui/material'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import blurredDoggo from '~/features/articles/fixtures/assets/chesterBlurred.jpg'
import { useArticleDetail } from '~/features/articles/hooks/useArticleDetail'
import { useArticles } from '~/features/articles/hooks/useArticles'
import { useImage } from '~/features/articles/hooks/useImage'
import { Layout } from '~/features/ui/components/Layout'

import { ArticleDetailComponent } from './parts/ArticleDetailComponent'
import { FlexMainContainer, PositionedSpinner } from './styled'

export const ArticleDetailPage: NextPage = () => {
  const router = useRouter()
  const { articleID = '' } = router.query
  const id = Array.isArray(articleID) ? '' : articleID
  const { articleDetail } = useArticleDetail(id)
  const { imageObjectURL } = useImage(articleDetail?.imageId)
  const { articles: relatedArticles } = useArticles()

  const img = imageObjectURL ? imageObjectURL : blurredDoggo

  return (
    <Layout>
      <FlexMainContainer>
        {!articleDetail ? (
          <PositionedSpinner>
            <CircularProgress color="primary" />
          </PositionedSpinner>
        ) : (
          <ArticleDetailComponent
            article={articleDetail}
            img={img}
            relatedArticles={relatedArticles}
          />
        )}
      </FlexMainContainer>
    </Layout>
  )
}
