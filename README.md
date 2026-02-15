# Surya Nuvvula - Portfolio

A modern, interactive portfolio website built with React, TypeScript, Node.js, and Express. Features 3D floating cards, smooth animations, and a responsive design.

## Features

- **3D Floating Card Design** - Interactive cards with parallax effects
- **Responsive Layout** - Works perfectly on all devices
- **Dark Theme** - Modern glassmorphism design
- **Animated Components** - Smooth transitions and hover effects
- **Contact Form** - Integrated with Node.js backend
- **TypeScript** - Full type safety
- **Modern Stack** - React + Vite + Express

## Tech Stack

### Frontend

- React 18
- TypeScript
- Vite
- CSS3 (Flexbox/Grid)
- 3D Transforms & Animations

### Backend

- Node.js
- Express
- TypeScript
- Nodemailer (for contact form)

## Project Structure

```
portfolio-surya-nuvvula/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── styles/        # CSS files
│   │   ├── services/      # API services
│   │   ├── types/         # TypeScript types
│   │   └── App.tsx        # Main app component
│   └── package.json
├── server/                 # Express backend
│   ├── src/
│   │   └── server.ts      # Express server
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Install Frontend Dependencies**

   ```bash
   cd client
   npm install
   ```

2. **Install Backend Dependencies**
   ```bash
   cd ../server
   npm install
   ```

### Running the Application

You need to run both the frontend and backend servers:

#### Option 1: Run in separate terminals

**Terminal 1 - Backend Server:**

```bash
cd server
npm run dev
```

The backend server will start on `http://localhost:5000`

**Terminal 2 - Frontend App:**

```bash
cd client
npm run dev
```

The frontend will start on `http://localhost:5173`

#### Option 2: Run with single command (recommended)

From the project root directory, you can run both servers:

```bash
# Install concurrently globally
npm install -g concurrently

# Run both servers
npm run dev
```

### Building for Production

**Build Frontend:**

```bash
cd client
npm run build
```

**Build Backend:**

```bash
cd server
npm run build
npm start
```

## Configuration

### Environment Variables

Create a `.env` file in the `server` directory (use `.env.example` as template):

```env
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Note:** For the contact form to send actual emails, you need to:

1. Enable 2-factor authentication in your Gmail account
2. Generate an app password
3. Add the credentials to the `.env` file

## Features Breakdown

### 🎨 Hero Section

- 3D floating main card with mouse parallax effect
- Animated gradient background orbs
- Statistics cards with hover effects
- Smooth scroll indicator

### 💻 Skills Section

- Categorized tech stack (Frontend, Backend, Tools)
- Animated skill cards with stagger effect
- Hover interactions

### 💼 Experience Section

- Interactive company tabs
- Detailed role descriptions
- Technology tags
- Smooth transitions between companies

### 🚀 Projects Section

- 3D project cards
- Technology badges
- Call-to-action buttons

### 📧 Contact Section

- Functional contact form
- Form validation
- Success/error messages
- Social media links
- Integrated with backend API

## API Endpoints

### GET `/api/portfolio`

Returns portfolio data including skills, companies, and projects

### POST `/api/contact`

Sends contact form messages

```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

### POST `/api/analytics/pageview`

Tracks page views for analytics

### GET `/api/health`

Health check endpoint

## Customization

To customize the portfolio with your own information:

1. Update `/server/src/server.ts` - Modify the portfolio data
2. Update colors in `/client/src/App.css` - Change CSS variables
3. Update content in components as needed

## Performance Optimizations

- Lazy loading of images
- CSS animations using GPU acceleration
- Backdrop filter for glassmorphism
- Optimized bundle size with Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

Ready to deploy your portfolio? See the deployment guides:

- 📘 **[Full Deployment Guide](./DEPLOYMENT.md)** - Detailed step-by-step instructions
- ⚡ **[Quick Deploy Checklist](./QUICK-DEPLOY.md)** - Fast track deployment in 25 minutes

### Quick Overview

- **Frontend**: Deploy to Vercel (free)
- **Backend**: Deploy to Render (free)
- **Total Cost**: $0/month
- **Deployment Time**: ~25 minutes

The portfolio will be live at `https://your-name.vercel.app`

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

Surya Nuvvula

- Email: suryawebdev9@gmail.com
- LinkedIn: [linkedin.com/in/suryanuvvula](https://linkedin.com/in/suryanuvvula)
- GitHub: [github.com/suryanuvvula](https://github.com/suryanuvvula)

---

Built with ❤️ using React, TypeScript, Node.js & Express
