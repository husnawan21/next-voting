import { getSession } from 'next-auth/react'
import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const session = getSession({ req })

	if (!session) {
		return res.status(401).json({ message: 'Login dahulu!' })
	}

	const { code } = req.query

	// Get Detail by Code
	if (req.method === 'GET') {
		const vote = await prisma.votes.findFirst({
			select: {
				id: true,
				publisher: true,
				title: true,
				code: true,
				startDateTime: true,
				endDateTime: true,
				candidates: true,
				createdAt: true,
				deletedAt: false,
			},
			where: {
				code: code as string,
				deletedAt: null,
			},
		})

		if (!vote) {
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
			candidates = vote?.candidates.map(candidate => {
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

		const clientVote: Vote = {
			id: vote?.id!,
			title: vote?.title!,
			publisher: vote?.publisher!,
			code: vote?.code!,
			candidates: candidates,
			startDateTime: String(vote?.startDateTime),
			endDateTime: String(vote?.endDateTime),
			createdAt: String(vote?.createdAt),
			totalVotes: candidates
				? candidates.reduce(
						(acc, candidate) => acc + (candidate.votes ? candidate.votes : 0),
						0
				  )
				: 0,
		}

		const response: Res<Vote> = {
			status: 200,
			data: clientVote,
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
	if (req.method === 'PUT') {
		const result = await prisma.votes.update({
			where: {
				code: code as string,
			},
			data: {
				candidates: req.body.candidates,
				endDateTime: req.body.endDateTime,
				startDateTime: req.body.startDateTime,
				title: req.body.title,
			},
		})

		return res.json(result)
	}
}
