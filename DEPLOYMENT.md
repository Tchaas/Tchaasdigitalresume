# GitHub Pages Deployment Guide

## Custom Domain Deployment: tchaasawright.com

This guide covers deploying your digital resume to GitHub Pages with a custom domain using GitHub Actions workflow.

**Deployment Type**: Custom domain (not GitHub subdirectory)
**Site URL**: https://tchaasawright.com
**Repository**: https://github.com/Tchaas/Tchaasdigitalresume
**Deployment Method**: GitHub Actions (automatic on push to main)

## Prerequisites

1. ✅ GitHub account (username: Tchaas)
2. ✅ Git installed on your computer
3. ✅ Node.js and npm installed
4. ✅ Custom domain purchased (tchaasawright.com via Cloudflare)
5. ✅ DNS configured (see CUSTOM_DOMAIN.md for details)

## Step-by-Step Deployment

### 1. Initialize Git Repository (if not already done)

```bash
cd /Users/tchaasalexander-wright/Tchaasdigitalresume
git init
git add .
git commit -m "Initial commit: Digital resume project"
```

### 2. Create GitHub Repository

1. Go to https://github.com/new
2. Name your repository: `Tchaasdigitalresume`
3. Keep it **public** (required for free GitHub Pages)
4. Do NOT initialize with README (you already have one)
5. Click "Create repository"

### 3. Connect Local Repository to GitHub

```bash
git remote add origin https://github.com/Tchaas/Tchaasdigitalresume.git
git branch -M main
git push -u origin main
```

### 4. Verify CNAME File

Ensure the CNAME file exists for custom domain:

**Location**: `public/CNAME`
**Content**: `tchaasawright.com`

This file tells GitHub Pages which custom domain to use. Vite automatically copies it to `dist/CNAME` during build.

### 5. Enable GitHub Actions for Pages

1. Go to https://github.com/Tchaas/Tchaasdigitalresume/settings/pages
2. Click **Settings** tab
3. In the left sidebar, click **Pages** (under "Code and automation")
4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** (NOT "Deploy from a branch")
5. Under **Custom domain**:
   - Enter: `tchaasawright.com`
   - Click **Save**
6. Wait for DNS check (30 seconds to 5 minutes)
7. When DNS check passes, enable **☑ Enforce HTTPS**

**⚠️ Important**: The GitHub Actions workflow is already configured in `.github/workflows/deploy.yml`

### 6. Automatic Deployment with GitHub Actions

The site automatically deploys when you push to the `main` branch.

**Workflow Steps**:
1. **Build Job** (~2 minutes):
   - Checkout code
   - Setup Node.js 20.x
   - Install dependencies (`npm ci`)
   - Build project (`npm run build`)
   - Setup GitHub Pages configuration
   - Upload build artifact (`dist/` folder)

2. **Deploy Job** (~30 seconds):
   - Download build artifact
   - Deploy to GitHub Pages

**Monitoring**: Check https://github.com/Tchaas/Tchaasdigitalresume/actions

### 7. Access Your Site

**After First Deployment** (timeline):
- **T+0**: Push to main → Workflow triggered
- **T+2-3 minutes**: Deployment completes
- **T+5-30 minutes**: DNS propagation (may already be complete)
- **T+1-24 hours**: SSL certificate provisioned by GitHub

**Site URLs**:
- HTTP (immediate): http://tchaasawright.com
- HTTPS (after SSL): https://tchaasawright.com

**Note**: GitHub automatically provisions Let's Encrypt SSL certificates for custom domains. This can take up to 24 hours on first setup.

## Updating Your Site

Every time you make changes, the site automatically redeploys:

```bash
git add .
git commit -m "Update resume content"
git push origin main
```

**What happens**:
1. GitHub Actions workflow triggers automatically
2. Code is built and deployed (~2-3 minutes)
3. Site updates at https://tchaasawright.com
4. No manual intervention needed

**Verify deployment**: Check https://github.com/Tchaas/Tchaasdigitalresume/actions for workflow status.

## Configuration Details

### Base URL for Custom Domain

**Critical Configuration** in `vite.config.ts`:
```typescript
base: '/'
```

**Why `'/'` and not `'/Tchaasdigitalresume/'`?**
- Custom domain = root path deployment
- `tchaasawright.com/` NOT `tchaasawright.com/Tchaasdigitalresume/`
- Subdirectory paths (`/repo-name/`) are ONLY for `username.github.io/repo-name` URLs
- Using wrong base path causes 404 errors and broken assets

**If you were using default GitHub Pages** (without custom domain):
- URL would be: `https://tchaas.github.io/Tchaasdigitalresume/`
- Base would be: `base: '/Tchaasdigitalresume/'`

**With custom domain** (current setup):
- URL is: `https://tchaasawright.com/`
- Base must be: `base: '/'`

### Build Output
- Build output directory: `dist/`
- This directory is generated during build and should not be committed to git
- GitHub Actions uploads `dist/` as an artifact for deployment
- `public/CNAME` is automatically copied to `dist/CNAME` during build

### GitHub Actions Workflow Permissions

**Critical**: The workflow in `.github/workflows/deploy.yml` requires specific permissions:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

**Common Error**: If deployment fails, verify these permissions are set in the workflow file.

## Deployment Checklist

Before deploying, verify:

### Code Configuration
- [ ] `public/CNAME` exists and contains `tchaasawright.com`
- [ ] `vite.config.ts` has `base: '/'` (NOT `'/Tchaasdigitalresume/'`)
- [ ] `.github/workflows/deploy.yml` exists and has correct permissions
- [ ] `public/.nojekyll` file exists

### DNS Configuration (Cloudflare)
- [ ] A records point to GitHub Pages IPs (185.199.108-111.153)
- [ ] CNAME record for www points to `tchaas.github.io`
- [ ] **ALL DNS records are "DNS only" (gray cloud ☁️)**
- [ ] **NO DNS records have orange cloud 🟧 (breaks SSL)**
- [ ] SSL/TLS mode set to "Full (strict)" in Cloudflare

See **CUSTOM_DOMAIN.md** for complete DNS setup instructions.

### GitHub Repository Settings
- [ ] Settings → Pages → Source: "GitHub Actions"
- [ ] Settings → Pages → Custom domain: `tchaasawright.com`
- [ ] Settings → Pages → DNS check: Successful ✅
- [ ] Settings → Pages → Enforce HTTPS: ☑ Enabled

### Build Test
- [ ] Run `npm run build` locally - succeeds without errors
- [ ] Run `npm run preview` - site works locally
- [ ] All pages navigate correctly
- [ ] Images and assets load properly

## Troubleshooting

### Deployment Workflow Fails

**Check GitHub Actions logs**:
1. Go to https://github.com/Tchaas/Tchaasdigitalresume/actions
2. Click the failed workflow
3. Review error messages

**Common issues**:
- Missing dependencies: Run `npm install` and commit `package-lock.json`
- Build errors: Fix TypeScript/React errors shown in logs
- Permissions: Verify workflow has `pages: write` and `id-token: write` permissions

### 404 Error on Custom Domain

**Cause**: Wrong base path or missing CNAME file

**Fix**:
1. Verify `vite.config.ts` has `base: '/'` (not subdirectory path)
2. Verify `public/CNAME` exists and contains exactly: `tchaasawright.com`
3. Check workflow built successfully
4. Wait 5-10 minutes for deployment to propagate

### DNS Not Resolving

**Check DNS configuration**:
```bash
nslookup tchaasawright.com
```

Should return GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

**Fixes**:
1. Verify Cloudflare DNS records are correct (see CUSTOM_DOMAIN.md)
2. Check DNS propagation at https://dnschecker.org
3. Wait up to 48 hours for full DNS propagation (usually 1-2 hours)
4. Ensure DNS records are "DNS only" (gray cloud), not proxied (orange cloud)

### SSL Certificate Not Provisioning

**Symptoms**: HTTPS shows certificate warnings after 24 hours

**Most Common Cause**: Cloudflare proxy (orange cloud) is enabled

**Fix**:
1. Go to Cloudflare → DNS → Records
2. Verify ALL records show gray cloud ☁️ (DNS only)
3. If ANY show orange cloud 🟧, click to disable proxy
4. Remove custom domain from GitHub Pages settings
5. Wait 10 minutes
6. Re-add custom domain in GitHub Pages settings
7. Wait up to 24 hours for new certificate

**Alternative causes**:
- DNS not propagated: Wait longer, check https://dnschecker.org
- Cloudflare SSL mode wrong: Set to "Full (strict)" or "Full"
- CNAME file missing: Verify `public/CNAME` exists

### "Enforce HTTPS" Option Grayed Out

**Cause**: SSL certificate not yet provisioned or DNS check failed

**Fix**:
1. Wait for DNS check to complete (green ✅ appears)
2. Wait up to 24 hours for GitHub to provision SSL certificate
3. Ensure Cloudflare DNS records are "DNS only" (gray cloud)
4. Option will automatically become available when ready

### Assets Not Loading (CSS/Images Missing)

**Cause**: Incorrect base path

**Fix**:
1. Verify `vite.config.ts` has `base: '/'` (for custom domain)
2. NOT `base: '/Tchaasdigitalresume/'` (that's for subdirectory deployment)
3. Rebuild: `npm run build`
4. Push changes: `git push origin main`

**Check browser console**: Look for 404 errors showing wrong paths

### Styles Not Loading

**Fixes**:
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Try incognito/private browsing mode
- Verify `dist/` folder contains CSS files after build
- Check browser console for specific 404 errors

### Site Shows Old Content After Update

**Cause**: Browser caching or deployment not complete

**Fix**:
1. Check GitHub Actions - verify workflow completed successfully
2. Wait 2-3 minutes after deployment for CDN to update
3. Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
4. Try incognito mode to bypass cache

## Local Testing

Before deploying, test the production build locally:

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

This will show you exactly how the site will look when deployed.

## Custom Domain Setup (Current Configuration)

Your site is configured for the custom domain **tchaasawright.com**.

### CNAME File

**Location**: `public/CNAME`
**Content**: 
```
tchaasawright.com
```

This file is automatically copied to `dist/CNAME` during build, telling GitHub Pages which custom domain to use.

### DNS Configuration with Cloudflare

**⚠️ CRITICAL REQUIREMENT**: All DNS records MUST be in "DNS only" mode (gray cloud ☁️)

**DNS Records** (must be configured in Cloudflare):

| Type | Name | Content | Proxy Status |
|------|------|---------|--------------|
| A | @ | 185.199.108.153 | ☁️ DNS only |
| A | @ | 185.199.109.153 | ☁️ DNS only |
| A | @ | 185.199.110.153 | ☁️ DNS only |
| A | @ | 185.199.111.153 | ☁️ DNS only |
| CNAME | www | tchaas.github.io | ☁️ DNS only |

**⚠️ WARNING**: Do NOT enable Cloudflare proxy (orange cloud 🟧)
- Orange cloud prevents GitHub from provisioning SSL certificates
- Your site will not have HTTPS
- SSL certificate renewal will fail
- This is a permanent limitation, not temporary

### Cloudflare SSL/TLS Settings

1. **SSL/TLS Mode**: "Full (strict)" (recommended) or "Full"
2. **Always Use HTTPS**: Enabled
3. **Automatic HTTPS Rewrites**: Enabled

### GitHub Pages Custom Domain Configuration

1. Go to: https://github.com/Tchaas/Tchaasdigitalresume/settings/pages
2. Under "Custom domain": `tchaasawright.com`
3. Wait for DNS check to pass (30 seconds to 5 minutes)
4. Enable "Enforce HTTPS" after DNS check succeeds

### Complete DNS Setup Guide

For detailed DNS configuration instructions, see **CUSTOM_DOMAIN.md** in this repository.

### Timeline Expectations

| Event | Time |
|-------|------|
| Push code to GitHub | T+0 |
| Workflow builds and deploys | T+2-3 min |
| DNS propagation | T+5 min to 48 hours (usually 1-2 hours) |
| SSL certificate provisioned | T+1 to 24 hours |
| HTTPS fully working | T+24 hours (maximum) |

**Note**: Subsequent deployments are instant (no DNS/SSL wait), taking only 2-3 minutes.

## Performance Optimization

The site is already optimized with:
- ✅ Vite for fast builds
- ✅ Code splitting
- ✅ Asset optimization
- ✅ Modern ES modules

## Security

- The site is static (no server-side code)
- All dependencies are specified in `package.json`
- Regular updates recommended for security patches

## Verification After Deployment

Once deployment is complete, verify everything works:

### Immediate Checks (After Workflow Completes)

```bash
# Check DNS resolution
nslookup tchaasawright.com

# Should return GitHub Pages IPs:
# 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
```

**Browser Tests**:
- [ ] Visit http://tchaasawright.com - site loads
- [ ] Test all navigation links
- [ ] Test on mobile device
- [ ] Check responsive design

### After SSL Certificate Provisioned (up to 24 hours)

- [ ] Visit https://tchaasawright.com - secure connection
- [ ] Green padlock 🔒 appears in browser
- [ ] Certificate is valid (no warnings)
- [ ] Test SSL grade: https://www.ssllabs.com/ssltest/

### Performance Testing

```bash
# Run local production build test
npm run build
npm run preview
```

**Online tests**:
- [ ] Lighthouse score (aim for 90+ in all categories)
- [ ] Mobile-friendly test
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)

## Support and Resources

### Documentation
- **Custom Domain DNS**: See `CUSTOM_DOMAIN.md` in this repository
- **GitHub Pages**: https://docs.github.com/en/pages
- **Vite Documentation**: https://vitejs.dev/guide/
- **React Documentation**: https://react.dev/

### Troubleshooting Tools
- **DNS Checker**: https://dnschecker.org
- **SSL Test**: https://www.ssllabs.com/ssltest/
- **GitHub Actions**: https://github.com/Tchaas/Tchaasdigitalresume/actions
- **Pages Settings**: https://github.com/Tchaas/Tchaasdigitalresume/settings/pages

### Common Issues
1. **Deployment fails**: Check GitHub Actions logs
2. **DNS not resolving**: Verify Cloudflare DNS records, wait for propagation
3. **SSL not working**: Ensure DNS records are "DNS only" (gray cloud)
4. **404 errors**: Check `base: '/'` in vite.config.ts and CNAME file
5. **Assets missing**: Verify base path is correct for custom domain

## Next Steps

After successful deployment:

### Immediate
- ✅ Verify site loads at https://tchaasawright.com
- ✅ Test all navigation and links
- ✅ Check responsive design on mobile
- ✅ Verify images and assets load correctly

### Within 24 Hours
- ✅ Confirm HTTPS works (after SSL certificate provisioned)
- ✅ Test from different networks/locations
- ✅ Run Lighthouse performance test
- ✅ Check cross-browser compatibility

### Ongoing
- ✅ Monitor GitHub Actions for successful deployments
- ✅ Keep dependencies updated
- ✅ Regular content updates (auto-deploys on push to main)
- ✅ Share your resume URL!

## Deployment Summary

**Your Site**: https://tchaasawright.com
**Repository**: https://github.com/Tchaas/Tchaasdigitalresume
**Deployment**: Automatic via GitHub Actions on push to `main` branch
**Build Time**: ~2-3 minutes per deployment
**DNS Provider**: Cloudflare (DNS only mode)
**SSL Certificate**: Automatically provisioned by GitHub Pages

---

🎉 **Your digital resume is now live and automatically deploys on every update!**

For DNS configuration details, see **CUSTOM_DOMAIN.md**.
