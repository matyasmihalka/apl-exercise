import type { NextPage } from 'next'
// import { useEffect } from 'react'

import { Layout } from '~/features/ui/components/Layout'
import { MainContainer } from '~/features/ui/components/MainContainer'

import { ArticleCard } from './parts/ArticleCard'
import { StyledH1 } from './styled'

import { useArticles } from '../../hooks/useArticles'

export const DashboardPage: NextPage = () => {
  // const [img, setImg] = useState()

  const { articles } = useArticles()
  // const articles = data.items
  console.log(articles)

  return (
    <Layout>
      <MainContainer>
        <StyledH1>Recent Articles</StyledH1>
        <ArticleCard />
      </MainContainer>
    </Layout>
  )
}
