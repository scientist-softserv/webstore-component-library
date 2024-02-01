import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const NextLink = ({ addClass, children, path }) => (
  <Link href={path} passHref>
    <NextLinkWrapper
      addClass={addClass}
      href={path}
      children={children}
    />
  </Link>
)

const NextLinkWrapper = React.forwardRef(({ addClass, children, href }, ref) => (
  <a href={href} ref={ref} className={addClass}>
    {children}
  </a>
))

NextLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
  ]).isRequired,
  addClass: PropTypes.string,
  path: PropTypes.exact({
    pathname: PropTypes.string.isRequired,
    query: PropTypes.shape({}),
  }).isRequired,
}

NextLink.defaultProps = {
  addClass: '',
}

export default NextLink
