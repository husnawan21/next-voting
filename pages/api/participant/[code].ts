import { getSession } from 'next-auth/react'
import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const session = await getSession({ req })

	if (!session) {
		return res.status(401).json({ message: 'Login dulu!' })
	}

	const { code } = req.query

	// Get Participant Detail
	if (req.method === 'GET') {
		const result = await prisma?.participant?.findFirst({
			where: {
				code: code as string,
				email: session?.user?.email!,
			},
		})
		const response = {
			status: 200,
			data: result,
		}

		return res.status(200).json(response)
	}

	// Add Participant
	if (req.method === 'POST') {
		const result = await prisma.participant.create({
			data: {
				candidate: req.body.candidate,
				email: session?.user?.email!,
				code: code as string,
			},
		})
		return res.json(result)
	}
	return res.json({ message: 'Hi Mom' })
}
