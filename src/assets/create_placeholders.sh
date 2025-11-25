#!/bin/bash

# Create simple SVG placeholders that will work temporarily
# NovaOne - Blue circuit pattern
cat > novaone-icon.png.svg << 'SVG'
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#001a4d"/>
  <circle cx="100" cy="100" r="60" fill="none" stroke="#00bfff" stroke-width="4"/>
  <text x="100" y="115" font-family="Arial" font-size="24" fill="#00bfff" text-anchor="middle">NovaOne</text>
</svg>
SVG

# Bytonomy - Blue logo
cat > bytonomy-icon.jpeg.svg << 'SVG'
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#001a4d"/>
  <rect x="50" y="50" width="100" height="100" fill="none" stroke="#4169e1" stroke-width="6" rx="10"/>
  <text x="100" y="115" font-family="Arial" font-size="20" fill="#4169e1" text-anchor="middle">B</text>
</svg>
SVG

# Habitat - Light blue logo
cat > habitat-icon.jpeg.svg << 'SVG'
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#00a9ce"/>
  <path d="M 100 60 L 140 90 L 140 140 L 60 140 L 60 90 Z" fill="white"/>
  <rect x="90" y="110" width="20" height="30" fill="#00a9ce"/>
</svg>
SVG

mv novaone-icon.png.svg novaone-icon.png
mv bytonomy-icon.jpeg.svg bytonomy-icon.jpeg
mv habitat-icon.jpeg.svg habitat-icon.jpeg

echo "Placeholder icons created"
