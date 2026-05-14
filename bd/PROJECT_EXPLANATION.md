# Ink Junction Tattoo Studio - Backend Documentation

## Project Overview
The backend provides a RESTful API and static file hosting to serve portfolio data and images for the Ink Junction Tattoo Studio website.

## Technology Stack
- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Middleware**: CORS, Dotenv

## Architecture & How It Works

### 1. Server Entry Point (`index.js`)
- Initializes the Express application.
- Configures CORS to allow requests from the frontend (Port 5173/5176).
- Serves static images from the `/img` directory.
- Connects to MongoDB via the `connectDB` helper.

### 2. Database Models (`models/Portfolio.js`)
- Defines the `Portfolio` schema, including fields for `type` (image/video), `src` (path), `style`, and `caption`.

### 3. API Routes (`routes/portfolio.js`)
- **GET /api/portfolio**: Retrieves all portfolio items from the database.
- Includes error handling to ensure the server doesn't crash on invalid requests.

### 4. Data Seeding (`seed.js`)
- A utility script to populate the database with initial portfolio data, including image paths and descriptions.

## Connectivity & Flow
1. **Frontend Request**: The React app sends a GET request to `/api/portfolio`.
2. **Route Handling**: The router calls the Mongoose model to fetch data from MongoDB.
3. **Response**: The server returns a JSON array of portfolio items.
4. **Static Assets**: The frontend renders images using paths like `http://localhost:5000/img/...`, which are served by the Express static middleware.

## Reliability
- The backend uses `dotenv` for environment variable management (Port, MongoDB URI).
- Includes global error-handling middleware to catch and log issues without stopping the server.
