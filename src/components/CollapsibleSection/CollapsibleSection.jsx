/* eslint react/no-array-index-key: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import { Accordion } from 'react-bootstrap'

const CollapsibleSection = ({ header, description }) => {

  return (
    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>{header}</Accordion.Header>
      <Accordion.Body>
        <div dangerouslySetInnerHTML={{__html: description}}/>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  )
}

CollapsibleSection.propTypes = {
  description: PropTypes.string.isRequired
}

CollapsibleSection.defaultProps = {
  alignment: 'left',
  size: 'small',
  style: {},
}

export default CollapsibleSection
