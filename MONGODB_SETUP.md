# MongoDB Atlas Setup Guide

This guide will walk you through setting up MongoDB Atlas for the Bellgam Carpet Cleaning website.

## Why MongoDB?

We've switched from SQLite to MongoDB for production deployment because:
- ✅ Works seamlessly with Vercel's serverless architecture
- ✅ Free tier available (512 MB storage, perfect for this project)
- ✅ Automatic backups and scaling
- ✅ Global distribution for better performance
- ✅ No file system dependency (Vercel has read-only filesystem)

## Step 1: Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Sign up for a free account
3. Choose the **FREE** tier (M0 Sandbox)
4. Select a cloud provider and region closest to your users (e.g., AWS us-east-1 for North America)

## Step 2: Create a Cluster

1. After signing up, click **"Build a Database"**
2. Select **"M0 FREE"** tier
3. Choose your cloud provider: **AWS** (recommended)
4. Select region: **us-east-1** (or closest to your target audience)
5. Cluster Name: `bellgam-cluster` (or leave default)
6. Click **"Create"**

## Step 3: Create Database User

1. You'll see a "Security Quickstart" screen
2. Create a database user:
   - Username: `bellgam-admin` (or your choice)
   - Password: Click "Autogenerate Secure Password" and **SAVE THIS PASSWORD**
   - Or create your own strong password
3. Click **"Create User"**

## Step 4: Add IP Address

1. On the same screen, you'll see "Where would you like to connect from?"
2. Click **"Add My Current IP Address"**
3. Also add `0.0.0.0/0` to allow connections from anywhere (needed for Vercel)
   - Click "Add a Different IP Address"
   - Enter: `0.0.0.0/0`
   - Description: `Allow all (Vercel)`
4. Click **"Finish and Close"**

## Step 5: Get Connection String

1. Click **"Connect"** on your cluster
2. Choose **"Connect your application"**
3. Select:
   - Driver: **Node.js**
   - Version: **5.5 or later**
4. Copy the connection string. It looks like:
   ```
   mongodb+srv://bellgam-admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<password>` with your actual password (the one you saved earlier)
6. Add the database name `bellgam` before the `?`:
   ```
   mongodb+srv://bellgam-admin:YourPassword123@cluster0.xxxxx.mongodb.net/bellgam?retryWrites=true&w=majority
   ```

## Step 6: Update Local Environment

1. Open `.env.local` in your project
2. Replace the `DATABASE_URL` with your connection string:
   ```env
   DATABASE_URL="mongodb+srv://bellgam-admin:YourPassword123@cluster0.xxxxx.mongodb.net/bellgam?retryWrites=true&w=majority"
   ```

## Step 7: Initialize Database

Run these commands to set up your database:

```bash
# Push the schema to MongoDB
npx prisma db push

# Seed the database with initial data
npx prisma db seed
```

## Step 8: Test Locally

```bash
# Start the development server
npm run dev
```

Visit http://localhost:3000 and verify:
- Homepage loads correctly
- Admin login works (admin@bellgam.com / admin123)
- You can create/edit content in the admin dashboard

## Step 9: Deploy to Vercel

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project (bellgam-carpet-cleaning)
3. Go to **Settings** > **Environment Variables**
4. Add your `DATABASE_URL`:
   - Key: `DATABASE_URL`
   - Value: Your MongoDB connection string
   - Environment: Select all (Production, Preview, Development)
5. Click **"Save"**

## Step 10: Redeploy

Two options:

### Option A: Automatic (push to GitHub)
```bash
git add .
git commit -m "Switch to MongoDB for production deployment"
git push origin main
```

### Option B: Manual (Vercel Dashboard)
1. Go to Deployments tab
2. Click the "..." menu on latest deployment
3. Click "Redeploy"

## Step 11: Seed Production Database

After deployment, you need to seed the production database:

```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Login to Vercel
vercel login

# Run seed command on production
vercel env pull .env.production.local
npx prisma db push
npx prisma db seed
```

Alternatively, you can create content manually through the admin dashboard.

## Verify Deployment

1. Visit your Vercel deployment URL
2. Test homepage loads
3. Test admin login: `/admin/login`
4. Create a test service or review in admin

## Troubleshooting

### Error: "MongoServerError: bad auth"
- Double-check your username and password in the connection string
- Make sure you replaced `<password>` with your actual password
- Password should NOT have `<` or `>` brackets

### Error: "Could not connect to MongoDB"
- Verify IP address `0.0.0.0/0` is added in Network Access
- Check your connection string format
- Ensure database name `bellgam` is in the URL

### Error: "PrismaClientInitializationError"
- Run `npx prisma generate` to regenerate the client
- Delete `node_modules` and run `npm install` again

## MongoDB Atlas Dashboard

Useful features:
- **Browse Collections**: View your data in a GUI
- **Metrics**: Monitor database performance
- **Backup**: Automatic backups on paid tiers (free tier: manual export)
- **Alerts**: Set up email alerts for issues

## Cost

- **Free Tier**: 512 MB storage, 100 max connections
- Should be sufficient for this project
- Only upgrade if you exceed limits

## Security Best Practices

1. **Never commit** `.env.local` to git (it's in `.gitignore`)
2. Use strong passwords for database users
3. Rotate credentials periodically
4. Monitor access logs in Atlas dashboard
5. In production, consider restricting IP addresses instead of `0.0.0.0/0`

## Next Steps

Once everything is working:
1. Remove SQLite-related packages if desired: `npm uninstall better-sqlite3`
2. Set up database backups (manual export on free tier)
3. Monitor usage in MongoDB Atlas dashboard
4. Consider upgrading to paid tier if you need more storage/connections

## Need Help?

- MongoDB Atlas Docs: https://docs.atlas.mongodb.com/
- Prisma MongoDB Guide: https://www.prisma.io/docs/concepts/database-connectors/mongodb
- Vercel Environment Variables: https://vercel.com/docs/environment-variables
