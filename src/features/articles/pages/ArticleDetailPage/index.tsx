import type { NextPage } from 'next'

import { Layout } from '~/features/ui/components/Layout'
import { MainContainer } from '~/features/ui/components/MainContainer'

import { StyledAuthorContainer, StyledH1 } from './styled'

export const ArticleDetailPage: NextPage = () => {
  return (
    <Layout>
      <MainContainer>
        <StyledH1>Article detail page</StyledH1>
        <StyledAuthorContainer createdAt="2022-07-15T12:50:25.23354" />
      </MainContainer>
    </Layout>
  )
}
