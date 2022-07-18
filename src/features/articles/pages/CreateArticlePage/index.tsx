/* eslint-disable react/forbid-dom-props */
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField } from '@mui/material'
import type { NextPage } from 'next'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Layout } from '~/features/ui/components/Layout'

import { ImageUpload } from './parts/ImageUpload'
import {
  HeadingWrapper,
  PositionedMainContainer,
  StyledH1,
  StyledP,
} from './styled'

import { useUploadImage } from '../../hooks/useUploadImage'

const ArticleFromSchema = yup
  .object({
    title: yup.string().min(3).max(50).required(),
    content: yup.string().min(20).max(2000).required(),
  })
  .required()

type ArticleInputTypes = yup.InferType<typeof ArticleFromSchema>

function capitalizeFirstLetter(string: string | undefined) {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  return ''
}

export const CreateArticlePage: NextPage = () => {
  const [uploadedImg, setUploadedImg] = useState<File | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleInputTypes>({
    resolver: yupResolver(ArticleFromSchema),
  })

  const { mutate: mutateImage, data } = useUploadImage()

  const handleForm = (data: ArticleInputTypes) => {
    console.log(data)
    console.log('submitted form')
    if (uploadedImg) {
      mutateImage(uploadedImg)
      console.log('aftermutate')
    }
  }

  if (data) {
    console.log('data from image upload')
    console.log(data)
  }

  return (
    <Layout>
      <PositionedMainContainer>
        <HeadingWrapper>
          <StyledH1>Create New Article</StyledH1>
          <div>
            <Button
              variant="contained"
              form="createForm"
              type="submit"
              // size="small"
            >
              Publish Article
            </Button>
          </div>
        </HeadingWrapper>

        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form id="createForm" onSubmit={handleSubmit(handleForm)}>
          <TextField
            {...register('title')}
            id="title"
            label="Title"
            variant="outlined"
            sx={{ width: '100%', marginBottom: '3.2rem' }}
            type="text"
            error={!!errors.title}
            helperText={capitalizeFirstLetter(errors?.title?.message)}
          />
          <StyledP>Featured Image</StyledP>
          <ImageUpload
            uploadedImg={uploadedImg}
            setUploadedImg={setUploadedImg}
          />

          <TextField
            {...register('content')}
            id="content"
            label="Content"
            multiline
            rows={20}
            sx={{ width: '100%' }}
            error={!!errors.content}
            helperText={capitalizeFirstLetter(errors?.content?.message)}
          />
        </form>
      </PositionedMainContainer>
    </Layout>
  )
}
