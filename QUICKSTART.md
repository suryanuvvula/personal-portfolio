# Quick Start Guide

## Your Portfolio is Ready! 🎉

Your professional portfolio with 3D floating cards design is now set up and ready to run.

## Running Your Portfolio

### Method 1: Run Both Servers Together (Recommended)

From the `portfolio-surya-nuvvula` directory, run:

```bash
npm run dev
```

This will start:
- **Backend Server** on `http://localhost:5000`
- **Frontend App** on `http://localhost:5173`

Then open `http://localhost:5173` in your browser!

### Method 2: Run Servers Separately

**Terminal 1 - Start Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Start Frontend:**
```bash
cd client
npm run dev
```

## What You'll See

Your portfolio includes:

1. **Hero Section** 🎨
   - 3D floating main card with your name
   - Interactive parallax effect (move your mouse!)
   - Animated stat cards showing your experience
   - Gradient background orbs

2. **Skills Section** 💻
   - Frontend: React, Angular, TypeScript, JavaScript, HTML/CSS, NextJS
   - Backend: Node.js, Express, NestJS, MongoDB
   - Tools: GenAI, REST APIs, Git, Agile/Scrum

3. **Experience Section** 💼
   - Interactive tabs for each company
   - Universal Destination and Experiences
   - Best Buy
   - Axon
   - Nationwide Insurance
   - Universal Orlando
   - AT&T

4. **Projects Section** 🚀
   - E-Commerce Platform
   - GenAI Chatbot
   - Analytics Dashboard

5. **Contact Section** 📧
   - Fully functional contact form
   - Social media links
   - Email integration (configure in .env)

## Customizing Your Portfolio

### Update Your Information

Edit `/server/src/server.ts` and modify the `portfolioData` object:

```typescript
const portfolioData = {
  name: 'Your Name',
  email: 'your.email@example.com',
  // ... add your details
};
```

### Change Colors

Edit `/client/src/App.css` and modify CSS variables:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-color: #667eea;
}
```

### Configure Email (Contact Form)

1. Create `.env` file in the `server` directory
2. Add your Gmail credentials:
   ```
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASS=your-app-password
   ```
3. Enable 2FA in Gmail and generate an app password

## Build for Production

```bash
npm run build
```

This creates optimized production builds in:
- `client/dist/` - Frontend build
- `server/dist/` - Backend build

## Deployment Options

### Frontend (Vite React App)
- **Vercel**: `cd client && vercel`
- **Netlify**: Drag and drop `client/dist` folder
- **GitHub Pages**: Configure in `vite.config.ts`

### Backend (Express Server)
- **Heroku**: `git push heroku main`
- **Railway**: Connect your GitHub repo
- **DigitalOcean**: Deploy as a Node.js app

## Troubleshooting

**Port Already in Use:**
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill

# Kill process on port 5173
lsof -ti:5173 | xargs kill
```

**Dependencies Issues:**
```bash
# Clean install
cd client && rm -rf node_modules package-lock.json && npm install
cd ../server && rm -rf node_modules package-lock.json && npm install
```

**Backend Not Connecting:**
- Make sure backend is running on port 5000
- Check `/client/src/services/api.ts` for correct API_URL
- Check browser console for CORS errors

## Next Steps

1. ✅ Run `npm run dev` and view your portfolio
2. 📝 Update your information in `server/src/server.ts`
3. 🎨 Customize colors and styling
4. 📷 Add project images
5. 📧 Configure email for contact form
6. 🚀 Deploy to production!

## Need Help?

- Check the full README.md for detailed documentation
- All components are in `client/src/components/`
- All styles are in `client/src/styles/`
- API endpoints are in `server/src/server.ts`

---

**Enjoy your new portfolio!** 🎉

Your unique 3D floating cards design will definitely stand out to potential employers!
