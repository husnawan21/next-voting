import { showAlert } from '@/components/Alert'
import Button from '@/components/Button'
import CandidateItem from '@/components/CandidateItem'
import CountDown from '@/components/CountDown/CountDown'
import Menu from '@/components/Menu'
import Layout from '@/components/_layout'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function DetailParticipant() {
	const router = useRouter()
	const { code } = router.query

	return (
		<>
			<>
				<Head>
					<title>Detail Partisipan | Pilpilan Voting</title>
					<meta name='description' content='Generated by create next app' />
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<Layout>
					<Menu />
					<div>
						<h1 className='text-4xl text-center mt-10 font-bold'>
							Judul Voting
						</h1>
						{/* <Timer> */}
						<CountDown className='mt-10' />

						{/* </Timer> */}

						{/* <Kandidat> */}
						<div className='mt-10 space-y-4 w-2/3 mx-auto '>
							<CandidateItem />
						</div>
						{/* </Kandidat> */}

						{/* <Submit> */}
						<div className='text-center mt-10'>
							<Button
								label='Kirim Vote 🔥'
								type='primary'
								onClick={() =>
									showAlert({
										isOpen: false,
										title: 'Success 🔥🔥',
										message: 'Vote-mu telah berhasil dikirim',
										// positiveBtnText: 'Ya',
										// onPositiveClick() {},
									})
								}
							/>
						</div>
						{/* </Submit> */}
					</div>
				</Layout>
			</>
		</>
	)
}