'use client'
import { useRouter } from "next/navigation";
import BlogCard from "./BlogCard";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import Button from "../components/Button";
import { FiSearch } from 'react-icons/fi'

interface BlogPost {
  title: string;
  summary: string;
  tags: string[];
  banner?: string;
  slug: string;
}

const getBlogs = async (): Promise<BlogPost[]> => {
  const blogPosts = await client.fetch(`*[_type == "post"] {
    title,
    summary,
    tags,
    banner,
    "slug": slug.current
  }`);

  return blogPosts.map((post: any) => ({
    ...post,
    banner: post.banner ? urlFor(post.banner) : undefined
  }));
};

export default async function Blogs() {
  const router = useRouter();
  const blogPosts = await getBlogs();

  return (
    <main className="w-11/12 mx-auto py-4 container">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
          My Blog
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Thoughts, tutorials, and insights on software engineering and cybersecurity.
        </p>
      </div>
      <div className="mt-8 flex justify-center">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          className="w-full pl-12 pr-4 py-3 text-white placeholder-gray-400 bg-gray-900 border-2 border-gray-700 rounded-full shadow-sm focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
          placeholder="Search blog here..."
        />
        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
    </div>
      <div className="my-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            summary={post.summary}
            tags={post.tags}
            banner={post.banner}
            slug={post.slug}
          />
        ))}
      </div>
      <Button label="Head back home" page="/" />
    </main >
  );
}
