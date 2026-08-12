import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "emerald" | "purple" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-mono font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variant === "default" && "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
        variant === "emerald" && "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
        variant === "purple" && "bg-purple-500/10 text-purple-400 border border-purple-500/20",
        variant === "outline" && "border border-white/10 text-gray-300",
        className
      )}
      {...props}
    />
  );
}
