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
  markdownDescriptionTruncated: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
  markdownDescriptionExtended: ' Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
}

export const isLoading = Template.bind({})
isLoading.args = {
  isLoading: true,
  orientation: 'horizontal',
}
