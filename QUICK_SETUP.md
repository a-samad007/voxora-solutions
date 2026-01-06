# ⚡ Quick Setup - Cloudflare Worker Email

## 🎯 3 Simple Steps

### 1️⃣ Get Resend API Key (FREE - 30 seconds)
```
1. Go to: https://resend.com/
2. Sign up (free)
3. Create API Key
4. Copy the key (starts with re_...)
```

### 2️⃣ Add Key to wrangler.json
```json
{
  "vars": {
    "RESEND_API_KEY": "re_your_key_here"
  }
}
```

### 3️⃣ Deploy
```bash
npm run build
npx wrangler login
npx wrangler deploy
```

---

## 🧪 Test Locally First

```bash
npm run build
npx wrangler dev
```

Then test your contact form!

---

## 📧 What You Get

- ✅ 3,000 FREE emails/month
- ✅ No EmailJS account needed
- ✅ Uses your existing Cloudflare
- ✅ Professional email templates
- ✅ Delivery tracking

---

## 🔧 Files Modified

- ✅ `worker.js` - API endpoint added
- ✅ `wrangler.json` - Config updated
- ✅ `ContactPage.tsx` - Uses new API
- ✅ EmailJS removed (not needed)

---

## 💡 Important Notes

**For Production:**
Use Cloudflare secrets instead of wrangler.json:
```bash
npx wrangler secret put RESEND_API_KEY
```

**Custom Domain Email:**
Add your domain in Resend dashboard to send from:
`noreply@voxorasolution.com`

---

**Full Guide:** See `EMAIL_SETUP_GUIDE.md`

**Need Help?** Check the troubleshooting section in the full guide.
