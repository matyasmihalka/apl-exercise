import Button from '@mui/material/Button'
import type { NextPage } from 'next'

import { MainContainer } from '~/features/ui/components/MainContainer'

export const DashboardPage: NextPage = () => {
  return (
    <MainContainer>
      <div>Dashboard Page, deployed on Vercel</div>
      <Button variant="contained">Contained</Button>
    </MainContainer>
  )
}
