import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionTitleProps {
  text: string;
  className?: string;
}

const TYPING_DURATION = 900; // ms

const AnimatedSectionTitle: React.FC<AnimatedSectionTitleProps> = ({ text, className }) => {
  const [typedLength, setTypedLength] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    if (inView) {
      setTypedLength(0);
      const totalChars = text.length;
      const interval = TYPING_DURATION / totalChars;
      for (let i = 1; i <= totalChars; i++) {
        timeouts.push(
          setTimeout(() => {
            setTypedLength(i);
          }, interval * i)
        );
      }
    } else {
      setTypedLength(0);
    }
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [inView, text]);

  const visible = text.slice(0, typedLength);
  return (
    <span ref={ref} className={`gradient-text font-mono ${className || ''}`.trim()}>
      {visible}
      <span
        className="blinking-cursor"
        style={{
          color: '#540963',
          background: '#2a25b8',
          width: '.2ch',
          display: 'inline-block',
          borderRadius: '2px',
        }}
      >
        |
      </span>
    </span>
  );
};

export default AnimatedSectionTitle; 