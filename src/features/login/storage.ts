export const getPersistedUser = (): string | null => {
  const username = window.localStorage.getItem('username')
  return username ? username : null
}

export const removePersistedUser = () => {
  window.localStorage.removeItem('username')
}

export const removeAccessToken = () => {
  window.localStorage.removeItem('accessToken')
}

export const setPersistedUser = (username: string) => {
  window.localStorage.setItem('username', username)
}

export const setAccessToken = (accessToken: string) => {
  window.localStorage.setItem('accessToken', accessToken)
}

export const getAccessToken = () => {
  return window.localStorage.getItem('accessToken')
}
