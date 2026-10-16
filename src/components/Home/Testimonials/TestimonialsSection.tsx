import { useState } from "react";

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

    function nextSlide() {
        setActiveIndex((current) =>
            (current + 1) % testimonials.length
        );
    }

    function previousSlide() {
        setActiveIndex((current) =>
            (current - 1 + testimonials.length) %
            testimonials.length
        );
    }

    const activeTestimonial = testimonials[activeIndex];

    return (
        <section
            id="testimonials"
            className="w-full bg-white px-4 pt-[45px] pb-[75px]"
        >
            <div className="mx-auto max-w-[1050px]">

                {/* Carousel navigation */}
                <div className="mb-[20px] flex items-center justify-end gap-[20px]">

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
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Show testimonial ${index + 1}`}
                                aria-current={
                                    activeIndex === index ? "true" : undefined
                                }
                                className={`
                  h-[8px] w-[8px] rounded-full
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#0065FF]
                  ${activeIndex === index
                                        ? "bg-[#091E42]"
                                        : "bg-[#A5ADBA] hover:bg-[#42526E]"
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
              rounded-full bg-[#F1F2F4]
              text-[#626F86] hover:bg-[#DFE1E6]
              focus-visible:outline-2
              focus-visible:outline-[#0065FF]
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
              rounded-full bg-[#F1F2F4]
              text-[#626F86] hover:bg-[#DFE1E6]
              focus-visible:outline-2
              focus-visible:outline-[#0065FF]
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

                {/* Only selected testimonial changes */}
                <div aria-live="polite" aria-atomic="true">
                    <TestimonialSlide
                        testimonial={activeTestimonial}
                    />
                </div>

                {/* One SVG contains all six trusted logos */}
                <TrustedBrands />

            </div>
        </section>
    );
}