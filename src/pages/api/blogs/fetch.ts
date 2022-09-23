import { randomUUID } from "crypto";
import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../middleware/mongodb";
import BlogPost from "../../../models/BlogPost";

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
  const blogs = await BlogPost.find({});
  if (!blogs) return res.status(404).json({ message: "Blog post not found!" });
  res.status(200).json(blogs);
}
export default connectDB(handler);
