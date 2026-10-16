// is k andr image aur transitions hain.
type FeaturePreviewProps = {
    image: string;
    title: string;
};

export default function FeaturePreview({
    image,
    title,
}: FeaturePreviewProps) {
    return (
        <div className="w-full">
            {/* Three dots above illustration */}
            <div className="mb-[15px] flex justify-end gap-[7px]">
                {[0, 1, 2].map((dot) => (
                    <span
                        key={dot}
                        className="h-[7px] w-[7px] rounded-full bg-[#091E42]"
                    />
                ))}
            </div>

            {/* Original Trello illustration */}
            <div className="flex aspect-[625/420] w-[90%] items-center justify-center overflow-hidden rounded-[9px] bg-[#F1F2F4]">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-contain"
                />
            </div>
        </div>
    );
}