import React, { useState } from 'react';
import { api } from '../services/api';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await api.sendContactMessage(formData);
      console.log('Contact form response:', response);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="contact-section">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's build something amazing together</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card floating-card">
              <div className="info-icon">📧</div>
              <h3 className="info-title">Email</h3>
              <p className="info-value">suryawebdev9@gmail.com</p>
            </div>

            <div className="info-card floating-card">
              <div className="info-icon">💼</div>
              <h3 className="info-title">LinkedIn</h3>
              <a href="https://linkedin.com/in/suryanuvvula" className="info-link" target="_blank" rel="noopener noreferrer">
                Connect with me
              </a>
            </div>

            <div className="info-card floating-card">
              <div className="info-icon">💻</div>
              <h3 className="info-title">GitHub</h3>
              <a href="https://github.com/suryanuvvula" className="info-link" target="_blank" rel="noopener noreferrer">
                View my code
              </a>
            </div>
          </div>

          <form className="contact-form floating-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                disabled={status === 'sending'}
              />
            </div>

            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
              <span className="btn-arrow">→</span>
            </button>

            {status === 'success' && (
              <div className="status-message success">
                ✓ Message sent successfully!
              </div>
            )}

            {status === 'error' && (
              <div className="status-message error">
                ✗ {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
