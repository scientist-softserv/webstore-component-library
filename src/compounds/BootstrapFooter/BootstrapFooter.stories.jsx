import React from 'react'
import BootstrapFooter from './BootstrapFooter'
import { links } from '../../resources/args'
import logoFull from '../../assets/img/logo-full.png'
import logoPictorial from '../../assets/img/logo-pictorial.png'

export default {
  title: 'Compounds/BootstrapFooter',
  component: BootstrapFooter,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args) => <BootstrapFooter {...args} />

export const Default = Template.bind({})
Default.args = {
  companyName: 'Company A',
  links,
  alt: 'alt text here',
  src: logoPictorial,
  height: 40,
}