export const works: IWorkProps[] = [
  {
    workDuration: "2022-Present",
    workLogo: "/images/works/fuzzyplaza.gif",
    workName: "Fuzzy Plaza",
    workTitle: "Web/Bot Developer",
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
];

interface IWorkProps {
  [key: string]: string;
  workDuration: string;
  workLogo: string;
  workName: string;
  workTitle: string;
}
