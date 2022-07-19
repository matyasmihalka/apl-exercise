import { IconButton } from '@mui/material'
import type { GridColDef } from '@mui/x-data-grid'
import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link'
import * as React from 'react'

import { useArticles } from '~/features/articles/hooks/useArticles'
import type { PerexProp } from '~/features/articles/types'
import { Routes } from '~/features/core/constants/routes'

import { CommentsNumber } from './parts/CommentsNumber'
import { DeleteAction } from './parts/DeleteAction'
import { EditIcon } from './parts/EditIcon'
import { TableContainer, TableWrapper } from './styled'

const columns: GridColDef[] = [
  { field: 'title', headerName: 'Article title', width: 200 },
  { field: 'perex', headerName: 'Perex', width: 300 },
  {
    field: 'author',
    headerName: 'Author',
    width: 150,
  },
  {
    field: 'comments',
    headerName: '# of comments',
    width: 160,
    renderCell: (params) => {
      return <CommentsNumber id={params.id as string} />
    },
  },
  {
    field: 'id',
    headerName: 'Actions',
    width: 100,
    renderCell: (params) => {
      return (
        <>
          <Link href={`${Routes.EDIT}/${params.id}`}>
            <IconButton color="secondary" size="small" aria-label="edit">
              <EditIcon />
            </IconButton>
          </Link>
          <DeleteAction id={params.id as string} />
        </>
      )
    },
  },
]

export const DataTable = () => {
  const { articles } = useArticles()

  const articlesToTable = articles.map((article) => {
    const perex = JSON.parse(article.perex) as PerexProp

    return {
      title: article.title,
      perex: perex.perex,
      author: `${perex.firstName} ${perex.lastName}`,
      comments: article.articleId,
      id: article.articleId,
    }
  })

  return (
    <TableContainer>
      <TableWrapper>
        {/* eslint-disable-next-line react/forbid-dom-props */}
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            rows={articlesToTable}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </TableWrapper>
    </TableContainer>
  )
}
