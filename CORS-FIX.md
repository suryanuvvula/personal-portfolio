# CORS Error Fix Guide

## The Problem
You're seeing a CORS error when your Vercel frontend tries to connect to your Render backend.

## The Solution

I've updated the server to automatically allow all Vercel domains. Follow these steps:

### Step 1: Push Updated Code to GitHub

```bash
# From your project root
git add .
git commit -m "fix: Update CORS to allow Vercel domains"
git push origin main
```

### Step 2: Wait for Render to Redeploy (or Manual Redeploy)

**Option A: Automatic (Recommended)**
- Render automatically redeploys when you push to GitHub
- Wait 2-3 minutes for deployment to complete
- Check Render dashboard for deployment status

**Option B: Manual Redeploy**
1. Go to your Render dashboard: https://dashboard.render.com
2. Click on your backend service
3. Click **"Manual Deploy"** → **"Deploy latest commit"**
4. Wait for deployment to complete

### Step 3: Verify Environment Variables in Render

Even though the new CORS config auto-allows Vercel domains, it's good practice to set the CLIENT_URL:

1. Go to Render dashboard → Your service
2. Click **"Environment"** tab
3. Make sure you have:
   ```
   CLIENT_URL = https://your-actual-vercel-url.vercel.app
   ```
4. Click **"Save Changes"** (triggers redeploy)

### Step 4: Verify Vercel Environment Variable

1. Go to Vercel dashboard → Your project
2. Click **"Settings"** → **"Environment Variables"**
3. Make sure you have:
   ```
   VITE_API_URL = https://your-render-backend.onrender.com/api
   ```
4. If you just added/changed it, **redeploy** your Vercel app:
   - Go to **"Deployments"**
   - Click **"..."** on latest deployment
   - Click **"Redeploy"**

### Step 5: Test Your Deployment

Open browser console (F12) and visit your Vercel URL:

```
https://your-portfolio.vercel.app
```

Check for:
- ✅ No CORS errors in console
- ✅ Portfolio data loads
- ✅ Company logos appear
- ✅ All sections work

---

## Still Having Issues?

### Debug Checklist:

1. **Check Backend is Running**
   ```bash
   curl https://your-backend.onrender.com/api/health
   ```
   Should return: `{"status":"Server is running","timestamp":"..."}`

2. **Check CORS Headers**
   Open browser console on your Vercel site, go to Network tab, and check the API request headers.

3. **Check Environment Variables**
   - Render: `CLIENT_URL` should be your Vercel URL
   - Vercel: `VITE_API_URL` should be your Render URL + `/api`

4. **Check Render Logs**
   - Go to Render dashboard → Your service → **"Logs"**
   - Look for CORS errors or other issues
   - Should see requests coming in from your Vercel domain

5. **Clear Browser Cache**
   - Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
   - Or open in incognito/private window

---

## What Changed?

### Old CORS Config (Restrictive):
```javascript
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
```
❌ Only allowed ONE specific origin

### New CORS Config (Flexible):
```javascript
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    // Auto-allow all Vercel domains
    if (allowedOrigins.indexOf(origin) !== -1 || origin.endsWith('.vercel.app')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```
✅ Allows:
- All Vercel preview URLs
- Your production Vercel URL
- Localhost for development
- Any URL in CLIENT_URL env var

---

## Quick Commands

### Check Backend Health:
```bash
curl https://your-backend.onrender.com/api/health
```

### Check Portfolio Data:
```bash
curl https://your-backend.onrender.com/api/portfolio
```

### Test CORS from Command Line:
```bash
curl -H "Origin: https://your-vercel-app.vercel.app" \
     -H "Access-Control-Request-Method: GET" \
     -H "Access-Control-Request-Headers: Content-Type" \
     -X OPTIONS \
     https://your-backend.onrender.com/api/portfolio -v
```

Should see:
```
< access-control-allow-origin: https://your-vercel-app.vercel.app
< access-control-allow-credentials: true
```

---

## Expected Timeline

1. **Push to GitHub**: 10 seconds
2. **Render redeploys**: 2-3 minutes
3. **Test**: 30 seconds

**Total time to fix: ~5 minutes**

---

## Common Mistakes

### ❌ Wrong API URL in Vercel
```
VITE_API_URL = https://your-backend.onrender.com
```
**Missing `/api` at the end!**

### ✅ Correct API URL
```
VITE_API_URL = https://your-backend.onrender.com/api
```

### ❌ HTTP instead of HTTPS
```
VITE_API_URL = http://your-backend.onrender.com/api
```

### ✅ Must use HTTPS
```
VITE_API_URL = https://your-backend.onrender.com/api
```

---

## After Fix Works

Once CORS is working:

1. ✅ Clear the CORS error from console
2. ✅ Portfolio loads all data
3. ✅ Contact form works
4. ✅ Share your portfolio URL!

---

## Need More Help?

If still having issues, share:
1. Your Vercel URL
2. Your Render backend URL
3. Screenshot of browser console error
4. Screenshot of Network tab showing failed request

---

Good luck! The fix should work immediately after redeployment. 🚀
