import React, { useState, useEffect } from 'react';
import { api } from './services/api';
import type { PortfolioData } from './types/index';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import TechStackVisualization from './components/TechStackVisualization';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getPortfolioData();
        setPortfolioData(data);
        setLoading(false);
        api.trackPageView('/');
      } catch (err) {
        setError('Failed to load portfolio data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading portfolio...</p>
      </div>
    );
  }

  if (error || !portfolioData) {
    return (
      <div className="error-screen">
        <p>{error || 'Failed to load data'}</p>
      </div>
    );
  }

  return (
    <div className="app">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      <Hero
        name={portfolioData.name}
        title={portfolioData.title}
        experience={portfolioData.experience}
      />
      <Skills skills={portfolioData.skills} />
      <Experience companies={portfolioData.companies} />
      <TechStackVisualization techStack={portfolioData.techStack} />
      <Projects projects={portfolioData.projects} />
      <Contact />

      <footer className="footer">
        <p>&copy; 2024 {portfolioData.name}. Built with React, TypeScript, Node.js & Express.</p>
      </footer>
    </div>
  );
}

export default App;
