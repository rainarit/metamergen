# MetamerGen Project Page

## Overview
Static academic project page for the MetamerGen paper ("Generating Metamers of Human Scene Understanding"). Built as a React/Vite app that renders the academic paper page with Bootstrap carousels, author listings, and paper sections.

## Purpose
- Will be hosted on GitHub (repo: metamergen) via Cloudflare Pages
- The Vite build output (`dist/public/`) produces static files suitable for deployment

## Project Architecture
- `client/src/pages/home.tsx` - Main page component with all paper content
- `client/src/dreamsim.css` - Custom styles for the academic page layout
- `client/index.html` - HTML head with CDN links (Bootstrap 4, Font Awesome, Academicons, Google Sans)
- `client/public/webpage_assets/` - Directory for image assets (user must add their own)

## Required Image Assets
The page references these images from `client/public/webpage_assets/`:
- `dreamsim_icon.png` - Favicon (consider renaming to metamergen_icon.png)
- `teaser.jpg` - Main teaser figure
- `method.png` - Method diagram
- `result_1.jpg` through `result_10.jpg` - Results carousel images

## Tech Stack
- React 18 + Vite (frontend)
- Bootstrap 4 (CSS + JS via CDN) for carousels and grid
- Font Awesome 6 + Academicons (icons via CDN)
- Google Sans font (via Google Fonts CDN)
- Express (dev server only)

## Running
- `npm run dev` starts the development server on port 5000
- `npm run build` produces static output in `dist/public/`

## User Preferences
- Prefers Google Sans font
