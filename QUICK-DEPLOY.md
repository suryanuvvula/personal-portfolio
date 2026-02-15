# Quick Deploy Checklist ✅

Follow these steps in order for fastest deployment:

## 1. Push to GitHub (5 minutes)

```bash
git add .
git commit -m "Ready for deployment"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

## 2. Deploy Backend - Render (10 minutes)

1. ➡️ https://render.com → Sign in → **New +** → **Web Service**
2. **Connect GitHub** repo
3. **Settings**:
   - Root Directory: `server`
   - Build: `npm install && npm run build`
   - Start: `npm start`
4. **Environment Variables**:
   ```
   CLIENT_URL = https://your-frontend.vercel.app
   ```
5. Click **Create Web Service**
6. ✅ **Copy your backend URL**: `https://xxxxx.onrender.com`

## 3. Deploy Frontend - Vercel (5 minutes)

1. ➡️ https://vercel.com → **Add New** → **Project**
2. **Import** your GitHub repo
3. **Settings**:
   - Root Directory: `client`
   - Framework: Vite
4. **Environment Variables**:
   ```
   VITE_API_URL = https://your-backend.onrender.com/api
   ```
5. Click **Deploy**
6. ✅ **Copy your frontend URL**: `https://xxxxx.vercel.app`

## 4. Update Backend CORS (2 minutes)

1. Go back to Render dashboard
2. Environment → Update `CLIENT_URL` to your Vercel URL
3. Save (auto-redeploys)

## 5. Test Your Site (2 minutes)

Visit your Vercel URL and verify:
- ✅ Portfolio loads
- ✅ Experience section shows company logos
- ✅ All sections display correctly

---

## ⏱️ Total Time: ~25 minutes

## 🔗 URLs You'll Get:

- **Portfolio**: `https://yourname.vercel.app`
- **Backend API**: `https://yourname.onrender.com`

## 📱 Share With Recruiters:

"Check out my portfolio: https://yourname.vercel.app"

## 💰 Cost: $0 (100% FREE)

---

## 🚨 First Load Tip

Render free tier sleeps after 15 min inactivity. First load = 30-60s, then fast.

For instant loading ($7/mo), upgrade Render to Starter plan.
