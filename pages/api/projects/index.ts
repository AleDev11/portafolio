import { NextApiRequest, NextApiResponse } from 'next'
import projects from '../../../data/projects.json'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') return res.status(405).end();

    try {
        projects.sort((a, b) => b.id - a.id);

        return res.status(200).json(projects);
    } catch (error) {
        console.error(error);
        return res.status(400).end();
    }
}