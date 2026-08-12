import * as React from "react";
import { cn } from "@/lib/utils";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-2xl glass-panel glass-panel-hover p-6 text-card-foreground shadow-2xl", className)}
      {...props}
    />
  )
);
Card.displayName = "Card";
