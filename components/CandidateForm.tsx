import { useEffect, useState } from 'react'
import Form from './Form'
import { XCircleIcon } from '@heroicons/react/24/outline'

interface Props {
	candidate: Candidate
	submitCandidate: (candidate: Candidate) => void
	removeCandidateForm: (key: number) => void
}

export default function CandidateForm(props: Props) {
	const [candidate, setCandidate] = useState<Candidate>({
		key: 0,
		name: '',
		title: '   ',
	})

	useEffect(() => {
		setCandidate(props.candidate)
	}, [props.candidate])

	useEffect(() => {
		props.submitCandidate(candidate)
	}, [candidate])

	return (
		<div className='flex flex-col p-5 border border-gray-100 rounded'>
			<div className='self-end'>
				<XCircleIcon
					className='h-6 w-6 cursor-pointer hover:bg-gray-100 text-gray-300 rounded-full'
					onClick={() => props.removeCandidateForm(candidate.key)}
				/>
			</div>
			<h1 className='flex items-center self-center justify-center w-1/2 text-4xl bg-gray-100 rounded-full aspect-square'>
				{props.candidate.key}
			</h1>
			<label className='mt-3 mb-1 text-gray-600'>
				{candidate.name ? candidate.name : 'Nama Kandidat'}
			</label>
			<Form
				placeHolder='masukkan nama kandidat'
				value={candidate.name}
				onChange={e => setCandidate({ ...candidate, name: e })}
			/>
		</div>
	)
}
