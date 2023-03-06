interface Props {
	onChange: (value: string) => void
	value: string
	placeHolder: string
	className?: string
	type?: string
}

export default function Form(props: Props) {
	return (
		<input
			type={props.type ? props.type : 'text'}
			className={`w-full bg-gray-100 py-2 px-4 rounded border border-gray-200 ${props.className}`}
			placeholder={props.placeHolder}
			onChange={e => props.onChange(e.target.value)}
			value={props.value}
		/>
	)
}
