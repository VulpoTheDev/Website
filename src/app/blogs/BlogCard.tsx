'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import React from "react";
import { urlFor } from "../../../sanity/lib/image";

export default function BlogCard({
  title,
  summary,
  tags,
  banner,
  slug
}: {
  title: string;
  summary: string;
  tags: string[];
  banner?: any;
  slug: string;
}) {
  const router = useRouter();

  return (
    <div
      className="relative border dark:border-gray-800 rounded-lg overflow-hidden shadow-lg group transition-all ease-in-out cursor-pointer hover:shadow-xl"
      onClick={() => router.push(`/blogs/${slug}`)}
    >
      <div className="relative h-48 w-full">
        <Image
          src={banner ? urlFor(banner) : '/placeholder.png'}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="p-6 dark:bg-black dark:group-hover:bg-gray-800 transition-colors ease-in-out">
        <h2 className="text-2xl font-semibold mb-3 dark:text-white transition-colors ease-in-out">
          {title}
        </h2>
        <p className="text-gray-500 group-hover:text-gray-200 mb-4 transition-colors ease-in-out">
          {summary}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags &&
            tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-700 text-white font-bold rounded-lg text-xs sm:text-sm"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};
