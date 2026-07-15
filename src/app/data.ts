export const certificates: { name: string; img: string }[] = [
  {
    name: "CompTIA ITF+",
    img: "/certificates/comptiaitf.png",
  },
  {
    name: "CompTIA A+",
    img: "/certificates/a.png",
  },
  {
    name: "CompTIA Network+",
    img: "/certificates/network.png",
  },
  {
    name: "CompTIA Security+",
    img: "/certificates/security.png",
  },
  {
    name: "CompTIA CySA+",
    img: "/certificates/cysa.png",
  },
  {
    name: "ITILv4 Foundations",
    img: "/certificates/itil.png",
  },
  {
    name: "WGU Front-End Developer",
    img: "/certificates/wgufrontend.png",
  },
  {
    name: "WGU Back-End Developer",
    img: "/certificates/wgubackend.png",
  },
  {
    name: "AWS Cloud Practitioner",
    img: "/certificates/cloudpractitioner.png",
  },
];

export const workExp: {
  name: string;
  img: string;
  startYear: string;
  endYear: string;
  position: string;
  bullets?: string[];
}[] = [
  {
    name: "Black Rifle Coffee Company",
    img: "/work/brcc.png",
    startYear: "2023",
    endYear: "Present",
    position: "Retail Associate",
    bullets: [
      "Communicate clearly with customers and teammates in a high-volume retail environment",
      "Follow SOPs for inventory, cash handling, and store operations",
    ],
  },
  {
    name: "Coffee Beanery",
    img: "/work/cbean.png",
    startYear: "2022",
    endYear: "2023",
    position: "Barista",
    bullets: [
      "Delivered consistent service under time pressure during peak hours",
      "Supported inventory counts and daily operational checklists",
    ],
  },
];

export const languages = [
  { id: "typescript", label: "TypeScript" },
  { id: "javascript", label: "JavaScript" },
  { id: "python", label: "Python" },
  { id: "go", label: "Go" },
  { id: "java", label: "Java" },
];

export const webApis = [
  { id: "react", label: "React" },
  { id: "next", label: "Next.js" },
  { id: "express", label: "Express" },
  { id: "graphql", label: "GraphQL" },
  { id: "postgresql", label: "PostgreSQL" },
  { id: "mongodb", label: "MongoDB" },
];

export const tooling = [
  { id: "aws", label: "AWS" },
  { id: "docker", label: "Docker" },
  { id: "git", label: "Git" },
  { id: "linux", label: "Linux" },
  { id: "figma", label: "Figma" },
];
