'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter()
    return (
        <nav className="flex flex-row w-full py-3 px-8 justify-between">
            <h1 className="text-3xl font-bold" onClick={() => router.push("/")}>Jason Diaz Jimenez</h1>
            <div className="flex flex-row items-center gap-x-12 font-bold">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/blogs">Blogs</Link>
                <Link href="/projects">Projects</Link>
                <button className="p-2 bg-slate-800 rounded py-2 px-4" onClick={() => window.open("/resume.pdf", '_blank')}>Resume</button>
            </div>
        </nav>
    )
}