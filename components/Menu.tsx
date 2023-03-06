import { useRouter } from 'next/router'
import Button from './Button'

export default function Menu() {
	const router = useRouter()

	return (
		<nav className='flex justify-between py-4'>
			<div
				className='text-2xl font-semibold hover:underline hover:text-gray-800 text-gray-900 cursor-pointer'
				onClick={() => router.push('/')}
			>
				Pilpilan
			</div>
			<Button label='Login' type='primary' />
		</nav>
	)
}
