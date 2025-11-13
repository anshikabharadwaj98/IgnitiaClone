# IGNITIA 2K25 - The Ultimate Techno-Cultural Fest

A modern, responsive website for the IGNITIA 2K25 festival at PSIT Kanpur.

## Features

- 🎨 Modern, futuristic UI design
- 📱 Fully responsive across all devices
- 🌙 Dark mode optimized
- ⚡ Built with React + TypeScript + Vite
- 🎯 Fast performance with optimized builds

## Development

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server (Replit)**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5000`

3. **Build for Vercel deployment**
   ```bash
   npm run build
   ```
   Creates static site in `dist/public/`

4. **Build for Replit deployment** (includes backend server)
   ```bash
   npm run build:replit
   npm start
   ```

### Scripts Explained

- `npm run dev` - Development server (Replit)
- `npm run build` - Build static site for Vercel
- `npm run build:replit` - Build full-stack app for Replit
- `npm start` - Run Replit production server (not used by Vercel)
- `npm run preview` - Preview static build locally

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this project is to Vercel. See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for detailed instructions.

**Quick deploy:**
1. Push your code to GitHub
2. Import the repository to Vercel
3. Deploy automatically with zero configuration needed

### Deploy to Replit

This project is already configured to run on Replit. Simply:
1. Click the "Run" button
2. The app will start on port 5000
3. Use the Replit "Publish" button to make it publicly accessible

## Project Structure

```
├── attached_assets/     # Static assets (images, etc.)
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── lib/         # Utilities and helpers
│   │   └── App.tsx      # Main app component
│   └── index.html       # HTML template
├── server/              # Backend server (Replit only)
│   ├── app.ts          # Express app (template for future API routes)
│   ├── routes.ts       # API routes (template)
│   ├── storage.ts      # Data storage interface
│   └── index.ts        # Server entry point
└── shared/              # Shared types and schemas
    └── schema.ts        # Data models

Note: For Vercel deployment, only the client/ directory is used (static site).
The server/ directory is for Replit deployment with backend capabilities.
```

## Tech Stack

### Frontend
- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Shadcn/ui** - UI components
- **Wouter** - Client-side routing
- **TanStack Query** - Data fetching and caching
- **Framer Motion** - Animations

### Backend (Ready for expansion)
- **Express** - Web framework
- **Drizzle ORM** - Database ORM
- **Zod** - Schema validation

## Adding Features

### Adding a New Page

1. Create a new component in `client/src/pages/`
2. Register the route in `client/src/App.tsx`
3. Add navigation links as needed

### Adding API Routes (For Future Backend Features)

**Current Status**: This is a static website with no backend API.

When you need backend functionality:

**For Vercel:**
1. Create serverless functions in an `api/` directory
2. Update `vercel.json` rewrites to exclude `/api/*` paths
3. See detailed instructions in `VERCEL_DEPLOYMENT.md`

**For Replit:**
1. Add routes in `server/app.ts`
2. Update the storage interface in `server/storage.ts`
3. Use the `build:replit` script instead of `build`

## Environment Variables

Currently, no environment variables are required for the base application.

When adding features that need environment variables:
- For Replit: Use the Secrets tab
- For Vercel: Add in Project Settings → Environment Variables

## License

MIT

## Support

For issues or questions, please open an issue in the repository.
