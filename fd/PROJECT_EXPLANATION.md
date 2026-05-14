# Ink Junction Tattoo Studio - Frontend Documentation

## Project Overview
Ink Junction Tattoo Studio is a premium, modern portfolio website for a professional tattoo studio. It features a high-end aesthetic with a focus on visual storytelling and seamless user interaction.

## Technology Stack
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Tailwind Animate, Custom CSS Marquees
- **State Management**: React Hooks (useState, useEffect, useRef)

## Key Features & How They Work

### 1. Dynamic Hero Section
- **Background**: Uses a continuous video loop (`/bgvideo.mp4`) with a dark overlay for readability.
- **Booking Popup**: A dual-action modal that lets users choose between WhatsApp and a Phone Call. It uses a high-contrast black theme with backdrop blurring.

### 2. Auto-Scrolling Portfolio Marquees
- **Mechanism**: Custom CSS `@keyframes marquee` in `index.css`.
- **Interaction**: Sections like "Our Portfolio", "Portrait Tattoos", and "Coverup Tattoos" slide automatically. Users can click to pause the animation or manually scroll using touch/mouse.
- **Components**: `Portfolio.jsx`, `PortraitTattoos.jsx`, `CoverupTattoos.jsx`.

### 3. Shop Environment Collage
- **Mechanism**: A CSS Grid layout (`ShopEnvironment.jsx`) featuring multiple videos with grayscale-to-color transitions on hover.

### 4. Floating Social Popup
- **Mechanism**: A fixed-position button (`SocialPopup.jsx`) with a bouncing animation.
- **Function**: Opens a mini-frame providing direct links to Instagram and WhatsApp without requiring internal login.

### 5. Loading Screen
- **Mechanism**: A 2-second timer in `App.jsx` that displays `LoadingScreen.jsx` before revealing the main site content.

## Mobile Optimization
- The project follows a mobile-first approach.
- Hamburger menu (3 lines) for navigation on smaller screens.
- Stacked layouts for portfolio items and contact details on mobile devices.
- Touch-friendly buttons and interactive elements.

## Connectivity
- **Backend Integration**: Fetches portfolio data from `http://localhost:5000/api/portfolio`.
- **Robustness**: Includes fallback logic to local `portfolio.js` data if the backend server is offline or errors occur.
- **WhatsApp**: Uses the `WHATSAPP_NUMBER` constant to generate direct chat links.
