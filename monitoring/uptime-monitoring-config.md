# Uptime Monitoring Configuration

## UptimeRobot Configuration

### Monitor 1: Backend API

- **Name:** MERN Backend API
- **Type:** HTTP(s)
- **URL:** https://your-backend-url.onrender.com/health
- **Interval:** 5 minutes
- **Timeout:** 30 seconds
- **Success Criteria:** HTTP 200
- **Alert When:** Down for 2 consecutive checks
- **Alert Contacts:** your-email@example.com

### Monitor 2: Frontend Application

- **Name:** MERN Frontend
- **Type:** HTTP(s)
- **URL:** https://your-frontend-url.vercel.app
- **Interval:** 5 minutes
- **Timeout:** 30 seconds
- **Success Criteria:** HTTP 200
- **Alert When:** Down for 2 consecutive checks
- **Alert Contacts:** your-email@example.com

### Monitor 3: Database

- **Name:** MongoDB Connection
- **Type:** Keyword (via API endpoint)
- **URL:** https://your-backend-url.onrender.com/health
- **Keyword:** "connected"
- **Interval:** 10 minutes
- **Alert When:** Keyword not found

## Setup Instructions

1. **Sign up for UptimeRobot:**

   - Go to https://uptimerobot.com
   - Create a free account (50 monitors included)

2. **Add New Monitor:**

   - Click "Add New Monitor"
   - Fill in the details above
   - Save

3. **Configure Alerts:**

   - Email alerts (default)
   - SMS alerts (optional, requires upgrade)
   - Webhook alerts (for Slack, Discord, etc.)

4. **Create Status Page:**
   - Go to "Status Pages"
   - Create public status page
   - Add your monitors
   - Customize URL and branding
   - Share with users

## Alternative: Better Stack

### Configuration

```yaml
checks:
  - name: Backend Health
    url: https://your-backend-url.onrender.com/health
    interval: 60
    timeout: 30
    locations:
      - us-east
      - eu-west
    assertions:
      - status == 200
      - body.message == "OK"

  - name: Frontend App
    url: https://your-frontend-url.vercel.app
    interval: 60
    timeout: 30
    assertions:
      - status == 200
      - response_time < 3000
```

## Monitoring Dashboard

### Key Metrics to Display

1. **Uptime Percentage**

   - Target: 99.9% (8.76 hours downtime/year)
   - Acceptable: 99.5% (43.8 hours downtime/year)

2. **Average Response Time**

   - Backend: < 200ms
   - Frontend: < 1000ms

3. **Incidents**

   - Count by month
   - Mean time to resolution

4. **Availability by Service**
   - Backend API
   - Frontend
   - Database

## Alert Configuration Examples

### Slack Webhook

```javascript
// In UptimeRobot or Better Stack
webhook_url: "https://hooks.slack.com/services/YOUR/WEBHOOK/URL";
message: "🚨 {monitorFriendlyName} is {alertTypeFriendlyName}!";
```

### Email Template

```
Subject: 🚨 Alert: {{monitor_name}} is {{status}}

Dear Admin,

Your monitor "{{monitor_name}}" is currently {{status}}.

URL: {{monitor_url}}
Status: {{status_code}}
Response Time: {{response_time}}ms
Time: {{alert_datetime}}

Please investigate immediately.

Best regards,
Uptime Monitoring System
```

## Health Check Best Practices

1. **Implement Comprehensive Health Checks**

   ```javascript
   // backend/server.js
   app.get("/health", async (req, res) => {
     const health = {
       uptime: process.uptime(),
       timestamp: Date.now(),
       status: "OK",
       database: "disconnected",
       memory: process.memoryUsage(),
       checks: {
         database: false,
         api: false,
       },
     };

     try {
       // Check database
       if (mongoose.connection.readyState === 1) {
         health.database = "connected";
         health.checks.database = true;
       }

       // Check API responsiveness
       health.checks.api = true;

       const allChecksPass = Object.values(health.checks).every(
         (check) => check === true
       );

       if (allChecksPass) {
         res.status(200).json(health);
       } else {
         res.status(503).json(health);
       }
     } catch (error) {
       health.status = "ERROR";
       health.error = error.message;
       res.status(503).json(health);
     }
   });
   ```

2. **Set Appropriate Timeouts**

   - Health check should respond quickly (< 5 seconds)
   - Don't include long-running operations

3. **Use Proper HTTP Status Codes**

   - 200: Everything is healthy
   - 503: Service unavailable (unhealthy but responding)
   - Timeout: Service completely down

4. **Monitor Response Time Trends**
   - Set alerts for response time > 2x normal
   - Gradual degradation often precedes failure
