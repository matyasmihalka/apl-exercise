import type { Meta, Story } from '@storybook/react/types-6-0'

import { ArticleCardComponent } from '..'

export default {
  title: 'Articles/Article card component',
  component: ArticleCardComponent,
} as Meta

const Template: Story = () => {
  return <ArticleCardComponent />
}

export const Default = Template.bind({})
Default.args = {}
