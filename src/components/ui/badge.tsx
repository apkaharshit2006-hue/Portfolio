import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "emerald" | "purple" | "outline";
  dot?: boolean;
}

const dotColor: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-indigo-400",
  emerald: "bg-emerald-400",
  purple: "bg-purple-400",
  outline: "bg-gray-400",
};

export function Badge({ className, variant = "default", dot = false, children, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-mono font-medium tracking-tight backdrop-blur-md transition-colors",
        variant === "default" && "bg-indigo-500/10 text-indigo-300 border border-indigo-400/25",
        variant === "emerald" && "bg-emerald-500/10 text-emerald-300 border border-emerald-400/25",
        variant === "purple" && "bg-purple-500/10 text-purple-300 border border-purple-400/25",
        variant === "outline" && "border border-white/10 text-gray-300 bg-white/[0.03]",
        className
      )}
      {...props}
    >
      {dot && (
        <span className={cn("h-1.5 w-1.5 rounded-full animate-pulse-soft", dotColor[variant])} />
      )}
      {children}
    </div>
  );
}
