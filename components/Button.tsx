import React from 'react'

interface Props {
	label: string
	type?: 'primary' | 'secondary'
	className?: string
	onClick?: () => void
}

export default function Button(props: Props) {
	return (
		<button
			className={`py-3 leading-none transition duration-200 px-9 rounded
		${props.type === 'primary' && 'text-white bg-gray-900 hover:bg-gray-800'}
		${
			props.type === 'secondary' &&
			'text-gray-900 bg-white hover:bg-gray-100 border border-gray-900 hover:border-gray-600'
		}
		${props.className} 
		`}
			onClick={props.onClick}
		>
			{props.label}
		</button>
	)
}
