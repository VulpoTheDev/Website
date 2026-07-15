import BlogCard from "./BlogCard";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import Button from "../components/Button";
import { FiSearch } from "react-icons/fi";

export const metadata = {
  title: "Blog",
  description:
    "Thoughts, tutorials, and insights on software engineering and cybersecurity.",
};

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
    banner: post.banner ? urlFor(post.banner) : undefined,
  }));
};

export default async function Blogs() {
  const blogPosts = await getBlogs();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          Writing
        </p>
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Blog
        </h1>
        <p className="mx-auto max-w-2xl text-muted md:text-xl text-balance">
          Thoughts, tutorials, and insights on software engineering and
          cybersecurity.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="w-full rounded-full border-2 border-line bg-surface py-3 pl-12 pr-4 text-ink placeholder:text-muted shadow-sm transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Search blog here..."
            aria-label="Search blog posts"
          />
          <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
        </div>
      </div>

      <div className="my-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={post.slug || index}
            title={post.title}
            summary={post.summary}
            tags={post.tags}
            banner={post.banner}
            slug={post.slug}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <Button label="Back to home" page="/" outline />
      </div>
    </main>
  );
}
