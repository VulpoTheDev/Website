'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function BlogCard({
  title,
  summary,
  tags,
  banner,
  slug,
}: {
  title: string;
  summary: string;
  tags?: string[];
  banner?: string;
  slug: string;
}) {
  const router = useRouter();

  return (
    <article
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
      onClick={() => router.push(`/blogs/${slug}`)}
    >
      <div className="relative h-44 w-full overflow-hidden sm:h-48">
        <Image
          src={banner || "/placeholder.png"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-grow flex-col p-5 sm:p-6">
        <h2 className="mb-2 font-display text-xl font-semibold text-ink transition-colors sm:text-2xl">
          {title}
        </h2>
        <p className="mb-4 line-clamp-3 flex-grow text-sm text-muted sm:text-base">
          {summary}
        </p>
        <div className="mt-auto flex flex-wrap gap-2">
          {(tags ?? []).map((tag, index) => (
            <span
              key={index}
              className="rounded-md border border-line bg-bg px-2 py-1 text-xs font-bold text-ink sm:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
