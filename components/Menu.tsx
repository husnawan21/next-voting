import { useRouter } from 'next/router'
import Button from './Button'
import Logo from './Logo'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Menu() {
	const router = useRouter()
	const { data: session } = useSession()

	return (
		<nav className='flex justify-between py-4'>
			<Logo />
			{session ? (
				<div className='space-x-3'>
					<span>{session?.user?.name}</span>
					<Button label='Logout' type='primary' onClick={signOut} />
				</div>
			) : (
				<Button label='Login' type='primary' onClick={signIn} />
			)}
		</nav>
	)
}
