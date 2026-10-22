
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

  const mainRef = useRef<HTMLElement>(null);
  const [mainOffset, setMainOffset] = useState(0);

  useLayoutEffect(() => {
    const updateMainOffset = () => {
      if (!mainRef.current) return;

      const rect = mainRef.current.getBoundingClientRect();

      setMainOffset(rect.top + window.scrollY);
    };

    updateMainOffset();

    window.addEventListener("resize", updateMainOffset);

    return () => {
      window.removeEventListener("resize", updateMainOffset);
    };
  }, []);

  const virtualizer = useWindowVirtualizer({
    count: 7,
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

    <RevealOnScroll repeat exitUp>
      <TestimonialsSection />
    </RevealOnScroll>,

    <SignupCTA />,

    <Footer />,
  ];

  return (
    <>
      <Header />
      <AnnouncementBanner />

      <main ref={mainRef}>
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
                transform: `translateY(${virtualItem.start - virtualizer.options.scrollMargin
                  }px)`,
              }}
            >
              {sections[virtualItem.index]}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
