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
          "relative inline-flex items-center justify-center font-medium whitespace-nowrap transition-all duration-300 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          "disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          variant === "default" &&
            "bg-gradient-to-b from-indigo-500 to-indigo-600 text-white shadow-[0_10px_30px_-12px_rgba(79,70,229,0.9),inset_0_1px_0_rgba(255,255,255,0.22)] hover:from-indigo-400 hover:to-indigo-500",
          variant === "outline" &&
            "border border-white/10 bg-white/[0.04] text-gray-200 hover:bg-white/[0.08] hover:border-white/20 backdrop-blur-md",
          variant === "ghost" && "hover:bg-white/5 text-gray-300 hover:text-white",
          variant === "secondary" && "bg-zinc-800 text-zinc-100 hover:bg-zinc-700",
          size === "default" && "h-10 px-5 py-2 text-sm rounded-xl",
          size === "sm" && "h-8 px-3 text-xs rounded-lg",
          size === "lg" && "h-12 px-7 text-sm rounded-full",
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
