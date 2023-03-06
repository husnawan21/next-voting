import { CheckIcon } from '@heroicons/react/24/outline'

export default function CandidateItem() {
	return (
		<div className='flex flex-row border border-gray-100 p-5 rounded-md space-x-3 '>
			<div className='w-12 h-12 font-bold text-xl items-center flex justify-center bg-gray-100 text-center rounded aspect-square'>
				1
			</div>
			<div className='w-full flex flex-col'>
				<h3 className='text-lg font-semibold'>Nama Kandidat</h3>
				<p>Kandidat 1</p>
				<div className='flex flex-row space-x-2 items-center'>
					{/* <Bar> */}
					<div className='w-full h-1 bg-gray-100 rounded-full overflow-hidden'>
						<div className='h-1 bg-gray-700' style={{ width: '40%' }}></div>
					</div>
					{/* </Bar> */}
					{/* <Indicator> */}
					<span>40%</span>
					{/* </Indicator> */}
				</div>
			</div>

			<div className='w-20 h-20 flex bg-green-600 hover:bg-green-500 text-white justify-center items-center rounded cursor-pointer transition-color duration-200 aspect-square'>
				<CheckIcon className='w-7 h-7' />
			</div>
		</div>
	)
}
