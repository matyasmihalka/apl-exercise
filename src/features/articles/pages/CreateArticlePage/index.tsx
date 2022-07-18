import { Button, TextField } from '@mui/material'
import type { NextPage } from 'next'
import { useState } from 'react'

import { Layout } from '~/features/ui/components/Layout'

import { ImageUpload } from './parts/ImageUpload'
import {
  HeadingWrapper,
  PositionedMainContainer,
  StyledH1,
  StyledP,
} from './styled'

export const CreateArticlePage: NextPage = () => {
  const [uploadedImg, setUploadedImg] = useState<File | null>(null)

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

        {/* eslint-disable-next-line react/forbid-dom-props */}
        <form id="createForm" onSubmit={() => console.log('submitted')}>
          <TextField
            // {...register('username')}
            id="title"
            label="Title"
            variant="outlined"
            sx={{ width: '100%', marginBottom: '3.2rem' }}
            type="text"
            // error={!!errors.username}
            // helperText={capitalizeFirstLetter(errors?.username?.message)}
          />
          <StyledP>Featured Image</StyledP>
          <ImageUpload
            uploadedImg={uploadedImg}
            setUploadedImg={setUploadedImg}
          />

          <TextField
            id="content"
            label="Content"
            multiline
            rows={20}
            sx={{ width: '100%' }}
          />
        </form>
      </PositionedMainContainer>
    </Layout>
  )
}
