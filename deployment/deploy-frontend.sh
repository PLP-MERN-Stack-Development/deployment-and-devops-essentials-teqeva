#!/bin/bash

# Frontend Deployment Script for Vercel/Netlify

echo "🚀 Starting Frontend Deployment..."

# Check if API URL is set
if [ -z "$REACT_APP_API_URL" ]; then
    echo "⚠️  Warning: REACT_APP_API_URL is not set"
fi

# Install dependencies
echo "📦 Installing dependencies..."
cd frontend
npm ci

# Run tests
echo "🧪 Running tests..."
npm test -- --watchAll=false --passWithNoTests

# Build the application
echo "🏗️  Building application..."
npm run build

# Check if build was successful
if [ -d "build" ]; then
    echo "✅ Frontend build successful!"
    echo "📦 Build artifacts ready for deployment"
else
    echo "❌ Build failed!"
    exit 1
fi
