# Cloudflare Pages Deployment Guide

This guide walks you through deploying the devendra-portfolio to Cloudflare Pages.

## Prerequisites

1. **Cloudflare Account** - Sign up at https://dash.cloudflare.com/
2. **GitHub Account** - For repository connection (recommended for CI/CD)
3. **Node.js 18+** - For local builds
4. **Wrangler CLI** (optional) - For manual deployment via CLI
   ```bash
   npm install -g @cloudflare/wrangler
   ```

## Setup Methods

### Method 1: GitHub Actions (Recommended - Automatic)

This method provides automatic deployment whenever you push to the `main` branch.

#### Step 1: Connect GitHub Repository to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** > **Create a project**
3. Select **Connect to Git**
4. Authorize and connect your GitHub account
5. Select the `devendra-portfolio` repository
6. Click **Begin setup**

#### Step 2: Configure Build Settings

1. **Production branch**: `main`
2. **Build command**: `npm run build`
3. **Build output directory**: `dist`
4. **Node.js version**: 18 or later

#### Step 3: Add Environment Variables (if needed)

In Cloudflare Pages project settings, add any required environment variables under **Settings** > **Environment variables**.

#### Step 4: Deploy

1. Complete the setup
2. Cloudflare will automatically build and deploy from the `main` branch
3. Preview deployments are created for pull requests

#### GitHub Secrets (Optional - for manual GitHub Actions)

If using the provided `.github/workflows/deploy.yml`, add these secrets to your GitHub repository:

1. Go to **Settings** > **Secrets and variables** > **Actions**
2. Add `CLOUDFLARE_API_TOKEN`:
   - Create at https://dash.cloudflare.com/profile/api-tokens
   - Scope: `Cloudflare Pages` - Edit
3. Add `CLOUDFLARE_ACCOUNT_ID`:
   - Found at https://dash.cloudflare.com/ (bottom left corner)

### Method 2: Wrangler CLI (Manual)

#### Step 1: Install Wrangler

```bash
npm install -g @cloudflare/wrangler
```

#### Step 2: Authenticate

```bash
wrangler login
```

This opens a browser to authorize Wrangler with your Cloudflare account.

#### Step 3: Update wrangler.toml

Edit `wrangler.toml` and fill in your credentials:
```toml
account_id = "your-account-id"  # From Cloudflare dashboard
```

#### Step 4: Deploy

```bash
npm run build
wrangler pages deploy dist
```

## Post-Deployment

### Verify Deployment

1. Visit your Cloudflare Pages URL (format: `https://[project-name].[your-domain].pages.dev`)
2. Test all features:
   - Navigation menu
   - Resume download (triggers the contact pop-up)
   - 3D animations (if WebGL is supported)
   - Responsive design on mobile

### Custom Domain (Optional)

1. In Cloudflare Pages project settings, go to **Custom domains**
2. Add your domain
3. Follow the DNS configuration instructions

### Monitor Deployments

- View deployment history in Cloudflare Pages dashboard
- Preview deployments are created for pull requests
- Production deployments are created for commits to `main`

## Troubleshooting

### Build Fails

**Issue**: Build command times out or fails

**Solution**:
- Check `npm run build` works locally
- Ensure all dependencies are in `package.json`
- Verify Node.js version is 18+

### Large Bundle Warnings

**Issue**: Build shows chunk size warnings

**Solution**:
- This is a warning, not an error
- The app still deploys and works fine
- Consider code-splitting large components if needed

### Resume.pdf Not Found

**Issue**: Resume download returns 404

**Solution**:
1. Ensure `resume.pdf` exists in the `public/` folder
2. Files in `public/` are copied to `dist/` during build
3. Rebuild and redeploy after adding the file

### Environment Variables Not Working

**Issue**: Environment variables are undefined

**Solution**:
- For client-side code, prefix with `VITE_`: `VITE_API_URL`
- Access in code: `import.meta.env.VITE_API_URL`
- Restart dev server after updating `.env`

## Build Output

The build creates an optimized production build in the `dist/` folder:

```
dist/
├── index.html                          (1.2 KB)
├── assets/
│   ├── index-[hash].css               (29.4 KB)
│   ├── index-[hash].js                (363 KB)
│   ├── HeroCanvas-[hash].js           (4.6 KB)
│   ├── AppCanvas-[hash].js            (0.8 KB)
│   └── DeviceShowcase-[hash].js       (890 KB)
└── resume.pdf                          (if in public/)
```

## Performance Tips

1. **Images**: Convert large images to WebP format
2. **Fonts**: Load fonts from local or optimized CDN
3. **Code Splitting**: Use dynamic imports for large components
4. **Compression**: Cloudflare automatically compresses responses

## Security

- Cloudflare Pages provides DDoS protection and SSL/TLS
- No sensitive credentials should be in code; use environment variables
- API keys should be stored in environment variables, not source code

## Support

- **Cloudflare Docs**: https://developers.cloudflare.com/pages/
- **GitHub Issues**: Create issues in your repository
- **Community**: Discuss on Cloudflare Community forums

---

**Last Updated**: 2026-07-25
**Portfolio Version**: 1.0.0
