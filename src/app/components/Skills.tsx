import React from "react";

interface ISkillsProp {
  skillsName: string;
  langs: { id: string; label: string }[];
}

export default function Skills({ langs, skillsName }: ISkillsProp) {
  return (
    <div>
      <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        {skillsName}
      </h3>
      <div className="flex flex-wrap gap-2.5">
        {(langs ?? []).map((tech) => (
          <div
            key={tech.id}
            className="flex items-center gap-2 rounded border border-line bg-surface px-2.5 py-1.5"
          >
            <img
              src={`https://skillicons.dev/icons?i=${tech.id}`}
              alt=""
              width={28}
              height={28}
              className="shrink-0"
            />
            <span className="text-sm font-medium text-ink">{tech.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
