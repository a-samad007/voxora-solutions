# Voxora Solution Center

A modern, professional customer support solutions website built with React, TypeScript, and Cloudflare Workers.

## 🚀 Features

- **Modern UI/UX** - Sleek design with smooth animations
- **Contact Form** - Integrated email functionality via Cloudflare Workers
- **Responsive Design** - Works perfectly on all devices
- **Fast Performance** - Optimized with Vite
- **Email Integration** - Powered by Resend API (3,000 free emails/month)

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Cloudflare account (free tier works)
- Resend account (free tier works)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd voxora-solutions
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up email functionality**
   - See [EMAIL_SETUP_GUIDE.md](EMAIL_SETUP_GUIDE.md) for detailed instructions
   - Quick version: Get a free Resend API key and add it to `wrangler.json`

## 🏃 Running Locally

### Development Server

```bash
npm run dev
```

Visit `http://localhost:3001` (or the port shown in terminal)

### Test Worker Locally

```bash
# Build the app first
npm run build

# Start local worker
npx wrangler dev
```

## 📦 Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚀 Deployment

### Deploy to Cloudflare Workers

1. **Login to Cloudflare**
   ```bash
   npx wrangler login
   ```

2. **Deploy**
   ```bash
   npm run build
   npx wrangler deploy
   ```

See [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) for a complete deployment guide.

## 📧 Email Configuration

The contact form uses Cloudflare Workers with Resend API to send emails.

**Quick Setup:**
1. Get free Resend API key from [resend.com](https://resend.com)
2. Add to `wrangler.json`:
   ```json
   {
     "vars": {
       "RESEND_API_KEY": "re_your_key_here"
     }
   }
   ```
3. Deploy!

**Full Guide:** See [EMAIL_SETUP_GUIDE.md](EMAIL_SETUP_GUIDE.md)

## 📁 Project Structure

```
voxora-solutions/
├── components/          # React components
│   ├── ContactPage.tsx  # Contact form with email integration
│   ├── Hero.tsx         # Homepage hero section
│   ├── Services.tsx     # Services showcase
│   └── ...
├── worker.js           # Cloudflare Worker (API endpoint)
├── wrangler.json       # Cloudflare Worker config
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── dist/               # Build output
```

## 🔧 Tech Stack

- **Frontend:** React 19, TypeScript
- **Build Tool:** Vite
- **Styling:** CSS
- **Icons:** Lucide React
- **3D Graphics:** Three.js
- **Backend:** Cloudflare Workers
- **Email:** Resend API

## 📚 Documentation

- [EMAIL_SETUP_GUIDE.md](EMAIL_SETUP_GUIDE.md) - Complete email setup guide
- [QUICK_SETUP.md](QUICK_SETUP.md) - Quick reference
- [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) - Deployment steps

## 🔒 Security

- API keys stored in Cloudflare secrets (production)
- CORS configured for security
- Server-side validation
- Rate limiting via Cloudflare

## 💰 Costs

**Free Tier (Recommended for most use cases):**
- Cloudflare Workers: 100,000 requests/day
- Resend: 3,000 emails/month
- **Total: $0/month**

## 🐛 Troubleshooting

### Contact form not working?
1. Check Resend API key in `wrangler.json`
2. View worker logs: `npx wrangler tail`
3. Check Resend dashboard for delivery status

### Build errors?
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Deployment issues?
```bash
npx wrangler whoami  # Check login status
npx wrangler login   # Re-login if needed
```

## 📞 Support

For issues or questions:
- Check the documentation files
- View worker logs: `npx wrangler tail`
- Check Resend dashboard: [resend.com/logs](https://resend.com/logs)

## 📄 License

[Your License Here]

## 🙏 Acknowledgments

- Built with React and Cloudflare Workers
- Email powered by Resend
- Icons by Lucide

---

**Made with ❤️ for Voxora Solutions**
