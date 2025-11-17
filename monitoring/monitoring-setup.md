# Application Monitoring Setup

## 1. Health Check Endpoints

### Backend Health Check

- Endpoint: `GET /health`
- Returns: Server uptime, status, database connectivity
- Use for: Uptime monitoring services

### API Status Check

- Endpoint: `GET /api/status`
- Returns: API version, status, timestamp
- Use for: Service availability checks

## 2. Uptime Monitoring Services

### Option 1: UptimeRobot (Free)

1. Sign up at https://uptimerobot.com
2. Add new monitor
3. Monitor Type: HTTP(s)
4. URL: Your backend health endpoint
5. Monitoring Interval: 5 minutes (free tier)
6. Alert Contacts: Your email

### Option 2: Pingdom

1. Sign up at https://www.pingdom.com
2. Create new check
3. Set check interval and alert thresholds
4. Configure notification preferences

### Option 3: Better Stack (formerly Checkly)

1. Sign up at https://betterstack.com
2. Add uptime monitor
3. Configure health check URL
4. Set up status page (optional)

## 3. Error Tracking with Sentry

### Setup Steps:

1. Sign up at https://sentry.io
2. Create new project (Node.js for backend, React for frontend)
3. Install Sentry SDK:

   ```bash
   # Backend
   cd backend
   npm install @sentry/node

   # Frontend
   cd frontend
   npm install @sentry/react
   ```

4. Add to backend (server.js):

   ```javascript
   const Sentry = require("@sentry/node");

   Sentry.init({
     dsn: process.env.SENTRY_DSN,
     environment: process.env.NODE_ENV,
   });
   ```

5. Add to frontend (index.js):

   ```javascript
   import * as Sentry from "@sentry/react";

   Sentry.init({
     dsn: process.env.REACT_APP_SENTRY_DSN,
     environment: process.env.REACT_APP_ENV,
   });
   ```

## 4. Performance Monitoring

### Backend Monitoring

- **Metrics to Track:**

  - Response times
  - Error rates
  - Database query performance
  - Memory usage
  - CPU usage

- **Tools:**
  - Render/Railway built-in metrics
  - New Relic (APM)
  - Datadog

### Frontend Monitoring

- **Metrics to Track:**

  - Page load time
  - Time to interactive
  - API response times
  - JavaScript errors
  - User interactions

- **Tools:**
  - Google Analytics
  - Vercel Analytics (built-in)
  - Web Vitals

## 5. Log Management

### Backend Logging

- Morgan middleware for HTTP request logging
- Console logs for debugging
- Consider: Papertrail, Loggly, or CloudWatch

### Frontend Logging

- Console logs (development only)
- Error boundaries for React
- Sentry for production errors

## 6. Database Monitoring

### MongoDB Atlas Built-in Monitoring

1. Go to MongoDB Atlas Dashboard
2. Click on "Metrics" tab
3. Monitor:
   - Operations per second
   - Connection count
   - Network I/O
   - Query performance

### Alerts

1. Set up alerts in Atlas
2. Configure thresholds for:
   - High CPU usage
   - Memory usage
   - Connection spikes
   - Slow queries

## 7. CI/CD Pipeline Monitoring

### GitHub Actions

- Monitor workflow runs
- Check for failing builds
- Review deployment logs
- Set up email notifications

## 8. Regular Maintenance Checklist

### Daily

- [ ] Check application uptime
- [ ] Review error logs
- [ ] Monitor response times

### Weekly

- [ ] Review performance metrics
- [ ] Check database growth
- [ ] Update dependencies (security patches)
- [ ] Review and clear old logs

### Monthly

- [ ] Full security audit
- [ ] Database optimization
- [ ] Backup verification
- [ ] Performance optimization
- [ ] Update documentation

## 9. Alerting Strategy

### Critical Alerts (Immediate Action)

- Application down
- Database connection failure
- High error rate (>5%)
- Security breaches

### Warning Alerts (Action within 24h)

- High response times
- Elevated error rates
- Database reaching capacity
- Memory/CPU spikes

### Info Alerts (Monitor)

- Successful deployments
- Database backups
- Certificate renewals
- Scheduled maintenance

## 10. Status Page

Consider setting up a public status page:

- **Options:**
  - StatusPage.io
  - Better Stack Status Page
  - Custom status page with your monitoring data

**Include:**

- Current system status
- Recent incidents
- Scheduled maintenance
- Historical uptime data
