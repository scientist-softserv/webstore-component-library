import React from 'react'
import ItemGroup from './ItemGroup'
import { items } from '../../resources/args'

export default {
  title: 'Compounds/ItemGroup',
  component: ItemGroup,
}

const Template = (args) => <ItemGroup {...args} />

export const Vertical = Template.bind({})
Vertical.args = {
  items: items.slice(0, 3),
  buttonLink: '',
  buttonProps: {
    backgroundColor: '#A9A9A9',
    label: 'Request this item',
  },
  orientation: 'vertical'
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  items: items.slice(0, 3),
  buttonLink: '',
  buttonProps: {
    backgroundColor: '#A9A9A9',
    label: 'Request this item',
  },
  orientation: 'horizontal'
}

export const isLoading = Template.bind({})
isLoading.args = {
  isLoading: true,
}

export const withTitleLink = Template.bind({})
withTitleLink.args = {
  items: items.slice(0, 4),
  withTitleLink: true,
}
