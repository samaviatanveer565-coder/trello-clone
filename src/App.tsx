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
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { useLayoutEffect, useRef, useState } from "react";
function App() {
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
  });

  // sections banao ( sections array add krain gay ) har section ka index hoga.
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
        <Hero />
        <RevealOnScroll repeat exitUp>
          <Trello101 />
        </RevealOnScroll>

        <RevealOnScroll repeat exitUp>
          <MessageActionSection />
        </RevealOnScroll>

        <RevealOnScroll repeat exitUp>
          <WorkSmarterSection />
        </RevealOnScroll>
        <RevealOnScroll repeat exitUp>
          <TestimonialsSection />
        </RevealOnScroll>
        <SignupCTA />
        <Footer />
      </main>
    </>
  );
}

export default App;