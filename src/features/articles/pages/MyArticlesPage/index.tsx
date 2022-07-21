import { Button } from '@mui/material'
import type { NextPage } from 'next'
import Link from 'next/link'

import { Routes } from '~/features/core/constants/routes'
import { withPrivateRoute } from '~/features/login/hocs/withPrivateRoute'
import { Layout } from '~/features/ui/components/Layout'

import { DataTable } from './parts/DataTable'
import { HeadingWrapper, PositionedMainContainer, StyledH1 } from './styled'

export const MyArticles: NextPage = () => {
  return (
    <Layout>
      <PositionedMainContainer>
        <HeadingWrapper>
          <StyledH1>My Articles</StyledH1>

          <Link href={Routes.CREATE}>
            <Button variant="contained">Create new article</Button>
          </Link>
        </HeadingWrapper>
        <DataTable />
      </PositionedMainContainer>
    </Layout>
  )
}

export const PrivateMyArticles = withPrivateRoute(MyArticles)
