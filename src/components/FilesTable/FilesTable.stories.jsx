import React from 'react'
import FilesTable from './FilesTable'

export default {
  title: 'Components/FilesTable',
  component: FilesTable,
}

const Template = (args) => <FilesTable {...args} />

export const Default = Template.bind({})
Default.args = {
  headers: [''],
}
