import { useRouter } from 'next/router'
import React from 'react'

interface Props {
	className?: string
}

export default function Logo(props: Props) {
	const router = useRouter()

	return (
		<>
			<div
				className={`text-2xl font-semibold hover:underline hover:text-gray-800 text-gray-900 cursor-pointer ${props.className}`}
				onClick={() => router.push('/')}
			>
				Pilpilan
			</div>
		</>
	)
}
