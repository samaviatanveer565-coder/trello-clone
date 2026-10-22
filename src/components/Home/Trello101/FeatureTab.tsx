type FeatureTabProps = {
    title: string;
    description: string;
    isActive: boolean;
    onClick: () => void;
};

export default function FeatureTab({
    title,
    description,
    isActive,
    onClick,
}: FeatureTabProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={isActive}
            className={`
        w-full rounded-[6px] border-l-[6px] px-[15px] py-[14px]
        text-left transition-all duration-200
        ${isActive
                    ? "border-[var(--feature-tab-accent)] bg-[var(--feature-tab-active-bg)] shadow-md"
                    : "border-transparent bg-transparent hover:bg-[var(--feature-tab-hover-bg)]"
                }
      `}
        >
            <h3 className="text-[18px] font-bold text-[var(--text-primary)]">
                {title}
            </h3>

            <p className="mt-[8px] text-[17px] leading-[px] text-[var(--text-secondary)]">
                {description}
            </p>
        </button>
    );
}