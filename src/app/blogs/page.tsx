/* eslint-disable @next/next/no-async-client-component */
'use client'

import { useRouter } from "next/navigation";
import BlogCard from "./BlogCard";
import { client } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const getBlogs = async (): Promise<{
  title: string;
  summary: string;
  tags: string[];
  banner?: string;
}[]> => {
  const blogPosts = await client.fetch(`*[_type == "post"]`, {})
  return blogPosts
}

export default async function Blogs() {
  const router = useRouter()
  const blogPosts = await getBlogs()
  return (
    <main className="w-11/12 mx-auto py-4">
      <h1 className="text-3xl font-semibold mb-4">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            tags={post.tags}
            title={post.title}
            summary={post.summary}
            banner={imageUrlBuilder(client).image(post.banner!).url()}
          />
        ))}
      </div>
      <button  onClick={() => router.push("/")} className="bg-pink-500 px-5 py-3">Head back home</button>

    </main>
  );
}
