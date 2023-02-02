import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'

const FilesTable = (addClass, files) => {
  let headers = ['']
  return (
    <Table striped bordered hover size='sm' className={`${addClass}`}>
      <thead>
        <tr>
          {headers.map((header) => {
            return (
              <th>

              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {/* {files.map((file) => {
          return (
            <tr>

            </tr>
          )
        })} */}
      </tbody>
    </Table>
  )
}

FilesTable.propTypes = {
  addClass: PropTypes.string,
}

FilesTable.defaultProps = {
  addClass: '',
}

export default FilesTable
