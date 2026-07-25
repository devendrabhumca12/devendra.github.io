# Quick Start: Deploy to Cloudflare Pages

Get your portfolio live on Cloudflare Pages in 5 minutes.

## 🚀 Fastest Path (Recommended)

### 1. Prepare Your Code (2 min)
```bash
# Verify build works
npm run build

# Should output to dist/ folder
ls dist/
```

### 2. Connect GitHub (1 min)
1. Go to https://dash.cloudflare.com/pages
2. Click **Create a project** → **Connect to Git**
3. Authorize GitHub and select `devendra-portfolio` repo

### 3. Configure Build (1 min)
Set these values:
- **Production branch**: `main`
- **Build command**: `npm run build`
- **Build output directory**: `dist`

### 4. Deploy (1 min)
Click **Save and Deploy** — done! 🎉

Your portfolio is now live at: `https://devendra-portfolio.[your-account].pages.dev`

---

## 📋 What Gets Deployed

The `dist/` folder contains:
```
dist/
├── index.html (1.2 KB)
├── assets/
│   ├── CSS (~6.3 KB gzipped)
│   ├── JavaScript (~115 KB gzipped)
│   └── 3D assets (~236 MB gzipped)
└── resume.pdf (100 KB)
```

**Total size**: ~370 KB gzipped

---

## ✅ Verify Deployment

After deployment completes:

1. **Visit your site**
   ```
   https://devendra-portfolio.[account-id].pages.dev
   ```

2. **Test key features**
   - [ ] Page loads and looks correct
   - [ ] Navigation menu works
   - [ ] Resume button downloads file
   - [ ] Contact pop-up appears
   - [ ] Mobile layout is responsive

3. **Check for errors**
   - Open browser DevTools (F12)
   - Check Console tab for errors
   - All should be clear

---

## 🔄 Future Deployments

Once connected, **deployments happen automatically**:

```
You push to main branch
↓
GitHub notifies Cloudflare
↓
Cloudflare runs: npm run build
↓
dist/ is deployed automatically
↓
Your site updates within 1-2 minutes
```

**No manual action needed!**

---

## 🌐 Custom Domain (Optional)

Want your own domain? Two options:

### Option A: Use Existing Domain with Cloudflare DNS
1. Update domain's nameservers to Cloudflare
2. In Pages project → Custom domains → Add domain
3. Done!

### Option B: Keep Domain Elsewhere
1. In Pages project → Custom domains → Add domain
2. Create CNAME record in your DNS provider pointing to Cloudflare
3. Done!

---

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Build fails | Run `npm run build` locally to debug |
| Resume 404 | Check `public/resume.pdf` exists |
| Slow loading | Check bundle size in build output |
| Mobile broken | Check responsive breakpoints in Tailwind |

---

## 📚 Learn More

- **Full deployment guide**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Pre-flight checklist**: [CLOUDFLARE_CHECKLIST.md](./CLOUDFLARE_CHECKLIST.md)
- **Cloudflare Pages docs**: https://developers.cloudflare.com/pages/

---

## 🎯 Next Steps

1. ✅ Build succeeds: `npm run build`
2. ✅ GitHub connected to Cloudflare Pages
3. ✅ Build settings configured
4. ✅ Deployment completes
5. ✅ Site is live and tested

**You're done!** 🚀 Your portfolio is now deployed to Cloudflare Pages.

Updates happen automatically when you push to `main`.

---

**Status**: Ready for Production
**Last Updated**: 2026-07-25
