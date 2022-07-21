import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Routes } from '~/features/core/constants/routes'

import { useUserContext } from '../contexts/userContext'
import { getPersistedUser } from '../storage'

export const withPrivateRoute = (WrappedComponent: NextPage): NextPage => {
  const HOCComponent: NextPage = ({ ...props }) => {
    const router = useRouter()

    const { username } = useUserContext()

    useEffect(() => {
      const checkUser = async () => {
        // we have to check the localStorage directly to ensure on page reload the user is directly checked
        if (!getPersistedUser()) await router.replace(Routes.LOGIN)
      }
      checkUser().catch(console.error)
    }, [router])

    // flickering is mainly happening because router.replace returns a promise
    // For authenticated users we immediately return the requested page
    // for not auth we return an empty page until the re-routing resolves
    if (username) {
      return <WrappedComponent {...props} />
    }
    return null
  }
  return HOCComponent
}
