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
}

export const SOWSelection = Template.bind({})
SOWSelection.args = {
  statusArray,
  apiRequestStatus: 'SOW Selection',
}

export const WorkStarted = Template.bind({})
WorkStarted.args = {
  statusArray,
  apiRequestStatus: 'Work Started',
}

export const WorkCompleted = Template.bind({})
WorkCompleted.args = {
  statusArray,
  apiRequestStatus: 'Work Completed',
}
