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
                    ? "border-[#00C7E5] bg-[#F1F2F4] shadow-md"
                    : "border-transparent bg-transparent hover:bg-[#F7F8F9]"
                }
      `}
        >
            <h3 className="text-[18px] font-bold text-[#091E42]">
                {title}
            </h3>

            <p className="mt-[8px] text-[17px] leading-[px] text-[#091E42]">
                {description}
            </p>
        </button>
    );
}