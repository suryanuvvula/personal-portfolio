import React, { useState } from 'react';
import type { TechStackItem } from '../types/index';
import '../styles/TechStackVisualization.css';

interface TechStackVisualizationProps {
  techStack: TechStackItem[];
}

const TechStackVisualization: React.FC<TechStackVisualizationProps> = ({ techStack }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'frontend', 'backend', 'database', 'devops', 'tools'];

  const filteredStack = selectedCategory === 'all'
    ? techStack
    : techStack.filter(tech => tech.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      frontend: '#667eea',
      backend: '#764ba2',
      database: '#f093fb',
      devops: '#4facfe',
      tools: '#43e97b'
    };
    return colors[category] || '#667eea';
  };

  const getLevelLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    if (level >= 40) return 'Proficient';
    return 'Beginner';
  };

  return (
    <section className="tech-stack-section">
      <div className="section-container">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">My technical expertise and proficiency levels</p>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="tech-stack-grid">
          {filteredStack.map((tech, index) => (
            <div key={index} className="tech-stack-card floating-card">
              <div className="tech-card-header">
                <h3 className="tech-name">{tech.name}</h3>
                <span
                  className="tech-category-badge"
                  style={{ backgroundColor: getCategoryColor(tech.category) }}
                >
                  {tech.category}
                </span>
              </div>

              <div className="tech-stats">
                <div className="stat-item">
                  <span className="stat-label">Proficiency</span>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${tech.level}%`,
                        backgroundColor: getCategoryColor(tech.category)
                      }}
                    >
                      <span className="progress-percentage">{tech.level}%</span>
                    </div>
                  </div>
                  <span className="level-label">{getLevelLabel(tech.level)}</span>
                </div>

                <div className="stat-item">
                  <span className="stat-label">Experience</span>
                  <div className="experience-display">
                    <span className="experience-years">{tech.yearsOfExperience}</span>
                    <span className="experience-unit">year{tech.yearsOfExperience !== 1 ? 's' : ''}</span>
                  </div>
                </div>
              </div>

              <div className="tech-visual">
                <svg width="100%" height="100" viewBox="0 0 200 100">
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: getCategoryColor(tech.category), stopOpacity: 0.3 }} />
                      <stop offset="100%" style={{ stopColor: getCategoryColor(tech.category), stopOpacity: 0.8 }} />
                    </linearGradient>
                  </defs>
                  <rect
                    x="0"
                    y={100 - tech.level}
                    width="40"
                    height={tech.level}
                    fill={`url(#gradient-${index})`}
                    className="tech-bar"
                  />
                  <rect
                    x="50"
                    y={100 - (tech.yearsOfExperience * 10)}
                    width="40"
                    height={tech.yearsOfExperience * 10}
                    fill={`url(#gradient-${index})`}
                    className="tech-bar"
                  />
                  <text x="20" y="95" textAnchor="middle" className="bar-label">Skill</text>
                  <text x="70" y="95" textAnchor="middle" className="bar-label">Exp</text>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {filteredStack.length === 0 && (
          <div className="no-results">
            <p>No technologies found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechStackVisualization;
