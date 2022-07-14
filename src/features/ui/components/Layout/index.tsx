import type { FC, ReactNode } from 'react'

import { Main } from './styled'

import { Header } from '../Header'

type Props = {
  children: NonNullable<ReactNode>
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Main>
      <Header />
      {children}
    </Main>
  )
}
