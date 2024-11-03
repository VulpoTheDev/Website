'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function BlogCard({ title, summary, tags, banner, slug }: {
  title: string;
  summary: string;
  tags: string[];
  banner?: string;
  slug: string
}) {
  const router = useRouter()
  return (
    <div className="border rounded-lg overflow-hidden shadow-md group transition-all ease-in-out" onClick={() => router.push(`/blogs/${slug}`)}>
      <div className="group-hover:bg-pink-500">
        {banner ? (
          <div className="relative w-full h-48">
            <Image
              src={banner}
              alt={title}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover"
              }} />
          </div>
        ) : (
          <div className="bg-gray-300 h-48 text-white text-3xl text-center py-20">
            {title}
          </div>
        )}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-400 group-hover:text-white mb-2">{summary}</p>
          <div className="flex space-x-2">
            {tags && tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-pink-500 text-white font-bold rounded-lg text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};