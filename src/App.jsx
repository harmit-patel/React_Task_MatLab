import React from "react";
import Header from "./components/layout/Header";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Reasons from "./components/Reasons/Reasons";
import Tools from "./components/Tools/ToolsSection";
import FAQSection from "./components/FAQ/FAQSection";
import ContentSection from "./components/Content/ContentSection";
import ConanctSection from "./components/Contact/ContactSection";
import Footer from "./components/layout/Footer";
const App = () => (
  <>
    <Header />
    <Hero />
    <HowItWorks />
    <Reasons />
    <Tools/>
    <FAQSection/>
    <ContentSection/>
    <ConanctSection/>
    <Footer />
  </>
);

export default App;
