import React, { useState } from 'react';
import type { Company } from '../types/index';
import '../styles/Experience.css';

interface ExperienceProps {
  companies: Company[];
}

const Experience: React.FC<ExperienceProps> = ({ companies }) => {
  const [selectedCompany, setSelectedCompany] = useState(0);
  const [brokenImages, setBrokenImages] = useState<Set<number>>(new Set());

  const handleImageError = (index: number) => {
    setBrokenImages(prev => new Set(prev).add(index));
  };

  const getCompanyInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <section className="experience-section">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My professional journey</p>

        <div className="experience-content">
          <div className="companies-tabs">
            {companies.map((company, index) => (
              <button
                key={index}
                className={`company-tab ${selectedCompany === index ? 'active' : ''}`}
                onClick={() => setSelectedCompany(index)}
              >
                {company.logo && (
                  <div className="company-logo">
                    {brokenImages.has(index) ? (
                      <div className="company-logo-fallback">
                        {getCompanyInitials(company.name)}
                      </div>
                    ) : (
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        onError={() => handleImageError(index)}
                      />
                    )}
                  </div>
                )}
                <div className="company-info">
                  <span className="company-name">{company.name}</span>
                  <span className="company-period">{company.period}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="experience-details">
            <div className="detail-card floating-card">
              <div className="detail-header">
                <div className="header-left">
                  {companies[selectedCompany].logo && (
                    <div className="detail-company-logo">
                      {brokenImages.has(selectedCompany) ? (
                        <div className="company-logo-fallback">
                          {getCompanyInitials(companies[selectedCompany].name)}
                        </div>
                      ) : (
                        <img
                          src={companies[selectedCompany].logo}
                          alt={`${companies[selectedCompany].name} logo`}
                          onError={() => handleImageError(selectedCompany)}
                        />
                      )}
                    </div>
                  )}
                  <div>
                    <h3 className="role-title">{companies[selectedCompany].role}</h3>
                    <p className="company-name-detail">{companies[selectedCompany].name}</p>
                  </div>
                </div>
                <span className="period-badge">{companies[selectedCompany].period}</span>
              </div>

              <p className="role-description">{companies[selectedCompany].description}</p>

              <div className="technologies">
                <h4 className="tech-title">Technologies Used:</h4>
                <div className="tech-tags">
                  {companies[selectedCompany].technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
