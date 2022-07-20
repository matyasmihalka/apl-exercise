import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField } from '@mui/material'
import type { FC } from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { useAddComment } from '~/features/articles/hooks/useAddComment'

import { AuthorWrapper, CommentWrapper, StyledForm } from './styled'

const CommentFromSchema = yup
  .object({
    content: yup.string().min(5).max(300).required(),
    firstName: yup.string().min(3).required(),
    lastName: yup.string().min(3).required(),
  })
  .required()

export type CommentInputTypes = yup.InferType<typeof CommentFromSchema>

function capitalizeFirstLetter(string: string | undefined) {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  return ''
}

type Props = {
  articleId: string
}

export const AddCommentForm: FC<Props> = ({ articleId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentInputTypes>({
    resolver: yupResolver(CommentFromSchema),
  })

  const { mutate, isSuccess } = useAddComment()

  useEffect(() => {
    if (isSuccess) {
      console.log(isSuccess)
    }
  }, [isSuccess])

  const submitFormHandler = (data: CommentInputTypes) => {
    console.log('Submitting')
    console.log(data)
    const dataToSubmit = {
      author: `${data.firstName} ${data.lastName}`,
      content: data.content,
      articleId: articleId,
    }
    mutate(dataToSubmit)
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <StyledForm onSubmit={handleSubmit(submitFormHandler)}>
      <AuthorWrapper>
        <TextField
          {...register('firstName')}
          id="firstName"
          label="First Name"
          variant="outlined"
          sx={{ width: '100%' }}
          type="text"
          size="small"
          error={!!errors.firstName}
          helperText={capitalizeFirstLetter(errors?.firstName?.message)}
        />
        <TextField
          {...register('lastName')}
          id="lastName"
          label="Last Name"
          variant="outlined"
          sx={{ width: '100%' }}
          type="text"
          size="small"
          error={!!errors.firstName}
          helperText={capitalizeFirstLetter(errors?.firstName?.message)}
        />
      </AuthorWrapper>
      <CommentWrapper>
        <TextField
          {...register('content')}
          id="comment"
          label="Comment"
          multiline
          rows={2}
          sx={{ width: '100%' }}
          size="small"
          error={!!errors.content}
          helperText={capitalizeFirstLetter(errors?.content?.message)}
        />
        <Button variant="contained" type="submit">
          Comment
        </Button>
      </CommentWrapper>
    </StyledForm>
  )
}
