# Ink Junction Tattoo Studio - Technical Master Guide

This document provides a deep-dive into the modules, functions, and processes that make the **Ink Junction Tattoo Studio** project work.

---

## 1. Core Modules & Technologies Used

### Frontend (`/fd`)
| Module | Purpose | How it works in the project |
| :--- | :--- | :--- |
| **React (v18)** | UI Library | Manages the component lifecycle, state, and rendering of the entire website. |
| **Vite** | Build Tool | Provides a fast development server and optimizes the final code for production. |
| **Tailwind CSS** | Styling Framework | Uses utility classes to build a custom, responsive design without writing heavy CSS files. |
| **Lucide React** | Icon Suite | Provides the vector icons (Menu, X, Instagram, Phone, MessageCircle, MessageSquare, Mail, etc.) used for navigation and buttons. |
| **Tailwind Animate** | Animations | Handles the smooth fade-ins, scale transitions, and the bouncing effect for social popups. |

### Backend (`/bd`)
| Module | Purpose | How it works in the project |
| :--- | :--- | :--- |
| **Express.js** | Web Framework | Handles incoming requests from the frontend and serves data/images. |
| **Mongoose** | MongoDB ODM | Connects the Node.js server to the MongoDB database and manages data schemas. |
| **CORS** | Security | Allows the frontend (Port 5173/5176) to communicate with the backend (Port 5000). |
| **Dotenv** | Configuration | Securely loads environment variables like the Database URL and Port number. |

---

## 2. Key Functions & Logic

### Frontend Functions (`/fd/src/components`)

#### **App.jsx**
- **`useEffect()` (Loading Timer)**:
    - **How it works**: Uses `setTimeout` to set the `loading` state to `false` after 2000ms.
    - **Process**: When the user opens the site, they see the `LoadingScreen`. After 2 seconds, the main website content is revealed.

#### **Navbar.jsx**
- **`handleScroll()`**:
    - **How it works**: Monitors `window.scrollY`. If it's greater than 50px, it sets the `scrolled` state to `true`.
    - **Process**: This changes the navbar from transparent to a dark blurred background as the user scrolls down.
- **`scrollToSection(e, href)`**:
    - **How it works**: Uses `document.querySelector(href).scrollIntoView({ behavior: 'smooth' })`.
    - **Process**: When a user clicks a nav link (e.g., "#portfolio"), the page glides smoothly to that section instead of jumping.
- **`openSMS()` / `openWhatsApp()` / `callNow()`**:
    - **How it works**: Uses standard mobile protocols (`sms:`, `https://wa.me/`, `tel:`) to trigger external apps.
    - **Process**: These are used in the "Book Now" popup to give users multiple direct ways to connect without logging in.

#### **Portfolio.jsx**
- **`loadPortfolio()` (Async Fetch)**:
    - **How it works**: Uses the `fetch()` API to call `http://localhost:5000/api/portfolio`.
    - **Process**: It tries to get live data from the database. If it fails (backend error), it automatically switches to the local `portfolio.js` fallback so the user always sees images.
- **`setIsPaused()`**:
    - **How it works**: Toggles a boolean state on click.
    - **Process**: Controls the `animate-marquee` CSS class. If the user clicks the gallery, the `pause-marquee` class is applied, stopping the animation.

#### **Artist.jsx**
- **How it works**: A dedicated profile section for the lead artist (Vishal Kumar).
- **Process**: Features high-impact typography and a grayscale-to-color image transition to build personal branding before the contact section.

#### **SocialPopup.jsx**
- **How it works**: A floating action button with a CSS `animate-bounce`.
- **Process**: Opens a modal with direct links to Instagram, WhatsApp, SMS, and Email, ensuring 360-degree connectivity for the user.

---

## 3. The Process: How a User Interaction Works

### Example: Booking a Tattoo
1.  **Trigger**: User clicks the "Book Now" button in the Navbar.
2.  **Function**: `setShowBookingPopup(true)` is called in `Navbar.jsx`.
3.  **UI Update**: React re-renders the component, displaying the black-themed modal over the site.
4.  **User Choice**: User selects WhatsApp, SMS, or Phone Call.
5.  **Logic**: The corresponding function (e.g., `openSMS()`) launches the device's native app with pre-filled details.

### Example: Getting Directions
1.  **Trigger**: User clicks "Get Directions" in the Contact section.
2.  **Logic**: The app uses the `CLICKABLE_MAPS_URL` from `constants.js`.
3.  **Process**: This URL is specifically formatted for the Google Maps Directions API to automatically use the user's **Current Location** as the starting point and the studio as the destination.
4.  **Result**: Opens Google Maps directly without requiring a login.

---
**Ink Junction Tattoo Studio** - Technical Documentation v1.1
