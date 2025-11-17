#!/bin/bash

# Backend Deployment Script for Render

echo "🚀 Starting Backend Deployment..."

# Check if required environment variables are set
if [ -z "$MONGODB_URI" ]; then
    echo "❌ Error: MONGODB_URI is not set"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
cd backend
npm ci --production

# Run database migrations (if any)
echo "🔄 Running database migrations..."
# Add your migration commands here if needed

# Start the server (Render will use the start command from package.json)
echo "✅ Backend deployment preparation complete!"
echo "🌐 Server will start with: npm start"
