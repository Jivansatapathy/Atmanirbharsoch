import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { SystemIntelligence } from './components/sections/SystemIntelligence';
import { StoreSection } from './components/sections/StoreSection';
import { CaseStudyIndex } from './components/sections/CaseStudyIndex';
import { AdvantageSection } from './components/sections/AdvantageSection';
import { PublicationsSection } from './components/sections/PublicationsSection';
import { AboutSection } from './components/sections/AboutSection';
import { TeamSection } from './components/sections/TeamSection';
import { ContactSection } from './components/sections/ContactSection';

import { StrategicAcquisition } from './components/sections/StrategicAcquisition';
import { TestimonialSection } from './components/sections/TestimonialSection';
import { YouTubeSection } from './components/sections/YouTubeSection';
import BooksPage from './pages/BooksPage';
import BookDetailPage from './pages/BookDetailPage';
import AboutUsPage from './pages/AboutUsPage';

const Home = () => (
  <>
    <Hero />

    {/* Command & Authority */}
    <AboutSection />

    {/* Technology Showcase */}
    <div id="intelligence"><AdvantageSection /></div>

    {/* Intelligence & Operations */}
    <div id="operations"><StrategicAcquisition /></div>
    <div id="briefs"><SystemIntelligence /></div>
    <div id="archives"><CaseStudyIndex /></div>

    {/* Resources */}
    <div id="store"><StoreSection /></div>
    <div id="library"><PublicationsSection /></div>

    {/* Social Proof */}
    <TestimonialSection />

    <TeamSection />

    {/* Visual Intelligence */}
    <YouTubeSection />

    {/* Secure Uplink */}
    <div id="contact"><ContactSection /></div>
  </>
);

function App() {
  return (
    <Router>
      <HashScrollHandler />
      <div className="app-root">
        <Header />
        <main style={{ paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/books/:id" element={<BookDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const HashScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
};

export default App;
