'use client';

import Image from "next/image";
import { LuGithub, LuLink } from "react-icons/lu";
import React from "react";

export default function ProjectCard({
  title,
  description,
  languages,
  banner,
  github,
  website,
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
    <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="flex flex-grow flex-col p-4 sm:p-6">
        <h2 className="mb-2 font-display text-xl font-bold text-ink sm:text-2xl">
          {title || "Untitled project"}
        </h2>
        <p className="mb-4 min-h-[3.75rem] text-sm text-muted line-clamp-3 sm:text-base">
          {description}
        </p>

        {banner ? (
          <Image
            src={banner}
            alt={title || "Project preview"}
            width={600}
            height={300}
            className="mb-4 h-[200px] w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="mb-4 flex h-[200px] items-center justify-center rounded-lg border border-line bg-bg text-center text-lg text-muted sm:text-3xl">
            {title}
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-2">
          {(languages ?? []).map((language, index) => (
            <span
              key={index}
              className="rounded-md border border-line bg-bg px-2 py-1 text-xs font-bold text-ink sm:text-sm"
            >
              {language}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto flex min-h-[3.25rem] gap-2 p-4 pt-0 sm:gap-4 sm:p-6 sm:pt-0">
        {github && (
          <button
            type="button"
            className="flex flex-1 flex-row items-center justify-center gap-x-2 rounded bg-accent px-2 py-2 text-sm font-bold text-accent-ink transition-colors duration-300 hover:bg-[#8a6be8] sm:px-4 sm:text-base"
            onClick={() => window.open(github, "_blank", "noopener,noreferrer")}
          >
            <LuGithub />
            GitHub
          </button>
        )}
        {website && (
          <button
            type="button"
            className="flex flex-1 flex-row items-center justify-center gap-x-2 rounded bg-accent px-2 py-2 text-sm font-bold text-accent-ink transition-colors duration-300 hover:bg-[#8a6be8] sm:px-4 sm:text-base"
            onClick={() =>
              window.open(website, "_blank", "noopener,noreferrer")
            }
          >
            <LuLink />
            Website
          </button>
        )}
        {!hasLinks && (
          <div className="flex flex-1 items-center justify-center rounded border border-accent/30 bg-accent/10 px-2 py-2 text-sm font-bold text-muted sm:px-4 sm:text-base">
            Links coming soon
          </div>
        )}
      </div>
    </div>
  );
}
