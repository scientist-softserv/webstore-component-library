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
      identifier: 'F575C4',
      img: defaultImage,
      name: 'Assay Depot Coffee Mug',
      status: {
        text: 'Vendor Review',
      },
      updatedAt: 'September 9, 2022 at 9:21 am',
    },
    {
      createdAt: 'November 15, 2022',
      description: 'this is a test.',
      identifier: '706D8F',
      img: defaultImage,
      name: 'CRISPR',
      status: {
        backgroundColor: '#DEAF17',
        text: 'Work In Progress',
        textColor: '#FFFFFF',
      },
      updatedAt: 'November 16, 2022 at 4:45 pm',
    },
  ],
}
