import React, { useState } from 'react';
import '../styles/Hero.css';

interface HeroProps {
  name: string;
  title: string;
  experience: string;
}

const Hero: React.FC<HeroProps> = ({ name, title, experience }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div
        className="hero-content"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      >
        <div
          className="floating-card main-card"
          style={{
            transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) translateZ(20px)`
          }}
        >
          <div className="card-glow"></div>
          <div className="card-content">
            <div className="avatar">
              <span className="avatar-text">{name.split(' ').map(n => n[0]).join('')}</span>
            </div>
            <h1 className="name">{name}</h1>
            <p className="title">{title}</p>
            <div className="experience-badge">
              <span className="experience-icon">⚡</span>
              <span className="experience-text">{experience} Experience</span>
            </div>
          </div>
        </div>

        <div className="stats-cards">
          <div
            className="stat-card"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg) translateZ(10px)`
            }}
          >
            <div className="stat-icon">💼</div>
            <div className="stat-value">6</div>
            <div className="stat-label">Companies</div>
          </div>

          <div
            className="stat-card"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg) translateZ(10px)`
            }}
          >
            <div className="stat-icon">🚀</div>
            <div className="stat-value">50+</div>
            <div className="stat-label">Projects</div>
          </div>

          <div
            className="stat-card"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg) translateZ(10px)`
            }}
          >
            <div className="stat-icon">⭐</div>
            <div className="stat-value">10+</div>
            <div className="stat-label">Tech Stack</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-text">Scroll to explore</span>
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  );
};

export default Hero;
