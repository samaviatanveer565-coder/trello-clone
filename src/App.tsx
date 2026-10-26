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

        {/* GSAP Horizontal Scroll Testimonials */}
<TestimonialsSection />

        <SignupCTA />
        <Footer />
      </main>
    </>
  );
}

export default App;