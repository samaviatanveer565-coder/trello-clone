import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TestimonialSlide, {
    type Testimonial,
} from "./TestimonialSlide";

import TrustedBrands from "./TrustedBrands";

// GSAP plugins register karna
gsap.registerPlugin(ScrollTrigger, useGSAP);

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

    // Puri section ka reference: GSAP is section ko pin karega
    const sectionRef = useRef<HTMLElement>(null);

    // Visible cards area ka reference
    const viewportRef = useRef<HTMLDivElement>(null);

    // Horizontal cards container ka reference
    const trackRef = useRef<HTMLDivElement>(null);

    // Horizontal scrolling ke liye extra vertical space
    const spacerRef = useRef<HTMLDivElement>(null);

    // GSAP ScrollTrigger ko arrows/dots ke saath connect karna
    const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

    // Specific testimonial card tak horizontally scroll karna
    function goToSlide(index: number) {
        const normalizedIndex =
            (index + testimonials.length) % testimonials.length;

        const trigger = scrollTriggerRef.current;

        // Desktop: GSAP scroll position se card change karna
        if (trigger) {
            const progress =
                normalizedIndex / (testimonials.length - 1);

            const targetScroll =
                trigger.start +
                progress * (trigger.end - trigger.start);

            window.scrollTo({
                top: targetScroll,
                behavior: "smooth",
            });

            setActiveIndex(normalizedIndex);
            return;
        }

        // Mobile / reduced motion: normal horizontal scrolling
        const viewport = viewportRef.current;
        const track = trackRef.current;

        if (!viewport || !track) return;

        const targetCard = track.children[
            normalizedIndex
        ] as HTMLElement | undefined;

        if (!targetCard) return;

        viewport.scrollTo({
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

    // GSAP: vertical scroll ko horizontal movement se connect karna

    // GSAP: Vertical scrolling say horizontal cards move karna
    useGSAP(
        () => {
            const section = sectionRef.current;
            const viewport = viewportRef.current;
            const track = trackRef.current;
            const spacer = spacerRef.current;

            if (!section || !viewport || !track || !spacer) return;

            // Cards ki total width minus visible viewport width
            const getDistance = () =>
                Math.max(0, track.scrollWidth - viewport.clientWidth);

            // Desktop animation, mobile par normal swipe
            const mm = gsap.matchMedia();

            mm.add(
                "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
                () => {
                    // Horizontal scroll distance ke barabar extra vertical space
                    const updateSpacer = () => {
                        spacer.style.height = `${getDistance()}px`;
                    };

                    updateSpacer();

                    // GSAP poori cards row ko horizontally move karega
                    const animation = gsap.to(track, {
                        x: () => -getDistance(),
                        ease: "none",

                        scrollTrigger: {
                            trigger: section,

                            // Section enter hotay hi animation progress start
                            start: "top 40%",

                            // Section end par horizontal movement complete
                            end: "bottom bottom",

                            // GSAP pin nahi karega, CSS sticky handle karegi
                            pin: false,

                            // Smooth scroll-linked animation
                            scrub: 0.6,

                            invalidateOnRefresh: true,

                            // Screen resize par spacing dobara calculate
                            onRefreshInit: updateSpacer,

                            // Existing arrows aur pagination ke liye
                            onUpdate: (self) => {
                                const index = Math.round(
                                    self.progress * (testimonials.length - 1)
                                );

                                setActiveIndex((current) =>
                                    current === index ? current : index
                                );
                            },
                        },
                    });

                    // Existing navigation ke liye ScrollTrigger save
                    scrollTriggerRef.current =
                        animation.scrollTrigger ?? null;

                    // Cards / viewport resize hone par update
                    const resizeObserver = new ResizeObserver(() => {
                        updateSpacer();
                        ScrollTrigger.refresh(true);
                    });

                    resizeObserver.observe(viewport);

                    // Cleanup
                    return () => {
                        resizeObserver.disconnect();
                        scrollTriggerRef.current = null;
                        spacer.style.height = "0px";
                    };
                }
            );

            // Component unmount par animation cleanup
            return () => {
                scrollTriggerRef.current = null;
                mm.revert();
            };
        },
        { scope: sectionRef }
    );


    return (
        <section
            ref={sectionRef}
            id="testimonials"
            className="relative w-full bg-[var(--section-bg)]"
        >
            {/* Desktop: cards viewport mein sticky rahengi */}
            <div
                className="
      px-4 pt-[40px] pb-[75px]
      md:sticky md:top-0
      md:flex md:h-screen md:items-center
      md:py-0
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
                    ${activeIndex === index
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

                        {/* Horizontal viewport: sirf visible cards show hongay */}
                        <div
                            ref={viewportRef}
                            className="
              w-full
              overflow-x-auto
              snap-x snap-mandatory
              md:overflow-hidden md:snap-none
              motion-reduce:overflow-x-auto
              motion-reduce:snap-x
            "
                            onScroll={(event) => {
                                // Desktop par pagination GSAP handle karega
                                if (scrollTriggerRef.current) return;

                                const viewport = event.currentTarget;
                                const track = trackRef.current;

                                if (!track) return;

                                const firstCard = track.firstElementChild as
                                    HTMLElement | null;

                                if (!firstCard) return;

                                const cardStep = firstCard.offsetWidth + 24;

                                const index = Math.round(
                                    viewport.scrollLeft / cardStep
                                );

                                setActiveIndex(
                                    Math.max(
                                        0,
                                        Math.min(index, testimonials.length - 1)
                                    )
                                );
                            }}
                        >
                            {/* Horizontal track: all testimonial cards render together */}
                            <div
                                ref={trackRef}
                                className="relative flex w-max gap-6"
                            >
                                {testimonials.map((testimonial) => (
                                    <div
                                        key={testimonial.id}
                                        className="
                    w-[calc(100vw-64px)]
                    max-w-[1100px]
                    shrink-0
                    snap-start
                  "
                                    >
                                        <TestimonialSlide testimonial={testimonial} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* One SVG contains all six trusted logos */}
                    <TrustedBrands />

                </div>
            </div>

            {/* Horizontal scrolling ke liye extra vertical space */}
            <div
                ref={spacerRef}
                aria-hidden="true"
                className="hidden md:block"
            />
        </section >
    );
}
