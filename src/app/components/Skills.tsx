import Image from "next/image";
import React from "react";

interface ISkillsProp {
  skillsName: string;
  langs: string[];
}

export default function Skills({ langs, skillsName }: ISkillsProp) {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-bold tracking-tighter mb-3">{skillsName.toUpperCase()}</h3>
      <div className="flex flex-wrap gap-2.5">
        {langs.map((tech) => (
          <div key={tech} className="flex items-center justify-center rounded-lg">
            <img src={`https://skillicons.dev/icons?i=${tech}`} alt={tech} width={48} height={48} />
          </div>
        ))}
      </div>
    </div>
  );
}