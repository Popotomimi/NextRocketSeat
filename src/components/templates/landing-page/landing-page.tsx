import React from "react";
import HeroSection from "./sections/hero-section/hero-section";
import FeatureSection from "./sections/feature-section/feature-section";
import SupportSection from "./sections/support-section/support-section";
import CustumerStorySection from "./sections/customer-story-section/customer-story-section";
import CallToAction from "./sections/call-to-action/call-to-action";

const LadingPage = () => {
  return (
    <article className="flex flex-col gap-10 md:gap-20 ">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustumerStorySection />
      <CallToAction />
    </article>
  );
};

export default LadingPage;
