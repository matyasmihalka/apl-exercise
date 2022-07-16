import renderer from 'react-test-renderer'

import doggo from '~/features/articles/fixtures/assets/doggo.webp'
import type { ArticleDetailTye } from '~/features/articles/types'

import { ArticleCardComponent } from '.'

const article = {
  articleId: '15',
  createdAt: '2022-07-15T12:50:25.23354',
  imageId: '15',
  lastUpdatedAt: '2022-07-15T12:50:25.23354',
  perex:
    'Clever, lively, courageous, entertaining: that’s the Dachshund. The Dachshund’s name comes from the German words for badger (dachs) and dog (hund)',
  title: 'Dachshund Dog Breed Facts & Information',
}
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const ArticleDetail = { comments: [] } as ArticleDetailTye

describe('[UI] Article card component', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <ArticleCardComponent
          article={article}
          imgURL={doggo}
          articleDetail={ArticleDetail}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
