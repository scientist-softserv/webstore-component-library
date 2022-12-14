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
  description: 'Using advanced CRISPR technology, add or delete base pairs at a specifically targeted DNA loci. Using advanced CRISPR technology, add or delete base pairs at a specifically targeted DNA loci. Using advanced CRISPR technology, add or delete base pairs at a specifically targeted DNA loci. Using advanced CRISPR technology, add or delete base pairs at a specifically targeted DNA loci. Using advanced CRISPR technology, add or delete base pairs at a specifically targeted DNA loci. Using advanced CRISPR technology, add or delete base pairs at a specifically targeted DNA loci.',
  descriptionStyle: {},
  img: {
    alt: 'test tubes',
    src: item,
  },
  title: 'CRISPR[DEMO]',
  titleStyle: {},
}

export const Alternative = Template.bind({})
Alternative.args = {
  description: 'Using advanced CRISPR technology, add or delete base pairs at a specifically targeted DNA loci. Using advanced CRISPR technology, add or delete base pairs at a specifically targeted DNA loci. Using advanced CRISPR technology, add or delete base pairs at a specifically targeted DNA loci. Using advanced CRISPR technology, add or delete base pairs at a specifically targeted DNA loci. Using advanced CRISPR technology, add or delete base pairs at a specifically targeted DNA loci. Using advanced CRISPR technology, add or delete base pairs at a specifically targeted DNA loci.',
  descriptionStyle: {},
  img: {
    alt: 'test tubes',
    src: item,
    width: 650,
  },
  title: 'CRISPR[DEMO]',
  titleStyle: {},
}
