import React from 'react'
import Header from './Header'
import logoFull from '../../assets/img/logo-full.png'

export default {
  title: 'Compounds/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  browseLink: '',
  logInLink: '',
  logo: {
    src: logoFull,
    alt: 'The company logo',
  },
  logOutLink: '',
  requestsLink: '',
  user: {
    name: 'Aaliyah Haughton',
  },
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  browseLink: '',
  logInLink: '',
  logo: {
    src: logoFull,
    alt: 'The company logo',
  },
  logOutLink: '',
  requestsLink: '',
  user: null,
}
