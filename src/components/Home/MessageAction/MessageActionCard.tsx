//MessageActionCard reusable child hoga. Dono white cards ki layout aur styling similar hai, 
//sirf content aur image direction change hoti hai. 
//Isliye duplicate JSX likhne ke bajaye ek component ko different props denge.

type MessageActionCardProps = {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    iconColor: string;
    reverse?: boolean;
};

export default function MessageActionCard({
    title,
    description,
    image,
    imageAlt,
    iconColor,
    reverse = false,
}: MessageActionCardProps) {
    return (
        <article
            className={`
        flex w-full flex-col items-center gap-10
        rounded-[6px] bg-white p-7 shadow-sm
        md:flex-row md:gap-[55px]
        min-h-[300px]
        ${reverse ? "md:flex-row-reverse" : ""}
      `}
        >
            {/* Illustration */}
            <div className="w-full min-w-0 md:w-1/2">
                <img
                    src={image}
                    alt={imageAlt}
                    className="block h-auto w-full rounded-[6px]"
                />
            </div>

            {/* Text content */}
            <div className="w-full min-w-0 md:flex-1">
                <div className="mb-[25px] flex items-center gap-4">
                    <span
                        className="h-[20px] w-[20px] rounded-[5px]"
                        style={{ backgroundColor: iconColor }}
                        aria-hidden="true"
                    />

                    <h3 className="text-[13px] font-bold uppercase text-[#091E42]">
                        {title}
                    </h3>
                </div>

                <p className="text-[18px] leading-[27px] text-[#091E42]">
                    {description}
                </p>
            </div>
        </article>
    );
}