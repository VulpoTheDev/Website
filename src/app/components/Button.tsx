'use client'

import { useRouter } from "next/navigation";
import React from "react";

type IButtonProp = {
  label: string;
  href?: string;
  page?: string
}

export default function Button({ label, href, page }: IButtonProp) {
  const router = useRouter()
  return (
    <a href={href && href || undefined}>
      <button onClick={() => page && router.push(page)} className="py-2 px-4 text-xl bg-gray-800 rounded">{label}</button>
    </a>
  );
}