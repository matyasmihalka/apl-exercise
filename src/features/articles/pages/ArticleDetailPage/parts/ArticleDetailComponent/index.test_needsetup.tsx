import { render, screen } from '@testing-library/react'

// eslint-disable-next-line import/order
import blurredDoggo from '~/features/articles/fixtures/assets/chesterBlurred.jpg'

import '@testing-library/jest-dom'
import {
  createArticle,
  createArticleDetail,
} from '~/features/articles/types.fixtures'

import { ArticleDetailComponent } from '.'

describe('[Page] Article detail', () => {
  it('should render content', () => {
    const articleDetail = createArticleDetail()
    const article = [createArticle(), createArticle()]
    render(
      <ArticleDetailComponent
        article={articleDetail}
        relatedArticles={article}
        img={blurredDoggo}
      />
    )

    // const page = screen.getByRole('navigation')
    expect(screen.getByDisplayValue(articleDetail.title)).toBeInTheDocument()
  })
})
