import React from 'react'
import FilesTable from './FilesTable'

export default {
  title: 'Components/FilesTable',
  component: FilesTable,
}

const Template = (args) => <FilesTable {...args} />

export const Default = Template.bind({})
Default.args = {
  files: [{
    contentLength: "938.57 KB",
    content_length: 961096,
    content_type: "image/png",
    createdAt: " Dec 22 2022 at 12:56:48 PM",
    created_at: "2022-12-22T10:56:48.405-08:00",
    download: "/quote_groups/10bd825f-c7e0-4c07-bd9e-f7982b21f435/attachments/nepal5.png",
    filename: "nepal5.png",
    href: "https://acme.scientist.com/secure_attachments/4611434c-ba99-481e-84ee-37e1fdbd203e",
    status: null,
    uploadedBy: "Summer Cook",
    uuid: "4611434c-ba99-481e-84ee-37e1fdbd203e",
  }],
}
