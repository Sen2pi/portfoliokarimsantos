import React, { useRef, useState } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import { LanguageProvider } from "./contexts/LanguageContext";
import GitActivity from "./components/GitActivity";
import Contact from "./components/Contact";
import "./styles/globals.css";
import "./i18n"; // Importar configuração i18n
import Certifications from "./components/Certifications";
import TransitionOverlay from './components/TransitionOverlay';
import { Analytics } from "@vercel/analytics/next"

const sectionMap: Record<string, { name: string; props?: string }> = {
  '#hero': { name: 'Hero' },
  '#about': { name: 'Sobre' },
  '#skills': { name: 'Skills' },
  '#projects': { name: 'Projetos', props: 'projetos={...}' },
  '#experience': { name: 'Experiência' },
  '#certifications': { name: 'Certificações' },
  '#contact': { name: 'Contactos' },
};

const App: React.FC = () => {
  const [showTransition, setShowTransition] = useState(false);
  const [transitionSection, setTransitionSection] = useState<{ name: string; props?: string }>({ name: '' });
  const pendingSection = useRef<string | null>(null);

  // Função para disparar a transição
  const triggerTransition = (href: string) => {
    pendingSection.current = href;
    setTransitionSection(sectionMap[href] || { name: href });
    setShowTransition(true);
  };

  // Quando a animação termina, faz scroll para a secção
  const handleTransitionComplete = () => {
    setShowTransition(false);
    if (pendingSection.current) {
      const target = document.querySelector(pendingSection.current);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      pendingSection.current = null;
    }
  };

  return (
    <LanguageProvider>
      <Analytics />
      <TransitionOverlay show={showTransition} onComplete={handleTransitionComplete} section={transitionSection} />
      <div className="bg-gray-900 min-h-screen">
        <Header onNavClick={triggerTransition} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <GitActivity />
        <Contact />
        {/* Footer */}
        <footer className="bg-gray-800 py-8 text-center border-t border-gray-700">
          <div className="container mx-auto px-6">
            <p className="text-gray-400 font-mono">
              © 2025 Karim Santos. Feito em React + Vite + TypeScript
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Engenheiro de Software | CEO | Full Stack Developer
            </p>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default App;
