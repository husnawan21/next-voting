import useSWR from 'swr'

export default function useVote(code: string) {
	const fetcher = (url: string) => fetch(url).then(r => r.json())
	const { data, mutate, error } = useSWR<Res<Votes>>(
		'/api/votes/' + code,
		fetcher
	)

	return {
		vote: data?.data,
		// data,
		mutate,
		error,
	}
}
