# MERN Stack API Testing with curl

This document provides curl commands to test all API endpoints.

## Base URL

```bash
# Local Development
API_URL="http://localhost:5000"

# Production (update with your URL)
API_URL="https://your-backend.onrender.com"
```

## Health Checks

### Health Check

```bash
curl -X GET "$API_URL/health"
```

Expected Response:

```json
{
  "uptime": 123.456,
  "message": "OK",
  "timestamp": 1234567890,
  "environment": "production",
  "database": "connected"
}
```

### API Status

```bash
curl -X GET "$API_URL/api/status"
```

Expected Response:

```json
{
  "success": true,
  "message": "API is running",
  "version": "v1",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Task Endpoints

### Get All Tasks

```bash
curl -X GET "$API_URL/api/tasks"
```

### Get Tasks by Status

```bash
# Get pending tasks
curl -X GET "$API_URL/api/tasks?status=pending"

# Get completed tasks
curl -X GET "$API_URL/api/tasks?status=completed"

# Get in-progress tasks
curl -X GET "$API_URL/api/tasks?status=in-progress"
```

### Get Tasks by Priority

```bash
curl -X GET "$API_URL/api/tasks?priority=high"
```

### Get Single Task

```bash
# Replace TASK_ID with actual task ID
curl -X GET "$API_URL/api/tasks/TASK_ID"
```

### Create Task

```bash
curl -X POST "$API_URL/api/tasks" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Complete MERN deployment",
    "description": "Deploy the application to production",
    "status": "pending",
    "priority": "high",
    "dueDate": "2024-12-31"
  }'
```

### Update Task

```bash
# Replace TASK_ID with actual task ID
curl -X PUT "$API_URL/api/tasks/TASK_ID" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated task title",
    "status": "in-progress",
    "priority": "medium"
  }'
```

### Delete Task

```bash
# Replace TASK_ID with actual task ID
curl -X DELETE "$API_URL/api/tasks/TASK_ID"
```

## User Endpoints

### Get All Users

```bash
curl -X GET "$API_URL/api/users"
```

### Get Active Users

```bash
curl -X GET "$API_URL/api/users?isActive=true"
```

### Get Users by Role

```bash
curl -X GET "$API_URL/api/users?role=admin"
```

### Get Single User

```bash
# Replace USER_ID with actual user ID
curl -X GET "$API_URL/api/users/USER_ID"
```

### Create User

```bash
curl -X POST "$API_URL/api/users" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "user"
  }'
```

### Update User

```bash
# Replace USER_ID with actual user ID
curl -X PUT "$API_URL/api/users/USER_ID" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Smith",
    "isActive": true
  }'
```

### Delete User

```bash
# Replace USER_ID with actual user ID
curl -X DELETE "$API_URL/api/users/USER_ID"
```

## Testing Script

Save this as `test-api.sh`:

```bash
#!/bin/bash

# Configuration
API_URL="http://localhost:5000"

echo "🧪 Testing MERN Stack API"
echo "=========================="

# Test Health Check
echo "
📊 Testing Health Check..."
curl -s "$API_URL/health" | jq '.'

# Test API Status
echo "
📊 Testing API Status..."
curl -s "$API_URL/api/status" | jq '.'

# Create a Task
echo "
➕ Creating a new task..."
TASK_RESPONSE=$(curl -s -X POST "$API_URL/api/tasks" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Task",
    "description": "This is a test task",
    "status": "pending",
    "priority": "medium"
  }')
echo $TASK_RESPONSE | jq '.'
TASK_ID=$(echo $TASK_RESPONSE | jq -r '.data._id')

# Get All Tasks
echo "
📋 Getting all tasks..."
curl -s "$API_URL/api/tasks" | jq '.'

# Update Task
echo "
✏️  Updating task..."
curl -s -X PUT "$API_URL/api/tasks/$TASK_ID" \
  -H "Content-Type: application/json" \
  -d '{
    "status": "completed"
  }' | jq '.'

# Delete Task
echo "
🗑️  Deleting task..."
curl -s -X DELETE "$API_URL/api/tasks/$TASK_ID" | jq '.'

echo "
✅ API Testing Complete!"
```

Make it executable:

```bash
chmod +x test-api.sh
./test-api.sh
```

## Error Response Examples

### Validation Error (400)

```json
{
  "success": false,
  "errors": [
    {
      "msg": "Title is required",
      "param": "title",
      "location": "body"
    }
  ]
}
```

### Not Found (404)

```json
{
  "success": false,
  "message": "Task not found"
}
```

### Server Error (500)

```json
{
  "success": false,
  "message": "Error fetching tasks",
  "error": "Database connection failed"
}
```

## Using with Postman

1. Import these curl commands into Postman
2. Create environment variables for `API_URL`
3. Save requests in collections
4. Use Postman Runner for automated testing

## Using with HTTPie

More human-friendly alternative to curl:

```bash
# Install HTTPie
pip install httpie

# Get all tasks
http GET $API_URL/api/tasks

# Create task
http POST $API_URL/api/tasks \
  title="My Task" \
  status="pending" \
  priority="high"
```
