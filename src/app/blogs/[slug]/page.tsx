'use client'

import { notFound } from 'next/navigation';
import { client } from '../../../../sanity/lib/client';
import { useEffect, useState } from 'react';
import { MarkdownRenderer } from '@/app/components/MarkdownRenderer';

interface BlogPostProps {
  params: { slug: string };
}

async function getPost(slug: string) {
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      title,
      markdownBody,
      publishedAt,
    }`,
    { slug }
  );
}

export default function BlogPage({ params: { slug } }: BlogPostProps) {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getPost(slug);
      if (!data) {
        notFound();
      }
      setPost(data);
      setLoading(false);
    }

    fetchData();
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!post) return notFound();

  return (
    <main className="w-11/12 mx-auto py-4">
      <h1 className="text-3xl font-bold mb-2">{post.title || "Untitled Post"}</h1>
      <p className="text-gray-500 mb-4">
        {post.publishedAt
          ? new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })
          : "Unknown Date"}
      </p>
      <article className="prose prose-invert lg:prose-xl max-w-none">
  <MarkdownRenderer content={post.markdownBody} />
</article>

    </main>
  );
}
