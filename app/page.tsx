import Navigation from "./components/share/navigation";
import ArchitectureSection from "./sections/architecture";
import RealCaseSection from "./sections/case";
import CrmV1Section from "./sections/crm-v1";
import CrmV2Version from "./sections/crm-v2";
import FinalSection from "./sections/final";
import FirstWebsiteSection from "./sections/first-website";
import HeroSection from "./sections/hero";
import JourneySection from "./sections/journey";
import NewWebsiteSection from "./sections/new-website";
import ProblemsSection from "./sections/problems";
import ProjectOrigins from "./sections/project-origins";
import TechnologyStack from "./sections/technology";
import ComparisonSection from "./sections/сomparison";

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
      <NewWebsiteSection />
      <CrmV2Version />
      <ComparisonSection />
      <RealCaseSection />
      <TechnologyStack />
      <FinalSection />
      <Navigation />
    </>
  );
}
