import React from 'react'
import RequestList from './RequestList'
import { defaultImage } from '../../resources/args'

export default {
  title: 'Compounds/RequestList',
  component: RequestList,
}

const Template = (args) => <RequestList {...args} />

export const Default = Template.bind({})
Default.args = {
  requests: [
    {
      createdAt: 'September 9, 2022',
      description: 'Does the Company offer services related to Flow Cytometry?',
      href: '/request/F575C4',
      id: 1,
      img: defaultImage,
      status: {
        text: 'Vendor Review',
      },
      title: 'F575C4: Assay Depot Coffee Mug',
      updatedAt: 'September 9, 2022 at 9:21 am',
    },
    {
      createdAt: 'November 15, 2022',
      description: 'this is a test.',
      href: '/request/706D8F',
      id: 2,
      img: defaultImage,
      status: {
        backgroundColor: '#DEAF17',
        text: 'Work In Progress',
        textColor: '#FFFFFF',
      },
      title: '706D8F: CRISPR',
      updatedAt: 'November 16, 2022 at 4:45 pm',
    },
  ],
}
