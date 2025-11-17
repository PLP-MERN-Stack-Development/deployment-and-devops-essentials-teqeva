# MongoDB Atlas Setup Guide

## 1. Create MongoDB Atlas Account

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for a free account
3. Create a new cluster (Free tier M0 is sufficient for development)

## 2. Configure Database Access

1. Go to Database Access
2. Add a new database user
3. Set username and password (save these securely)
4. Set privileges to "Atlas Admin" or "Read and write to any database"

## 3. Configure Network Access

1. Go to Network Access
2. Add IP Address
3. For development: Allow access from anywhere (0.0.0.0/0)
4. For production: Add specific IP addresses of your deployment platforms

## 4. Get Connection String

1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string
4. Replace <username>, <password>, and <dbname> with your values

Example:

```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/mern-app?retryWrites=true&w=majority
```

## 5. Test Connection

Use the connection string in your .env file:

```
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/mern-app?retryWrites=true&w=majority
```

## 6. Production Best Practices

- Use strong passwords
- Enable IP whitelist in production
- Set up database backups
- Monitor database performance
- Use environment-specific databases (dev, staging, prod)
