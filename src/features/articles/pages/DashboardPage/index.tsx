import type { NextPage } from 'next'
// import { useEffect } from 'react'

import { publicApi } from '~/features/api'
import { Layout } from '~/features/ui/components/Layout'
import { MainContainer } from '~/features/ui/components/MainContainer'

import { ArticleCard } from './parts/ArticleCard'
import { PageLayout, StyledH1, UList } from './styled'

// import { useArticles } from '../../hooks/useArticles'
import { articlesListBuilder } from '../../lib/ArticlesListBuilder'
import type { ArticlesResponse, ArticleType } from '../../types'

type Props = {
  articles: ArticleType[]
}

export const DashboardPage: NextPage<Props> = ({ articles }) => {
  // const [img, setImg] = useState()

  // const { articles } = useArticles()
  // const articles = data.items

  return (
    <Layout>
      <MainContainer>
        <PageLayout>
          <UList>
            <StyledH1>Recent Articles</StyledH1>
            {articles.map((article) => (
              <ArticleCard key={article.articleId} article={article} />
            ))}
          </UList>

          <aside />
        </PageLayout>
      </MainContainer>
    </Layout>
  )
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps = async () => {
  const response = await publicApi.get('articles')

  if (!response.ok) {
    throw new Error(`Failed to load articles`)
  }

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const articles = (await response.json()) as ArticlesResponse
  return {
    props: { articles: articlesListBuilder(articles.items) }, // will be passed to the page component as props
  }
}
