"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-body font-medium rounded-full transition-all duration-300 group";

  const variants = {
    primary:
      "bg-orange text-midnight hover:bg-orange-light shadow-lg shadow-orange/10 hover:shadow-orange/30",
    secondary:
      "bg-orange/10 text-orange border border-orange/20 hover:bg-orange/20 hover:border-orange/40",
    ghost: "text-muted hover:text-foreground",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {variant === "primary" && (
          <div className="absolute inset-0 rounded-full bg-orange/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {variant === "primary" && (
        <div className="absolute inset-0 rounded-full bg-orange/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </button>
  );
}
