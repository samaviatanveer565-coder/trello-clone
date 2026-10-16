type WorkSmarterCardProps = {
  title: string;
  description: string;
  icon: string;
  buttonText: string;
  buttonLink: string;
};

export default function WorkSmarterCard({
  title,
  description,
  icon,
  buttonText,
  buttonLink,
}: WorkSmarterCardProps) {
  return (
    <article
      className="
        flex h-full min-h-[350px] flex-col
        rounded-[5px] bg-[#F8F9FA]
        w-[340px]
        px-[20px] pt-[28px] pb-[20px]
      "
    >
      {/* Original Trello SVG icon */}
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        className="h-[76px] w-[76px] object-contain"
      />

      {/* Feature heading */}
      <h3
        className="
          mt-[18px] text-[22px] leading-[26px]
          font-bold text-[#091E42]
        "
      >
        {title}
      </h3>

      {/* Feature description */}
      <p
        className="
          mt-[8px] text-[17px] leading-[21px]
          text-[#091E42] pb-[5px]
        "
      >
        {description}
      </p>

      {/* Feature CTA */}
      <div className="mt-auto pt-[24px]">
        <a
          href={buttonLink}
          className="
            inline-flex min-h-[50px] items-center
            justify-center rounded-[4px]
            border border-[#0065FF]
            bg-white px-[15px] py-[3px]
            text-[14px] font-bold text-[#0065FF]
            transition-colors duration-200
            hover:bg-[#DEEBFF] 
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-[#0065FF]
          "
        >
          {buttonText}
        </a>
      </div>
    </article>
  );
}