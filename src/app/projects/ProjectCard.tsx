'use client';

import Image from "next/image";
import { LuGithub, LuLink } from 'react-icons/lu';
import React from "react";

export default function ProjectCard({
  title,
  description,
  languages,
  banner,
  github,
  website
}: {
  title?: string;
  description?: string;
  languages: string[];
  banner?: any;
  github?: string;
  website?: string;
}) {
  const hasLinks = Boolean(github || website);

  return (
    <div className="h-full border border-gray-700 rounded-lg overflow-hidden shadow-md group relative transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 dark:text-white">
          {title || "No Name"}
        </h2>
        <p className="dark:text-gray-400 text-sm sm:text-base mb-4 line-clamp-3 min-h-[3.75rem]">
          {description}
        </p>

        {banner ? (
          <Image
            src={banner}
            alt={title || "No alt"}
            width={600}
            height={300}
            className="rounded-lg object-cover w-full h-[200px] mb-4 transform transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="bg-gray-300 h-[200px] mb-4 text-gray-700 text-lg sm:text-3xl text-center flex items-center justify-center rounded-lg">
            {title}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-auto">
          {languages.map((language, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-800 text-white font-bold rounded-lg text-xs sm:text-sm"
            >
              {language}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-2 sm:gap-4 p-4 sm:p-6 pt-0 mt-auto min-h-[3.25rem]">
        {github && (
          <button
            className="flex-1 bg-gray-900 px-2 sm:px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300 text-white font-bold flex flex-row gap-x-2 items-center justify-center text-sm sm:text-base"
            onClick={() => window.open(github, "_blank", "noopener,noreferrer")}
          >
            <LuGithub />
            GitHub
          </button>
        )}
        {website && (
          <button
            className="flex-1 bg-gray-900 px-2 sm:px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300 text-white font-bold flex flex-row gap-x-2 items-center justify-center text-sm sm:text-base"
            onClick={() => window.open(website, "_blank", "noopener,noreferrer")}
          >
            <LuLink />
            Website
          </button>
        )}
        {!hasLinks && (
          <div className="flex-1 flex items-center justify-center rounded bg-gray-900/50 px-2 sm:px-4 py-2 text-sm sm:text-base font-bold text-gray-500">
            Links coming soon
          </div>
        )}
      </div>
    </div>
  );
}
