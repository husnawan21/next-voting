import { CheckIcon } from '@heroicons/react/24/outline'

interface Props {
	name: string
	title?: string
	index: number
	percentage?: number
	onClick?: () => void
	isSelected: boolean
}

export default function CandidateItem(props: Props) {
	return (
		<div className='flex flex-row p-5 space-x-3 border border-gray-100 rounded-md '>
			<div className='flex items-center justify-center w-12 h-12 text-xl font-bold text-center bg-gray-100 rounded aspect-square'>
				{props.index + 1}
			</div>
			<div className='flex flex-col w-full'>
				<h3 className='text-lg font-semibold'>{props.name}</h3>
				<p>{props.title}</p>
				<div className='flex flex-row items-center space-x-2'>
					{/* <Bar> */}
					<div className='w-full h-1 overflow-hidden bg-gray-100 rounded-full'>
						<div
							className='h-1 bg-gray-700'
							style={{ width: `${props.percentage}%` }}
						></div>
					</div>
					{/* </Bar> */}
					{/* <Indicator> */}
					<span>
						{Intl.NumberFormat('en', { notation: 'compact' }).format(
							props.percentage || 0
						)}
						%
					</span>
					{/* </Indicator> */}
				</div>
			</div>

			<div
				onClick={props.onClick}
				className={`w-20 h-20 flex justify-center items-center rounded cursor-pointer transition-color duration-200 aspect-square ${
					props.isSelected
						? 'bg-green-600 hover:bg-green-500 text-white'
						: 'bg-gray-100 hover:bg-gray-200'
				}`}
			>
				<CheckIcon className='w-7 h-7' />
			</div>
		</div>
	)
}
