import React from 'react'
import CookiePreferencesModal from './CookiePreferencesModal'

export default {
  title: 'Components/CookiePreferencesModal',
  component: CookiePreferencesModal,
}

const Template = (args) => <CookiePreferencesModal {...args} />

export const Default = Template.bind({})
Default.args = {
  cookieConsent: undefined,
  disableCookies: () => console.log('disable cookies'),
  enableCookies: () => console.log('enable cookies'),
}

