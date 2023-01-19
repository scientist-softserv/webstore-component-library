import React from 'react'
import ItemPage from './ItemPage'
import item from '../../assets/img/item.jpg'

export default {
  title: 'Compounds/ItemPage',
  component: ItemPage,
}

const Template = (args) => <ItemPage {...args} />

export const Default = Template.bind({})
Default.args = {
  descriptionStyle: {},
  img: {
    alt: 'test tubes',
    src: item,
  },
  titleStyle: {},
  ware: {
    // eslint-disable-next-line max-len
    description: 'Using advanced CRISPR technology, add or delete base pairs at a specifically targeted DNA loci. Using advanced CRISPR technology, add or delete base pairs at a specifically targeted DNA loci. Using advanced CRISPR technology, add or delete base pairs at a specifically targeted DNA loci. Using advanced CRISPR technology, add or delete base pairs at a specifically targeted DNA loci. Using advanced CRISPR technology, add or delete base pairs at a specifically targeted DNA loci. Using advanced CRISPR technology, add or delete base pairs at a specifically targeted DNA loci.',
    id: 4356,
    name: 'CRISPR[DEMO]',
    slug: 'crispr-demo',
  },
}

export const Alternative = Template.bind({})
Alternative.args = {
  descriptionStyle: {},
  img: {
    alt: 'test tubes',
    src: item,
    width: 650,
  },
  titleStyle: {},
  ware: {
    description: '',
    id: 4356,
    name: 'CRISPR[DEMO]',
    slug: 'crispr-demo',
    // eslint-disable-next-line max-len
    snippet: 'this is a snippet. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard text. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
  },
}
