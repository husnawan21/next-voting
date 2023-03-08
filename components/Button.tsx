interface Props {
	label: string
	type?: 'primary' | 'secondary'
	className?: string
	onClick?: () => void
	isLoading?: boolean
}

export default function Button(props: Props) {
	return (
		<button
			disabled={props.isLoading}
			className={`py-3 leading-none transition duration-200 px-9 rounded
		${props.type === 'primary' && 'text-white bg-gray-900 hover:bg-gray-800'}
		${
			props.type === 'secondary' &&
			'text-gray-900 bg-white hover:bg-gray-100 border-2 border-gray-900 hover:border-gray-600'
		}
		${props.className} 
		`}
			onClick={props.onClick}
		>
			{props.isLoading ? 'Loading...' : props.label}
		</button>
	)
}
