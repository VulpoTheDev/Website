'use client'

import { notFound } from 'next/navigation';
import { client } from '../../../../sanity/lib/client';
import { useEffect, useState } from 'react';
import { urlFor } from '../../../../sanity/lib/image';
import { MarkdownRenderer } from '@/app/components/MarkdownRenderer';
import Image from 'next/image';

interface BlogPostProps {
  params: { slug: string };
}

async function getPost(slug: string) {
  try {
    return await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        title,
        markdownBody,
        publishedAt,
        banner
      }`,
      { slug }
    );
  } catch (error) {
    console.error('Failed to fetch post:', error);
    return null;
  }
}

export default function BlogPage({ params: { slug } }: BlogPostProps) {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPost(slug);
      if (!data) {
        notFound();
      } else {
        setPost(data);
      }
      setLoading(false);
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!post) return notFound();

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : "Unknown Date";

  const bannerUrl = post.banner ? urlFor(post.banner) : '/placeholder.png';

  return (
    <main className="py-4">
      <Image
        src={bannerUrl}
        alt={post.title || 'Post banner'}
        className="h-64 object-cover mb-4 w-full"
        width={1200}
        height={400}
        priority
      />
      <div className=" mx-auto flex flex-col items-start border-b-gray-800 border-b mb-14 px-8">
        <h1 className="text-4xl font-bold mb-2">{post.title || "Untitled Post"}</h1>
        <p className="text-gray-500 mb-4">{formattedDate}</p>
      </div>
      <article className="prose dark:prose-invert lg:prose-xl w-full mx-auto container">
        <MarkdownRenderer content={post.markdownBody} />
      </article>
    </main>
  );
}
