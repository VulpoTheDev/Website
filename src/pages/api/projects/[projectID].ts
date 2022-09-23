import {randomUUID} from "crypto";
import {NextApiRequest, NextApiResponse} from "next";
import connectDB from "../../../middleware/mongodb";
import Project from "../../../models/Project";

type Data = {
	projectName: string
	description: string
	date: Date
	icon: string
	projectID: string
	github: string
	projectLink: string
	techStack: string[]
} | {
	message: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const projectID = req.query.projectID as string;
	const projectData = await Project.findOne({projectID: projectID});
	if (!projectData) return res.status(404).json({message: "Project not found!"});
	res.status(200).json(projectData);
}

export default connectDB(handler);
