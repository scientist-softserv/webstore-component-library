/* eslint react/no-array-index-key: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import { Accordion } from 'react-bootstrap'
import './collapsible-section.scss'

const CollapsibleSection = ({ header, description }) => (
  <Accordion defaultActiveKey='0' className='simple-collapsible-section mt-4'>
    <Accordion.Item eventKey='0' className='border-0 px-0'>
      <Accordion.Header><h4>{header}</h4></Accordion.Header>
      <Accordion.Body className='ps-0 pb-2'>
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
