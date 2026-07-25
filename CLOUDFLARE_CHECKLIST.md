# Cloudflare Pages Deployment Checklist

Complete this checklist before deploying your portfolio to production.

## Pre-Deployment

- [ ] Code changes committed and pushed to `main` branch
- [ ] `npm run build` completes successfully locally
- [ ] No TypeScript errors: `npx tsc --noEmit` passes
- [ ] No linting errors: `npm run lint` passes
- [ ] Resume PDF file exists at `public/resume.pdf`
- [ ] All links are correct and working
- [ ] Images are optimized and load quickly
- [ ] No console errors when testing locally

## Cloudflare Account Setup

- [ ] Cloudflare account created and verified
- [ ] Billing information added (free plan available)
- [ ] Account ID noted from dashboard
- [ ] Default domain configured (if using Cloudflare for DNS)

## GitHub Connection (Recommended)

- [ ] GitHub repository is public or Cloudflare has access
- [ ] Repository has recent commits on `main` branch
- [ ] GitHub Actions workflows are in `.github/workflows/`
- [ ] Deploy workflow references correct `accountId` and `projectName`

## Cloudflare Pages Setup

- [ ] Cloudflare Pages project created
- [ ] GitHub repository connected (or alternative deployment method chosen)
- [ ] Build command set to: `npm run build`
- [ ] Build output directory set to: `dist`
- [ ] Node.js version set to 18 or higher
- [ ] Environment variables configured (if any)

## GitHub Secrets (if using GitHub Actions)

- [ ] `CLOUDFLARE_API_TOKEN` added to repository secrets
- [ ] `CLOUDFLARE_ACCOUNT_ID` added to repository secrets
- [ ] Both secrets verified in Settings > Secrets

## Deployment

- [ ] First deployment triggers automatically or manually
- [ ] Deployment completes without errors
- [ ] Build logs show successful build
- [ ] Deployment URL is accessible

## Post-Deployment Testing

### Basic Functionality
- [ ] Portfolio loads at deployment URL
- [ ] Homepage displays correctly
- [ ] All navigation links work
- [ ] Page layout is responsive on mobile
- [ ] 3D animations render (if supported)

### Feature Testing
- [ ] "Explore My Work" button navigates to work section
- [ ] Resume button triggers download
- [ ] Contact pop-up appears after resume download
- [ ] Pop-up shows email and phone links
- [ ] Email link opens mail client
- [ ] Phone link works on mobile devices
- [ ] All social links (LinkedIn, GitHub, Medium) work
- [ ] "Email Me" button functions

### Performance
- [ ] Page loads in under 3 seconds
- [ ] Lighthouse score is acceptable (>90 preferred)
- [ ] No console errors or warnings
- [ ] CSS and JavaScript files load correctly
- [ ] Images load properly

### Functionality Across Browsers
- [ ] Chrome/Edge - Works correctly
- [ ] Firefox - Works correctly
- [ ] Safari - Works correctly
- [ ] Mobile browsers - Responsive and functional

## Domain Configuration (Optional)

- [ ] Custom domain added to Cloudflare Pages project
- [ ] DNS records updated correctly
- [ ] Domain resolves to deployment
- [ ] SSL/TLS certificate automatically provisioned
- [ ] HTTPS works and is enforced

## Ongoing Maintenance

- [ ] Set up monitoring for deployment status
- [ ] Enable preview deployments for pull requests
- [ ] Document deployment process for team members
- [ ] Plan regular content updates
- [ ] Schedule periodic security audits

## Troubleshooting Reference

**Issue**: Build fails with "npm: not found"
- Solution: Ensure Node.js 18+ is installed

**Issue**: Resume PDF returns 404
- Solution: Add PDF file to `public/` folder and rebuild

**Issue**: 3D animations don't render
- Solution: Check WebGL support; fallback content should display

**Issue**: Deployment URL is slow
- Solution: Check Cloudflare Analytics; optimize large assets

## Important Links

- **Cloudflare Dashboard**: https://dash.cloudflare.com/
- **Pages Documentation**: https://developers.cloudflare.com/pages/
- **Project Settings**: https://dash.cloudflare.com/pages
- **Analytics**: https://dash.cloudflare.com/analytics

## Final Verification

- [ ] Share deployment URL with stakeholders
- [ ] Collect feedback on functionality
- [ ] Monitor for errors/issues in first 24 hours
- [ ] Document any issues encountered
- [ ] Update documentation as needed

---

**Checklist Version**: 1.0
**Last Updated**: 2026-07-25

✅ Once all items are checked, your portfolio is ready for production!
