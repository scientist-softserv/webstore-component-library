import React from 'react'
import Logo from './Logo'
import logoFull from '../../assets/img/logo-full.png'
import logoPictorial from '../../assets/img/logo-pictorial.png'

export default {
  title: 'Compounds/Logo',
  component: Logo,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args) => <Logo {...args} />

export const Default = Template.bind({})
Default.args = {
  alt: 'The full logo for this company',
  src: logoFull,
  height: 50,
}

export const Alternate = Template.bind({})
Alternate.args = {
  alt: 'The pictorial mark for this company',
  src: logoPictorial,
  height: 50,
}
