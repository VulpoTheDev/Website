export const works: IWorkProps[] = [
  {
    workDuration: "2022-Present",
    workLogo: "/images/works/fuzzyplaza.gif",
    workName: "Fuzzy Plaza",
    workTitle: "Web/Bot Developer",
  },
  {
    workDuration: "2022-Present",
    workLogo: "/images/works/sparrow.png",
    workName: "Project Sparrow",
    workTitle: "Project Lead/Web Dev",
  },
  {
    workDuration: "2021-Present",
    workLogo: "/images/works/clubfloof.png",
    workName: "Club Floof",
    workTitle: "Bot Developer",
  },
  {
    workDuration: "2022-Present",
    workLogo: "/images/works/planetpaws.png",
    workName: "Planet Paws",
    workTitle: "Bot Developer",
  },
  {
    workDuration: "2021-Present",
    workLogo: "/images/works/furdevs.png",
    workName: "FurDevs",
    workTitle: "Developer",
  },
  {
    workDuration: "2022-Present",
    workLogo: "/images/works/tfa.png",
    workName: "The Furry Assembly",
    workTitle: "Web/Bot Developer",
  },
  {
    workDuration: "2021-2022",
    workLogo: "/images/works/vortexfurs.png",
    workName: "Vortex Furs Arcade",
    workTitle: "Web/Bot Developer",
  },
  {
    workDuration: "2021-2022",
    workLogo: "/images/works/optional.png",
    workName: "Optional",
    workTitle: "Bounty Web Developer",
  },
  {
    workDuration: "2021-Present",
    workLogo: "/images/works/ratking.png",
    workName: "The Furry Freakshow",
    workTitle: "Bot Developer",
  },
  {
    workDuration: "2022-Present",
    workLogo: "/images/works/puroto.png",
    workName: "Puroto",
    workTitle: "Front Lead Developer",
  },
  {
    workDuration: "2022-Present",
    workLogo: "/images/works/anthroimperium.png",
    workName: "Anthro Imperium",
    workTitle: "Bot Developer",
  }
];

export const projects: IProjectCardProps[] = [
  {
    projectName: "Linux Stuff",
    description: "A collection of linux scripts I use.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/150px-Tux.svg.png",
    link: "",
    technologies: ["bash-plain"],
    type: "Other",
    github: "https://github.com/VulpoTheDev/Linux-Stuff"
  },
];

export const recentProjects: IProjectCardProps[] = [
  {
    projectName: "MyFursona",
    description:
      "Website where users can store and share their fursonas artworks.",
    image: "/images/myfursona.png",
    link: "https://myfursona.art",
    technologies: ["typescript-plain", "nextjs-plain", "go-plain"],
    type: "Website",
    github: "https://github.com/MyFursona-Project"
  },
  {
    projectName: "Ozzy Website",
    description: "This Website!",
    image: "/images/banner.png",
    link: "https://ozzy.gay",
    technologies: ["typescript-plain", "nextjs-plain"],
    type: "Website",
    github: "https://github.com/VulpoTheDev/Website"
  },
  {
    projectName: "Project Sparrow",
    description: "Social Media app for furries!",
    image: "/images/sparrow.png",
    link: "https://www.youtube.com/watch?v=E4WlUXrJgy4",
    technologies: ["typescript-plain", "nextjs-plain", "go-plain"],
    type: "Website",
    github: "https://www.youtube.com/watch?v=E4WlUXrJgy4"
  },
];

interface IWorkProps {
  [key: string]: string;
  workDuration: string;
  workLogo: string;
  workName: string;
  workTitle: string;
}

interface IProjectCardProps {
  projectName: string;
  description: string;
  image: string;
  link: string | null;
  github: string;
  technologies: string[];
  type:
    | "Discord Bot"
    | "Website"
    | "Website/Discord Bot"
    | "Application"
    | "Other";
}
