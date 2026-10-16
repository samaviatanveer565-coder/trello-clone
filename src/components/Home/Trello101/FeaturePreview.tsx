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

            <div className="w-[90%]"> 
            {/* Three dots above illustration */}
            <div className="carousel-controls">
                {[0, 1, 2].map((dot) => (
                    <span
                        key={dot}
                        className="carousel-dot bg-[#091E42]"
                    />
                ))}
            </div>

            {/* Original Trello illustration */}
            <div className="flex aspect-[625/420] w-full items-center justify-center overflow-hidden rounded-[9px] bg-[#F1F2F4]">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-contain"
                />
            </div>
            </div>
        </div>
    );
}