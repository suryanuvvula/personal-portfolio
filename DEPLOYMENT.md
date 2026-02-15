# Portfolio Deployment Guide

This guide will help you deploy your portfolio to production so you can share it with recruiters and add it to your LinkedIn profile.

## Architecture

- **Frontend**: React + TypeScript + Vite (deployed on Vercel)
- **Backend**: Node.js + Express (deployed on Render)

## Prerequisites

1. GitHub account
2. Vercel account (free) - https://vercel.com
3. Render account (free) - https://render.com

---

## Step 1: Push Code to GitHub

First, let's get your code on GitHub:

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Portfolio deployment ready"

# Create a new repository on GitHub (via web interface)
# Then link and push:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy Backend to Render

### 2.1 Create New Web Service on Render

1. Go to https://render.com and sign in
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `portfolio-backend` (or your choice)
   - **Region**: Choose closest to you
   - **Branch**: `main`
   - **Root Directory**: `server`
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`

### 2.2 Add Environment Variables

In Render dashboard, go to **Environment** tab and add:

```
PORT=5000
CLIENT_URL=https://your-vercel-app.vercel.app
```

(You'll update `CLIENT_URL` after deploying frontend)

### 2.3 Deploy

Click **"Create Web Service"** and wait for deployment to complete.

**Save your backend URL**: `https://portfolio-backend-xxxx.onrender.com`

---

## Step 3: Deploy Frontend to Vercel

### 3.1 Import Project to Vercel

1. Go to https://vercel.com and sign in
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 3.2 Add Environment Variables

Click **"Environment Variables"** and add:

```
VITE_API_URL=https://your-render-backend.onrender.com/api
```

Replace with your actual Render backend URL from Step 2.

### 3.3 Deploy

Click **"Deploy"** and wait for deployment to complete.

**Your frontend URL**: `https://your-portfolio.vercel.app`

---

## Step 4: Update Backend CORS Settings

1. Go back to Render dashboard
2. Navigate to your backend service → **Environment**
3. Update `CLIENT_URL` environment variable:
   ```
   CLIENT_URL=https://your-portfolio.vercel.app
   ```
4. Save changes (Render will automatically redeploy)

---

## Step 5: Verify Deployment

1. Visit your Vercel URL: `https://your-portfolio.vercel.app`
2. Check that all sections load properly
3. Test the contact form
4. Verify company logos are displaying

---

## Step 6: Custom Domain (Optional)

### For Vercel (Frontend):

1. Go to your project on Vercel
2. Click **Settings** → **Domains**
3. Add your custom domain (e.g., `suryanuvvula.com`)
4. Follow DNS configuration instructions

### Update Backend:

After adding custom domain, update Render's `CLIENT_URL` to your custom domain.

---

## Troubleshooting

### Issue: API calls failing

**Solution**: Check that:
- Backend is deployed and running on Render
- `VITE_API_URL` is correctly set in Vercel environment variables
- `CLIENT_URL` is correctly set in Render environment variables
- Both deployments are complete

### Issue: Company logos not loading

**Solution**:
- Logos are using external CDN URLs which should work fine
- If issues persist, check browser console for CORS errors

### Issue: Contact form not working

**Solution**:
- Email functionality requires SMTP credentials
- Add `EMAIL_USER` and `EMAIL_PASS` to Render environment variables
- For Gmail, use an App Password, not your regular password

---

## Render Free Tier Important Notes

⚠️ **Render free tier sleeps after 15 minutes of inactivity**

- First load after sleep takes 30-60 seconds
- Subsequent loads are instant
- For production use, consider upgrading to paid tier ($7/month)

**Workaround**: Use a service like [UptimeRobot](https://uptimerobot.com) to ping your backend every 14 minutes to keep it awake.

---

## Updating Your Portfolio

To update your deployed portfolio:

```bash
# Make your changes
git add .
git commit -m "Update: description of changes"
git push origin main
```

Both Vercel and Render will automatically redeploy when you push to GitHub!

---

## Using Your Portfolio

### On LinkedIn:

1. Go to your LinkedIn profile
2. Click "Add profile section" → "Featured" → "Add link"
3. Paste your Vercel URL
4. Add a title like "Professional Portfolio"

### On Resume:

Add under contact information:
```
Portfolio: https://your-portfolio.vercel.app
```

### For Recruiters:

Share the link in:
- Email signatures
- Cover letters
- Job applications
- Networking conversations

---

## Cost Summary

- **GitHub**: Free
- **Vercel**: Free (hobby plan)
- **Render**: Free (with sleep after 15 min inactivity)

**Total Cost**: $0/month

For better performance (no sleep):
- Render Paid: $7/month
- Total: $7/month

---

## Support

If you encounter issues during deployment, check:
1. Vercel deployment logs
2. Render deployment logs
3. Browser console for frontend errors
4. Backend health endpoint: `https://your-backend.onrender.com/api/health`

---

Good luck with your deployment! 🚀
