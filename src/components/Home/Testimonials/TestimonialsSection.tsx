
import { useRef, useState } from "react";

import TestimonialSlide, {
  type Testimonial,
} from "./TestimonialSlide";

import TrustedBrands from "./TrustedBrands";

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "[Trello is] great for simplifying complex processes. As a manager, I can chunk [processes] down into bite-sized pieces for my team and then delegate that out, but still keep a bird's-eye view.",
    author: "Joey Rosenberg",
    position: "Global Leadership Director at Women Who Code",
    logo: "/images/testimonials/women-who-code.svg",
    logoAlt: "Women Who Code",
    statistic:
      "75% of organizations report that Trello delivers value to their business within 30 days.",
  },
  {
    id: 2,
    quote:
      "Whether someone is in the office, working from home, or working on-site with a client, everyone can share context and information through Trello.",
    author: "Sumeet Moghe",
    position: "Product Manager at ThoughtWorks",
    logo: "/images/testimonials/thoughtworks.svg",
    logoAlt: "Thoughtworks",
    statistic:
      "81% of customers chose Trello for its ease of use.",
  },
  {
    id: 3,
    quote:
      "We used Trello to provide clarity on steps, requirements, and procedures. This was exceptional when communicating with teams that had deep cultural and language differences.",
    author: "Jefferson Scomacao",
    position: "Development Manager at IKEA/PTC",
    logo: "/images/testimonials/ptc-logo.svg",
    logoAlt: "PTC",
    statistic:
      "74% of customers say Trello has improved communication with their co-workers and teams.",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Horizontal cards container ka reference
  const trackRef = useRef<HTMLDivElement>(null);

  // Specific testimonial card tak horizontally scroll karna
  function goToSlide(index: number) {
    const track = trackRef.current;
    if (!track) return;

    const normalizedIndex =
      (index + testimonials.length) % testimonials.length;

    const targetCard = track.children[
      normalizedIndex
    ] as HTMLElement | undefined;

    if (!targetCard) return;

    track.scrollTo({
      left: targetCard.offsetLeft - track.offsetLeft,
      behavior: "smooth",
    });

    setActiveIndex(normalizedIndex);
  }

  function nextSlide() {
    goToSlide(activeIndex + 1);
  }

  function previousSlide() {
    goToSlide(activeIndex - 1);
  }

  return (
    <section
      id="testimonials"
      className="
        w-full bg-[var(--section-bg)]
        px-4 pt-[40px] pb-[75px]
      "
    >
      <div className="trello-container">

        {/* Navigation aur testimonial cards ka common wrapper */}
        <div className="w-full max-w-[1100px]">

          {/* Carousel navigation */}
          <div className="mb-[20px] flex w-full items-center justify-end gap-[12px]">

            {/* Pagination dots */}
            <div
              className="flex items-center gap-[7px]"
              role="group"
              aria-label="Choose testimonial"
            >
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-current={
                    activeIndex === index ? "true" : undefined
                  }
                  className={`
                    h-[8px] w-[8px] rounded-full
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-[var(--trello-blue)]
                    ${
                      activeIndex === index
                        ? "bg-[var(--testimonial-dot-active)]"
                        : "bg-[var(--testimonial-dot-inactive)] hover:bg-[var(--testimonial-dot-hover)]"
                    }
                  `}
                />
              ))}
            </div>

            {/* Previous button */}
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous testimonial"
              className="
                flex h-[30px] w-[30px]
                items-center justify-center
                rounded-full
                bg-[var(--testimonial-arrow-bg)]
                text-[var(--testimonial-arrow-text)]
                hover:bg-[var(--testimonial-arrow-hover)]
                focus-visible:outline-2
                focus-visible:outline-[var(--trello-blue)]
              "
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* Next button */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="
                flex h-[30px] w-[30px]
                items-center justify-center
                rounded-full
                bg-[var(--testimonial-arrow-bg)]
                text-[var(--testimonial-arrow-text)]
                hover:bg-[var(--testimonial-arrow-hover)]
                focus-visible:outline-2
                focus-visible:outline-[var(--trello-blue)]
              "
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Horizontal track: all testimonial cards render together */}
          <div
            ref={trackRef}
            className="
              relative flex w-full
              snap-x snap-mandatory
              overflow-x-auto
              scroll-smooth
            "
            onScroll={(event) => {
              const track = event.currentTarget;

              if (!track.clientWidth) return;

              const index = Math.round(
                track.scrollLeft / track.clientWidth
              );

              setActiveIndex(
                Math.max(
                  0,
                  Math.min(index, testimonials.length - 1)
                )
              );
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full shrink-0 snap-start"
              >
                <TestimonialSlide testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* One SVG contains all six trusted logos */}
        <TrustedBrands />

      </div>
    </section>
  );
}
