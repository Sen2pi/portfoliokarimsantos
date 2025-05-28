import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
  flagImage: string;
}

const languages: Language[] = [
  { code: 'pt', name: 'Português', flag: '🇵🇹', flagImage: 'https://flagcdn.com/w40/pt.png' },
  { code: 'en', name: 'English', flag: '🇬🇧', flagImage: 'https://flagcdn.com/w40/gb.png' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', flagImage: 'https://flagcdn.com/w40/fr.png' },
  { code: 'es', name: 'Español', flag: '🇪🇸', flagImage: 'https://flagcdn.com/w40/es.png' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', flagImage: 'https://flagcdn.com/w40/de.png' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', flagImage: 'https://flagcdn.com/w40/it.png' },
];

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('pt');

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const handleLanguageChange = (languageCode: string) => {
    setCurrentLanguage(languageCode);
    setIsOpen(false);
    
    // Aqui podes adicionar lógica personalizada para mudança de idioma
    // Por exemplo, usar i18next ou outro sistema de tradução
    console.log(`Idioma alterado para: ${languageCode}`);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-gray-600"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-4 h-4 text-gray-300" />
        
        {/* Bandeira atual */}
        <div className="flex items-center">
          <img
            src={currentLang.flagImage}
            alt={`Bandeira ${currentLang.name}`}
            className="w-6 h-4 object-cover rounded shadow-sm"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent && !parent.querySelector('.flag-emoji')) {
                const emoji = document.createElement('span');
                emoji.className = 'flag-emoji text-lg';
                emoji.textContent = currentLang.flag;
                parent.appendChild(emoji);
              }
            }}
          />
        </div>
        
        <span className="text-gray-300 font-mono text-sm hidden md:block">
          {currentLang.code.toUpperCase()}
        </span>
        
        <ChevronDown 
          className={`w-4 h-4 text-gray-300 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 right-0 bg-gray-800 border border-gray-600 rounded-lg shadow-xl z-20 min-w-[180px]"
            >
              {languages.map((language) => (
                <motion.button
                  key={language.code}
                  whileHover={{ backgroundColor: 'rgb(55, 65, 81)' }}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors first:rounded-t-lg last:rounded-b-lg ${
                    currentLanguage === language.code
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {/* Bandeira */}
                  <div className="flex items-center justify-center w-8">
                    <img
                      src={language.flagImage}
                      alt={`Bandeira ${language.name}`}
                      className="w-6 h-4 object-cover rounded shadow-sm"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.flag-emoji')) {
                          const emoji = document.createElement('span');
                          emoji.className = 'flag-emoji text-lg';
                          emoji.textContent = language.flag;
                          parent.appendChild(emoji);
                        }
                      }}
                    />
                  </div>
                  
                  <div className="flex flex-col flex-1">
                    <span className="font-mono text-sm font-semibold">
                      {language.code.toUpperCase()}
                    </span>
                    <span className="text-xs opacity-75">
                      {language.name}
                    </span>
                  </div>
                  
                  {currentLanguage === language.code && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full" />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
