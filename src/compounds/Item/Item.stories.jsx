import React from 'react'
import Item from './Item'
import item from '../../assets/img/item.jpg'

export default {
  title: 'Compounds/Item',
  component: Item,
}

const Template = (args) => <Item {...args} />

export const Default = Template.bind({})
Default.args = {
  buttonLink: '/',
  buttonProps: {
    backgroundColor: '#A9A9A9',
    label: 'Request this item',
  },
  item: {
    description: 'Test the presence of viable microorganisms.',
    id: 1,
    img: {
      src: item,
      alt: 'Several rows of test tubes with a liquid being put into one.',
    },
    name: 'Microbiological Sterility Testing',
    slug: 'microbiological-sterility-testing',
  },
  titleLink: '/',
  orientation: 'vertical',
  style: {},
  withButtonLink: false,
  withTitleLink: false,
}

export const isLoading = Template.bind({})
isLoading.args = {
  isLoading: true,
  orientation: 'horizontal',
}
