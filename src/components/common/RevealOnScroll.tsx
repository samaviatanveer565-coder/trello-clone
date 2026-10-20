import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealOnScrollProps = {
    children: ReactNode;
    repeat?: boolean;
    exitUp?: boolean;
    direction?: "up" | "left" | "right" | "zoom";
    delay?: number;
    exitEarly?: boolean;
};

export default function RevealOnScroll({ children, repeat, exitUp = false, direction = "up", delay = 0, exitEarly = false, }: RevealOnScrollProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [exitDirection, setExitDirection] = useState<"up" | "down">("down");

    useEffect(() => {
        const element = elementRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!exitEarly && entry.isIntersecting) {
                    setIsVisible(true);
                    if (!repeat) { // agar repeat nahi ho raha tou observer observe krna band kr day ga.
                        observer.unobserve(entry.target);
                    }
                } else if (!exitEarly && repeat) {
                    const exitedAbove = entry.boundingClientRect.bottom <= 0;
                    setExitDirection(exitedAbove ? "up" : "down");
                    setIsVisible(false);
                }
            },

            {
                threshold: exitEarly ? [0, 0.15, 0.5] : 0.15,
            }
        );

        observer.observe(element);

        if (!exitEarly) {
            return () => observer.disconnect();
        }

        const checkScroll = () => {
            const rect = element.getBoundingClientRect();

            const scrolledPast = rect.top <= -rect.height * 0.3;

            const enteredViewport =
                rect.top < window.innerHeight && rect.bottom > 0;

            if (scrolledPast) {
                setIsVisible(false);
            } else if (enteredViewport) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", checkScroll, { passive: true });

        checkScroll();

        return () => {
            window.removeEventListener("scroll", checkScroll);
            observer.disconnect();
        };
    }, [repeat, exitUp, exitEarly]);

    const hiddenClasses = {
        up: "translate-y-[40px] ",
        left: "-translate-x-[80px] ",
        right: "translate-x-[80px] ",
        zoom: "scale-90 ",
    };


    return (
        <div
            ref={elementRef}
            style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}

            className={`transition-all duration-[2000ms] ease-out motion-reduce:transition-none ${isVisible
                ? "translate-x-0 translate-y-0 scale-100 "
                : exitUp && exitDirection === "up"
                    ? "-translate-y-[40px] opacity-0 motion-reduce:translate-y-0 motion-reduce:"
                    : `${hiddenClasses[direction]} motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:`
                }`}
        >
            {children}
        </div>
    );
}





