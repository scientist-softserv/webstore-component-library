import * as React from 'react'
import themeColors from '../theme/default-colors.module.scss'

const ToggleIcon = ({ linkColor }, props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    style={{
      enableBackground: 'new 0 0 227 163.3',
    }}
    viewBox='0 0 227 163.3'
    fill={themeColors[linkColor]}
    width={25}
    height={25}
    {...props}
  >
    <path d='M113.1 33h-95C5.8 33-2.1 22.1 2.2 11.3 4.6 5.2 9.3 1.8 15.8 1.1c1.5-.2 3-.1 4.5-.1h185.5c2.2 0 4.4-.1 6.5.3 8.1 1.6 13.6 9.2 12.7 17.2-.8 8.1-7.5 14.3-15.9 14.3-21 .1-42 0-63 .1-11 .1-22 .1-33 .1zM113 65h95c12.7 0 20.7 11.7 15.6 22.6-3.1 6.6-8.5 9.4-15.7 9.4H18.4C5.8 97-2.2 86 2.2 75.1c2.6-6.4 8.3-10 16.3-10.1H113zM113.3 129c31.7 0 63.3-.1 95 0 13.2 0 21.1 13.3 14.5 24.1-3.5 5.8-9 7.9-15.7 7.9-45.8-.1-91.7 0-137.5 0H19.1c-10.7 0-17.9-6.4-18-15.9C1 135.5 8.3 129 19.3 129h94z' />
  </svg>
)

export default ToggleIcon
