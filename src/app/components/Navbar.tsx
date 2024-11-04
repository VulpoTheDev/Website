'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full py-3 px-4 md:px-8">
      <h1 className="text-2xl md:text-3xl font-bold text-white cursor-pointer" onClick={() => router.push("/")}>
        Jason Diaz Jimenez
      </h1>
      <div className="hidden md:flex flex-row items-center gap-x-8 font-bold">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/projects">Projects</Link>
        <button className="p-2 bg-slate-800 rounded px-4" onClick={() => window.open("/resume.pdf", '_blank')}>
          Resume
        </button>
      </div>
      <div className="md:hidden">
        <FaBars className="text-white text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
        {isOpen && (
          <div className="absolute right-4 top-14 bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-start gap-4 font-bold">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <button className="w-full p-2 bg-slate-800 rounded px-4" onClick={() => {
              window.open("/resume.pdf", '_blank');
              setIsOpen(false);
            }}>Resume</button>
          </div>
        )}
      </div>
    </nav>
  );
}
