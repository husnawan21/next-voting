import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: any) {
	return (
		<main
			className={
				'min-h-screen px-5 flex justify-center mx-auto text-gray-900 bg-white'
			}
			style={inter.style}
		>
			<div className='container'>{children}</div>
		</main>
	)
}
