import React from 'react'
import Item2 from './Item2'
import item from '../../assets/img/item.jpg'

export default {
  title: 'Compounds/Item2',
  component: Item2,
}

const Template = (args) => <Item2 {...args} />

export const Default = Template.bind({})
Default.args = {
  buttonLink: '',
  buttonProps: {},
  imgProps: {},
  item: {
    description: '',
    id: 1,
    img: {
      src: item,
      alt: 'Several rows of test tubes with a liquid being put into one.',
    },
    name: 'Test Tubes',
  },
  titleLink: '',
  orientation: 'vertical',
  style: {},
  withButtonLink: false,
  withTitleLink: false,
}

export const WithButtonLink = Template.bind({})
WithButtonLink.args = {
  buttonLink: '/',
  buttonProps: {
    backgroundColor: '#A9A9A9',
    label: 'Request this item',
  },
  imgProps: {},
  item: {
    description: 'Test the presence of viable microorganisms.',
    id: 2,
    img: {
      src: item,
      alt: 'Several rows of test tubes with a liquid being put into one.',
    },
    name: 'Microbiological Sterility Testing',
    slug: 'microbiological-sterility-testing',
  },
  orientation: 'horizontal',
  style: {},
  titleLink: '',
  withButtonLink: true,
  withTitleLink: false,
}

export const WithTitleLink = Template.bind({})
WithTitleLink.args = {
  buttonLink: '',
  buttonProps: {},
  item: {
    description: 'Test the presence of viable microorganisms.',
    id: 3,
    img: {
      src: item,
      alt: 'Several rows of test tubes with a liquid being put into one.',
    },
    name: 'Microbiological Sterility Testing',
  },
  imgProps: {},
  orientation: 'vertical',
  style: {},
  titleLink: '/',
  withButtonLink: false,
  withTitleLink: true,
}

export const isLoading = Template.bind({})
isLoading.args = {
  isLoading: true,
  orientation: 'horizontal',
}
