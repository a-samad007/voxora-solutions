# 📋 Deployment Checklist

## Pre-Deployment

- [ ] **Get Resend API Key**
  - Go to https://resend.com/
  - Sign up (free account)
  - Create API key
  - Copy the key (starts with `re_`)

- [ ] **Update wrangler.json**
  - Open `wrangler.json`
  - Replace `YOUR_RESEND_API_KEY_HERE` with your actual key
  - Save the file

- [ ] **Install Wrangler CLI** (if not installed)
  ```bash
  npm install -g wrangler
  ```
  OR use with npx:
  ```bash
  npx wrangler --version
  ```

---

## Local Testing

- [ ] **Build the React app**
  ```bash
  npm run build
  ```

- [ ] **Start local worker**
  ```bash
  npx wrangler dev
  ```

- [ ] **Test the contact form**
  - Open the local URL (usually http://localhost:8787)
  - Navigate to Contact page
  - Fill out the form
  - Submit and check if email arrives

---

## Deployment

- [ ] **Login to Cloudflare**
  ```bash
  npx wrangler login
  ```
  - Browser window will open
  - Authorize Wrangler

- [ ] **Deploy the worker**
  ```bash
  npx wrangler deploy
  ```

- [ ] **Note your worker URL**
  - Copy the URL from deployment output
  - Example: `https://my-react-worker.username.workers.dev`

---

## Post-Deployment

- [ ] **Test live form**
  - Visit your worker URL
  - Navigate to Contact page
  - Submit a test message
  - Check email inbox

- [ ] **Verify in Resend Dashboard**
  - Go to Resend → Logs
  - Check if email was sent successfully

- [ ] **Set up Cloudflare secret** (for production security)
  ```bash
  npx wrangler secret put RESEND_API_KEY
  ```
  - Enter your API key when prompted
  - Remove API key from `wrangler.json`
  - Redeploy: `npx wrangler deploy`

---

## Optional Enhancements

- [ ] **Add custom domain to Resend**
  - Resend Dashboard → Domains
  - Add your domain
  - Update DNS records
  - Update `worker.js` line 40 with your domain email

- [ ] **Set up custom domain for worker**
  - Cloudflare Dashboard → Workers & Pages
  - Select your worker
  - Add custom domain

- [ ] **Enable analytics**
  - Already enabled by default!
  - View in Cloudflare Dashboard

- [ ] **Set up monitoring**
  - Use `npx wrangler tail` for live logs
  - Set up email alerts in Cloudflare

---

## Troubleshooting

### Build fails?
```bash
# Clear cache and rebuild
rm -rf dist node_modules
npm install
npm run build
```

### Deployment fails?
```bash
# Check Wrangler is logged in
npx wrangler whoami

# Re-login if needed
npx wrangler login
```

### Emails not sending?
- Check Resend API key is correct
- View worker logs: `npx wrangler tail`
- Check Resend dashboard for errors
- Verify email address in `worker.js`

---

## Quick Commands Reference

```bash
# Build app
npm run build

# Test locally
npx wrangler dev

# Deploy
npx wrangler deploy

# View logs
npx wrangler tail

# Check status
npx wrangler whoami

# Set secret
npx wrangler secret put RESEND_API_KEY
```

---

## 🎉 Success Criteria

✅ Build completes without errors
✅ Local testing works
✅ Deployment succeeds
✅ Live form sends emails
✅ Emails arrive in inbox
✅ No errors in logs

---

**Last Updated:** January 6, 2026
