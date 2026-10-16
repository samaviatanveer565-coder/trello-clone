import Header from "./components/layout/Header";
import AnnouncementBanner from "./components/layout/AnnouncementBanner";

import Hero from "./components/Home/Hero";
import Trello101 from "./components/Home/Trello101/Trello101";
import MessageActionSection from "./components/Home/MessageAction/MessageActionSection";
import WorkSmarterSection from "./components/Home/WorkSmarter/WorkSmarterSection";
import TestimonialsSection from "./components/Home/Testimonials/TestimonialsSection";
import SignupCTA from "./components/Home/SignupCTA";
import Footer from "./components/layout/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <AnnouncementBanner />

      <main>
        <Hero />
        <Trello101 />
        <MessageActionSection />
        <WorkSmarterSection />
        <TestimonialsSection />
        <SignupCTA />
        <Footer />
      </main>
    </>
  );
}

export default App;