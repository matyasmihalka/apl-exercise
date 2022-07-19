/* eslint-disable react/forbid-dom-props */
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField } from '@mui/material'
import type { NextPage } from 'next'
import type { ChangeEvent } from 'react'
import { useEffect } from 'react'
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

import { useEditArticle } from '../../hooks/useEditArticle'
import { useImage } from '../../hooks/useImage'
import { usePublishArticle } from '../../hooks/usePublishArticle'
import { useUploadImage } from '../../hooks/useUploadImage'
import type { ArticleDetailTye, PerexProp } from '../../types'

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

type Props = {
  articleToEdit?: ArticleDetailTye
}

export const CreateArticlePage: NextPage<Props> = ({ articleToEdit }) => {
  const [uploadedImgURL, setUploadedImgURL] = useState<string | null>(null)
  const [imgIdError, setImgIdError] = useState('')
  const [imgId, setImgId] = useState('')
  const [imgURLChangeTracker, setImgURLChangeTracker] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleInputTypes>({
    resolver: yupResolver(ArticleFromSchema),
  })

  const { imageObjectURL } = useImage(articleToEdit?.imageId)

  // Tracking the change if img URL as it updates with every window focus
  // we need to tach teh first URL then its controlled with the component state
  if (imageObjectURL && !imgURLChangeTracker) {
    setImgURLChangeTracker(imageObjectURL)
    setUploadedImgURL(imageObjectURL)
  }

  useEffect(() => {
    if (articleToEdit) {
      setImgId(articleToEdit.imageId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { mutate: mutateImage, data: imgData } = useUploadImage()
  const { mutate: mutateArticle } = usePublishArticle()
  const { mutate: mutateEditArticle } = useEditArticle()

  useEffect(() => {
    if (imgData) {
      setImgId(imgData[0].imageId)
    }
  }, [imgData])

  const perex = articleToEdit && (JSON.parse(articleToEdit.perex) as PerexProp)

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedImgURL(URL.createObjectURL(e.target.files[0]))
      mutateImage(e.target.files[0])
      setImgIdError('')
    }
  }

  const handleForm = (data: ArticleInputTypes) => {
    if (!articleToEdit) {
      if (imgId) {
        const perex = JSON.stringify({
          perex: data.perex,
          firstName: data.firstName,
          lastName: data.lastName,
        })

        const dataToSubmit = {
          title: data.title,
          perex: perex,
          content: data.content,
          imageId: imgId,
        }
        mutateArticle(dataToSubmit)
      } else {
        setImgIdError('Image is required')
      }
    } else {
      if (imgId) {
        const perex = JSON.stringify({
          perex: data.perex,
          firstName: data.firstName,
          lastName: data.lastName,
        })

        const dataToSubmit = {
          title: data.title,
          perex: perex,
          content: data.content,
          imageId: imgId,
        }
        mutateEditArticle({
          id: articleToEdit.articleId,
          article: { ...dataToSubmit },
        })
      } else {
        setImgIdError('Image is required')
      }
    }
  }

  return (
    <Layout>
      <PositionedMainContainer>
        <HeadingWrapper>
          {articleToEdit ? (
            <StyledH1>Edit Article</StyledH1>
          ) : (
            <StyledH1>Create New Article</StyledH1>
          )}

          <div>
            <Button variant="contained" form="createForm" type="submit">
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
            defaultValue={articleToEdit && articleToEdit.title}
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
              defaultValue={perex && perex.firstName}
            />
            <TextField
              {...register('lastName')}
              label="Last Name"
              type="text"
              error={!!errors.lastName}
              helperText={capitalizeFirstLetter(errors?.lastName?.message)}
              name="lastName"
              defaultValue={perex && perex.lastName}
            />
          </AuthorWrapper>

          <StyledP>Featured Image</StyledP>
          <ImageUpload
            uploadedImgURL={uploadedImgURL}
            setUploadedImgURL={setUploadedImgURL}
            handleImageUpload={handleImageUpload}
            imgIdError={imgIdError}
            setImgId={setImgId}
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
            defaultValue={perex && perex.perex}
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
            defaultValue={articleToEdit && articleToEdit.content}
          />
        </form>
      </PositionedMainContainer>
    </Layout>
  )
}
