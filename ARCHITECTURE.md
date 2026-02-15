# Portfolio Architecture & Deployment

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      PRODUCTION                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────┐         ┌──────────────────────┐ │
│  │   Vercel (Frontend)  │         │  Render (Backend)    │ │
│  │  ─────────────────   │         │  ──────────────────  │ │
│  │  React + TypeScript  │◄───────►│  Node.js + Express  │ │
│  │  Vite Build          │  HTTPS  │  TypeScript         │ │
│  │  your-name.vercel.app│  REST   │  xxxxx.onrender.com │ │
│  └──────────────────────┘  API    └──────────────────────┘ │
│           │                                   │             │
│           │                                   │             │
│           ▼                                   ▼             │
│  ┌──────────────────────┐         ┌──────────────────────┐ │
│  │  CDN Edge Servers    │         │  Portfolio Data      │ │
│  │  - Static Files      │         │  - Companies         │ │
│  │  - Images/Logos      │         │  - Skills            │ │
│  │  - CSS/JS            │         │  - Projects          │ │
│  └──────────────────────┘         └──────────────────────┘ │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                           │
                           │ HTTPS
                           ▼
                  ┌─────────────────┐
                  │   Recruiters    │
                  │   LinkedIn      │
                  │   Job Boards    │
                  └─────────────────┘
```

## Development Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     LOCAL DEVELOPMENT                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────┐         ┌──────────────────────┐ │
│  │   Client (Port 5173) │         │  Server (Port 5000)  │ │
│  │  ─────────────────   │         │  ──────────────────  │ │
│  │  npm run dev         │◄───────►│  npm run dev        │ │
│  │  Vite Dev Server     │   HTTP  │  ts-node-dev        │ │
│  │  Hot Module Reload   │   API   │  Auto-restart       │ │
│  └──────────────────────┘         └──────────────────────┘ │
│           │                                   │             │
│           ▼                                   ▼             │
│  ┌──────────────────────┐         ┌──────────────────────┐ │
│  │  src/components/     │         │  src/server.ts       │ │
│  │  src/services/       │         │  Portfolio Data      │ │
│  │  src/styles/         │         │  API Endpoints       │ │
│  └──────────────────────┘         └──────────────────────┘ │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Deployment Flow

```
Local Development
       │
       │ git add/commit/push
       ▼
┌────────────────┐
│  GitHub Repo   │
└────────────────┘
       │
       ├────────────────┐
       │                │
       ▼                ▼
┌─────────────┐  ┌─────────────┐
│   Vercel    │  │   Render    │
│  (watches)  │  │  (watches)  │
└─────────────┘  └─────────────┘
       │                │
       │ Auto Build     │ Auto Build
       ▼                ▼
┌─────────────┐  ┌─────────────┐
│  Frontend   │  │  Backend    │
│  Deployed   │  │  Deployed   │
└─────────────┘  └─────────────┘
       │                │
       └────────┬───────┘
                ▼
        🌐 LIVE PORTFOLIO
```

## Technology Stack

### Frontend (Vercel)
```
┌─────────────────────────────┐
│  React 19                   │
│  TypeScript 5.9             │
│  Vite 7.2                   │
│  CSS3 (Animations/3D)       │
└─────────────────────────────┘
```

### Backend (Render)
```
┌─────────────────────────────┐
│  Node.js 18+                │
│  Express 4                  │
│  TypeScript 5.3             │
│  Nodemailer 6               │
│  CORS Configuration         │
└─────────────────────────────┘
```

### External Services
```
┌─────────────────────────────┐
│  Company Logos CDN          │
│  - companieslogo.com        │
│  - logos-world.net          │
└─────────────────────────────┘
```

## Data Flow

### Page Load
```
1. User visits → https://your-name.vercel.app
2. Vercel serves → Static HTML/CSS/JS
3. React initializes → Fetches data from API
4. API call to → https://backend.onrender.com/api/portfolio
5. Backend responds → Portfolio data (JSON)
6. Frontend renders → Complete portfolio
```

### Contact Form Submission
```
1. User fills form → Contact component
2. Form validation → Client-side
3. POST request → /api/contact
4. Backend receives → Express route
5. Email sent → Nodemailer (optional)
6. Response → Success/Error message
7. UI updates → Show confirmation
```

## Environment Configuration

### Development
```
Client:  VITE_API_URL=http://localhost:5000/api
Server:  CLIENT_URL=http://localhost:5173
         PORT=5000
```

### Production
```
Client:  VITE_API_URL=https://backend.onrender.com/api
Server:  CLIENT_URL=https://frontend.vercel.app
         PORT=5000
```

## File Structure

```
portfolio-surya-nuvvula/
├── client/                     # Frontend Application
│   ├── public/
│   │   └── logos/             # Company logo assets
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── Hero.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Contact.tsx
│   │   ├── services/
│   │   │   └── api.ts        # API service layer
│   │   ├── styles/           # Component styles
│   │   ├── types/            # TypeScript types
│   │   └── App.tsx           # Main component
│   ├── .env.example          # Environment template
│   └── package.json
│
├── server/                    # Backend Application
│   ├── src/
│   │   └── server.ts         # Express server
│   ├── .env.example          # Environment template
│   ├── render.yaml           # Render config
│   └── package.json
│
├── vercel.json               # Vercel config
├── .gitignore               # Git ignore
│
├── DEPLOYMENT.md            # Full deployment guide
├── QUICK-DEPLOY.md          # Quick reference
├── LINKEDIN-SETUP.md        # LinkedIn guide
├── DEPLOYMENT-SUMMARY.md    # Setup summary
├── ARCHITECTURE.md          # This file
└── README.md                # Project overview
```

## API Endpoints

```
GET  /api/health              Health check
GET  /api/portfolio           Get portfolio data
POST /api/contact            Submit contact form
POST /api/analytics/pageview  Track page views
```

## Performance Metrics

### Vercel (Frontend)
- ✅ Global CDN
- ✅ Instant cache invalidation
- ✅ Edge network
- ✅ SSL/HTTPS automatic
- ✅ 99.99% uptime

### Render (Backend)
- ✅ Automatic SSL
- ✅ Continuous deployment
- ⚠️ Free tier sleeps (15min inactivity)
- ✅ Auto-wake on request
- ✅ 99.9% uptime

## Security Features

```
✅ HTTPS everywhere
✅ CORS configured
✅ Environment variables protected
✅ No secrets in code
✅ Input validation
✅ XSS protection
✅ Rate limiting ready
```

## Monitoring

### What to Monitor:
1. **Uptime**: Use UptimeRobot
2. **Performance**: Vercel Analytics
3. **Errors**: Browser console logs
4. **Traffic**: LinkedIn analytics

### Health Checks:
```bash
# Frontend
curl https://your-name.vercel.app

# Backend
curl https://backend.onrender.com/api/health
```

## Scaling Strategy

### Current Setup (Free):
- Frontend: Unlimited
- Backend: Limited by free tier

### If You Need to Scale:
1. **Render Starter**: $7/mo → No sleep
2. **Vercel Pro**: $20/mo → More bandwidth
3. **Custom Domain**: $10-15/yr → Professional URL

---

## Quick Commands

### Local Development
```bash
npm run dev              # Both servers
npm run dev:client       # Frontend only
npm run dev:server       # Backend only
```

### Build
```bash
npm run build           # Build both
cd client && npm run build   # Frontend only
cd server && npm run build   # Backend only
```

### Deploy
```bash
git push origin main    # Auto-deploys both!
```

---

Built with ❤️ using modern web technologies
