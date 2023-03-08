import { getSession } from 'next-auth/react'
import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const session = await getSession({ req })

	if (!session) {
		return res.status(401).json({ message: 'Login dahulu!' })
	}

	const { code } = req.query

	// Get Detail by Code
	if (req.method === 'GET') {
		const votes = await prisma.votes.findFirst({
			select: {
				id: true,
				publisher: true,
				title: true,
				code: true,
				candidates: true,
				createdAt: true,
				startDateTime: true,
				endDateTime: true,
				deletedAt: false,
			},
			where: {
				code: code as string,
				deletedAt: null,
			},
		})

		if (!votes) {
			res.status(404).json({
				message: 'NOT FOUND',
			})
		}

		// Get participant of vote
		const participants = await prisma.participant.findMany({
			select: {
				candidate: true,
				email: true,
				createdAt: true,
			},
			where: {
				code: code as string,
			},
		})

		// Count vote for each candidate
		var candidates: Candidate[] = []
		if (participants) {
			candidates = votes?.candidates.map(candidate => {
				const votes =
					participants.filter(
						participant => participant.candidate === candidate.name
					).length || 0

				return {
					...candidate,
					votes,
				}
			}) as Candidate[]
		}

		const result = {
			id: votes?.id,
			title: votes?.title,
			publisher: votes?.publisher,
			code: votes?.code,
			candidates: candidates,
			startDateTime: String(votes?.startDateTime),
			endDateTime: String(votes?.endDateTime),
			createdAt: String(votes?.createdAt),
			totalVotes: candidates
				? candidates.reduce(
						(acc, candidate) => acc + (candidate.votes ? candidate.votes : 0),
						0
				  )
				: 0,
		}

		const response = {
			status: 200,
			data: result,
		}

		return res.json(response)
	}

	// Delete by Code
	if (req.method === 'DELETE') {
		const result = await prisma.votes.update({
			where: {
				code: code as string,
			},
			data: {
				deletedAt: new Date().toString(),
			},
		})
		return res.json(result)
	}

	// Update by Code
	// if (req.method === 'PUT') {
	// 	const result = await prisma.votes.update({
	// 		where: {
	// 			code: code as string,
	// 		},
	// 		data: {
	// 			candidates: req.body.candidates,
	// 			endDate: req.body.endDate,
	// 			startDate: req.body.startDate,
	// 			title: req.body.title,
	// 		},
	// 	})

	// 	return res.json(result)
	// }
}
