'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  return (
    <main className="w-11/12 h-screen flex justify-evenly items-center max-md:flex-col-reverse mx-auto">
      <div className="text-center">
        <h1 className="text-5xl max-md:text-2xl max-lg:text-3xl">
          Hello Everyone! I{"'"}m{" "}
          <span className="text-pink-400 underline font-bold">Jason Diaz Jimenez</span>
        </h1>
        <p className="text-3xl mt-2 max-md:text-xl max-lg:text-lg">
          Full Stack Web Developer, University Student, and Barista
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={() => router.push("/about")}
            className="bg-pink-500 py-2 px-4 rounded-md hover:scale-105 hover:bg-pink-400 transition-all ease-in-out"
          >
            About Me
          </button>
          <button
            onClick={() => router.push("/projects")}
            className="bg-pink-500 py-2 px-4 rounded-md hover:scale-105 hover:bg-pink-400 transition-all ease-in-out"
          >
            My Projects
          </button>
          <button
            onClick={() => router.push("/blogs")}
            className="bg-pink-500 py-2 px-4 rounded-md hover:scale-105 hover:bg-pink-400 transition-all ease-in-out"
          >
            My Blog
          </button>
        </div>
      </div>

      <div className="my-10 rounded-md overflow-hidden  max-sm:w-auto">
        <Image
          src="/jason.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </main>
  );
}
