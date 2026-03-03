import type { ComponentPropsWithoutRef } from "react";

type StatusBadgeProps = ComponentPropsWithoutRef<"span">;

export function StatusBadge({ className = "", children, ...props }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300 sm:text-sm ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
