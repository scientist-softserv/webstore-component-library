import React from 'react'
import CookiePreferencesCheck from './CookiePreferencesCheck'

export default {
  title: 'Components/CookiePreferencesCheck',
  component: CookiePreferencesCheck,
}

const Template = (args) => <CookiePreferencesCheck {...args} />

export const Default = Template.bind({})
Default.args = {
  cookieConsentValue: false,
  disableCookies: () => console.log('disable cookies'),
  enableCookies: () => console.log('enable cookies'),
}
