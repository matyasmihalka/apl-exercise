import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

import { HeaderItemRight, PrimaryHeaderItemRight, Wrapper } from './styled'

import { InitialsIcon } from '../../../InitialsIcon'

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
        <InitialsIcon initials="M" />
      </HeaderItemRight>
    </Wrapper>
  )
}
