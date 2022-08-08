import { CircularProgress } from '@mui/material'
import type { GetStaticProps, NextPage } from 'next'
// import { useRouter } from 'next/router'

import { publicApi } from '~/features/api'
import blurredDoggo from '~/features/articles/fixtures/assets/chesterBlurred.jpg'
// import { useArticleDetail } from '~/features/articles/hooks/useArticleDetail'
import { useArticles } from '~/features/articles/hooks/useArticles'
import { useImage } from '~/features/articles/hooks/useImage'
import { Layout } from '~/features/ui/components/Layout'

import { ArticleDetailComponent } from './parts/ArticleDetailComponent'
import { FlexMainContainer, PositionedSpinner } from './styled'

import type { ArticleDetailTye, ArticlesResponse } from '../../types'

type Props = {
  articleDetail: ArticleDetailTye
}

export const ArticleDetailPage: NextPage<Props> = ({ articleDetail }) => {
  // const router = useRouter()
  // const { articleID = '' } = router.query
  // const id = Array.isArray(articleID) ? '' : articleID
  // const { articleDetail } = useArticleDetail(id)
  const { imageObjectURL } = useImage(articleDetail?.imageId)
  const { articles: allArticles } = useArticles()

  const relatedArticles = allArticles
    .slice(0, 5)
    .filter((article) => article.articleId !== articleDetail?.articleId)

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

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths = async () => {
  const response = await publicApi.get('articles')

  if (!response.ok) {
    throw new Error(`Failed to load articles`)
  }

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const articles = (await response.json()) as ArticlesResponse
  const paths = articles.items.map((article) => ({
    params: { articleID: article.articleId },
  }))

  return {
    // paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  }
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    throw new Error(`Params are not defined`)
  }

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const response = await publicApi.get(`articles/${params.articleID}`)
  if (!response.ok) {
    throw new Error(`Failed to load article detail`)
  }
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const article = (await response.json()) as ArticleDetailTye
  return {
    props: { articleDetail: article }, // will be passed to the page component as props
  }
}
