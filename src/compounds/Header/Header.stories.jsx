import React from 'react'
import Header from './Header'
import logoFull from '../../assets/img/logo-full.png'
import { navigationLinks } from '../../resources/args'

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
  auth: {
    signIn: () => console.log('I am signing in!'),
    signOut: () => console.log('I am signing out!'),
  },
  logo: {
    src: logoFull,
    alt: 'The company logo',
  },
  navLinks: navigationLinks,
  userSession: {
    email: 'aaliyah@scientist.com',
  },
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  auth: {
    signIn: () => console.log('I am signing in!'),
    signOut: () => console.log('I am signing out!'),
  },
  logo: {
    src: logoFull,
    alt: 'The company logo',
  },
  navLinks: navigationLinks,
  userSession: undefined,
}
