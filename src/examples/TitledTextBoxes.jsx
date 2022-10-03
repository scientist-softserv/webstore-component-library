import React from 'react'
import { TextBox, Title } from '../components'
import { multiple_paragraphs } from '../resources/args'

const TitledTextBoxes = () => (
	<section className='titled-text-box'>
		<Title alignment={'left'} size={'large'} title={'Title'} />
		{multiple_paragraphs.map(par => <TextBox alignment={text_alignment} size={text_size} style={text_style} text={par}/>)}
	</section>
)

export default TitledTextBoxes
