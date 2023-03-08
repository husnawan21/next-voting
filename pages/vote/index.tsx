import RestrictedPage from '@/components/page/RestrictedPage'
import { useSession } from 'next-auth/react'

export default function Vote() {
	const { data: session } = useSession()

	if (!session) {
		return <RestrictedPage />
	}

	return <div></div>
}
