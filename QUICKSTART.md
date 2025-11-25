# Quick Start Guide

**Custom Domain Deployment**: This project is configured for deployment at **https://tchaasawright.com**

## First Time Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Opens at http://localhost:5173 (Vite default)

3. **Build for Production**
   ```bash
   npm run build
   ```
   Creates `dist/` folder with optimized files

4. **Preview Production Build**
   ```bash
   npm run preview
   ```
   Test the production build locally before deploying

## Deploy to GitHub Pages (Custom Domain)

### Prerequisites

Before deploying, ensure you have:

- ✅ **GitHub repository** created and code pushed to main branch
- ✅ **GitHub Pages enabled** (Settings → Pages → Source: GitHub Actions)
- ✅ **Custom domain configured** in GitHub Pages: `tchaasawright.com`
- ✅ **CNAME file** exists at `public/CNAME` (contains: `tchaasawright.com`)
- ✅ **Cloudflare DNS** records configured (see `CUSTOM_DOMAIN.md`)
- ✅ **DNS records** in "DNS only" mode (gray cloud ☁️, NOT orange 🟧)

> **Note**: For complete DNS setup instructions, see `CUSTOM_DOMAIN.md`

### Automatic Deployment (GitHub Actions)

**This is the only deployment method used in this project.**

```bash
# Make your changes, then:
git add .
git commit -m "Update resume content"
git push origin main
```

**What happens**:
1. Code pushed to `main` branch
2. GitHub Actions workflow triggers automatically
3. Project builds (2-3 minutes)
4. Deploys to https://tchaasawright.com
5. No manual intervention needed

**Monitor deployment**: https://github.com/Tchaas/Tchaasdigitalresume/actions

### Deployment Timeline

| Event | Time |
|-------|------|
| Push code | T+0 |
| Build & deploy | T+2-3 min |
| Site updated | T+3 min |
| **First time only:** | |
| DNS propagation | T+5-30 min |
| SSL certificate | T+1-24 hours |

> **First deployment note**: DNS propagation and SSL certificate provisioning can take up to 24 hours on initial setup. Subsequent deployments are instant (2-3 minutes).

## Project Structure

```
src/
├── components/      # React components
├── assets/         # Images and static files
├── App.tsx         # Main app component
└── main.tsx        # Entry point

public/
├── CNAME           # Custom domain: tchaasawright.com
└── .nojekyll       # GitHub Pages config

.github/
└── workflows/
    └── deploy.yml  # Auto-deployment workflow (GitHub Actions)

vite.config.ts      # base: '/' for custom domain
```

### Key Files for Deployment

- **`public/CNAME`**: Contains `tchaasawright.com` (tells GitHub Pages your custom domain)
- **`vite.config.ts`**: Has `base: '/'` (root path for custom domain, not `/Tchaasdigitalresume/`)
- **`.github/workflows/deploy.yml`**: Automated deployment configuration

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (http://localhost:5173) |
| `npm run build` | Build for production (creates `dist/` folder) |
| `npm run preview` | Preview production build locally |
| `npm test` | Run tests (if configured) |

**Note**: This project uses GitHub Actions for deployment. Manual deployment via `npm run deploy` is not used.

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite build config (`base: '/'` for custom domain) |
| `tsconfig.json` | TypeScript compiler configuration |
| `package.json` | Dependencies and npm scripts |
| `public/CNAME` | Custom domain file (contains: `tchaasawright.com`) |
| `.github/workflows/deploy.yml` | GitHub Actions deployment workflow |

**Important**: 
- `vite.config.ts` has `base: '/'` because we're deploying to a custom domain (root path)
- If deploying to `username.github.io/repo-name`, base would be `'/repo-name/'`
- Custom domain = root path (`/`), subdirectory = repo path (`/repo-name/`)

## Customization

### Update Personal Info
Edit `src/App.tsx` - Update name, title, bio, etc.

### Change Colors
Search for `emerald` in components and replace with your color choice

### Modify Sections
Edit component files in `src/components/`

### Add/Remove Pages
Update the navigation in `src/components/Header.tsx`

## Deployment URLs

**Primary URL**: https://tchaasawright.com  
**WWW redirect**: https://www.tchaasawright.com (redirects to primary)

**GitHub repository**: https://github.com/Tchaas/Tchaasdigitalresume  
**Actions (deployment status)**: https://github.com/Tchaas/Tchaasdigitalresume/actions

### First Deployment Timeline

- ⚡ **Immediate**: Site builds and deploys (2-3 minutes)
- 🌐 **5-30 minutes**: DNS propagation (may already be complete)
- 🔒 **Up to 24 hours**: SSL certificate provisioned by GitHub

### Subsequent Deployments

- Just 2-3 minutes from push to live site
- DNS and SSL already configured

## Quick Troubleshooting

### Site not loading after deployment
- ✅ Check GitHub Actions completed successfully
- ✅ Wait 5-10 minutes for deployment to propagate
- ✅ Try incognito mode (bypass cache)

### 404 errors
- ✅ Verify `public/CNAME` contains `tchaasawright.com`
- ✅ Check `vite.config.ts` has `base: '/'`
- ✅ Confirm GitHub Pages is enabled (Settings → Pages)

### SSL certificate not working
- ✅ Ensure Cloudflare DNS records are "DNS only" (gray cloud)
- ✅ Orange cloud breaks SSL - must be gray cloud
- ✅ Wait up to 24 hours for first-time certificate provisioning

### Assets not loading (CSS/images missing)
- ✅ Verify `base: '/'` in `vite.config.ts` (for custom domain)
- ✅ Clear browser cache
- ✅ Check browser console for specific 404 errors

## Deployment Checklist

Before pushing to deploy:

- [ ] Code changes tested locally (`npm run dev`)
- [ ] Production build works (`npm run build && npm run preview`)
- [ ] No TypeScript errors
- [ ] `public/CNAME` contains `tchaasawright.com`
- [ ] `vite.config.ts` has `base: '/'`
- [ ] Changes committed to main branch

Then push:
```bash
git push origin main
```

Monitor at: https://github.com/Tchaas/Tchaasdigitalresume/actions

## Common Tasks

### Update Content
1. Edit files in `src/` folder
2. Test locally: `npm run dev`
3. Commit and push: `git push origin main`
4. Auto-deploys in 2-3 minutes

### Add New Page
1. Create component in `src/components/`
2. Update navigation in `src/components/Header.tsx`
3. Add route in `src/App.tsx`
4. Test, commit, push

### Change Styling
1. Edit component files (Tailwind classes)
2. Or update `src/index.css` for global styles
3. Test locally
4. Commit and push

## Need Help?

- **Detailed deployment guide**: See `DEPLOYMENT.md`
- **DNS setup guide**: See `CUSTOM_DOMAIN.md`
- **Project documentation**: See `README.md`
- **Check deployment status**: https://github.com/Tchaas/Tchaasdigitalresume/actions
- **View live site**: https://tchaasawright.com

---

**Quick Start Summary**: Install dependencies → Make changes → Test locally → Push to main → Auto-deploys in 2-3 minutes! 🚀
