import { useRouter } from 'next/router'
import type { FC, ReactNode } from 'react'
import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { createContext } from 'react'

import { Routes } from '~/features/core/constants/routes'

import {
  getPersistedUser,
  removeAccessToken,
  removePersistedUser,
} from '../storage'

type ContextValue = {
  username: string | null
  setUsername: (username: string) => void
  handleLogout: () => void
}

export const UserContext = createContext<ContextValue>({
  username: null,
  // eslint-disable-next-line no-empty-function
  setUsername: () => {},
  // eslint-disable-next-line no-empty-function
  handleLogout: () => {},
})

export const UserContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [username, setUsername] = useState<string | null>(null)

  useEffect(() => setUsername(getPersistedUser()), [])
  const router = useRouter()

  const handleLogout = useCallback(() => {
    setUsername(null)
    removePersistedUser()
    removeAccessToken()
    void router.push(Routes.LOGIN)
  }, [router])

  const value = useMemo(
    () => ({
      username,
      setUsername,
      handleLogout,
    }),
    [username, setUsername, handleLogout]
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUserContext = () => {
  return useContext(UserContext)
}
