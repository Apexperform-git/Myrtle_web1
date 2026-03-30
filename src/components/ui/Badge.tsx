import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "amber" | "electric" | "emerald";
  className?: string;
}

export default function Badge({
  children,
  variant = "amber",
  className,
}: BadgeProps) {
  const variants = {
    amber: "bg-amber/10 text-amber border-amber/20",
    electric: "bg-electric/10 text-electric border-electric/20",
    emerald: "bg-emerald/10 text-emerald border-emerald/20",
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
