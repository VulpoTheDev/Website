import Image from "next/image";

interface IWorkExperienceProps {
  startYear: string;
  endYear: number | string;
  img: string;
  name: string;
  position: string;
}

export default function WorkExperience({ startYear, endYear, img, name, position }: IWorkExperienceProps) {
  return (
    <div className="flex items-start gap-4">
      <Image
        src={img}
        alt={name}
        width={50}
        height={50}
        className="border border-white bg-white rounded-full object-cover"
      />
      <div className="flex flex-col">
        <p className="text-lg font-bold dark:text-white">{name}</p>
        <p className="text-sm dark:text-gray-300">{position}</p>
        <span className="text-sm text-gray-500">
          {startYear} - {endYear}
        </span>
      </div>
    </div>
  );
}
