import React from 'react';
import '../styles/ThemeToggle.css';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      <div className="toggle-track">
        <div className={`toggle-thumb ${theme}`}>
          {theme === 'dark' ? (
            <span className="icon">🌙</span>
          ) : (
            <span className="icon">☀️</span>
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
