/* eslint-disable react/forbid-dom-props */
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField } from '@mui/material'
import type { NextPage } from 'next'
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Layout } from '~/features/ui/components/Layout'

import { ImageUpload } from './parts/ImageUpload'
import {
  AuthorWrapper,
  HeadingWrapper,
  PositionedMainContainer,
  StyledH1,
  StyledP,
} from './styled'

import { usePublishArticle } from '../../hooks/usePublishArticle'
import { useUploadImage } from '../../hooks/useUploadImage'

const ArticleFromSchema = yup
  .object({
    title: yup.string().min(3).max(50).required(),
    content: yup.string().min(20).max(3000).required(),
    perex: yup.string().min(10).max(300).required(),
    firstName: yup.string().min(3).required(),
    lastName: yup.string().min(3).required(),
  })
  .required()

export type ArticleInputTypes = yup.InferType<typeof ArticleFromSchema>

function capitalizeFirstLetter(string: string | undefined) {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  return ''
}

export const CreateArticlePage: NextPage = () => {
  const [uploadedImg, setUploadedImg] = useState<File | null>(null)
  const [imgIdError, setImgIdError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleInputTypes>({
    resolver: yupResolver(ArticleFromSchema),
  })

  const { mutate: mutateImage, data: imgData } = useUploadImage()
  const { mutate: mutateArticle } = usePublishArticle()

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedImg(e.target.files[0])
      mutateImage(e.target.files[0])
      setImgIdError('')
    }
  }

  const handleForm = (data: ArticleInputTypes) => {
    console.log(data)
    console.log('submitted form')

    if (imgData) {
      console.log('submitting')
      const perex = JSON.stringify({
        perex: data.perex,
        firstName: data.firstName,
        lastName: data.lastName,
      })

      const dataToSubmit = {
        title: data.title,
        perex: perex,
        content: data.content,
        imageId: imgData[0].imageId,
      }
      mutateArticle(dataToSubmit)
    } else {
      setImgIdError('Image is required')
    }
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
          <StyledP>Author details</StyledP>
          <AuthorWrapper>
            <TextField
              {...register('firstName')}
              label="First Name"
              type="text"
              error={!!errors.firstName}
              helperText={capitalizeFirstLetter(errors?.firstName?.message)}
              name="firstName"
            />
            <TextField
              {...register('lastName')}
              label="Last Name"
              type="text"
              error={!!errors.lastName}
              helperText={capitalizeFirstLetter(errors?.lastName?.message)}
              name="lastName"
            />
          </AuthorWrapper>

          <StyledP>Featured Image</StyledP>
          <ImageUpload
            uploadedImg={uploadedImg}
            setUploadedImg={setUploadedImg}
            handleImageUpload={handleImageUpload}
            imgIdError={imgIdError}
          />

          <TextField
            {...register('perex')}
            id="perex"
            label="Short article description"
            multiline
            rows={3}
            sx={{ width: '100%', marginBottom: '3.2rem' }}
            error={!!errors.perex}
            helperText={capitalizeFirstLetter(errors?.perex?.message)}
          />

          <TextField
            {...register('content')}
            id="content"
            label="Content in Markdown"
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
