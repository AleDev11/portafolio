import { NextApiRequest, NextApiResponse } from 'next'
import projects from '../../../data/projects.json'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') return res.status(405).end();

    try {
        const projectId = Number(req.query.projectId);
        const project = projects.find(project => project.id === projectId);

        if (!project) {
            return res.status(404).end();
        }

        // Do something with the project

        return res.status(200).json(project);
    } catch (error) {
        console.error(error);
        return res.status(400).end();
    }
}