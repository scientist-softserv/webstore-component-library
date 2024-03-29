import React from 'react'
import ItemGroup from './ItemGroup'
import { items } from '../../resources/args'

export default {
  title: 'Compounds/ItemGroup',
  component: ItemGroup,
}

const Template = (args) => <ItemGroup {...args} />

export const Default = Template.bind({})
Default.args = {
  buttonProps: {
    backgroundColor: '#A9A9A9',
    label: 'Request this item',
  },
  isLoading: false,
  items: items.slice(0, 3),
  orientation: 'vertical',
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  buttonProps: {
    backgroundColor: '#A9A9A9',
    label: 'Request this item',
  },
  isLoading: false,
  items: items.slice(0, 3),
  orientation: 'horizontal',
}

export const isLoading = Template.bind({})
isLoading.args = {
  items: items.slice(0, 3),
  isLoading: true,
}

export const withTitleLink = Template.bind({})
withTitleLink.args = {
  isLoading: false,
  items: items.slice(0, 6),
  withTitleLink: true,
}

export const withButtonLink = Template.bind({})
withButtonLink.args = {
  buttonProps: {
    backgroundColor: '#A9A9A9',
    label: 'Request this item',
  },
  isLoading: false,
  items: items.slice(0, 6),
  withButtonLink: true,
}
