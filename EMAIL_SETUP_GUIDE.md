# 🚀 Cloudflare Worker Email Setup Guide

## Overview
Your contact form now uses **Cloudflare Workers** with **Resend API** to send emails. This approach requires NO new account creation - you'll use your existing Cloudflare account!

---

## ✅ What's Already Done

1. ✅ **Worker API Endpoint** - `/api/contact` endpoint created
2. ✅ **Email Sending Logic** - Integrated with Resend API
3. ✅ **Contact Form Updated** - Now sends to your worker
4. ✅ **CORS Handling** - Configured for cross-origin requests
5. ✅ **Error Handling** - Proper validation and error messages

---

## 🔧 Setup Steps

### Step 1: Get a FREE Resend API Key

Resend offers a **free tier** with 100 emails/day (3,000/month) - perfect for contact forms!

1. Go to [https://resend.com/](https://resend.com/)
2. Click **"Start Building"** or **"Sign Up"**
3. Sign up with your email (takes 30 seconds)
4. After login, go to **API Keys** section
5. Click **"Create API Key"**
6. Give it a name like "Voxora Contact Form"
7. **Copy the API key** (starts with `re_...`)

> **Note:** You only see the API key once, so save it immediately!

---

### Step 2: Configure Your Domain Email (Optional but Recommended)

By default, emails will come from `onboarding@resend.dev`. To use your own domain:

1. In Resend dashboard, go to **"Domains"**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `voxorasolution.com`)
4. Add the DNS records they provide to your domain
5. Wait for verification (usually a few minutes)
6. Update `worker.js` line 40 to use your domain:
   ```javascript
   from: 'Voxora Contact Form <noreply@voxorasolution.com>',
   ```

---

### Step 3: Add API Key to Wrangler Configuration

Open `wrangler.json` and add your Resend API key:

```json
{
  "name": "my-react-worker",
  "compatibility_date": "2025-12-08",
  "main": "worker.js",
  "assets": {
    "directory": "./dist"
  },
  "vars": {
    "RESEND_API_KEY": "re_your_actual_api_key_here"
  }
}
```

**⚠️ IMPORTANT:** For production, use Cloudflare secrets instead:
```bash
npx wrangler secret put RESEND_API_KEY
```
Then remove the key from `wrangler.json`.

---

### Step 4: Install Wrangler CLI (if not already installed)

```bash
npm install -g wrangler
```

Or use with npx:
```bash
npx wrangler --version
```

---

### Step 5: Login to Cloudflare

```bash
npx wrangler login
```

This will open a browser window to authenticate with your Cloudflare account.

---

### Step 6: Deploy Your Worker

```bash
# First, build your React app
npm run build

# Then deploy to Cloudflare
npx wrangler deploy
```

Your worker will be deployed and you'll get a URL like:
`https://my-react-worker.your-username.workers.dev`

---

## 🧪 Testing Locally

To test the worker locally before deploying:

```bash
# Build your app
npm run build

# Start local worker
npx wrangler dev
```

Then test your contact form at the local URL provided.

---

## 📧 How It Works

1. **User fills form** → Clicks "Send Message"
2. **Frontend sends POST** → `/api/contact` endpoint
3. **Worker receives data** → Validates form fields
4. **Worker calls Resend API** → Sends email
5. **Email delivered** → To `HELLO@voxorasolution.com`
6. **User sees success** → Confirmation message

---

## 🔒 Security Features

- ✅ **Server-side validation** - Form data validated in worker
- ✅ **API key hidden** - Never exposed to frontend
- ✅ **CORS configured** - Only your domain can call the API
- ✅ **Rate limiting** - Cloudflare's built-in protection
- ✅ **Spam protection** - Resend's anti-spam measures

---

## 💰 Pricing

### Resend (Email Service)
- **Free Tier:** 3,000 emails/month, 100/day
- **Paid:** $20/month for 50,000 emails

### Cloudflare Workers
- **Free Tier:** 100,000 requests/day
- **Paid:** $5/month for 10 million requests

**For a contact form, you'll likely stay in the free tier!**

---

## 🐛 Troubleshooting

### "Failed to send message" error?

1. **Check API key:**
   - Make sure it's correctly added to `wrangler.json`
   - Verify it starts with `re_`

2. **Check deployment:**
   ```bash
   npx wrangler tail
   ```
   This shows live logs from your worker

3. **Check Resend dashboard:**
   - Go to Resend → Logs
   - See if emails are being sent

### Emails not arriving?

1. **Check spam folder**
2. **Verify email address** in worker.js (line 41)
3. **Check Resend logs** for delivery status
4. **Verify domain** if using custom domain

### Local testing not working?

1. Make sure you've built the app: `npm run build`
2. Check that `dist` folder exists
3. Try: `npx wrangler dev --local`

---

## 🔄 Updating After Changes

Whenever you update your code:

```bash
# 1. Build React app
npm run build

# 2. Deploy worker
npx wrangler deploy
```

---

## 📊 Monitoring

### View Email Logs
- Resend Dashboard → Logs
- See all sent emails, delivery status, opens, clicks

### View Worker Logs
```bash
npx wrangler tail
```

### View Analytics
- Cloudflare Dashboard → Workers & Pages → Your Worker → Analytics

---

## 🎯 Next Steps

1. ✅ Get Resend API key
2. ✅ Add it to `wrangler.json`
3. ✅ Test locally with `npx wrangler dev`
4. ✅ Deploy with `npx wrangler deploy`
5. ✅ Test the live form
6. ✅ (Optional) Add custom domain to Resend

---

## 📞 Support Resources

- **Resend Docs:** https://resend.com/docs
- **Cloudflare Workers Docs:** https://developers.cloudflare.com/workers/
- **Wrangler CLI Docs:** https://developers.cloudflare.com/workers/wrangler/

---

**Last Updated:** January 6, 2026

**No new accounts needed - just use your existing Cloudflare account! 🎉**
