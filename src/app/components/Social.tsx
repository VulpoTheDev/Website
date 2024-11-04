'use client'

import { useRouter } from "next/navigation";

export default function Social({ icon, link }: { icon: NonNullable<React.ReactElement>, link: string }) {
    const router = useRouter()
    return (
        <div onClick={() => router.push(link)}>
            {icon}
        </div>
    )
}