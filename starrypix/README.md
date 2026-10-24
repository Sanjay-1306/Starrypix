# Starrypix

Starrypix is a React site built with Vite.

## Run locally

1. Install Node.js (LTS).
2. In this folder, install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

## Build and deploy

Create the production site:

```bash
npm install
npm run build
```

The generated static site is in `dist/`. Deploy that folder to a static hosting provider, or connect this project folder to a provider that supports Vite and configure:

- Build command: `npm run build`
- Output directory: `dist`

The video assets in `public/` are required by the site and are large (about 900 MB total). Check your hosting provider's file-size, storage, and bandwidth limits before deploying.
