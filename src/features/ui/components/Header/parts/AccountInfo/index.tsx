import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

import { InitialsIconMenu } from './parts/InitialsIconMenu'
import { HeaderItemRight, PrimaryHeaderItemRight, Wrapper } from './styled'

type Props = {
  activeItem: string
}

export const AccountInfo: FC<Props> = ({ activeItem }) => {
  return (
    <Wrapper>
      <HeaderItemRight isActive={activeItem === '/myarticles'}>
        <Link href={Routes.MYARTICLES}>My articles</Link>
      </HeaderItemRight>
      <PrimaryHeaderItemRight>
        <Link href={Routes.CREATE}>Create Article</Link>
      </PrimaryHeaderItemRight>
      <HeaderItemRight>
        <InitialsIconMenu />
      </HeaderItemRight>
    </Wrapper>
  )
}
