import React from 'react'
import { statusArray } from '../../resources/args'
import StatusBar from './StatusBar'

export default {
  title: 'Components/StatusBar',
  component: StatusBar,
}

const Template = (args) => <StatusBar {...args} />

export const SupplierReview = Template.bind({})
SupplierReview.args = {
  statusArray,
  apiRequestStatus: 'Supplier Review',
  backgroundColor: 'light',
}

export const SOWSelection = Template.bind({})
SOWSelection.args = {
  statusArray,
  apiRequestStatus: 'SOW Selection',
  backgroundColor: 'light',
}

export const WorkStarted = Template.bind({})
WorkStarted.args = {
  statusArray,
  apiRequestStatus: 'Work Started',
  backgroundColor: 'light',
}

export const WorkCompleted = Template.bind({})
WorkCompleted.args = {
  statusArray,
  apiRequestStatus: 'Work Completed',
  backgroundColor: 'light',
}
