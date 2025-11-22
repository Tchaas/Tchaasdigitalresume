# GitHub Pages Deployment Guide

This guide will walk you through deploying your digital resume to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Node.js and npm installed

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
git remote add origin https://github.com/YOUR_USERNAME/Tchaasdigitalresume.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 4. Enable GitHub Actions for Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. In the left sidebar, click **Pages** (under "Code and automation")
4. Under **Source**, select **GitHub Actions**
5. That's it! The workflow is already configured

### 5. Automatic Deployment

The site will automatically deploy when you:
- Push to the `main` branch
- The GitHub Action workflow will:
  - Install dependencies
  - Build the project
  - Deploy to GitHub Pages

### 6. Access Your Site

After the first deployment (takes 2-3 minutes):
- Your site will be available at: `https://YOUR_USERNAME.github.io/Tchaasdigitalresume/`
- Check the Actions tab to monitor deployment progress

## Manual Deployment (Alternative Method)

If you prefer manual deployment using gh-pages:

```bash
# Install dependencies first (if not already done)
npm install

# Deploy manually
npm run deploy
```

Then configure Pages to use the `gh-pages` branch:
1. Go to Settings > Pages
2. Under Source, select `gh-pages` branch
3. Click Save

## Updating Your Site

Every time you make changes and want to update the live site:

### Using Automatic Deployment (Recommended)
```bash
git add .
git commit -m "Update resume content"
git push origin main
```

The site will automatically rebuild and redeploy.

### Using Manual Deployment
```bash
npm run deploy
```

## Configuration Details

### Base URL
The base URL is configured in `vite.config.ts`:
```typescript
base: '/Tchaasdigitalresume/'
```

If you rename your repository, update this value to match.

### Build Output
- Build output directory: `dist/`
- This directory is generated during build and should not be committed to git

## Troubleshooting

### Deployment Fails
- Check the **Actions** tab for error messages
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version compatibility

### 404 Error on Deployed Site
- Verify the `base` path in `vite.config.ts` matches your repository name
- Ensure GitHub Pages is enabled in repository settings
- Check that `.nojekyll` file exists in the `public` folder

### Styles Not Loading
- Clear browser cache
- Verify assets are being built to the `dist` folder
- Check browser console for 404 errors

### Images Not Displaying
- Ensure images are in the `src/assets` folder
- Check that image imports in components are correct
- Verify images are included in the build output

## Local Testing

Before deploying, test the production build locally:

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

This will show you exactly how the site will look when deployed.

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. In GitHub Settings > Pages, enter your custom domain
4. Enable "Enforce HTTPS"

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

## Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Review this documentation
3. Check Vite and React documentation
4. Open an issue in the repository

## Next Steps

After deployment:
- ✅ Test all links and navigation
- ✅ Verify responsive design on mobile devices
- ✅ Check performance with Lighthouse
- ✅ Share your resume URL!

Your digital resume is now live and accessible to the world! 🎉
