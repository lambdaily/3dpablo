import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutPage from './components/About';
import Experience from './components/Experience';
import Tech from './components/Tech';
import Contact from './components/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <AboutPage />
        <Experience />
        <Tech />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
