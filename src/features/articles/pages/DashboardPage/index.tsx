import type { NextPage } from 'next'

import { DogIcon } from '~/features/ui/components/Header/parts/DogIcon'
import { Layout } from '~/features/ui/components/Layout'
import { MainContainer } from '~/features/ui/components/MainContainer'
import { MuiButton } from '~/features/ui/components/MuiButton'

export const DashboardPage: NextPage = () => {
  return (
    <Layout>
      <MainContainer>
        <div>Dashboard Page, deployed on Vercel</div>
        <MuiButton variant="contained">Bigger Button</MuiButton>
        <DogIcon />
      </MainContainer>
    </Layout>
  )
}
