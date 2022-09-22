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
} | {
    message: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const blogID = req.query.blogID as string;
  const blog = await BlogPost.findOne({ blogID: blogID });
  if (!blog) return res.status(404).json({ message: "Blog post not found!" });
  res.status(200).json(blog);
}
export default connectDB(handler);
