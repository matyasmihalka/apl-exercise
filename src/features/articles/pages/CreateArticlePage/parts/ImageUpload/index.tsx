import { Button } from '@mui/material'
import Image from 'next/image'
import type { Dispatch, FC, SetStateAction } from 'react'

import { HiddenInput, ImgUploadWrapper, ImgWrapper, Separator } from './styled'

type Props = {
  uploadedImg: File | null
  setUploadedImg: Dispatch<SetStateAction<File | null>>
}

export const ImageUpload: FC<Props> = ({ uploadedImg, setUploadedImg }) => {
  return (
    <ImgUploadWrapper>
      {uploadedImg && (
        <ImgWrapper>
          <Image
            src={URL.createObjectURL(uploadedImg)}
            width="100%"
            height="100%"
            layout="responsive"
            alt="Uploaded dog"
            objectFit="cover"
            priority
          />
        </ImgWrapper>
      )}

      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        <HiddenInput
          name="img-upload"
          type="file"
          accept="image/*"
          onChange={(e) => {
            e.target.files && setUploadedImg(e.target.files[0])
          }}
        />
        {!uploadedImg ? (
          <Button
            variant="contained"
            color="secondary"
            size="small"
            component="span"
          >
            Upload Image
          </Button>
        ) : (
          <Button variant="text" color="primary" size="small" component="span">
            Upload New
          </Button>
        )}
      </label>
      {uploadedImg && (
        <>
          <Separator />
          <Button
            variant="text"
            color="error"
            size="small"
            onClick={() => setUploadedImg(null)}
          >
            Delete
          </Button>
        </>
      )}
    </ImgUploadWrapper>
  )
}
