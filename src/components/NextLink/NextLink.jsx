import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const NextLink = ({ addClass, text, path }) => (
  <Link href={path} passHref>
    <NextLinkWrapper
      addClass={addClass}
      href={path}
      text={text}
    />
  </Link>
)

const NextLinkWrapper = React.forwardRef(({ addClass, text, href }, ref) => (
  <a href={href} ref={ref} className={addClass}>
    {text}
  </a>
))

NextLink.propTypes = {
  // text: PropTypes.string.isRequired,
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
