import type { Story, Meta } from '@storybook/react/types-6-0'

import { Header } from '..'

export default {
  title: 'UI/Header',
  component: Header,
} as Meta

const Template: Story = () => {
  return <Header />
}

export const Default = Template.bind({})
Default.args = {}
