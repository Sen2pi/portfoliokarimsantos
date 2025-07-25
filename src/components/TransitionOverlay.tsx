import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TransitionOverlayProps {
  show: boolean;
  onComplete?: () => void;
  section: { name: string; props?: string };
}

// Função para gerar as linhas de código do overlay
function getCodeLines(section: { name: string; props?: string }) {
  const compName = section.name || 'Section';
  const propsStr = section.props ? ` ${section.props}` : '';
  return [
    `const [page, setPage] = useState("${compName}");`,
    '',
    `import React from "react";`,
    '',
    `const ${compName} = () => (`,
    `  <div>`,
    `    <${compName}${propsStr}>`,
    `    {/* ... */}`,
    `    </${compName}>`,
    `  </div>`,
    `);`,
    '',
    `export default ${compName};`,
  ];
}

const TYPING_DURATION = 2000; // 2 segundos

// Função simples de syntax highlight
function highlightLine(line: string) {
  // Regex para tokens
  const patterns = [
    { regex: /(const|import|from|export|default|return|function|useState)(?![\w-])/, className: 'text-blue-400' },
    { regex: /("[^"]*"|'[^']*')/, className: 'text-green-400' },
    { regex: /(\{\/\*.*?\*\/\})/, className: 'text-gray-500 italic' }, // Comentário JSX
    { regex: /\b([A-Z][A-Za-z0-9_]*)\b/, className: 'text-purple-400' }, // Nome de componente
    { regex: /(<\/?[A-Za-z][A-Za-z0-9_]*\b)/, className: 'text-blue-300' }, // Tag JSX
    { regex: /(\(|\)|\{|\}|\[|\]|=|;|,)/, className: 'text-yellow-400' },
  ];

  let result: React.ReactNode[] = [];
  let rest = line;
  let key = 0;
  while (rest.length > 0) {
    let matched = false;
    for (const { regex, className } of patterns) {
      const match = rest.match(regex);
      if (match && match.index !== undefined && match.index > -1) {
        if (match.index > 0) {
          result.push(<span key={key++} className="text-white">{rest.slice(0, match.index)}</span>);
        }
        result.push(
          <span key={key++} className={className}>{match[0]}</span>
        );
        rest = rest.slice(match.index + match[0].length);
        matched = true;
        break;
      }
    }
    if (!matched) {
      result.push(<span key={key++} className="text-white">{rest}</span>);
      break;
    }
  }
  return result;
}

const TransitionOverlay: React.FC<TransitionOverlayProps> = ({ show, onComplete, section }) => {
  const codeLines = getCodeLines(section);
  const fullText = codeLines.join('\n');
  const [typedLength, setTypedLength] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (show) {
      setTypedLength(0);
      const totalChars = fullText.length;
      const interval = TYPING_DURATION / totalChars;
      for (let i = 1; i <= totalChars; i++) {
        setTimeout(() => {
          setTypedLength(i);
        }, interval * i);
      }
      timeout = setTimeout(() => {
        if (onComplete) onComplete();
      }, TYPING_DURATION);
    } else {
      setTypedLength(0);
    }
    return () => clearTimeout(timeout);
  }, [show, onComplete, fullText]);

  // Divide o texto digitado em linhas para renderizar como editor
  const visibleText = fullText.slice(0, typedLength);
  const visibleLines = visibleText.split('\n');

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center animated-gradient-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Ondas animadas no fundo */}
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="w-full max-w-xl mx-auto bg-[#181c24] border border-blue-900 rounded-lg shadow-2xl p-6 md:p-10 flex flex-col items-start text-left relative">
            <div className="absolute left-0 top-0 w-full h-8 flex items-center px-4 space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
            </div>
            <div className="mt-8 w-full">
              {visibleLines.map((line, idx) => (
                <pre
                  key={idx}
                  className="font-mono text-base md:text-lg leading-snug whitespace-pre flex"
                >
                  {highlightLine(line)}
                  {idx === visibleLines.length - 1 && typedLength < fullText.length ? (
                    <span className="text-green-400 font-mono text-base md:text-lg animate-pulse">|</span>
                  ) : null}
                </pre>
              ))}
              {/* Blinking cursor at the end if finished */}
              {typedLength === fullText.length && (
                <span className="text-green-400 font-mono text-base md:text-lg animate-pulse">|</span>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TransitionOverlay; 