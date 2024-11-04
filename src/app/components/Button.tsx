'use client'

import { useRouter } from "next/navigation";
import React from "react";

type IButtonProp = {
  label: string;
  href?: string;
  page?: string;
  outline?: boolean
}

export default function Button({ label, href, page, outline = false }: IButtonProp) {
  const router = useRouter()
  return (
    <a href={href && href || undefined}>
      <button onClick={() => page && router.push(page)} className={`py-2 px-4 bg-gray-800 font-bold text-white rounded ${outline && 'outline'}`}>{label}</button>
    </a>
  );
}