import type { PortfolioData, ContactForm } from '../types/index';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = {
  async getPortfolioData(): Promise<PortfolioData> {
    const response = await fetch(`${API_URL}/portfolio`);
    if (!response.ok) {
      throw new Error('Failed to fetch portfolio data');
    }
    return response.json();
  },

  async sendContactMessage(data: ContactForm): Promise<{ success: boolean; message: string }> {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }
    return response.json();
  },

  async trackPageView(page: string): Promise<void> {
    try {
      await fetch(`${API_URL}/analytics/pageview`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ page }),
      });
    } catch (error) {
      console.error('Analytics error:', error);
    }
  },
};
