import Image from "next/image";
import React from "react";

interface ISkillsProp {
  skillsName: string;
  langs: string[];
}

export default function Skills({ langs, skillsName }: ISkillsProp) {
  return (
    <div className="my-6">
      <h3 className="text-2xl font-bold tracking-tighter my-2">{skillsName.toUpperCase()}</h3>
      <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
        {langs.map((tech) => (
          <div key={tech} className="flex items-center justify-center bg-muted rounded-lg">
            <img src={`https://skillicons.dev/icons?i=${tech}`} alt={tech} width={60} height={60} />
          </div>
        ))}
      </div>
    </div>
  );
}