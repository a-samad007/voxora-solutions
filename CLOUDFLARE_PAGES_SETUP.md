# 🚀 Cloudflare Pages Deployment Guide

## ✅ You're Already Deploying!

Since you're already using GitHub with Cloudflare Pages automatic deployment, you just need to add the environment variable to your Cloudflare Pages settings.

---

## 🔑 Add Environment Variable to Cloudflare Pages

### Step 1: Go to Cloudflare Dashboard

1. Login to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Workers & Pages**
3. Find your project (likely named `voxora-solutions` or similar)
4. Click on your project

### Step 2: Add Environment Variable

1. Click on **Settings** tab
2. Scroll down to **Environment variables** section
3. Click **Add variable**

### Step 3: Configure the Variable

Add the following:

- **Variable name:** `RESEND_API_KEY`
- **Value:** `re_UMDps6h7_A9spVy5j5hMdxDbfdaQkSzmU`
- **Environment:** Select **Production** (and Preview if you want)

Click **Save**

### Step 4: Redeploy

After adding the environment variable, you need to trigger a new deployment:

**Option A: Push a commit**
```bash
git add .
git commit -m "Add environment variable support"
git push
```

**Option B: Manual redeploy**
1. In Cloudflare Pages dashboard
2. Go to **Deployments** tab
3. Click **"Retry deployment"** on the latest deployment
4. Or click **"Create deployment"** for a new one

---

## 🎯 How It Works

```
GitHub Push
    ↓
Cloudflare Pages Auto-Deploy
    ↓
Build with environment variables
    ↓
Worker deployed with RESEND_API_KEY
    ↓
Contact form works! ✅
```

---

## 🧪 Testing

After deployment:

1. Visit your live site
2. Go to Contact page
3. Fill out the form
4. Submit
5. Check your email at `HELLO@voxorasolution.com`

---

## 📊 Monitor Deployments

### View Deployment Status:
1. Cloudflare Dashboard → Workers & Pages
2. Click your project
3. Go to **Deployments** tab
4. See build logs and status

### View Function Logs:
1. Go to your project in Cloudflare
2. Click **Functions** tab
3. View real-time logs

---

## 🔒 Security Notes

✅ **Environment variable is secure** - Not exposed in code  
✅ **Only accessible server-side** - In your worker  
✅ **Separate for Production/Preview** - Can use different keys  
✅ **Not in Git** - Never committed to repository  

---

## 🐛 Troubleshooting

### Contact form shows "Failed to send message"

1. **Check environment variable is set:**
   - Cloudflare Dashboard → Your Project → Settings → Environment variables
   - Verify `RESEND_API_KEY` is present

2. **Check deployment logs:**
   - Go to Deployments tab
   - Click on latest deployment
   - Check build logs for errors

3. **Verify domain in Resend:**
   - Since you're using `noreply@voxorasolution.com`
   - You need to verify your domain in Resend dashboard
   - Go to: https://resend.com/domains
   - Add `voxorasolution.com` and verify DNS records

### "RESEND_API_KEY is undefined" in logs

- Make sure you added the variable in Cloudflare Pages settings
- Redeploy after adding the variable
- Check spelling: `RESEND_API_KEY` (exact match)

### Custom domain email not working

If using `noreply@voxorasolution.com`:

1. Go to [Resend Dashboard](https://resend.com/domains)
2. Click **Add Domain**
3. Enter: `voxorasolution.com`
4. Add the DNS records shown to your domain
5. Wait for verification (usually a few minutes)
6. Once verified, emails will send from your domain

**Alternative:** Use Resend's default email temporarily:
- In `worker.js` line 40, change to:
  ```javascript
  from: 'Voxora Contact Form <onboarding@resend.dev>',
  ```

---

## 📝 Quick Checklist

- [ ] Environment variable `RESEND_API_KEY` added to Cloudflare Pages
- [ ] Variable set for **Production** environment
- [ ] Redeployed after adding variable
- [ ] Domain verified in Resend (if using custom domain)
- [ ] Contact form tested on live site
- [ ] Email received successfully

---

## 🎯 Current Setup

Your deployment flow:

```
Local Changes
    ↓
Git Commit & Push to GitHub
    ↓
Cloudflare Pages Auto-Deploy
    ↓
Environment Variables Injected
    ↓
Live Site Updated
```

**No GitHub Actions needed!** ✅  
**No manual deployment needed!** ✅  
**Just push and it deploys!** ✅

---

## 📞 Support Resources

- **Cloudflare Pages Docs:** https://developers.cloudflare.com/pages/
- **Environment Variables Guide:** https://developers.cloudflare.com/pages/configuration/build-configuration/
- **Resend Docs:** https://resend.com/docs

---

## 🎉 You're All Set!

Just add the environment variable in Cloudflare Pages settings and your contact form will work perfectly!

**Last Updated:** January 6, 2026
