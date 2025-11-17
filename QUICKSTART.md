# Quick Start Guide

Get your MERN application running locally in 5 minutes!

## Prerequisites Check

Before starting, ensure you have:

- [ ] Node.js 18+ installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] Git installed (`git --version`)
- [ ] MongoDB Atlas account (free tier)

## Step 1: Clone Repository

```bash
git clone <your-repo-url>
cd deployment-and-devops-essentials-RockieRaheem
```

## Step 2: Set Up MongoDB Atlas (5 minutes)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Create a **FREE** cluster (M0)
4. Create database user:
   - Username: `mernuser`
   - Password: Generate and **save it!**
5. Allow access from anywhere:
   - Network Access → Add IP → 0.0.0.0/0
6. Get connection string:
   - Connect → Connect your application
   - Copy the connection string
   - Replace `<password>` with your password

Your connection string should look like:

```
mongodb+srv://mernuser:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/mern-app?retryWrites=true&w=majority
```

## Step 3: Set Up Backend

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env file with your MongoDB connection string
# Use your favorite editor (nano, vim, code, etc.)
nano .env
```

Update `.env` with:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb+srv://mernuser:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/mern-app?retryWrites=true&w=majority
CORS_ORIGIN=http://localhost:3000
```

Start the backend:

```bash
npm run dev
```

You should see:

```
✅ MongoDB Connected Successfully
🚀 Server running in development mode on port 5000
```

## Step 4: Set Up Frontend

Open a **NEW terminal** window:

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# No need to edit - default values work for local development
```

Start the frontend:

```bash
npm start
```

Browser will automatically open at `http://localhost:3000`

## Step 5: Test the Application

1. **Check API Status**
   - Look for "✅ API Connected" in the header
2. **Create a Task**
   - Click "Add Task"
   - Fill in the form
   - Submit
3. **View Tasks**
   - Click "Tasks"
   - See your created task
   - Try filtering by status

## Verify Everything Works

### Backend Health Check

Open in browser or use curl:

```bash
curl http://localhost:5000/health
```

Should return:

```json
{
  "uptime": 123,
  "message": "OK",
  "database": "connected"
}
```

### API Status

```bash
curl http://localhost:5000/api/status
```

### Create Test Task

```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Task",
    "description": "Testing the API",
    "status": "pending",
    "priority": "high"
  }'
```

## Common Issues

### Issue: "Cannot find module"

**Solution:**

```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: "Port 5000 already in use"

**Solution:**

```bash
# On Mac/Linux
lsof -ti:5000 | xargs kill -9

# On Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or change port in backend/.env
PORT=5001
```

### Issue: "MongoDB connection failed"

**Solution:**

- Check your connection string is correct
- Verify password doesn't have special characters (use URL encoding)
- Confirm IP whitelist includes 0.0.0.0/0
- Check internet connection

### Issue: "API Connection Failed" in frontend

**Solution:**

- Verify backend is running on port 5000
- Check `REACT_APP_API_URL` in frontend/.env
- Clear browser cache and reload

## Next Steps

Now that you have it running locally:

1. **Explore the code:**

   - Backend: `backend/server.js`, `backend/routes/`
   - Frontend: `frontend/src/App.js`, `frontend/src/components/`

2. **Make changes:**

   - Modify a component
   - Add a new feature
   - Customize styling

3. **Run tests:**

   ```bash
   # Backend tests
   cd backend
   npm test

   # Frontend tests
   cd frontend
   npm test
   ```

4. **Deploy to production:**
   - Follow [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)

## Development Commands

### Backend

```bash
npm start        # Start production server
npm run dev      # Start with nodemon (auto-reload)
npm test         # Run tests
npm run lint     # Run ESLint
```

### Frontend

```bash
npm start        # Start development server
npm test         # Run tests
npm run build    # Build for production
npm run lint     # Run ESLint
```

## Project Structure Overview

```
├── backend/              # Node.js + Express API
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── tests/           # Tests
│   └── server.js        # Main server file
├── frontend/            # React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── services/    # API service
│   │   └── App.js       # Main component
│   └── public/          # Static files
└── deployment/          # Deployment configs
```

## Getting Help

- Check [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md) for deployment help
- See [API-TESTING.md](API-TESTING.md) for API documentation
- Open an issue on GitHub
- Review error messages in terminal

---

**🎉 Congratulations!** You now have a fully functional MERN stack application running locally!

Ready to deploy? Follow the [Complete Deployment Guide](DEPLOYMENT-GUIDE.md)
