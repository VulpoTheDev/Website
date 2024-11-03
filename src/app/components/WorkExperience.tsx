import Image from "next/image"

interface IWorkExperienceProps {
    startYear: string
    endYear: number | string
    img: string
    name: string
    position: string
}

export default function WorkExperience({ startYear, endYear, img, name, position }: IWorkExperienceProps) {
    return (
        <div className="flex flex-row gap-x-3">
            <img className="w-1/4 border-white border bg-white rounded-full" src={img} alt={name} />
            <div className="flex flex-col text-start gap-y-1">
                <p className="text-lg font-bold">{name}</p>
                <p>{position}</p>
                {startYear}-{endYear}
            </div>
        </div>
    )
}