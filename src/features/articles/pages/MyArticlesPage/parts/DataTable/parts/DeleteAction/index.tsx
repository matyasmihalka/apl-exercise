import { IconButton } from '@mui/material'
import type { FC } from 'react'

import { useDeleteArticle } from '~/features/articles/hooks/useDeleteArticle'

import { DeleteIcon } from '../DeleteIcon'

type Props = {
  id: string
}

export const DeleteAction: FC<Props> = ({ id }) => {
  const { mutate } = useDeleteArticle()

  const handleDelete = () => {
    mutate(id)
  }
  return (
    <IconButton color="error" aria-label="delete" onClick={handleDelete}>
      <DeleteIcon />
    </IconButton>
  )
}
