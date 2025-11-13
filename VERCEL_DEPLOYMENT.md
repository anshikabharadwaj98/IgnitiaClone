# Deploying to Vercel

This guide will help you deploy your IGNITIA 2K25 website to Vercel.

> **Note**: This project is currently configured as a static website deployment. If you add API routes later, you'll need to set up serverless functions.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup) (free tier works)
2. [Vercel CLI](https://vercel.com/docs/cli) installed (optional, but recommended)
3. Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Methods

### Method 1: Deploy via Vercel Dashboard (Recommended for First-Time)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the configuration from `vercel.json`

3. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your application
   - You'll get a live URL like `https://your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # For preview deployment
   vercel
   
   # For production deployment
   vercel --prod
   ```

## Configuration

The project is already configured for Vercel static deployment with:

- ✅ `vercel.json` - Static site deployment configuration
- ✅ `.vercelignore` - Files to exclude from deployment
- ✅ `npm run build` - Builds the frontend to `dist/public/`
- ✅ Security headers configured in `vercel.json`

## Important Notes

### Current Deployment Type

This project is currently deployed as a **static website** (no backend API). This means:
- ✅ Fast, reliable hosting with global CDN
- ✅ No serverless cold starts
- ✅ Free tier friendly
- ✅ Perfect for landing pages, portfolios, and marketing sites

### Adding Backend API Routes (Future Enhancement)

⚠️ **CURRENT STATUS**: 
- This is configured as a **static-only website**
- The `vercel.json` routes ALL paths (including `/api/*`) to `index.html`
- There is NO `api/` directory in the project
- All routing is client-side only

**To add backend functionality, you will need to:**

1. **Create an `api/` directory** at the project root with serverless functions:
   ```typescript
   // api/hello.ts (create this file)
   import type { VercelRequest, VercelResponse } from '@vercel/node';
   
   export default function handler(req: VercelRequest, res: VercelResponse) {
     res.status(200).json({ message: "Hello from API!" });
   }
   ```

2. **Update vercel.json** to exclude API routes from SPA rewriting:
   ```json
   {
     "rewrites": [
       {
         "source": "/((?!api/).*)",
         "destination": "/index.html"
       }
     ]
   }
   ```
   This pattern ensures `/api/*` paths are NOT rewritten to `index.html`.

3. **Install dependencies**:
   ```bash
   npm install --save-dev @vercel/node
   ```

4. **Add a database** (if needed):
   - Vercel Postgres
   - Neon
   - PlanetScale
   - MongoDB Atlas

5. **Set environment variables** in Vercel Dashboard

### Environment Variables

If you need environment variables:
1. In Vercel Dashboard: Settings → Environment Variables
2. Add your variables (e.g., `DATABASE_URL`, `API_KEY`, etc.)
3. Redeploy for changes to take effect

### Custom Domain

To use a custom domain:
1. Go to your project in Vercel Dashboard
2. Settings → Domains
3. Add your custom domain
4. Follow the DNS configuration instructions

## Build Output

After deployment, Vercel will:
- Run `npm run build` which builds your frontend with Vite → `dist/public/`
- Serve all static files from `dist/public/`
- Route all requests to `index.html` for client-side routing (SPA)
- **Note**: `npm start` is NOT used by Vercel for static deployments

## Troubleshooting

### Build Fails
- Check the build logs in Vercel Dashboard
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test

### Want to Add API Routes?
- This is currently a static-only deployment
- See "Adding API Routes (Future)" section above
- You'll need to create an `api/` directory and update `vercel.json`

### 404 Errors
- Check `vercel.json` rewrites configuration
- Ensure SPA routing is set up correctly

## Local Testing

Test your build locally before deploying:

```bash
# Build the project
npm run build

# Verify the build output
ls -la dist/public/

# Serve the build output (install serve if needed)
npx serve dist/public
```

The build should create:
- `dist/public/index.html` - Main HTML file
- `dist/public/assets/` - All bundled JS, CSS, and image files
- `dist/public/favicon.png` - Favicon

## Testing Static Build Locally

To test how the site will work on Vercel:

```bash
# Build the project
npm run build

# Serve it locally with Vite's preview server
npm run preview
```

Or use any static file server:
```bash
npx serve dist/public
```

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch triggers a production deployment
- Pull requests get preview deployments automatically
- You can configure branch deployment settings in Vercel Dashboard

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
