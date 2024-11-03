'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function ProjectCard({
  title,
  description,
  languages,
  banner,
  github,
  website
}: {
  title: string;
  description: string;
  languages: string[];
  banner?: any;
  github?: string;
  website?: string;
}) {
  const router = useRouter();
  return (
    <div className="border border-gray-500 rounded-lg overflow-hidden shadow-md group transition-all ease-in-out">
      <div className="group-hover:bg-gray-500">
        {banner ? (
          <div className="relative w-full h-48 ">
            <Image
              src={banner}
              alt={title}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover"
              }} 
              className="group-hover:scale-100 scale-105 transition-all ease-in-out "
              />
          </div>
        ) : (
          <div className="bg-gray-300 h-48 text-white text-3xl text-center py-20">
            {title}
          </div>
        )}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-400 group-hover:text-white mb-4">
            {description}
          </p>
          <div className="flex space-x-2">
            {languages.map((language, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-700 text-white font-bold rounded-lg text-sm"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
        {github || website && (

        <div className="flex flex-row">
          {github && (<button className="bg-gray-700 hover:scale-105 hover:bg-400 transition-all ease-in-out" onClick={() => router.push(github)}>GitHub</button>)}
          {website && (<button className="bg-gray-700 hover:scale-105 hover:bg-400 transition-all ease-in-out" onClick={() => router.push(website)}>Website</button>)}
        </div>
        )}

      </div>
    </div>
  );
}
