import Image from "next/image";

interface IWorkExperienceProps {
  startYear: string;
  endYear: number | string;
  img: string;
  name: string;
  position: string;
  bullets?: string[];
}

export default function WorkExperience({
  startYear,
  endYear,
  img,
  name,
  position,
  bullets,
}: IWorkExperienceProps) {
  return (
    <div className="flex items-start gap-4">
      <Image
        src={img}
        alt={name}
        width={48}
        height={48}
        className="shrink-0 rounded-full border border-line bg-white object-cover"
      />
      <div className="flex min-w-0 flex-col">
        <p className="font-display text-base font-bold text-ink md:text-lg">{name}</p>
        <p className="text-sm text-muted">{position}</p>
        <span className="mt-0.5 font-mono text-xs text-muted">
          {startYear} – {endYear}
        </span>
        {bullets && bullets.length > 0 && (
          <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-muted">
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
