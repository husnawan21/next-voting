import { useState } from 'react'
import Button from './Button'
import { createRoot } from 'react-dom/client'

interface Props {
	isOpen?: boolean
	title?: string
	message: string

	positiveBtnText?: string
	negativeBtnText?: string
	onPositiveClick?: () => void
	onNegativeClick?: () => void
}

function Alert(props: Props) {
	const [isOpen, setIsOpen] = useState(props.isOpen)

	return (
		<div
			className={`relative z-10 ${!isOpen && 'hidden'}`}
			role='dialog'
			aria-modal='true'
		>
			<div className='fixed inset-0 bg-gray-900 bg-opacity-30 backdrop-blur-xl'></div>

			<div className='fixed inset-0 z-10 overflow-y-auto'>
				<div className='flex min-h-full items-center justify-center text-center'>
					<div className='relative p-4 transform overflow-hidden bg-white text-left shadow-xl transition-all duration-200 rounded-md'>
						{/* <Content> */}
						<div className='w-full p-5 text-center'>
							<p className='text-2xl font-bold'>{props.title || 'Title'}</p>
							<p className='text-lg mt-2'>{props.message || 'Message Here'}</p>
							<div className='space-x-3 mt-5'>
								<button
									className='text-sm bg-gray-100 py-1.5 px-6 hover:bg-gray-200 rounded'
									onClick={() => {
										props.onNegativeClick
										setIsOpen(false)
									}}
								>
									{props.negativeBtnText || 'Kembali'}
								</button>
								{/* <Button
									type='secondary'
									className='text-sm bg-gray-100 py-1 px-3 hover:bg-gray-200 rounded'
									onClick={() => {
										props.onNegativeClick
										setIsOpen(false)
									}}
									label={props.negativeBtnText || 'Kembali'}
								/> */}
								<Button
									type='primary'
									className={`${!props.onPositiveClick && 'hidden'}`}
									onClick={() => {
										props.onPositiveClick && props.onPositiveClick()
										setIsOpen(false)
									}}
									label={props.positiveBtnText || 'Ya'}
								/>
							</div>
						</div>
						{/* </Content> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export function showAlert(props: Props) {
	const alert = document.createElement('div')
	alert.id = 'alert'
	document.body.appendChild(alert)
	const root = createRoot(alert)

	root.render(
		<Alert
			isOpen={true}
			title={props.title}
			message={props.message}
			positiveBtnText={props.positiveBtnText}
			negativeBtnText={props.negativeBtnText}
			onPositiveClick={props.onPositiveClick}
			onNegativeClick={props.onNegativeClick}
		/>
	)
}
