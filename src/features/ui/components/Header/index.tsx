import Link from 'next/link'
import { useRouter } from 'next/router'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'
import { useUserContext } from '~/features/login/contexts/userContext'

import { AccountInfo } from './parts/AccountInfo'
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
  const { username } = useUserContext()
  const router = useRouter()

  const activeItem = router.pathname

  return (
    <StyledHeader>
      <HeaderContainer as="nav">
        <LeftSideContainer>
          <HeaderIcon>
            <DogIcon />
          </HeaderIcon>
          <HeaderItem isActive={activeItem === '/'}>
            <Link href={Routes.DASHBOARD}>Recent Articles</Link>{' '}
          </HeaderItem>
          <HeaderItem>About</HeaderItem>
        </LeftSideContainer>
        {username ? (
          <AccountInfo activeItem={activeItem} />
        ) : (
          <Link href={Routes.LOGIN}>
            <LoginLink>
              Log in <RightArrowIcon />
            </LoginLink>
          </Link>
        )}
      </HeaderContainer>
    </StyledHeader>
  )
}
