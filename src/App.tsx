import { BrowserRouter } from 'react-router';
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  MyStackSection,
  Navbar,
  ProjectsSection,
  TechSection,
} from '@features/index';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary pb-36 sm:pb-0">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <HeroSection />
        </div>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <MyStackSection />
        <TechSection />
        <ContactSection />
      </div>
    </BrowserRouter>
  );
};

export default App;
