import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          variant === "default" && "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500",
          variant === "outline" && "border border-white/10 bg-white/5 text-gray-200 hover:bg-white/10 backdrop-blur-md",
          variant === "ghost" && "hover:bg-white/5 text-gray-300 hover:text-white",
          variant === "secondary" && "bg-zinc-800 text-zinc-100 hover:bg-zinc-700",
          size === "default" && "h-10 px-5 py-2 text-sm rounded-xl",
          size === "sm" && "h-8 px-3 text-xs rounded-lg",
          size === "lg" && "h-12 px-7 text-sm rounded-2xl",
          size === "icon" && "h-10 w-10 rounded-xl",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
