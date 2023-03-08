interface Votes {
	id: string
	title: string
	code: string
	publisher: string
	candidates: Candidate[]
	startDateTime: string
	endDateTime: string
	totalVotes: number
}
