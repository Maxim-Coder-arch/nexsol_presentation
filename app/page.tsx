import ArchitectureSection from "./sections/architecture";
import CrmV1Section from "./sections/crm-v1";
import FirstWebsiteSection from "./sections/first-website";
import HeroSection from "./sections/hero";
import JourneySection from "./sections/journey";
import ProblemsSection from "./sections/problems";
import ProjectOrigins from "./sections/project-origins";

export default function Home() {
  return (
    <>
      <HeroSection />
      <JourneySection />
      <ProjectOrigins />
      <FirstWebsiteSection />
      <CrmV1Section />
      <ProblemsSection />
      <ArchitectureSection />
    </>
  );
}
