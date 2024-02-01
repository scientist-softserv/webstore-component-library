import React from 'react'
import NextLink from './NextLink'

export default {
  title: 'Compounds/NextLink',
  component: NextLink,
}

const Template = (args) => <NextLink {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Text Here',
  addClass: '',
  path: {
    pathname: '/test',
    query: {},
  },
}
