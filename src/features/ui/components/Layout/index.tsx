import type { FC, ReactNode } from 'react'

import { Main } from './styled'

type Props = {
  children: NonNullable<ReactNode>
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Main>
      <header>Header</header>
      {children}
    </Main>
  )
}
