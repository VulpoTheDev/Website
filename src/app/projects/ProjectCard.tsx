'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  return (
    <div
      className="border border-gray-700 rounded-lg overflow-hidden shadow-md group relative transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-between"
    >
      <div className="p-4 sm:p-6 flex-grow">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 dark:text-white">{title || "No Name"}</h2>
        <p className="dark:text-gray-400 text-sm sm:text-base mb-4">{description}</p>

        <div>
          {banner ? (
            <Image
              src={banner}
              alt={title || "No alt"}
              width={600}
              height={300}
              className="rounded-lg object-cover w-full mb-4 transform transition-transform duration-300 group-hover:scale-110"
              style={{ height: '200px', maxHeight: '300px' }}
            />
          ) : (
            <div className="bg-gray-300 h-32 sm:h-48 text-gray-700 text-lg sm:text-3xl text-center py-14 sm:py-20">
              {title}
            </div>
          )}
          <div className="flex flex-wrap gap-2 mt-4">
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
      </div>

      {(github || website) && (
        <div className="flex gap-2 sm:gap-4 p-4 sm:p-6 pt-0 justify-between">
          {github && (
            <button
              className={`${website ? "w-1/2" : "w-full"} bg-gray-900 px-2 sm:px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300 text-white font-bold flex flex-row gap-x-2 items-center justify-center text-sm sm:text-base`}
              onClick={() => router.push(github)}
            >
              <LuGithub />
              GitHub
            </button>
          )}
          {website && (
            <button
              className={`${github ? "w-1/2" : "w-full"} bg-gray-900 px-2 sm:px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300 text-white font-bold flex flex-row gap-x-2 items-center justify-center text-sm sm:text-base`}
              onClick={() => router.push(website)}
            >
              <LuLink />
              Website
            </button>
          )}
        </div>
      )}
    </div>
  );
}
