import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'

const FilesTable = ({addClass, files}) => {
  let headers = [{
    name: 'File Name',
    key: 'file-name'
  },
  {
    name: 'Uploaded By',
    key: 'uploaded-by'
  },
  {
    name: 'Size',
    key:  'size'
  },
  {
    name: 'Created At',
    key: 'created-at'
  },
  {
    name: '',
    key: 'buttons'
  }]

  if (files.length === 0) {
    return (
      <h6>You don't have any of these documents yet.</h6>
    )
  } else {
    return (
      <Table striped bordered hover size='sm' className={`${addClass}`}>
        <thead>
          <tr>
            {headers.map((header) => {
              return (
                <th key={header.key}>
                  {header.name}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {files.map((file) => {
            const { uuid, filename, uploadedBy, contentLength, createdAt } = file
            return (
              <tr key={uuid} className='small'>
                  <td>{filename}</td>
                  <td>{uploadedBy}</td>
                  <td>{contentLength}</td>
                  <td>{createdAt}</td>
                  <td><button></button></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }}

FilesTable.propTypes = {
  addClass: PropTypes.string,
}

FilesTable.defaultProps = {
  addClass: '',
}

export default FilesTable
