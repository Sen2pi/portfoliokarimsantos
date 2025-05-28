import { useEffect, useState, useCallback } from 'react';

export const useGoogleTranslate = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initGoogleTranslate = useCallback(() => {
    setIsLoading(true);
    setError(null);

    // Verificar se já está carregado
    if (window.google?.translate?.TranslateElement) {
      setIsLoaded(true);
      setIsLoading(false);
      return;
    }

    // Timeout para evitar carregamento infinito
    const timeout = setTimeout(() => {
      setError('Timeout: Google Translate não carregou');
      setIsLoading(false);
    }, 10000);

    // Função de inicialização
    window.googleTranslateElementInit = () => {
      try {
        new window.google.translate.TranslateElement({
          pageLanguage: 'pt',
          includedLanguages: 'pt,en,fr,es,de,it',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        }, 'google_translate_element');
        
        setIsLoaded(true);
        setIsLoading(false);
        clearTimeout(timeout);
      } catch (err) {
        setError('Erro ao inicializar Google Translate');
        setIsLoading(false);
        clearTimeout(timeout);
      }
    };

    // Carregar script
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.onerror = () => {
      setError('Erro ao carregar script do Google Translate');
      setIsLoading(false);
      clearTimeout(timeout);
    };

    document.head.appendChild(script);

    return () => {
      clearTimeout(timeout);
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    initGoogleTranslate();
  }, [initGoogleTranslate]);

  const translateTo = useCallback((lang: string) => {
    if (!isLoaded) return;
    
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = lang === 'pt' ? '' : lang;
      select.dispatchEvent(new Event('change'));
    }
  }, [isLoaded]);

  return { isLoaded, isLoading, error, translateTo };
};

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}
