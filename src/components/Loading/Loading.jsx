import React from 'react'
import PropTypes from 'prop-types'
import { TailSpin } from 'react-loader-spinner'

const Loading = ({ color, height, radius, width, wrapperStyle, ...props }) => (
  <TailSpin
    ariaLabel='tail-spin-loading'
    color={color}
    height={height}
    width={width}
    radius={radius}
    visible={true}
    wrapperStyle={{ justifyContent: 'center', ...wrapperStyle }}
    {...props}
  />
)

Loading.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  radius: PropTypes.number,
  wrapperStyle: PropTypes.shape({}),
  wrapperClass: PropTypes.string,
}

Loading.defaultProps = {
  color: '#6a6a6a',
  height: 40,
  width: 40,
  radius: 1,
}

export default Loading
