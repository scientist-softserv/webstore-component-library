import React from 'react'
import PropTypes from 'prop-types'
import { TextBox, Title } from '../../components'
import './titled-text-box.css'

const TitledTextBox = ({ text, textAlignment, textSize, textStyle, title, titleAlignment, titleSize, titleStyle }) => (
  <section className='titled-text-box center-content'>
    <Title addClass='mb-2' alignment={titleAlignment} size={titleSize} style={titleStyle} title={title} />
    <TextBox alignment={textAlignment} size={textSize} style={textStyle} text={text} />
  </section>
)

TitledTextBox.propTypes = {
  text: PropTypes.string.isRequired,
  textAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  textSize: PropTypes.oneOf(['small', 'medium', 'large']),
  textStyle: PropTypes.shape({}),
  title: PropTypes.string.isRequired,
  titleAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  titleSize: PropTypes.oneOf(['small', 'medium', 'large']),
  titleStyle: PropTypes.shape({}),
}

TitledTextBox.defaultProps = {
  textAlignment: 'left',
  textSize: 'medium',
  textStyle: {},
  titleAlignment: 'left',
  titleSize: 'large',
  titleStyle: {},
}

export default TitledTextBox
