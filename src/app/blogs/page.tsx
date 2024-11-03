// page.tsx
'use client'
import { useRouter } from "next/navigation";
import BlogCard from "./BlogCard";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";

interface BlogPost {
  title: string;
  summary: string;
  categories: string[];
  banner?: string;
  slug: string;
}

// page.tsx (Blogs component)
const getBlogs = async (): Promise<BlogPost[]> => {
  const blogPosts = await client.fetch(`*[_type == "post"] {
    title,
    summary,
    "categories": categories[]->title,
    "banner": mainImage,
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
    <main className="w-11/12 mx-auto py-4">
      <h1 className="text-3xl font-semibold mb-4">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            summary={post.summary}
            tags={post.categories}
            banner={post.banner}
            slug={post.slug}
          />
        ))}
      </div>
      <button onClick={() => router.push("/")} className="bg-pink-500 px-5 py-3">
        Head back home
      </button>
    </main>
  );
}
