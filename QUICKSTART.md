# Quick Start Guide

## First Time Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Opens at http://localhost:3000

3. **Build for Production**
   ```bash
   npm run build
   ```
   Creates `dist/` folder with optimized files

4. **Preview Production Build**
   ```bash
   npm run preview
   ```
   Test the production build locally

## Deploy to GitHub Pages

### Automatic (Recommended)
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```
Site auto-deploys via GitHub Actions

### Manual
```bash
npm run deploy
```
Requires gh-pages package and repository setup

## Project Structure

```
src/
├── components/      # React components
├── assets/         # Images and static files
├── App.tsx         # Main app component
└── main.tsx        # Entry point

public/
└── .nojekyll       # GitHub Pages config

.github/
└── workflows/
    └── deploy.yml  # Auto-deployment workflow
```

## Development Commands

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages (manual)

## Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `package.json` - Dependencies and scripts

## Customization

### Update Personal Info
Edit `src/App.tsx` - Update name, title, bio, etc.

### Change Colors
Search for `emerald` in components and replace with your color choice

### Modify Sections
Edit component files in `src/components/`

### Add/Remove Pages
Update the navigation in `src/components/Header.tsx`

## Deployment URL

After deployment, your site will be at:
```
https://YOUR_USERNAME.github.io/Tchaasdigitalresume/
```

## Need Help?

See `DEPLOYMENT.md` for detailed deployment instructions.
See `README.md` for full project documentation.
