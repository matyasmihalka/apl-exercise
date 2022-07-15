import type { Meta, Story } from '@storybook/react/types-6-0'

import doggo from '~/features/articles/fixtures/assets/doggo.webp'

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
  article: {
    articleId: '15',
    createdAt: '2022-07-15T12:50:25.23354',
    imageId: '15',
    lastUpdatedAt: '2022-07-15T12:50:25.23354',
    perex:
      'Clever, lively, courageous, entertaining: that’s the Dachshund. The Dachshund’s name comes from the German words for badger (dachs) and dog (hund)',
    title: 'Dachshund Dog Breed Facts & Information',
  },
  imgURL: doggo,
}
