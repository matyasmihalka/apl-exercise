/* eslint-disable react/forbid-dom-props */
import { Button } from '@mui/material'
import Image from 'next/image'
import type { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'

import {
  ErrorText,
  HiddenInput,
  ImgUploadWrapper,
  ImgWrapper,
  Separator,
} from './styled'

type Props = {
  uploadedImgURL: string | null
  setUploadedImgURL: Dispatch<SetStateAction<string | null>>
  handleImageUpload: (e: ChangeEvent<HTMLInputElement>) => void
  imgIdError: string
  setImgId: Dispatch<SetStateAction<string>>
}

export const ImageUpload: FC<Props> = ({
  uploadedImgURL,
  handleImageUpload,
  setUploadedImgURL,
  imgIdError,
  setImgId,
}) => {
  return (
    <ImgUploadWrapper>
      {uploadedImgURL && (
        <ImgWrapper>
          <Image
            src={uploadedImgURL}
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
          onChange={handleImageUpload}
        />
        {!uploadedImgURL ? (
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
      {uploadedImgURL && (
        <>
          <Separator />
          <Button
            variant="text"
            color="error"
            size="small"
            onClick={() => {
              setUploadedImgURL(null)
              setImgId('')
            }}
          >
            Delete
          </Button>
        </>
      )}
      {imgIdError && <ErrorText>{imgIdError}</ErrorText>}
    </ImgUploadWrapper>
  )
}
