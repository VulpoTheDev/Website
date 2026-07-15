'use client'

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "text-sm font-medium text-muted hover:text-ink transition-colors";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-line/80 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-ink md:text-xl"
        >
          Jason Diaz Jimenez
        </Link>

        <div className="hidden items-center gap-x-8 md:flex">
          <Link href="/" className={linkClass}>
            Home
          </Link>
          <Link href="/about" className={linkClass}>
            About
          </Link>
          <Link href="/projects" className={linkClass}>
            Projects
          </Link>
          <Link href="/blogs" className={linkClass}>
            Blog
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-accent px-4 py-2 text-sm font-bold text-accent-ink transition-opacity hover:opacity-90"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="p-2 text-ink md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-4 border-t border-line bg-surface px-4 py-4 font-medium md:hidden">
          <Link href="/" className={linkClass} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" className={linkClass} onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/projects" className={linkClass} onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="/blogs" className={linkClass} onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-accent px-4 py-2 text-center text-sm font-bold text-accent-ink"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
