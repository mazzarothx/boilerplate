import { Story, Meta } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Mazzaroth.dev',
  description: 'Reprogramando as Estrelas'
}

export const Default: Story = (args) => <Main {...args} />
