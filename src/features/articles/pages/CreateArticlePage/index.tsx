import { Button, TextField } from '@mui/material'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'

import { Layout } from '~/features/ui/components/Layout'
import { MainContainer } from '~/features/ui/components/MainContainer'

export const CreateArticlePage: NextPage = () => {
  const [uploadedImg, setUploadedImg] = useState<File | null>()
  console.log(uploadedImg)
  return (
    <Layout>
      <MainContainer>
        <h1>Create New Article</h1>

        <Button variant="contained">Publish Article</Button>
        <form action="">
          <TextField
            // {...register('username')}
            id="title"
            label="Title"
            variant="outlined"
            sx={{ width: '100%', marginBottom: '1.6rem' }}
            type="text"
            // error={!!errors.username}
            // helperText={capitalizeFirstLetter(errors?.username?.message)}
          />
          <p>Featured Image</p>
          {/* <input
            type="file"
            name="myImage"
            // onChange={(event) => {
            //   console.log(event.target.files[0])
            //   setSelectedImage(event.target.files[0])
            // }}
          /> */}
          {/* <Button variant="contained" color="secondary" size="small">
            Upload Image
          </Button> */}
          {uploadedImg && (
            <Image
              src={URL.createObjectURL(uploadedImg)}
              width="272px"
              height="244px"
              layout="fixed"
              alt="Uploaded dog"
              objectFit="cover"
              priority
            />
          )}

          <label>
            <input
              //   id="btn-upload"
              name="btn-upload"
              style={{ display: 'none' }}
              type="file"
              accept="image/*"
              onChange={(e) => {
                e.target.files && setUploadedImg(e.target.files[0])
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              size="small"
              component="span"
            >
              Upload Image
            </Button>
          </label>
          <TextField
            id="content"
            label="Content"
            multiline
            rows={20}
            sx={{ width: '100%' }}
          />
        </form>
      </MainContainer>
    </Layout>
  )
}
