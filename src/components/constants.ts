import { IProjectProps } from "./Project";
import { IServiceProps } from "./Service";
import { ISkillsProps } from "./Skills";

export const projects: IProjectProps[] = [
  {
    title: "Hozol",
    description:
      "Hozol is a General Purpose Discord Bot that aims to help you out manage your community with ease while being powerful with a lot of features out of the box",
    image: "images/hozol.png",
    github: "https://github.com/VulpoTheDev/Hozol",
  },
  {
    title: "FurDevs Discord Bot",
    description:
      "FurDevs Bot (Also known as Fenix) is a discord bot also written using discord.js and typescript which is used specifically for my Furry/Dev Server",
    image: "images/furdevs.png",
    github: "https://github.com/FurDevs-Community/FurDevs-Bot",
  },
  {
    title: "Vulpo's Website",
    description:
      "This website, which is made using Next.js, Typescript which dislays my projects and all about myself and my experiences in terms of developing",
    image: "images/vulpo.png",
    github: "https://github.com/VulpoTheDev/Website",
    link: "https://vulpo.xyz",
  },
];

export const skills: ISkillsProps[] = [
  {
    skill: "Full Stack Web Development",
    icon: "fas fa-globe",
    description: `I've been working on Web Development for 3 years starting with HTML/CSS/JS and now working with Next.js, SCSS, Typescript, React, Node.js, Express, MongoDB, and more. I am quite proficient in making front-ends and worked on projects such as https://optional.fianance (front-end as a bounty), https://furdevs.tech, Vortex Furs Arcade Website, This Website and more.`,
    years: "2019 - Present",
  },
  {
    skill: "Discord Bots",
    icon: "fas fa-robot",
    description: `Discord Bots were one of the first thing I learned as a developer. I've been working on Discord Bots since 8th Grade started with Javascript and using a library named discord.js. I made countless discord bots such as Hozol, FurDevs Bot, Vortex Furs, Club Floof's Bot, and more.`,
    years: "2018 - Present",
  },
  {
    skill: "Web Design",
    icon: "fas fa-paint-brush",
    description: `I've been designing websites as a hobby which I was inspired by a YouTube content creator named "DesignCourse" I've designed a website using Figma for Club Floof, The Furry Assembly, Hozol (Formly Vulpo's Moderations), A Gradebook Application and much more.`,
    years: "2021 - Present",
  },
];

export const services: IServiceProps[] = [
  {
    service: "Web Development",
    icon: "fas fa-globe",
    price: "Starting price at $120",
    description:
      "I can make a website for you. Please Email me (vulpothedev@gmail.com) if you're interested in this service for your business or other uses.",
  },
  {
    service: "Discord Bots",
    icon: "fas fa-robot",
    price: "Starting price at $70",
    description:
      "I can make an high quality discord bot for your discord server. If you're interested please email me (vulpothedev@gmail.com).",
  },
  {
    service: "Web Design",
    icon: "fas fa-paint-brush",
    price: "Starting price at $50",
    description:
      "I can design you a website for your business or other uses. If you're interested please email me (vulpothedev@gmail.com).",
  },
];
