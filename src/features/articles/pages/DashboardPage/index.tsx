import type { NextPage } from 'next'
import { useEffect } from 'react'

import { Layout } from '~/features/ui/components/Layout'
import { MainContainer } from '~/features/ui/components/MainContainer'

import { ArticleCard } from './parts/ArticleCard'
import { StyledH1 } from './styled'

export const DashboardPage: NextPage = () => {
  // const [img, setImg] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://fullstack.exercise.applifting.cz/articles',
        {
          method: 'GET',
          headers: {
            'X-API-KEY': '568bb63d-f9c5-456f-9d5d-bb73e3ecefed',
          },
        }
      )
      console.log(await response.json())
    }

    // const fetchImage = async () => {
    //   const response = await fetch(
    //     'https://fullstack.exercise.applifting.cz/images/2a587679-25e0-4ce7-9bee-3df79cd1348c',
    //     {
    //       method: 'GET',
    //       headers: {
    //         'X-API-KEY': '568bb63d-f9c5-456f-9d5d-bb73e3ecefed',
    //       },
    //     }
    //   )
    //   const imageBlob = await response.blob()
    //   const imageObjectURL = URL.createObjectURL(imageBlob)
    //   setImg(imageObjectURL)

    //   // console.log(await response)
    //   console.log(imageObjectURL)
    // }

    void fetchData()
    // void fetchImage()
  }, [])

  return (
    <Layout>
      <MainContainer>
        <StyledH1>Recent Articles</StyledH1>
        <ArticleCard />
      </MainContainer>
    </Layout>
  )
}
