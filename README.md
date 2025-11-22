
  # Tchaas Digital Resume

A modern, interactive digital resume built with React, TypeScript, and Vite. This project showcases professional experience, education, skills, and projects in an engaging, responsive web application.

**Live Site**: [https://tchaas.github.io/Tchaasdigitalresume/](https://tchaas.github.io/Tchaasdigitalresume/)

The original design is available at https://www.figma.com/design/xdHQ8sof1P6MF3dCGjAJCe/Tchaas-Digital-Resume.

## Features

- 🎨 Modern, dark-themed UI with emerald accents
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎯 Interactive navigation between sections
- 💼 Professional work history and education timelines
- 🛠️ Tech stack and skills showcase
- 📊 Impact metrics and achievements

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Tchaas/Tchaasdigitalresume.git
cd Tchaasdigitalresume
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run deploy` - Deploy to GitHub Pages (requires setup)

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment (Recommended)

1. Push your code to the `main` branch
2. Go to your repository settings on GitHub
3. Navigate to **Pages** under **Code and automation**
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically build and deploy your site on every push to `main`

Your site will be available at: `https://<username>.github.io/Tchaasdigitalresume/`

### Manual Deployment

If you prefer to deploy manually using gh-pages:

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Deploy:
```bash
npm run deploy
```

3. Configure GitHub Pages to use the `gh-pages` branch in your repository settings

## Project Structure

```
Tchaasdigitalresume/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   └── .nojekyll              # Disable Jekyll processing
├── src/
│   ├── components/            # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── EducationPage.tsx
│   │   ├── WorkHistoryPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── ...
│   ├── assets/                # Images and static assets
│   ├── styles/                # Global styles
│   ├── App.tsx                # Main application component
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global CSS
├── index.html
├── package.json
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
└── README.md
```

## Customization

To customize this resume for your own use:

1. Update personal information in `src/App.tsx`
2. Replace profile images in `src/assets/`
3. Modify the color scheme in component files (search for `emerald` to change the accent color)
4. Update work history in `src/components/WorkHistoryPage.tsx`
5. Update education in `src/components/EducationPage.tsx`
6. Modify skills and certifications in `src/components/ProfessionalDevelopmentPage.tsx`

## Configuration Files

### vite.config.ts

The base path is configured for GitHub Pages deployment:
```typescript
base: '/Tchaasdigitalresume/'
```

Change this to match your repository name if you fork the project.

### GitHub Actions Workflow

The `.github/workflows/deploy.yml` file handles automatic deployment. It:
- Triggers on pushes to the `main` branch
- Builds the project
- Deploys to GitHub Pages
- Can also be manually triggered from the Actions tab

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 95+ (Performance)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 2.5s

## Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Contact

- **LinkedIn**: [Tchaas Alexander-Wright](https://www.linkedin.com/in/tchaas-alexander-wright/)
- **GitHub**: [Tchaas](https://github.com/Tchaas)
- **Email**: Available on the contact page of the live site

## Acknowledgments

- Design inspired by modern tech portfolio trends
- Built with amazing open-source tools and libraries
- UI components from Radix UI
- Icons from Lucide React

  