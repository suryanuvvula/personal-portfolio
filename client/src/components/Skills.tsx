import React from 'react';
import type { Skills as SkillsType } from '../types/index';
import '../styles/Skills.css';

interface SkillsProps {
  skills: SkillsType;
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="skills-section">
      <div className="section-container">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">Technologies I work with</p>

        <div className="skills-grid">
          <div className="skill-category">
            <div className="category-header">
              <span className="category-icon">🎨</span>
              <h3 className="category-title">Frontend</h3>
            </div>
            <div className="skills-list">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <div className="category-header">
              <span className="category-icon">⚙️</span>
              <h3 className="category-title">Backend</h3>
            </div>
            <div className="skills-list">
              {skills.backend.map((skill, index) => (
                <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <div className="category-header">
              <span className="category-icon">🔧</span>
              <h3 className="category-title">Tools & Others</h3>
            </div>
            <div className="skills-list">
              {skills.other.map((skill, index) => (
                <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
