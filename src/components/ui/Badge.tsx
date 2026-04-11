import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "plum" | "orange-light";
  className?: string;
}

export default function Badge({
  children,
  variant = "orange",
  className,
}: BadgeProps) {
  const variants = {
    orange: "bg-orange/10 text-orange border-orange/20",
    plum: "bg-plum/10 text-plum-light border-plum/20",
    "orange-light": "bg-orange-light/10 text-orange-light border-orange-light/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
