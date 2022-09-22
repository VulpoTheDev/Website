import { uploadImage } from "./../../../utils/uploader";
import { randomUUID } from "crypto";
import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../middleware/mongodb";
import BlogPost from "../../../models/BlogPost";

interface Data {}

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // Get the data from the request body
  const { title, content, banner } = req.body;
  const reference = await uploadImage(banner);

  const blogID = randomUUID();
  // Create a new blog post
  await BlogPost.create({
    title,
    content,
    banner: reference,
    blogID,
    date: Date.now(),
  });
  // Send the response
  res.status(200).json({ message: "Blog post created!", blogID });
}

export default connectDB(handler);
