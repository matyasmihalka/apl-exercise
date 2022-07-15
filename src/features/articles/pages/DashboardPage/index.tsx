import type { NextPage } from 'next'

import { Layout } from '~/features/ui/components/Layout'
import { MainContainer } from '~/features/ui/components/MainContainer'

import { ArticleComponent } from './parts/ArticleComponent'
import { StyledH1 } from './styled'

export const DashboardPage: NextPage = () => {
  return (
    <Layout>
      <MainContainer>
        <StyledH1>Recent Articles</StyledH1>
        <ArticleComponent />
      </MainContainer>
    </Layout>
  )
}
