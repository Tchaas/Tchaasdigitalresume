interface SkillTagProps {
  skill: string;
  isSelected: boolean;
  onClick: () => void;
}

export function SkillTag({ skill, isSelected, onClick }: SkillTagProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isSelected}
      className={`u-mono inline-flex min-h-[40px] cursor-pointer items-center justify-center rounded border px-3 py-2 text-[0.6875rem] uppercase tracking-[0.08em] transition-colors duration-200 ${
        isSelected
          ? "border-[var(--color-signal-500)] bg-[var(--color-signal-500)] text-white"
          : "border-[var(--color-line)] text-[var(--color-fog)] hover:border-[var(--color-line-strong)] hover:bg-[var(--color-ink-700)] hover:text-[var(--color-bone)]"
      }`}
    >
      {skill}
    </button>
  );
}
