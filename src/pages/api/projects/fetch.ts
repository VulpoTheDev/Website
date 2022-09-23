import { randomUUID } from "crypto";
import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../middleware/mongodb";
import BlogPost from "../../../models/BlogPost";
import Project from "../../../models/Project";

type Data = {
	title: string;
	content: string;
	banner: string;
	blogID: string;
	date: Date;
}[] | {
	message: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const projects = await Project.find({});
	if (!projects) return res.status(404).json({ message: "Projects not found!" });
	res.status(200).json(projects);
}
export default connectDB(handler);
