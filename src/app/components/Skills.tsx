import Image from "next/image";
import React from "react";

interface ISkillsProp {
  skillsName: string;
  langs: string[];
}

export default function Skills({ langs, skillsName }: ISkillsProp) {
  return (
    <div className="flex flex-col justify-center gap-y-5 my-4">
      <h2 className="text-3xl font-bold">{skillsName.toUpperCase()}</h2>
      <img
        className="w-2/3"
        src={`https://skillicons.dev/icons?i=${langs.join(",")}`}
        alt={skillsName}
      />
    </div>
  );
}