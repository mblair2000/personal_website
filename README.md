# Personal Website

A fast, modern personal website built with **React + Vite + Tailwind CSS**, deployable to **AWS S3 + CloudFront**.

## ✨ Features

- ⚡ Vite for instant dev server and optimized builds
- 🎨 Tailwind CSS with a custom design system
- 🗺️ React Router v6 with lazy-loaded pages
- 📱 Mobile-first responsive design with hamburger menu
- 🔍 Per-page SEO with Open Graph tags (react-helmet-async)
- 📬 Contact form via Formspree (no backend needed)
- 🗂️ Filterable project grid with tag filters
- 📝 Blog with tag filters + pagination
- 🔔 Toast notifications
- 🧩 Modal utility component
- 🛠️ Custom `useForm` and `useScrollSpy` hooks
- 🚀 GitHub Actions CI/CD → S3 + CloudFront invalidation
- 🗺️ Auto-generated `sitemap.xml` + `robots.txt`

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and fill in your values
cp .env.example .env

# 3. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── content/         # ProjectCard, BlogCard
│   └── utility/         # Loader, Modal, SEO
├── pages/               # Home, About, Projects, Blog, Contact, NotFound
├── hooks/               # useForm, useScrollSpy
├── data/                # projects.json, posts.json
├── styles/              # globals.css (Tailwind base)
└── utils/               # cn.js, formatDate.js
```

---

## 🔧 Configuration

### 1. Personalise content

| File | What to update |
|---|---|
| `src/pages/Home.jsx` | Name, headline, tech stack badges |
| `src/pages/About.jsx` | Bio, skills, timeline |
| `src/data/projects.json` | Your projects |
| `src/data/posts.json` | Your blog posts |
| `src/components/layout/Footer.jsx` | Social links |
| `index.html` | Default meta title/description, GA ID |
| `public/robots.txt` | Your domain |
| `vite.config.js` | `hostname` for sitemap |

### 2. Contact form

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and copy the endpoint URL
3. Set `VITE_FORMSPREE_URL` in your `.env`

### 3. Google Analytics

Uncomment the GA script block in `index.html` and replace `G-XXXXXXXX` with your Measurement ID.

---

## 🏗️ Build & Deploy

### Build for production

```bash
npm run build
# Output → ./dist/
```

### Deploy manually to S3

```bash
# Sync all assets with long-term cache
aws s3 sync dist/ s3://YOUR_BUCKET_NAME --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "index.html"

# Upload index.html with no-cache
aws s3 cp dist/index.html s3://YOUR_BUCKET_NAME/index.html \
  --cache-control "no-cache, no-store, must-revalidate"

# Invalidate CloudFront (if using CDN)
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

### Auto-deploy with GitHub Actions

Add these secrets to your GitHub repo (`Settings → Secrets`):

| Secret | Value |
|---|---|
| `AWS_ACCESS_KEY_ID` | IAM user access key |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret |
| `AWS_REGION` | e.g. `us-east-1` |
| `S3_BUCKET_NAME` | Your S3 bucket name |
| `CLOUDFRONT_DISTRIBUTION_ID` | Optional, for cache invalidation |
| `VITE_SITE_URL` | `https://yourwebsite.com` |
| `VITE_FORMSPREE_URL` | Formspree endpoint |
| `VITE_GA_ID` | Google Analytics ID |

Push to `main` → automatic build + deploy.

### AWS S3 Bucket settings

1. Enable **Static Website Hosting** on the bucket
2. Set index document: `index.html`
3. Set error document: `index.html` (for SPA 404 handling)
4. Bucket policy (public read):

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
  }]
}
```

### CloudFront (recommended)

- Origin: your S3 static website endpoint
- Default root object: `index.html`
- Custom error pages: 404 → `/index.html` (200) for SPA routing
- Use an ACM certificate for HTTPS

---

## 🛠️ Development

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build locally
npm run lint     # ESLint
npm run format   # Prettier
```

---

## 🗺️ Roadmap / Future Enhancements

- [ ] Dark mode toggle
- [ ] MDX-based blog posts with syntax highlighting
- [ ] GitHub API integration (live repo stats)
- [ ] Authentication + admin dashboard
- [ ] CMS integration (Contentful or Sanity)
- [ ] Jest + React Testing Library tests

---

## 📄 License

MIT — use freely for your own personal site.
