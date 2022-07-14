import type { FC } from 'react'

import { DogIcon } from './parts/DogIcon'
import {
  HeaderContainer,
  HeaderIcon,
  HeaderItem,
  LeftSideContainer,
  StyledHeader,
} from './styled'

export const Header: FC = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <LeftSideContainer>
          <HeaderIcon>
            <DogIcon />
          </HeaderIcon>
          <HeaderItem>Recent Articles</HeaderItem>
          <HeaderItem>About</HeaderItem>
        </LeftSideContainer>

        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Login link</a>
      </HeaderContainer>
    </StyledHeader>
  )
}
