import { useQuery } from 'react-query'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

const useImage = (id: string) => {
  const result = useQuery(['articles', id], async () => {
    const response = await fetch(`${apiUrl}/images/${id}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': '568bb63d-f9c5-456f-9d5d-bb73e3ecefed',
        'Content-Type': 'image/jpeg',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to load articles`)
    }

    return await response.blob()
  })

  const imageObjectURL = result.isSuccess
    ? URL.createObjectURL(result.data)
    : ''

  return { ...result, imageObjectURL }
}

export { useImage }
