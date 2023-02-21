import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'
import Link from '../Link/Link'
import { allowNull } from '../../resources/utilityFunctions'

const FilesTable = ({ addClass, files }) => {
  if (files.length === 0) {
    return (
      <h6 className='mt-3'>You do not have this type of document yet.</h6>
    )
  }

  return (
    <Table striped bordered hover size='sm' className={`${addClass}`}>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Uploaded By</th>
          <th>Size</th>
          <th>Created At</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {files.map((file) => {
          const { contentLength, createdAt, fileName, href, uploadedBy, uuid  } = file
          return (
            <tr key={uuid} className='small'>
              <td>{fileName}</td>
              <td>{uploadedBy}</td>
              <td>{contentLength}</td>
              <td>{createdAt}</td>
              <td className='text-center'>
                <Link
                  icon='fa-download'
                  href={href}
                />
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

FilesTable.propTypes = {
  addClass: PropTypes.string,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      contentLength: PropTypes.string.isRequired,
      contentType: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      download: PropTypes.string.isRequired,
      fileName: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      status: allowNull(PropTypes.string.isRequired),
      uploadedBy: PropTypes.string.isRequired,
      uuid: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

FilesTable.defaultProps = {
  addClass: '',
}

export default FilesTable
