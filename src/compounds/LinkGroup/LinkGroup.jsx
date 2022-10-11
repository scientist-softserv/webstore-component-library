import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../../components'
import './link-group.css'

const LinkGroup = ({ header, links }) => (
	<div className='link-group-container'>
		<p className='link-group-header'>{header}</p>
		{links.map(({ name, url }) => <Link href={url} label={name} addClass='link-group-links' />)}
	</div>
)

LinkGroup.propTypes = {
	header: PropTypes.string.isRequired,
	links: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
	})).isRequired,
}

export default LinkGroup
