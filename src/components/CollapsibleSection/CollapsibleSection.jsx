/* eslint react/no-array-index-key: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import { Accordion } from 'react-bootstrap'
import './collapsible-section.scss'

const CollapsibleSection = ({ header, description }) => (
  <Accordion defaultActiveKey='0' className='simple-collapsible-section'>
    <Accordion.Item eventKey='0' className='border-0 px-0'>
      <Accordion.Header><h3>{header}</h3></Accordion.Header>
      <Accordion.Body className='ps-0'>
      {// eslint-disable-next-line no-danger
        <div dangerouslySetInnerHTML={{ __html: description }} />}
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
)

CollapsibleSection.propTypes = {
  description: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
}

export default CollapsibleSection
