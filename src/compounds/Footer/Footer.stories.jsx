import React from 'react'
import { Footer } from '..'
import { sections, socials } from '../../resources/args'

export default {
  title: 'Compounds/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  color: 'dark',
  companyName: 'Company A',
  sections: [],
  socials: [],
}

export const Alternate = Template.bind({})
Alternate.args = {
  color: 'white',
  companyName: 'Company B',
  sections,
  socials,
}
