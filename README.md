# 🚀 MERN Stack Deployment and DevOps

[![CI/CD Status](https://img.shields.io/badge/CI%2FCD-Passing-brightgreen)]()
[![Backend](https://img.shields.io/badge/Backend-Deployed-blue)]()
[![Frontend](https://img.shields.io/badge/Frontend-Deployed-blue)]()
[![MongoDB](https://img.shields.io/badge/Database-MongoDB%20Atlas-green)]()

A production-ready MERN (MongoDB, Express.js, React, Node.js) stack application with complete CI/CD pipeline, monitoring, and deployment automation.

## 📋 Table of Contents

- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Deployment](#-deployment)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Monitoring](#-monitoring)
- [API Documentation](#-api-documentation)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)

## 🌐 Live Demo

- **Frontend Application:** [https://your-app.vercel.app](https://your-app.vercel.app)
- **Backend API:** [https://your-backend.onrender.com](https://your-backend.onrender.com)
- **API Health Check:** [https://your-backend.onrender.com/health](https://your-backend.onrender.com/health)
- **Status Page:** [https://status.your-app.com](https://status.your-app.com) _(if configured)_

> 📝 **Note:** Replace the URLs above with your actual deployment URLs after deployment.

## ✨ Features

### Application Features

- ✅ Task management system (Create, Read, Update, Delete)
- ✅ User management with role-based access
- ✅ Real-time API status monitoring
- ✅ Responsive design for mobile and desktop
- ✅ Form validation and error handling
- ✅ Filter and sort tasks by status and priority

### DevOps Features

- 🚀 Automated CI/CD with GitHub Actions
- 🔒 Production-ready security (Helmet, CORS, Rate Limiting)
- 📊 Comprehensive monitoring and health checks
- 🔄 Automated testing on every commit
- 📦 Optimized build and deployment process
- 🐛 Error tracking and logging
- ⚡ Performance optimization (Compression, Caching)
- 🔐 Environment-based configuration

## 🛠 Tech Stack

### Frontend

- **Framework:** React 18
- **Routing:** React Router v6
- **HTTP Client:** Axios
- **Styling:** CSS3 (Custom)
- **Build Tool:** Create React App
- **Deployment:** Vercel

### Backend

- **Runtime:** Node.js 20
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Security:** Helmet, CORS, Express Rate Limit
- **Validation:** Express Validator
- **Logging:** Morgan
- **Deployment:** Render

### DevOps & CI/CD

- **Version Control:** Git & GitHub
- **CI/CD:** GitHub Actions
- **Monitoring:** UptimeRobot, Sentry (optional)
- **Testing:** Jest, Supertest, React Testing Library
- **Linting:** ESLint

## 📁 Project Structure

````
deployment-and-devops-essentials/
├── backend/                    # Express.js backend application
│   ├── models/                 # MongoDB models
│   │   ├── Task.js
│   │   └── User.js
│   ├── routes/                 # API routes
│   │   ├── tasks.js
│   │   └── users.js
│   ├── tests/                  # Backend tests
│   │   └── server.test.js
│   ├── server.js               # Main server file
│   ├── package.json
│   ├── .env.example            # Environment variables template
│   ├── .eslintrc.js
│   ├── jest.config.js
│   └── Procfile                # Heroku deployment config
├── frontend/                   # React frontend application
│   ├── public/                 # Static files
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── TaskList.js
│   │   │   ├── TaskForm.js
│   │   │   └── UserList.js
│   │   ├── services/           # API services
│   │   │   └── api.js
│   │   ├── App.js              # Main App component
│   │   ├── App.css
│   │   ├── index.js
│   │   └── App.test.js
│   ├── package.json
│   └── .env.example            # Environment variables template
├── .github/
│   └── workflows/              # GitHub Actions CI/CD workflows
│       ├── backend-ci.yml      # Backend continuous integration
│       ├── frontend-ci.yml     # Frontend continuous integration
│       ├── backend-cd.yml      # Backend continuous deployment
│       ├── frontend-cd.yml     # Frontend continuous deployment
│       └── full-stack-ci-cd.yml # Full stack workflow
├── deployment/                 # Deployment configurations
│   ├── DEPLOYMENT-GUIDE.md     # Complete deployment guide
│   ├── github-secrets-guide.md # GitHub secrets configuration
│   ├── mongodb-atlas-setup.md  # MongoDB setup instructions
│   ├── render-backend.md       # Render deployment config
│   ├── railway-backend.md      # Railway deployment config
│   ├── deploy-backend.sh       # Backend deployment script
│   └── deploy-frontend.sh      # Frontend deployment script
├── monitoring/                 # Monitoring configurations
│   ├── monitoring-setup.md     # Monitoring setup guide
│   ├── maintenance-plan.md     # Maintenance procedures
│   └── uptime-monitoring-config.md # Uptime monitoring config
├── vercel.json                 # Vercel configuration
├── netlify.toml                # Netlify configuration
├── README.md                   # This file
└── Week7-Assignment.md         # Assignment instructions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- MongoDB Atlas account
- Git

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
````

2. **Set up Backend**

   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your MongoDB connection string
   npm run dev
   ```

3. **Set up Frontend** (in a new terminal)

   ```bash
   cd frontend
   npm install
   cp .env.example .env
   # Edit .env with your backend API URL
   npm start
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Health Check: http://localhost:5000/health

### Environment Variables

#### Backend (.env)

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
CORS_ORIGIN=http://localhost:3000
```

#### Frontend (.env)

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

## 🌍 Deployment

For detailed deployment instructions, see [deployment/DEPLOYMENT-GUIDE.md](deployment/DEPLOYMENT-GUIDE.md)

### Quick Deployment Steps

1. **Set up MongoDB Atlas** (see [MongoDB Setup Guide](deployment/mongodb-atlas-setup.md))
2. **Deploy Backend to Render** (see [Render Guide](deployment/render-backend.md))
3. **Deploy Frontend to Vercel** (see deployment guide)
4. **Configure GitHub Secrets** (see [GitHub Secrets Guide](deployment/github-secrets-guide.md))
5. **Set up Monitoring** (see [Monitoring Setup](monitoring/monitoring-setup.md))

### Deployment Platforms

| Component | Platform      | Status                                                                | URL                                       |
| --------- | ------------- | --------------------------------------------------------------------- | ----------------------------------------- |
| Backend   | Render        | [![Backend](https://img.shields.io/badge/status-deployed-success)]()  | [Link](https://your-backend.onrender.com) |
| Frontend  | Vercel        | [![Frontend](https://img.shields.io/badge/status-deployed-success)]() | [Link](https://your-app.vercel.app)       |
| Database  | MongoDB Atlas | [![Database](https://img.shields.io/badge/status-active-success)]()   | Managed                                   |

## 🔄 CI/CD Pipeline

### Workflows

Our CI/CD pipeline is automated using GitHub Actions:

#### 1. Backend CI (`backend-ci.yml`)

- Triggers on push/PR to `main` or `develop` branches
- Runs on Node.js 18.x and 20.x
- Steps:
  - Install dependencies
  - Run ESLint
  - Run tests with coverage
  - Upload coverage reports

#### 2. Frontend CI (`frontend-ci.yml`)

- Triggers on push/PR to `main` or `develop` branches
- Runs on Node.js 18.x and 20.x
- Steps:
  - Install dependencies
  - Run ESLint
  - Run tests with coverage
  - Build production bundle
  - Upload build artifacts

#### 3. Backend CD (`backend-cd.yml`)

- Triggers on push to `main` branch
- Deploys to Render automatically
- Runs health checks post-deployment

#### 4. Frontend CD (`frontend-cd.yml`)

- Triggers on push to `main` branch
- Deploys to Vercel automatically
- Verifies deployment success

### Workflow Status

| Workflow    | Status                                                                                                     | Last Run |
| ----------- | ---------------------------------------------------------------------------------------------------------- | -------- |
| Backend CI  | [![Backend CI](https://github.com/your-username/your-repo/actions/workflows/backend-ci.yml/badge.svg)]()   | -        |
| Frontend CI | [![Frontend CI](https://github.com/your-username/your-repo/actions/workflows/frontend-ci.yml/badge.svg)]() | -        |
| Backend CD  | [![Backend CD](https://github.com/your-username/your-repo/actions/workflows/backend-cd.yml/badge.svg)]()   | -        |
| Frontend CD | [![Frontend CD](https://github.com/your-username/your-repo/actions/workflows/frontend-cd.yml/badge.svg)]() | -        |

## 📊 Monitoring

### Health Checks

- **Backend Health:** `GET /health`

  ```json
  {
    "uptime": 12345,
    "message": "OK",
    "timestamp": 1234567890,
    "environment": "production",
    "database": "connected"
  }
  ```

- **API Status:** `GET /api/status`
  ```json
  {
    "success": true,
    "message": "API is running",
    "version": "v1",
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
  ```

### Monitoring Services

- **Uptime Monitoring:** UptimeRobot
- **Error Tracking:** Sentry (optional)
- **Performance:** Render/Vercel built-in analytics
- **Logs:** Platform-specific logging

For detailed monitoring setup, see [monitoring/monitoring-setup.md](monitoring/monitoring-setup.md)

## 📖 API Documentation

### Base URL

```
Production: https://your-backend.onrender.com/api
Development: http://localhost:5000/api
```

### Endpoints

#### Tasks

| Method | Endpoint     | Description     |
| ------ | ------------ | --------------- |
| GET    | `/tasks`     | Get all tasks   |
| GET    | `/tasks/:id` | Get single task |
| POST   | `/tasks`     | Create new task |
| PUT    | `/tasks/:id` | Update task     |
| DELETE | `/tasks/:id` | Delete task     |

#### Users

| Method | Endpoint     | Description     |
| ------ | ------------ | --------------- |
| GET    | `/users`     | Get all users   |
| GET    | `/users/:id` | Get single user |
| POST   | `/users`     | Create new user |
| PUT    | `/users/:id` | Update user     |
| DELETE | `/users/:id` | Delete user     |

### Example Request

```bash
# Create a new task
curl -X POST https://your-backend.onrender.com/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Complete deployment",
    "description": "Deploy MERN app to production",
    "status": "pending",
    "priority": "high"
  }'
```

## 📸 Screenshots

### CI/CD Pipeline in Action

> Add screenshot of GitHub Actions workflows running

### Deployed Application

> Add screenshot of your deployed frontend

### Monitoring Dashboard

> Add screenshot of UptimeRobot or monitoring dashboard

### Health Check Response

> Add screenshot of /health endpoint response

**To add screenshots:**

1. Create a `screenshots/` folder in your repository
2. Add images with descriptive names
3. Update the README with image links:
   ```markdown
   ![CI/CD Pipeline](screenshots/github-actions.png)
   ![Application](screenshots/app-screenshot.png)
   ![Monitoring](screenshots/monitoring-dashboard.png)
   ```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👥 Authors

- **Bravin Musali** - [GitHub Profile](https://github.com/bravin613)

## 🙏 Acknowledgments

- PLP MERN Stack Development Program
- GitHub Classroom
- MongoDB Atlas
- Render
- Vercel

## 📚 Additional Resources

- [Deployment Guide](deployment/DEPLOYMENT-GUIDE.md) - Complete step-by-step deployment
- [Monitoring Setup](monitoring/monitoring-setup.md) - Configure monitoring and alerts
- [Maintenance Plan](monitoring/maintenance-plan.md) - Operations and maintenance
- [GitHub Secrets Guide](deployment/github-secrets-guide.md) - Configure CI/CD secrets

## 🆘 Troubleshooting

### Common Issues

**Issue: API Connection Failed**

- Check if backend is running
- Verify `REACT_APP_API_URL` is correct
- Check CORS configuration

**Issue: Database Connection Error**

- Verify MongoDB connection string
- Check IP whitelist in MongoDB Atlas
- Confirm database user credentials

**Issue: Deployment Failed**

- Check GitHub Actions logs
- Verify all secrets are configured
- Review deployment platform logs

For more troubleshooting, see the [Deployment Guide](deployment/DEPLOYMENT-GUIDE.md#common-issues-and-solutions)

---

## 📞 Support

If you have any questions or need help with deployment:

- Open an issue in this repository
- Check the documentation in the `deployment/` folder
- Review the troubleshooting section above

---

**Built with ❤️ as part of PLP MERN Stack Development Program**

## CI/CD Pipeline

The assignment includes templates for setting up GitHub Actions workflows:

- `frontend-ci.yml`: Tests and builds the React application
- `backend-ci.yml`: Tests the Express.js backend
- `frontend-cd.yml`: Deploys the frontend to your chosen platform
- `backend-cd.yml`: Deploys the backend to your chosen platform


## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Render Documentation](https://render.com/docs)
- [Railway Documentation](https://docs.railway.app/)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
