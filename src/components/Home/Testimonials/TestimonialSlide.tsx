export type Testimonial = {
  id: number;
  quote: string;
  author: string;
  position: string;
  logo: string;
  logoAlt: string;
  statistic: string;
};

type TestimonialSlideProps = {
  testimonial: Testimonial;
};

export default function TestimonialSlide({
  testimonial,
}: TestimonialSlideProps) {
  return (
    <article
      className="
        grid min-h-[405px] w-full grid-cols-1
        overflow-hidden rounded-[8px]
        border border-[#DFE1E6]
        bg-white shadow-md
        md:grid-cols-[2fr_1fr]
      "
    >
      {/* LEFT: Testimonial */}
      <div className="flex flex-col px-[28px] py-[38px]">
        <blockquote
          className="
            m-0 text-[20px] leading-[31px]
            text-[#091E42]
          "
        >
          {testimonial.quote}
        </blockquote>

        <div className="mt-auto pt-[35px]">
          <div
            className="
              mb-[16px] h-[1px] w-[124px]
              bg-[#091E42]
            "
          />

          <p className="text-[14px] text-[#091E42]">
            {testimonial.author}
          </p>

          <p className="text-[14px] leading-[21px] text-[#091E42]">
            {testimonial.position}
          </p>

          <div className="mt-[20px] flex items-end justify-between gap-4">
            <img
              src={testimonial.logo}
              alt={testimonial.logoAlt}
              className="
                h-[36px] w-auto max-w-[170px]
                object-contain object-left
              "
            />

            <span className="shrink-0 text-[14px] text-[#0065FF]">
              Read the story
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT: Statistics */}
      <div
        className="
          flex flex-col justify-between
          bg-[#0C4DA7] px-[27px]
          py-[37px] text-white
        "
      >
        <h3 className="text-[30px] leading-[41px] font-bold">
          {testimonial.statistic}
        </h3>

        <p className="mt-[40px] text-[13px]">
          Trello TechValidate Survey
        </p>
      </div>
    </article>
  );
}