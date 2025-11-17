# Complete Deployment Guide

This guide will walk you through deploying your MERN stack application from start to finish.

## Prerequisites

- [ ] GitHub account
- [ ] Git installed locally
- [ ] Node.js 18+ installed
- [ ] MongoDB Atlas account
- [ ] Render account (for backend)
- [ ] Vercel account (for frontend)

## Phase 1: Set Up MongoDB Atlas

### Step 1: Create Cluster

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Click **"Build a Database"**
4. Select **FREE** tier (M0)
5. Choose cloud provider and region (closest to your users)
6. Name your cluster (e.g., "mern-cluster")
7. Click **"Create"**

### Step 2: Configure Database Access

1. Go to **Database Access** in left sidebar
2. Click **"Add New Database User"**
3. Choose **Password** authentication
4. Username: `mernuser` (or your choice)
5. Password: Generate secure password (save it!)
6. Database User Privileges: **"Read and write to any database"**
7. Click **"Add User"**

### Step 3: Configure Network Access

1. Go to **Network Access** in left sidebar
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (for deployment platforms)
4. Click **"Confirm"**

### Step 4: Get Connection String

1. Go back to **Database** (Clusters)
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Driver: **Node.js**, Version: **5.5 or later**
5. Copy the connection string
6. Replace `<username>`, `<password>`, and `<dbname>`

Example:

```
mongodb+srv://mernuser:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/mern-app?retryWrites=true&w=majority
```

## Phase 2: Deploy Backend to Render

### Step 1: Prepare Your Code

1. Make sure your code is pushed to GitHub
2. Verify backend/package.json has correct scripts
3. Commit and push any changes

### Step 2: Create Render Account

1. Go to [Render.com](https://render.com)
2. Sign up with GitHub account

### Step 3: Create Web Service

1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. Select your repository
4. Configure:
   - **Name:** `mern-backend` (or your choice)
   - **Region:** Choose closest to your users
   - **Branch:** `main`
   - **Root Directory:** `backend`
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** `Free`

### Step 4: Add Environment Variables

Click **"Advanced"** and add:

| Key           | Value                                                 |
| ------------- | ----------------------------------------------------- |
| `NODE_ENV`    | `production`                                          |
| `MONGODB_URI` | Your MongoDB connection string                        |
| `PORT`        | `5000` (optional, Render provides this)               |
| `CORS_ORIGIN` | Leave blank for now, update after frontend deployment |

### Step 5: Deploy

1. Click **"Create Web Service"**
2. Wait for deployment (5-10 minutes)
3. Copy your backend URL (e.g., `https://mern-backend-xxxx.onrender.com`)

### Step 6: Test Backend

Visit: `https://your-backend-url.onrender.com/health`

Should return:

```json
{
  "uptime": 123,
  "message": "OK",
  "timestamp": 1234567890,
  "environment": "production",
  "database": "connected"
}
```

## Phase 3: Deploy Frontend to Vercel

### Step 1: Create Vercel Account

1. Go to [Vercel.com](https://vercel.com)
2. Sign up with GitHub account

### Step 2: Import Project

1. Click **"Add New..."** → **"Project"**
2. Import your Git repository
3. Configure:
   - **Framework Preset:** `Create React App`
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `build` (auto-detected)

### Step 3: Add Environment Variables

Add these environment variables:

| Name                | Value                                                                          |
| ------------------- | ------------------------------------------------------------------------------ |
| `REACT_APP_API_URL` | Your backend URL + `/api` (e.g., `https://mern-backend-xxxx.onrender.com/api`) |
| `REACT_APP_ENV`     | `production`                                                                   |

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait for build and deployment (2-5 minutes)
3. Copy your frontend URL (e.g., `https://your-app.vercel.app`)

### Step 5: Update Backend CORS

1. Go back to Render
2. Go to your backend service
3. Environment → Edit
4. Update `CORS_ORIGIN` to your frontend URL
5. Save changes (service will redeploy)

### Step 6: Test Frontend

1. Visit your frontend URL
2. Check if "API Connected" shows ✅
3. Try creating a task
4. Verify data is saved

## Phase 4: Set Up CI/CD with GitHub Actions

### Step 1: Get Required Credentials

#### Render API Key

1. Render.com → Account Settings
2. API Keys → Create new key
3. Copy the key

#### Render Service ID

1. Go to your backend service
2. Settings → Service Details
3. Copy Service ID

#### Vercel Token

1. Vercel → Settings → Tokens
2. Create new token
3. Copy the token

#### Vercel IDs

1. Vercel → Project Settings
2. Copy Project ID
3. Copy Team/Organization ID

### Step 2: Add GitHub Secrets

1. GitHub Repository → Settings
2. Secrets and variables → Actions
3. New repository secret

Add these secrets (see `deployment/github-secrets-guide.md` for details):

- `RENDER_API_KEY`
- `RENDER_SERVICE_ID`
- `BACKEND_URL`
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
- `FRONTEND_URL`
- `REACT_APP_API_URL`

### Step 3: Test CI/CD

1. Make a small change to your code
2. Commit and push to main branch
3. Go to Actions tab in GitHub
4. Watch the workflows run
5. Verify deployment succeeds

## Phase 5: Set Up Monitoring

### Step 1: UptimeRobot

1. Sign up at [UptimeRobot.com](https://uptimerobot.com)
2. Add New Monitor:
   - Type: HTTP(s)
   - URL: `https://your-backend-url.onrender.com/health`
   - Name: "MERN Backend"
   - Interval: 5 minutes
3. Add another monitor for frontend
4. Configure email alerts

### Step 2: Create Status Page

1. UptimeRobot → Status Pages
2. Create new status page
3. Add your monitors
4. Customize and publish

### Step 3: Sentry (Optional)

1. Sign up at [Sentry.io](https://sentry.io)
2. Create two projects (Backend, Frontend)
3. Get DSN for each
4. Add to environment variables
5. Install Sentry SDK (see monitoring docs)

## Phase 6: Final Verification

### Checklist

- [ ] Backend is accessible and returns health check
- [ ] Frontend loads without errors
- [ ] Can create, read, update, delete tasks
- [ ] API calls from frontend to backend work
- [ ] Database is receiving data
- [ ] CI/CD pipeline runs successfully
- [ ] Monitoring is set up and alerting works
- [ ] HTTPS is enabled (automatic on Render/Vercel)
- [ ] Environment variables are secure
- [ ] Documentation is updated

## Common Issues and Solutions

### Issue: "API Connection Failed"

**Solution:**

- Check `REACT_APP_API_URL` is correct
- Verify backend is running on Render
- Check CORS_ORIGIN in backend
- Clear browser cache and reload

### Issue: "Database connection failed"

**Solution:**

- Verify MongoDB Atlas connection string
- Check database user credentials
- Confirm IP whitelist includes 0.0.0.0/0
- Test connection string locally first

### Issue: "Build failed on Vercel"

**Solution:**

- Check build logs for errors
- Verify all dependencies are in package.json
- Test build locally: `npm run build`
- Check Node.js version compatibility

### Issue: "GitHub Actions failing"

**Solution:**

- Verify all secrets are added correctly
- Check secret names (case-sensitive)
- Review workflow logs for specific errors
- Test deployment manually first

### Issue: "Render service keeps restarting"

**Solution:**

- Check Render logs for errors
- Verify MongoDB connection
- Check for missing environment variables
- Ensure PORT is not hardcoded

## Production Readiness Checklist

### Security

- [ ] Environment variables are secured
- [ ] CORS is properly configured
- [ ] Rate limiting is enabled
- [ ] Helmet.js security headers active
- [ ] MongoDB connection uses authentication
- [ ] No sensitive data in logs

### Performance

- [ ] Compression enabled
- [ ] Database indexes created
- [ ] Static assets cached
- [ ] API response times < 200ms
- [ ] Frontend loads < 3 seconds

### Monitoring

- [ ] Uptime monitoring active
- [ ] Error tracking configured
- [ ] Health checks responding
- [ ] Alerts configured
- [ ] Logs are being collected

### Documentation

- [ ] README updated with URLs
- [ ] Deployment process documented
- [ ] Environment variables listed
- [ ] API endpoints documented
- [ ] Troubleshooting guide available

## Next Steps

1. **Custom Domain:** Configure custom domain on Vercel and Render
2. **Enhanced Monitoring:** Set up Sentry for error tracking
3. **Performance Optimization:** Add caching, CDN
4. **Scaling:** Upgrade to paid tiers as needed
5. **Backup Strategy:** Implement automated backups
6. **Testing:** Add more comprehensive tests
7. **Features:** Continue development with CI/CD in place

## Support Resources

- **Render Docs:** https://render.com/docs
- **Vercel Docs:** https://vercel.com/docs
- **MongoDB Atlas Docs:** https://docs.atlas.mongodb.com
- **GitHub Actions Docs:** https://docs.github.com/actions
- **Project Issues:** GitHub repository issues tab

---

🎉 **Congratulations!** Your MERN stack application is now deployed and production-ready!
