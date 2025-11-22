
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';
  import { fileURLToPath } from 'url';

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  export default defineConfig({
    base: '/Tchaasdigitalresume/',
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'vaul@1.1.2': 'vaul',
        'sonner@2.0.3': 'sonner',
        'recharts@2.15.2': 'recharts',
        'react-resizable-panels@2.1.7': 'react-resizable-panels',
        'react-hook-form@7.55.0': 'react-hook-form',
        'react-day-picker@8.10.1': 'react-day-picker',
        'next-themes@0.4.6': 'next-themes',
        'lucide-react@0.487.0': 'lucide-react',
        'input-otp@1.4.2': 'input-otp',
        'figma:asset/f4d02be8ee2e842c7fd42eeef23e798576542a47.png': path.resolve(__dirname, './src/assets/f4d02be8ee2e842c7fd42eeef23e798576542a47.png'),
        'figma:asset/eb9d13c165ccdc296c05dd793c1a15712623f02a.png': path.resolve(__dirname, './src/assets/eb9d13c165ccdc296c05dd793c1a15712623f02a.png'),
        'figma:asset/dd23cb4cc0353fe35b9d749c3ea903e87334bc53.png': path.resolve(__dirname, './src/assets/dd23cb4cc0353fe35b9d749c3ea903e87334bc53.png'),
        'figma:asset/d1e24e304bd08c8dad5c534cb5493c70e5febc79.png': path.resolve(__dirname, './src/assets/d1e24e304bd08c8dad5c534cb5493c70e5febc79.png'),
        'figma:asset/a9d6cc6ec6d79f0db9fc83f7fc2d9daa0ce4611a.png': path.resolve(__dirname, './src/assets/a9d6cc6ec6d79f0db9fc83f7fc2d9daa0ce4611a.png'),
        'figma:asset/98586f21bd5edcf117d9f769109283d9aa5526db.png': path.resolve(__dirname, './src/assets/98586f21bd5edcf117d9f769109283d9aa5526db.png'),
        'figma:asset/94719da024130e17b7466b55ccba8a0e51618a8b.png': path.resolve(__dirname, './src/assets/94719da024130e17b7466b55ccba8a0e51618a8b.png'),
        'figma:asset/4f5a36f91e0395747a78ce3ab06594ac361ce959.png': path.resolve(__dirname, './src/assets/4f5a36f91e0395747a78ce3ab06594ac361ce959.png'),
        'figma:asset/4842ad45afbeac926c98fdf1eed1ed4bbc6aa542.png': path.resolve(__dirname, './src/assets/4842ad45afbeac926c98fdf1eed1ed4bbc6aa542.png'),
        'figma:asset/461a2e3cbf0d37c40f733da331877d62a57de833.png': path.resolve(__dirname, './src/assets/461a2e3cbf0d37c40f733da331877d62a57de833.png'),
        'figma:asset/252fdb688f50c8ccf51f69284795552830d66ac6.png': path.resolve(__dirname, './src/assets/252fdb688f50c8ccf51f69284795552830d66ac6.png'),
        'figma:asset/11b33a6497ad88b072c82caa862d024a5cd53c85.png': path.resolve(__dirname, './src/assets/11b33a6497ad88b072c82caa862d024a5cd53c85.png'),
        'figma:asset/0ec77554b9c2048ea8f456ec28402e266753147d.png': path.resolve(__dirname, './src/assets/0ec77554b9c2048ea8f456ec28402e266753147d.png'),
        'embla-carousel-react@8.6.0': 'embla-carousel-react',
        'cmdk@1.1.1': 'cmdk',
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
        '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
        '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
        '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
        '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
        '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
        '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
        '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
        '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
        '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
        '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
        '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
        '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
        '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
        '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
        '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
        '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'dist',
    },
    server: {
      port: 3000,
      open: true,
    },
  });