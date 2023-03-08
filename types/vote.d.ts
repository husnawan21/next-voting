interface Vote {
	id: string
	title: string
	startDateTime: string
	endDateTime: string
	publisher: string
	code: string
	candidates: Candidate[]
	createdAt: string
	deletedAt?: string
	totalVotes: number
}
