import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Social from "../components/Social";
import Button from "../components/Button";
import { certificates } from "../data";

export const metadata = {
  title: "About",
  description:
    "Software engineer with a B.S. in Software Engineering from Western Governors University. Stack, credentials, and focus areas.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-20">
      <p className="mb-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        Profile
      </p>
      <h1 className="mb-12 text-center font-display text-3xl font-bold tracking-tight md:mb-16 md:text-5xl">
        About
      </h1>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div className="space-y-6 text-base leading-relaxed text-muted md:text-lg">
          <p className="text-lg font-medium text-ink md:text-xl">
            I&apos;m a software engineer with a parallel focus in cybersecurity. I
            like building full-stack applications while developing the security
            fundamentals employers expect in IT and engineering orgs.
          </p>

          <p>
            I graduated from{" "}
            <strong className="font-semibold text-ink">
              Western Governors University
            </strong>{" "}
            with a Bachelor&apos;s in Software Engineering. My credentials include
            CompTIA A+, Network+, Security+, CySA+, ITF+, ITILv4 Foundations,
            WGU Front-End and Back-End Developer, and AWS Cloud Practitioner.
          </p>

          <p>
            I work with TypeScript, React, Next.js, and Node-based APIs, with
            PostgreSQL and MongoDB.
          </p>

          <p>
            I started in school robotics, participating in VEX and FIRST, which
            led to web development and shipped client work. Recent engineering
            work includes multi-service platforms such as MyArtverse (TypeScript,
            Next.js, Go, Rust, and Postgres across the stack), alongside this
            portfolio and other production-minded side projects.
          </p>

          <p>
            I&apos;m targeting software engineering and cybersecurity-aligned roles
            and am available at{" "}
            <a
              href="mailto:hello@jasondiaz.dev"
              className="font-medium text-accent underline-offset-2 hover:underline"
            >
              hello@jasondiaz.dev
            </a>
            .
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="/resume.pdf" label="View Resume" variant="primary" />
            <Button href="mailto:hello@jasondiaz.dev" label="Email me" />
            <Button page="/projects" label="View projects" outline />
          </div>
        </div>

        <aside className="flex flex-col items-center gap-8 lg:sticky lg:top-24">
          <Image
            src="/jason.jpg"
            alt="Jason Diaz Jimenez"
            width={384}
            height={480}
            className="w-48 rounded-lg border border-line object-cover shadow-lg sm:w-64 md:w-80"
          />
          <div className="flex gap-5">
            <Social
              icon={<FaLinkedin size={24} />}
              link="https://www.linkedin.com/in/jasonydiazjimenez/"
              label="LinkedIn"
            />
            <Social
              icon={<FaGithub size={24} />}
              link="https://github.com/VulpoTheDev"
              label="GitHub"
            />
          </div>

          <div className="w-full rounded-lg border border-line bg-surface p-5">
            <h2 className="mb-4 text-center font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Credentials
            </h2>
            <ul className="space-y-2 text-sm text-muted">
              {certificates.map((cert) => (
                <li key={cert.name} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {cert.name}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
