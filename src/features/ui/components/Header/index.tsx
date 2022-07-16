import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

import { DogIcon } from './parts/DogIcon'
import { RightArrowIcon } from './parts/RightArrowIcon'
import {
  HeaderContainer,
  HeaderIcon,
  HeaderItem,
  LeftSideContainer,
  LoginLink,
  StyledHeader,
} from './styled'

export const Header: FC = () => {
  return (
    <StyledHeader>
      <HeaderContainer as="nav">
        <LeftSideContainer>
          <HeaderIcon>
            <DogIcon />
          </HeaderIcon>
          <HeaderItem>
            <Link href={Routes.DASHBOARD}>Recent Articles</Link>{' '}
          </HeaderItem>
          <HeaderItem>About</HeaderItem>
        </LeftSideContainer>
        <Link href={Routes.LOGIN}>
          <LoginLink>
            Log in <RightArrowIcon />
          </LoginLink>
        </Link>
      </HeaderContainer>
    </StyledHeader>
  )
}
