import type { Meta, Story } from '@storybook/react/types-6-0'

import doggo from '~/features/articles/fixtures/assets/doggo.webp'
import {
  createArticle,
  createArticleDetail,
} from '~/features/articles/types.fixtures'

import type { Props } from '..'
import { ArticleCardComponent } from '..'

export default {
  title: 'Articles/Article card component',
  component: ArticleCardComponent,
} as Meta

const Template: Story<Props> = (args) => {
  return <ArticleCardComponent {...args} />
}

export const Default = Template.bind({})
Default.args = {
  article: createArticle(),
  imgURL: doggo,
  articleDetail: createArticleDetail(),
}
