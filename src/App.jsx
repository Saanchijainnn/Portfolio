import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="app-container" style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column' }}>
      {/* First focusable element for keyboard users */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <Navbar />

      {/* Main content container with matching target id */}
      <main id="main-content" style={{ flex: 1 }}>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
