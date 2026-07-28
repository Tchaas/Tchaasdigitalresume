import type { ComponentPropsWithoutRef } from "react";

type StatusBadgeProps = ComponentPropsWithoutRef<"span">;

export function StatusBadge({ className = "", children, ...props }: StatusBadgeProps) {
  return (
    <span
      className={`u-mono inline-flex items-center gap-1.5 rounded-full border border-[color-mix(in_srgb,var(--color-signal-500)_40%,transparent)] bg-[color-mix(in_srgb,var(--color-signal-500)_12%,transparent)] px-2.5 py-1 text-[0.625rem] uppercase tracking-[0.1em] text-[var(--color-signal-400)] ${className}`}
      {...props}
    >
      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[var(--color-signal-400)]" />
      {children}
    </span>
  );
}
