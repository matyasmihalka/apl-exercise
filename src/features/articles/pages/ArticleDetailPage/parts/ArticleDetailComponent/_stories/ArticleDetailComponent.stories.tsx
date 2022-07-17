import type { Meta, Story } from '@storybook/react/types-6-0'
import { QueryClient, QueryClientProvider } from 'react-query'

import blurredDoggo from '~/features/articles/fixtures/assets/chesterBlurred.jpg'
import {
  createArticle,
  createArticleDetail,
} from '~/features/articles/types.fixtures'

import type { Props } from '..'
import { ArticleDetailComponent } from '..'

export default {
  title: 'Article Detail/Component',
  component: ArticleDetailComponent,
} as Meta

const fakeQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

const Template: Story<Props> = (args) => {
  return (
    <QueryClientProvider client={fakeQueryClient}>
      <ArticleDetailComponent {...args} />
    </QueryClientProvider>
  )
}

export const Default = Template.bind({})
Default.args = {
  relatedArticles: [createArticle(), createArticle()],
  article: createArticleDetail(),
  img: blurredDoggo,
}
