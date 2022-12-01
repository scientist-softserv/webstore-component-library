import React from 'react'
import Footer2 from './Footer2'
import { links } from '../../resources/args'
import logoFull from '../../assets/img/logo-full.png'
import logoPictorial from '../../assets/img/logo-pictorial.png'

export default {
  title: 'Compounds/Footer2',
  component: Footer2,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args) => <Footer2 {...args} />

export const Default = Template.bind({})
Default.args = {
  companyName: 'Company A',
  links,
  alt: 'alt text here',
  src: logoPictorial,
  height: 40,
}

export const Alternate = Template.bind({})
Alternate.args = {
  companyName: 'Company A',
  links,
  alt: 'alt text here',
  src: logoFull,
  height: 30,
}
