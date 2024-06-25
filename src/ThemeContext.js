import React, { createContext, useState, useEffect, useContext, useRef } from 'react';
import { flushSync } from 'react-dom';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const ref = useRef(null);

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    if (
      !ref.current ||
      !document.startViewTransition ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setTheme(newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
      });
    }).ready;

    // Refactor animation to target a common parent
    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top),
    );

    ref.current.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  };

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(currentTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, ref }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
