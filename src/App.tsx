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
function App() {
function App() {
  const virtualizer = useWindowVirtualizer({
    count: 7,
    estimateSize: () => 800,
    overscan: 1,
  });

  return (

  return (
    <>
      <Header />
      <AnnouncementBanner />

      <main>
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