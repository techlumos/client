import React from "react";
import TopNavHero from "../components/pages/TopNavBar";
import Alliances from "../components/pages/Alliances";
import HeroSection from "../components/pages/HeroSection";
import FrontRunnerSection from "../components/pages/FrontRunnerSection";
import TailoredSucced from "../components/pages/TailoredSucced";
import GreenLighting from "../components/pages/GreenLighting";
import CoreCompetence from "../components/pages/CoreCompetence";
import CaseStudy from "../components/pages/CaseStudy";
import Footer from "../components/pages/Footer";
import Rating from "../components/pages/Rating";
import Sponser from "../components/pages/Sponser";

export default function index() {
  return (
    <>
      <TopNavHero />
      <HeroSection
        title="The EM Value"
        subtitle="Holistic Solutions and Services to Transform your Challenges."
        img="/images/EM_Banner.webp"
      />

      <FrontRunnerSection
        img="/images/EM_Matters.webp"
        details="Trusted by global brands across industries to deliver value and
           growth, continually."
      />
      <TailoredSucced img="/images/Financial_Institutions.webp"
        details="Bespoke solutions designed for industries, to increase revenue, gain competitive advantage, while significantly reducing the cost of doing business."
       />

      <GreenLighting 
       img="/images/Digital_Transformation.webp"
       details="Your Enhancing operational efficiencies;

       Architecting strategic business outcomes."/>
       <CoreCompetence/>
       <CaseStudy/>
    <Rating img="/images/Clientele_BG.webp" subtitle="Domain expertise, deep understanding enables you to stay competitive,
and delight your customers."
reviews={[
  { image: "", comment: "This product is amazing! I couldn't be happier with my purchase.",name:"Jennifer Smith", role:"Office Worker" },
  { image: '', comment: "Great experience! Highly recommended.",name:"John Smith", role:"Worker" }]}/>

            <Sponser/>
             <Alliances /> 
             <Footer/>

    </>
  );
}
