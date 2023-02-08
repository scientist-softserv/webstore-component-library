import React from 'react'
import PropTypes from 'prop-types'
import {
  // Button,
  Table,
} from 'react-bootstrap'
import { allowNull } from '../../resources/utilityFunctions'

// TODO(summer-cook):
// add back handleDeleteFile to props once posting attachments/messages is working/during the work for this ticket:
// https://github.com/scientist-softserv/webstore-component-library/issues/152*/
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
          {/* TODO(summer-cook):
            - comment this back in, see comment above */}
          {/* <th> </th> */}
        </tr>
      </thead>
      <tbody>
        {files.map((file) => {
          const { uuid, fileName, uploadedBy, contentLength, createdAt } = file
          return (
            <tr key={uuid} className='small'>
              <td>{fileName}</td>
              <td>{uploadedBy}</td>
              <td>{contentLength}</td>
              <td>{createdAt}</td>
              {/* TODO(summer-cook):
                  - comment this back in (see above comment)
                  - add an X icon here instead of remove text, make sure the handleDeleteFile is working */}
              {/* <td>
                    <Button
                      primary
                      onClick={handleDeleteFile}>
                        Remove
                    </Button>
                  </td> */}
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
  // TODO(summer-cook): add this back in. see comment above.
  // handleDeleteFile: PropTypes.func.isRequired,
}

FilesTable.defaultProps = {
  addClass: '',
}

export default FilesTable
