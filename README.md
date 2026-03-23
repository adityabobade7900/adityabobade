# 🚀 Aditya Bobade — Portfolio Deployment Guide

## 📁 File Structure
```
portfolio/
├── index.html        ← Main HTML file
├── style.css         ← All styles (Dark/Light theme)
├── script.js         ← All interactivity
├── assets/
│   └── Aditya_Bobade_Resume.pdf
└── README.md
```

---

## ⚡ Run Locally

### Option 1: VS Code Live Server (Recommended)
1. Install [VS Code](https://code.visualstudio.com/)
2. Install **Live Server** extension (Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**
4. Opens at `http://localhost:5500`

### Option 2: Python HTTP Server
```bash
# Navigate to portfolio folder
cd portfolio

# Python 3
python -m http.server 8080

# Open browser → http://localhost:8080
```

### Option 3: Node.js
```bash
npx serve .
# Opens at http://localhost:3000
```

---

## 🌐 Deploy on GitHub Pages (FREE)

1. **Create a GitHub repo** named `portfolio` (or `yourusername.github.io`)
2. Push files:
```bash
git init
git add .
git commit -m "🚀 Initial portfolio launch"
git remote add origin https://github.com/adityabobade/portfolio.git
git push -u origin main
```
3. Go to repo → **Settings** → **Pages**
4. Source: `Deploy from a branch` → Branch: `main` → Folder: `/ (root)`
5. Save → Live in ~2 minutes at `https://adityabobade.github.io/portfolio`

---

## 🔷 Deploy on Netlify (Recommended — Fastest)

### Drag & Drop (Easiest):
1. Go to [netlify.com](https://netlify.com) → Sign up free
2. Drag the entire `portfolio/` folder onto the Netlify dashboard
3. **Live in 30 seconds** with a URL like `https://aditya-portfolio.netlify.app`

### CLI Method:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir .
```

### Git-connected (Auto-deploy on push):
1. Push to GitHub
2. Netlify → "Add new site" → "Import from GitHub"
3. Select repo → Deploy
4. Every `git push` auto-deploys ✅

---

## 🔧 Customization Checklist

| Item | Where to Change |
|------|----------------|
| Your name/title | `index.html` → Hero section |
| Resume PDF | Replace `assets/Aditya_Bobade_Resume.pdf` |
| Email address | `index.html` → Contact section (2 places) |
| GitHub URL | `index.html` + `script.js` → PROJECTS array |
| LinkedIn URL | `index.html` → Hero + Footer |
| Projects data | `script.js` → `PROJECTS` array |
| Skills data | `script.js` → `SKILLS` array |
| Metrics counters | `script.js` → `METRICS` array |
| Profile photo | Replace `.about-avatar` div with `<img>` tag |

---

## 🖼️ Adding a Real Profile Photo

Replace the avatar initials div in `index.html`:
```html
<!-- Find this: -->
<div class="about-avatar">
  <div class="avatar-initials">AB</div>
</div>

<!-- Replace with: -->
<div class="about-avatar">
  <img src="assets/profile.jpg" alt="Aditya Bobade"
       style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />
</div>
```

---

## 📊 Adding Real Power BI Screenshots

1. Add screenshots to `assets/dashboard/`
2. In `index.html`, replace `.slide-mockup` divs with:
```html
<img src="assets/dashboard/overview.png" alt="FinSight Overview" />
```

---

## 🎨 Change Accent Color

In `style.css`, change the CSS variable:
```css
:root {
  --accent: #00d4ff;    /* Change to any color */
  --accent-2: #7c3aed; /* Secondary gradient color */
}
```

---

## ✅ Performance Tips
- Compress images with [squoosh.app](https://squoosh.app)
- Minify CSS/JS for production with [minify.minifier.org](https://minify.minifier.org)
- Add `<link rel="preload">` for critical resources
- Use WebP format for images

---

## 📞 Need Help?

If you have any questions, suggestions, or run into any issues, feel free to reach out:

| Platform    | Link                                                                          |
|-------------|-------------------------------------------------------------------------------|
| 💼 LinkedIn  | [linkedin.com/in/adityabobade](https://linkedin.com/in/adityabobade)          |
| 📧 Email     | [bobade1436@gmail.com](mailto:bobade1436@gmail.com)                           |

---
