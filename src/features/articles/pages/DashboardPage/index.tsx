import type { NextPage } from 'next'
// import { useEffect } from 'react'

import { Layout } from '~/features/ui/components/Layout'
import { MainContainer } from '~/features/ui/components/MainContainer'

import { ArticleCard } from './parts/ArticleCard'
import { PageLayout, StyledH1 } from './styled'

import { useArticles } from '../../hooks/useArticles'

export const DashboardPage: NextPage = () => {
  // const [img, setImg] = useState()

  const { articles } = useArticles()
  // const articles = data.items

  return (
    <Layout>
      <MainContainer>
        <PageLayout>
          <div>
            <StyledH1>Recent Articles</StyledH1>
            {articles.map((article) => (
              <ArticleCard key={article.articleId} article={article} />
            ))}
          </div>
          <aside />
        </PageLayout>
      </MainContainer>
    </Layout>
  )
}
