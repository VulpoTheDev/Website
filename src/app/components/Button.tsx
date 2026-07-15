'use client'

import { useRouter } from "next/navigation";
import React from "react";

type IButtonProp = {
  label: string;
  href?: string;
  page?: string;
  outline?: boolean;
  variant?: "primary" | "secondary";
}

export default function Button({
  label,
  href,
  page,
  outline = false,
  variant = "secondary",
}: IButtonProp) {
  const router = useRouter();

  const base =
    "inline-flex items-center justify-center py-2.5 px-5 font-bold rounded transition-colors text-sm md:text-base";

  const styles = outline
    ? "border-2 border-accent/60 bg-transparent text-ink hover:border-accent hover:bg-accent/10 hover:text-accent"
    : variant === "primary"
      ? "bg-accent text-accent-ink hover:bg-[#8a6be8]"
      : "bg-accent/15 border border-accent/40 text-ink hover:bg-accent/25 hover:border-accent";

  const className = `${base} ${styles}`;

  const onNavigate = () => {
    if (page) router.push(page);
  };

  if (href) {
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.endsWith(".pdf");
    return (
      <a
        href={href}
        className={className}
        {...(isExternal && !href.startsWith("mailto:")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {label}
      </a>
    );
  }

  return (
    <button type="button" onClick={onNavigate} className={className}>
      {label}
    </button>
  );
}
