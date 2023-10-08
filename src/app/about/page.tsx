'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function About() {
  const router = useRouter()
  return (
    <div className="w-11/12 mx-auto mt-8">
      <h1 className="text-6xl font-bold text-center mb-8">About Me</h1>

      <main className="mx-auto  p-6 mb-10 text-white rounded-lg shadow-md">
        <p className="text-2xl leading-relaxed mb-4">
          Hi there! I{"'"}m a programmer with a passion for technology and a love
          for problem-solving. I was born in Puerto Rico in 2005 and spent my
          formative years in the heart of Texas.
        </p>
        <p className="text-2xl leading-relaxed mb-4">
          My journey into the world of programming began in the 6th grade when
          I joined my school{"'"}s robotics club. We started experimenting with VEX
          robotics, and our early success was even featured in{" "}
          <Link href="https://kdhnews.com/news/education/judges-award-rancier-team-wins-at-their-1st-robotics-event/article_cf21e15a-0864-11e7-ae9f-574a10dc6839.html" className="text-blue-500 hover:underline">
            this article
          </Link>
          .
        </p>
        <p className="text-2xl leading-relaxed mb-4">
          My passion for coding truly ignited in 8th grade when I delved into
          structured programming in my Computer Applications class. We started
          with Scratch, a platform that taught us the fundamentals of coding
          through building blocks.
        </p>
        <p className="text-2xl leading-relaxed mb-4">
          The turning point came in my freshman year of high school when I
          joined the Robotics club. We embarked on an exciting journey,
          competing in Waco, Texas, as part of the FIRST Robotics competition.
          My friends and I designed and built a robot capable of lifting and
          carrying blocks to score points.
        </p>
        <p className="text-2xl leading-relaxed mb-4">
          My journey into web development began when a friend and I created a
          scoreboard app for a Super Smash Bros tournament as a fundraiser for
          our robotics club. This project introduced me to frontend development,
          and I was hooked.
        </p>
        <p className="text-2xl leading-relaxed mb-4">
          When the COVID-19 pandemic hit, I took the opportunity to dive deeper
          into web development. I also ventured into Discord bot development,
          which eventually led to commissions. I even created a bot for Club
          Floof, marking another milestone in my programming journey.
        </p>
        <p className="text-2xl leading-relaxed">
          Today, I{"'"}m actively working on a significant project called MyFursona.
          It{"'"}s one of my very first major projects where users can store their
          characters along with their art and information. It{"'"}s also a platform
          where artists can manage their commissions and shops.
        </p>
      </main>
      <button  onClick={() => router.push("/")} className="bg-pink-500 px-5 py-3">Head back home</button>
    </div>
  );
}
