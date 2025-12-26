import React from "react";
import Header from "./components/layout/Header";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Reasons from "./components/Reasons/Reasons";
import FAQSection from "./components/FAQ/FAQSection";
import ContentSection from "./components/Content/ContentSection";
import ConanctSection from "./components/Contact/ContactSection";
import Footer from "./components/layout/Footer";
import ToolsSection from "./components/ToolsSection/ToolsSection";
import TestimonialsSection from "./components/Testimonials/TestimonialsSection";
const App = () => (
  <>
    <Header />
    <Hero />
    <HowItWorks />
    <Reasons />
    <ToolsSection/>
    <TestimonialsSection />
    <FAQSection/>
    <ContentSection/>
    <ConanctSection/>
    <Footer />
     
  </>
);

export default App;
