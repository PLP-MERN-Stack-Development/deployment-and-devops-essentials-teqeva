# GitHub Secrets Configuration Guide

This document lists all the secrets you need to configure in your GitHub repository for CI/CD pipelines.

## How to Add Secrets

1. Go to your GitHub repository
2. Click on **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each secret below

## Required Secrets

### Backend Deployment (Render)

#### `RENDER_API_KEY`

- **Description:** Your Render API key for deployments
- **How to get:**
  1. Log in to Render.com
  2. Go to Account Settings
  3. API Keys section
  4. Create new API key
- **Example:** `rnd_xxxxxxxxxxxxxxxxxxxxx`

#### `RENDER_SERVICE_ID`

- **Description:** Your backend service ID on Render
- **How to get:**
  1. Go to your backend service on Render
  2. Copy the Service ID from the URL or service settings
- **Example:** `srv-xxxxxxxxxxxxxxxxxxxxx`

#### `BACKEND_URL`

- **Description:** Your deployed backend URL
- **Example:** `https://your-backend-service.onrender.com`

### Frontend Deployment (Vercel)

#### `VERCEL_TOKEN`

- **Description:** Vercel authentication token
- **How to get:**
  1. Log in to Vercel
  2. Go to Settings → Tokens
  3. Create new token
- **Example:** `xxxxxxxxxxxxxxxxxxxxxxxxxx`

#### `VERCEL_ORG_ID`

- **Description:** Your Vercel organization/team ID
- **How to get:**
  1. Go to Vercel Settings
  2. Copy your Team ID or Personal Account ID
- **Example:** `team_xxxxxxxxxxxxxxxxxxxxx`

#### `VERCEL_PROJECT_ID`

- **Description:** Your frontend project ID on Vercel
- **How to get:**
  1. Go to your project settings on Vercel
  2. Copy the Project ID
- **Example:** `prj_xxxxxxxxxxxxxxxxxxxxx`

#### `FRONTEND_URL`

- **Description:** Your deployed frontend URL
- **Example:** `https://your-app.vercel.app`

### Application Configuration

#### `REACT_APP_API_URL`

- **Description:** Backend API URL for frontend to connect
- **Example:** `https://your-backend-service.onrender.com/api`

#### `MONGODB_URI_TEST`

- **Description:** MongoDB connection string for testing (optional)
- **How to get:**
  1. Create a separate test database in MongoDB Atlas
  2. Get the connection string
- **Example:** `mongodb+srv://user:pass@cluster.mongodb.net/test-db?retryWrites=true&w=majority`

## Optional Secrets (for Enhanced Features)

### Error Tracking (Sentry)

#### `SENTRY_DSN`

- **Description:** Sentry Data Source Name for error tracking
- **How to get:**
  1. Create project on Sentry.io
  2. Copy the DSN from project settings
- **Example:** `https://xxxxxxxxxxxxx@xxxxx.ingest.sentry.io/xxxxxxx`

### Monitoring

#### `UPTIME_ROBOT_API_KEY`

- **Description:** UptimeRobot API key for monitoring (optional)
- **How to get:**
  1. Sign up at uptimerobot.com
  2. Go to My Settings → API Settings
  3. Generate Monitor-Specific API Key

## Environment-Specific Secrets

### Development

Store in `.env` file locally (NOT committed to Git)

### Staging

Configure in your staging environment deployment platform

### Production

Configure in GitHub Secrets (as above) and deployment platforms

## Security Best Practices

1. ✅ **Never commit secrets to Git**
2. ✅ **Use different credentials for dev/staging/prod**
3. ✅ **Rotate secrets regularly (every 90 days)**
4. ✅ **Use minimum required permissions**
5. ✅ **Monitor secret usage and access logs**
6. ✅ **Revoke compromised secrets immediately**

## Verification Checklist

After adding all secrets, verify:

- [ ] All required secrets are added to GitHub
- [ ] Secret names match exactly (case-sensitive)
- [ ] No trailing spaces in secret values
- [ ] URLs don't have trailing slashes
- [ ] MongoDB connection strings are properly encoded
- [ ] Test the CI/CD pipeline with a small commit

## Troubleshooting

### "Secret not found" error

- Check secret name spelling (case-sensitive)
- Verify secret exists in repository settings
- Check if using organization secrets correctly

### "Invalid token" error

- Regenerate the token
- Verify token has correct permissions
- Check token hasn't expired

### "Connection refused" error

- Verify URLs are correct and accessible
- Check if services are running
- Verify network/firewall settings
