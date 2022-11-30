import React from 'react'
import { statusArray } from '../../resources/args'
import StatusBar from './StatusBar'

export default {
  title: 'Components/StatusBar',
  component: StatusBar,
}

const Template = (args) => <StatusBar {...args} />

export const VendorReview = Template.bind({})

VendorReview.args = {
  statusArray,
  apiRequestStatus: 'Vendor Review',
}

export const SOWSubmitted = Template.bind({})

SOWSubmitted.args = {
  statusArray,
  apiRequestStatus: 'SOW Submitted',
}

export const WorkInProgress = Template.bind({})

WorkInProgress.args = {
  statusArray,
  apiRequestStatus: 'Work In Progress',
}

export const Completed = Template.bind({})

Completed.args = {
  statusArray,
  apiRequestStatus: 'Completed',
}