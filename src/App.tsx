
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { useThemeStore } from "./store/themeStore";

import Header from "./components/layout/Header";
import AnnouncementBanner from "./components/layout/AnnouncementBanner";

import Hero from "./components/Home/Hero";
import Trello101 from "./components/Home/Trello101/Trello101";
import MessageActionSection from "./components/Home/MessageAction/MessageActionSection";
import WorkSmarterSection from "./components/Home/WorkSmarter/WorkSmarterSection";
import TestimonialsSection from "./components/Home/Testimonials/TestimonialsSection";
import SignupCTA from "./components/Home/SignupCTA";
import Footer from "./components/layout/Footer/Footer";
import RevealOnScroll from "./components/common/RevealOnScroll";

function App() {
  // ===== THEME FUNCTIONALITY (Zustand) =====

  // Zustand store say current theme lay rhi h
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    // HTML par current theme set karna
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // ===== VIRTUALIZATION FUNCTIONALITY =====

  // Virtualized sections k start ka reference
  const mainRef = useRef<HTMLElement>(null);
  const [mainOffset, setMainOffset] = useState(0);

  useLayoutEffect(() => {
    const updateMainOffset = () => {
      if (!mainRef.current) return;

      const rect = mainRef.current.getBoundingClientRect();

      // Page k start say virtualized section ka offset calculate karna
      setMainOffset(rect.top + window.scrollY);
    };

    updateMainOffset();

    window.addEventListener("resize", updateMainOffset);

    return () => {
      window.removeEventListener("resize", updateMainOffset);
    };
  }, []);

  // Sirf first 4 sections virtualize karna
  // Testimonials ko GSAP pinning k liay normal flow main rakha hai
  const virtualizer = useWindowVirtualizer({
    count: 4,
    estimateSize: () => 800,
    overscan: 1,
    scrollMargin: mainOffset,
  });

  // Sections array: har section ka apna index hai
  const sections = [
    <Hero />,

    <RevealOnScroll repeat exitUp>
      <Trello101 />
    </RevealOnScroll>,

    <RevealOnScroll repeat exitUp>
      <MessageActionSection />
    </RevealOnScroll>,

    <RevealOnScroll repeat exitUp>
      <WorkSmarterSection />
    </RevealOnScroll>,
  ];

  return (
    <>
      <Header />
      <AnnouncementBanner />

      <main>
        {/* ===== TANSTACK VIRTUALIZED SECTIONS ===== */}

        <section ref={mainRef}>
          <div
            className="relative w-full"
            style={{
              height: `${virtualizer.getTotalSize()}px`,

              // Offscreen sections unmount honay k bawajood
              // scrolling k liay space preserve hoti hai.
            }}
          >
            {virtualizer.getVirtualItems().map((virtualItem) => (
              <div
                key={virtualItem.key}
                data-index={virtualItem.index}
                ref={virtualizer.measureElement}
                className="absolute top-0 left-0 w-full"
                style={{
                  transform: `translateY(${virtualItem.start -
                    virtualizer.options.scrollMargin
                    }px)`,
                }}
              >
                {sections[virtualItem.index]}
              </div>
            ))}
          </div>
        </section>

        {/* ===== GSAP HORIZONTAL SCROLL TESTIMONIALS ===== */}

        {/* Normal document flow main render karna
            taake GSAP ScrollTrigger pinning correctly work kare */}
        <TestimonialsSection />

        {/* ===== REMAINING NORMAL SECTIONS ===== */}

        <SignupCTA />
        <Footer />
      </main>
    </>
  );
}

export default App;
