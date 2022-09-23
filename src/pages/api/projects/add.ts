import { randomUUID } from "crypto";
import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../middleware/mongodb";
import BlogPost from "../../../models/BlogPost";
import Project from "../../../models/Project";

interface Data {}

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	// Get the data from the request body
	const { projectName, description, banner, technologies, projectType, information } = req.body;


	const projectID = randomUUID();
	// Create a new blog post
	await Project.create({
		projectName,
		description,
		icon: banner,
		projectID,
		date: Date.now(),
		technologies,
		projectType,
		information
	});
	// Send the response
	res.status(200).json({ message: "Project added!", projectID });
}

export default connectDB(handler);
