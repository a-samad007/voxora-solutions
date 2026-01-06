# 🔐 GitHub Secrets & Cloudflare Deployment Setup

## ✅ What's Already Done

1. ✅ **GitHub Actions Workflow** - Created `.github/workflows/deploy.yml`
2. ✅ **Removed API Key from Code** - No hardcoded secrets
3. ✅ **Updated wrangler.json** - Clean configuration

---

## 🔑 Required GitHub Secrets

You need to add **2 secrets** to your GitHub repository:

### 1. `Resend_Api_Key` ✅ (You already have this!)
- Your Resend API key
- **Status:** Already set in GitHub secrets

### 2. `CLOUDFLARE_API_TOKEN` ⏳ (Need to add this)
- Your Cloudflare API token for deployments
- **Status:** Need to create

---

## 📋 Step-by-Step Setup

### Step 1: Get Cloudflare API Token

1. **Login to Cloudflare Dashboard**
   - Go to: https://dash.cloudflare.com/

2. **Navigate to API Tokens**
   - Click on your profile (top right)
   - Select **"My Profile"**
   - Go to **"API Tokens"** tab
   - Click **"Create Token"**

3. **Use Template or Custom**
   - **Option A (Recommended):** Use "Edit Cloudflare Workers" template
   - **Option B:** Create custom token with these permissions:
     - Account → Workers Scripts → Edit
     - Account → Workers KV Storage → Edit (if using KV)
     - Zone → Workers Routes → Edit

4. **Copy the Token**
   - Click **"Create Token"**
   - **COPY THE TOKEN IMMEDIATELY** (you won't see it again!)
   - It looks like: `abc123def456...`

### Step 2: Add Token to GitHub Secrets

1. **Go to Your GitHub Repository**
   - Navigate to: `https://github.com/YOUR_USERNAME/voxora-solutions`

2. **Open Settings**
   - Click **"Settings"** tab
   - Click **"Secrets and variables"** → **"Actions"**

3. **Add New Secret**
   - Click **"New repository secret"**
   - **Name:** `CLOUDFLARE_API_TOKEN`
   - **Value:** Paste your Cloudflare API token
   - Click **"Add secret"**

### Step 3: Verify Your Secrets

You should now have **2 secrets** in GitHub:
- ✅ `Resend_Api_Key` (already there)
- ✅ `CLOUDFLARE_API_TOKEN` (just added)

---

## 🚀 How Deployment Works

### Automatic Deployment (Recommended)

Every time you push to the `main` branch:

1. GitHub Actions triggers automatically
2. Builds your React app
3. Deploys to Cloudflare Workers
4. Uses your GitHub secrets for API keys

```bash
# Just commit and push!
git add .
git commit -m "Update website"
git push origin main
```

### Manual Deployment

You can also trigger deployment manually:

1. Go to GitHub → **Actions** tab
2. Select **"Deploy to Cloudflare Workers"** workflow
3. Click **"Run workflow"**
4. Select branch and click **"Run workflow"**

---

## 🧪 Local Development

For local testing, you need to set the API key as an environment variable:

### Windows (PowerShell):
```powershell
$env:RESEND_API_KEY="re_your_key_here"
npm run build
npx wrangler dev
```

### Windows (Command Prompt):
```cmd
set RESEND_API_KEY=re_your_key_here
npm run build
npx wrangler dev
```

### Mac/Linux:
```bash
export RESEND_API_KEY="re_your_key_here"
npm run build
npx wrangler dev
```

**Or create a `.dev.vars` file** (gitignored):
```
RESEND_API_KEY=re_your_actual_key_here
```

Then just run:
```bash
npm run build
npx wrangler dev
```

---

## 🔒 Security Best Practices

### ✅ What We Did Right:
- ✅ Removed API key from `wrangler.json`
- ✅ Using GitHub Secrets for CI/CD
- ✅ API keys never committed to repository
- ✅ Using environment variables

### ⚠️ Important Notes:
- **NEVER** commit API keys to Git
- **NEVER** share your Cloudflare API token
- **NEVER** expose secrets in logs
- **ALWAYS** use secrets for production

---

## 📊 Deployment Status

After pushing to GitHub, you can monitor deployment:

1. **Go to GitHub → Actions tab**
2. **Click on the latest workflow run**
3. **Watch the deployment progress**
4. **Check for any errors**

### Successful Deployment Shows:
- ✅ Checkout code
- ✅ Setup Node.js
- ✅ Install dependencies
- ✅ Build application
- ✅ Deploy to Cloudflare Workers

---

## 🐛 Troubleshooting

### Deployment Fails with "Authentication Error"
- Check that `CLOUDFLARE_API_TOKEN` is set correctly
- Verify token has correct permissions
- Token might have expired - create a new one

### Deployment Fails with "Build Error"
- Check the build logs in GitHub Actions
- Try building locally: `npm run build`
- Check for TypeScript errors

### Emails Not Sending After Deployment
- Verify `Resend_Api_Key` is set in GitHub secrets
- Check Cloudflare Workers logs
- Verify domain is set up in Resend (for custom domain emails)

### "RESEND_API_KEY is undefined" Error
- Make sure the secret name in GitHub is exactly: `Resend_Api_Key`
- Check the workflow file references it correctly
- Redeploy the workflow

---

## 🔄 Updating Secrets

### To Update Resend API Key:
1. GitHub → Settings → Secrets and variables → Actions
2. Click on `Resend_Api_Key`
3. Click **"Update secret"**
4. Enter new value
5. Save

### To Update Cloudflare Token:
1. GitHub → Settings → Secrets and variables → Actions
2. Click on `CLOUDFLARE_API_TOKEN`
3. Click **"Update secret"**
4. Enter new value
5. Save

---

## 📝 Quick Checklist

Before your first deployment:

- [ ] Resend API key added to GitHub secrets as `Resend_Api_Key` ✅ (Done)
- [ ] Cloudflare API token created
- [ ] Cloudflare API token added to GitHub secrets as `CLOUDFLARE_API_TOKEN`
- [ ] Custom domain verified in Resend (if using custom email)
- [ ] Code pushed to `main` branch
- [ ] GitHub Actions workflow triggered
- [ ] Deployment successful
- [ ] Contact form tested on live site

---

## 🎯 Next Steps

1. **Create Cloudflare API Token** (see Step 1 above)
2. **Add to GitHub Secrets** (see Step 2 above)
3. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Setup GitHub Actions deployment"
   git push origin main
   ```
4. **Watch deployment** in GitHub Actions tab
5. **Test your live contact form!**

---

## 📞 Support Resources

- **GitHub Actions Docs:** https://docs.github.com/en/actions
- **Cloudflare Workers Docs:** https://developers.cloudflare.com/workers/
- **Wrangler Action:** https://github.com/cloudflare/wrangler-action

---

**Last Updated:** January 6, 2026

**Your Resend API key is already set! Just add the Cloudflare token and you're ready to deploy! 🚀**
