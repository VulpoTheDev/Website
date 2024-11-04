'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { LuLinkedin, LuGithub, LuInstagram, LuTwitter } from "react-icons/lu";
import Social from "../components/Social";

export default function About() {
  const router = useRouter();
  
  return (
    <div className="mx-auto mt-8 px-4 md:px-8 lg:px-16 max-w-7xl">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8">About Me</h1>
      <main className="flex flex-col md:flex-row justify-around items-center space-y-10 md:space-y-0 md:space-x-8">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-6 text-white rounded-lg shadow-md bg-gray-900 space-y-4 leading-relaxed">
          <p className="text-lg font-bold">
            Hi there! I{"'"}m a programmer with a passion for technology and a love for problem-solving. I was born in Puerto Rico in 2005 and spent my formative years in the heart of Texas.
          </p>
          <p>
            My journey into the world of programming began in the 6th grade when I joined my school{"'"}s robotics club. We started experimenting with VEX robotics, and our early success was even featured in{" "}
            <a
              href="https://kdhnews.com/news/education/judges-award-rancier-team-wins-at-their-1st-robotics-event/article_cf21e15a-0864-11e7-ae9f-574a10dc6839.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              this article
            </a>.
          </p>
          <p>
            My passion for coding truly ignited in 8th grade when I delved into structured programming in my Computer Applications class. We started with Scratch, a platform that taught us the fundamentals of coding through building blocks.
          </p>
          <p>
            The turning point came in my freshman year of high school when I joined the Robotics club. We embarked on an exciting journey, competing in Waco, Texas, as part of the FIRST Robotics competition.
          </p>
          <p>
            My journey into web development began when a friend and I created a scoreboard app for a Super Smash Bros tournament as a fundraiser for our robotics club. This project introduced me to frontend development, and I was hooked.
          </p>
          <p>
            During the COVID-19 pandemic, I dove deeper into web development and ventured into Discord bot development, which led to commissions. I even created a bot for Club Floof, marking another milestone in my programming journey.
          </p>
          <p>
            Today, I{"'"}m actively working on a significant project called MyFursona. It{"'"}s a platform where users can store their characters along with their art and information, and artists can manage commissions and shops.
          </p>
        </div>

        {/* Image and Social Links Section */}
        <div className="flex flex-col items-center gap-y-6">
          <img src="/jason.jpg" alt="Jason Diaz Jimenez" className="rounded-md shadow-lg w-48 sm:w-64 md:w-80 lg:w-96" />
          <div className="flex gap-4">
            <Social icon={<LuLinkedin size={28} />} link="https://www.linkedin.com/in/jasonydiazjimenez/" />
            <Social icon={<LuGithub size={28} />} link="https://github.com/VulpoTheDev" />
            <Social icon={<LuTwitter size={28} />} link="http://twitter.com/JYDiazJimenez" />
            <Social icon={<LuInstagram size={28} />} link="https://www.instagram.com/developer_vulpo/" />
          </div>
        </div>
      </main>
    </div>
  );
}
