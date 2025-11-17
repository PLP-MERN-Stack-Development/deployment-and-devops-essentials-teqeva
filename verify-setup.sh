#!/bin/bash

# MERN Stack Setup Verification Script
# This script checks if everything is set up correctly

echo "🔍 MERN Stack Setup Verification"
echo "================================="
echo ""

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check functions
check_command() {
    if command -v $1 &> /dev/null; then
        echo -e "${GREEN}✓${NC} $1 is installed: $(command -v $1)"
        return 0
    else
        echo -e "${RED}✗${NC} $1 is NOT installed"
        return 1
    fi
}

check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1 exists"
        return 0
    else
        echo -e "${RED}✗${NC} $1 is missing"
        return 1
    fi
}

check_directory() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} $1 exists"
        return 0
    else
        echo -e "${RED}✗${NC} $1 is missing"
        return 1
    fi
}

# Prerequisites Check
echo "📋 Checking Prerequisites..."
echo ""

check_command node
check_command npm
check_command git
echo ""

# Node.js version check
NODE_VERSION=$(node -v)
echo "Node.js version: $NODE_VERSION"
if [[ "$NODE_VERSION" =~ ^v(1[8-9]|[2-9][0-9]) ]]; then
    echo -e "${GREEN}✓${NC} Node.js version is 18 or higher"
else
    echo -e "${YELLOW}⚠${NC} Node.js version should be 18 or higher"
fi
echo ""

# Project Structure Check
echo "📁 Checking Project Structure..."
echo ""

check_directory "backend"
check_directory "frontend"
check_directory ".github/workflows"
check_directory "deployment"
check_directory "monitoring"
echo ""

# Backend Files Check
echo "🖥️  Checking Backend Files..."
echo ""

check_file "backend/package.json"
check_file "backend/server.js"
check_file "backend/.env.example"
check_directory "backend/models"
check_directory "backend/routes"
check_file "backend/models/Task.js"
check_file "backend/models/User.js"
check_file "backend/routes/tasks.js"
check_file "backend/routes/users.js"
echo ""

# Frontend Files Check
echo "⚛️  Checking Frontend Files..."
echo ""

check_file "frontend/package.json"
check_file "frontend/.env.example"
check_file "frontend/src/App.js"
check_file "frontend/src/index.js"
check_directory "frontend/src/components"
check_file "frontend/src/components/TaskList.js"
check_file "frontend/src/components/TaskForm.js"
check_file "frontend/src/services/api.js"
echo ""

# CI/CD Files Check
echo "🔄 Checking CI/CD Files..."
echo ""

check_file ".github/workflows/backend-ci.yml"
check_file ".github/workflows/frontend-ci.yml"
check_file ".github/workflows/backend-cd.yml"
check_file ".github/workflows/frontend-cd.yml"
echo ""

# Documentation Check
echo "📚 Checking Documentation..."
echo ""

check_file "README.md"
check_file "QUICKSTART.md"
check_file "CONTRIBUTING.md"
check_file "LICENSE"
check_file "deployment/DEPLOYMENT-GUIDE.md"
check_file "monitoring/monitoring-setup.md"
echo ""

# Environment Files Check
echo "🔐 Checking Environment Configuration..."
echo ""

if [ -f "backend/.env" ]; then
    echo -e "${GREEN}✓${NC} backend/.env exists (good for local dev)"
    echo -e "${YELLOW}⚠${NC} Remember: Never commit .env to Git!"
else
    echo -e "${YELLOW}⚠${NC} backend/.env not found"
    echo "   Copy backend/.env.example to backend/.env for local development"
fi

if [ -f "frontend/.env" ]; then
    echo -e "${GREEN}✓${NC} frontend/.env exists (good for local dev)"
    echo -e "${YELLOW}⚠${NC} Remember: Never commit .env to Git!"
else
    echo -e "${YELLOW}⚠${NC} frontend/.env not found"
    echo "   Copy frontend/.env.example to frontend/.env for local development"
fi
echo ""

# Dependencies Check
echo "📦 Checking Dependencies..."
echo ""

if [ -d "backend/node_modules" ]; then
    echo -e "${GREEN}✓${NC} Backend dependencies installed"
else
    echo -e "${YELLOW}⚠${NC} Backend dependencies not installed"
    echo "   Run: cd backend && npm install"
fi

if [ -d "frontend/node_modules" ]; then
    echo -e "${GREEN}✓${NC} Frontend dependencies installed"
else
    echo -e "${YELLOW}⚠${NC} Frontend dependencies not installed"
    echo "   Run: cd frontend && npm install"
fi
echo ""

# Git Status Check
echo "🔍 Checking Git Status..."
echo ""

if [ -d ".git" ]; then
    echo -e "${GREEN}✓${NC} Git repository initialized"
    
    # Check if there are uncommitted changes
    if [[ -n $(git status -s) ]]; then
        echo -e "${YELLOW}⚠${NC} You have uncommitted changes:"
        git status -s
    else
        echo -e "${GREEN}✓${NC} No uncommitted changes"
    fi
    
    # Check remote
    if git remote -v | grep -q origin; then
        echo -e "${GREEN}✓${NC} Git remote configured"
        git remote -v | head -2
    else
        echo -e "${YELLOW}⚠${NC} No Git remote configured"
    fi
else
    echo -e "${RED}✗${NC} Not a Git repository"
fi
echo ""

# Summary
echo "📊 Summary"
echo "=========="
echo ""

# Count checks
TOTAL_CHECKS=0
PASSED_CHECKS=0

# You can enhance this with actual counting logic
echo "Review the checks above to ensure everything is set up correctly."
echo ""

# Next Steps
echo "🚀 Next Steps:"
echo ""
echo "1. If dependencies are not installed:"
echo "   cd backend && npm install"
echo "   cd frontend && npm install"
echo ""
echo "2. Set up environment files:"
echo "   cp backend/.env.example backend/.env"
echo "   cp frontend/.env.example frontend/.env"
echo "   (Then edit them with your MongoDB URI, etc.)"
echo ""
echo "3. Start local development:"
echo "   Terminal 1: cd backend && npm run dev"
echo "   Terminal 2: cd frontend && npm start"
echo ""
echo "4. For deployment, follow:"
echo "   deployment/DEPLOYMENT-GUIDE.md"
echo ""
echo "📖 For detailed instructions, see:"
echo "   - QUICKSTART.md (local development)"
echo "   - deployment/DEPLOYMENT-GUIDE.md (production deployment)"
echo "   - ASSIGNMENT-CHECKLIST.md (submission checklist)"
echo ""

echo "✨ Setup verification complete!"
