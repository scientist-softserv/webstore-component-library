import React from 'react'
import CollapsibleSection from './CollapsibleSection'

export default {
  title: 'Components/CollapsibleSection',
  component: CollapsibleSection,
}

const Template = (args) => <CollapsibleSection {...args} />

export const Default = Template.bind({})
Default.args = {
  description: 'this is a description',
  header: 'this is a header',
}

export const Alternate = Template.bind({})
Alternate.args = {
  // eslint-disable-next-line max-len
  description: '<div class="dynamic-form">\n    <h4>General Information</h4>\n    <div>\n        <label>When do you plan to work with this supplier?</label>\n        <div>\n            Urgently\n        </div>\n    </div>\n    <div>\n       <label>Name of supplier:</label>\n       <div>\n           Alisha\n       </div>\n    </div>\n    <div>\n       <label>Supplier web address:</label>\n       <div>\n           http://scientist.com\n       </div>\n    </div>\n    <!--\n    <div>\n       <label>Is this new supplier onboarding request related to any of the following areas:</label>\n       <div>\n           \n       </div>\n    </div>\n    -->\n    <div>\n       <label>Research area:</label>\n       <div>\n           In Vivo\n       </div>\n   </div>\n   <h4>Contact Information</h4>\n   <div>\n       <label>Supplier contact name:</label>\n       <div>\n           Alisha Evans\n       </div>\n    </div>\n   <div>\n       <label>Supplier email address:</label>\n       <div>\n           alisha@scientist.com\n       </div>\n    </div>\n   <div>\n       <label>Supplier phone number:</label>\n       <div>\n           1234567890\n       </div>\n    </div>\n    <h4>Additional Information</h4>\n   <div>\n       <label>Additional information:</label>\n       <div>\n           project details blah blah blah\n       </div>\n    </div>',
  header: 'Additional Information',
}
