# Abubakar — Portfolio Website

A production-ready, fully responsive personal portfolio built with **React + Vite + Tailwind CSS**. Frontend-only — no backend, no database, no authentication. Contact form sends email via **EmailJS**.

---

## 1. Project Structure

```
abubakar-portfolio/
├── public/
│   ├── assets/
│   │   ├── images/        # profile.jpg, project-1..5.jpg, favicon.png
│   │   └── cv/             # Abubakar-CV.pdf
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── data/
│   │   ├── projects.js     # project cards content + links
│   │   └── siteConfig.js   # name, email, location, WhatsApp, social links
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

> Note: `assets/images` and `assets/cv` also exist at the project root as the
> original source files. The copies inside `public/assets/` are what Vite
> actually serves — always edit/replace files in `public/assets/`.

---

## 2. Installation

Requires Node.js 18+.

```bash
cd abubakar-portfolio
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 3. EmailJS Setup (Contact Form)

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages directly from the browser — no backend needed.

1. **Create an account** at https://www.emailjs.com/ and log in.
2. **Add an Email Service** (e.g. Gmail) under *Email Services* → note the **Service ID**.
3. **Create an Email Template** under *Email Templates*. Use these variable names in your template so they match the code (`src/components/Contact.jsx`):
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
   Note the **Template ID**.
4. **Get your Public Key** under *Account* → *General*.
5. In the project root, copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

6. Fill in your real values in `.env`:

   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

7. Restart the dev server (`npm run dev`) so Vite picks up the new environment variables.

**Important:** `.env` is already listed in `.gitignore`, so your real credentials are never committed to GitHub. Only `.env.example` (empty placeholders) is tracked.

When deploying to Vercel, add the same three variables under **Project Settings → Environment Variables** (see deployment section below).

---

## 4. GitHub Upload Instructions

```bash
cd abubakar-portfolio
git init
git add .
git commit -m "Initial commit: Abubakar portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Replace `<your-username>/<your-repo>` with your actual GitHub repository.

---

## 5. Vercel Deployment Instructions

1. Push the project to GitHub (see above).
2. Go to https://vercel.com/ and log in.
3. Click **Add New → Project** and import your GitHub repository.
4. Vercel will auto-detect the Vite framework preset:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Under **Environment Variables**, add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
6. Click **Deploy**.
7. Once live, copy your Vercel URL (e.g. `https://abubakar-portfolio.vercel.app`) and:
   - Update `og:url`, `og:image`, `twitter:image` and the canonical `<link>` in `index.html`.
   - Update the `<loc>` in `public/sitemap.xml` and the `Sitemap:` line in `public/robots.txt`.

---

## 6. Replacing the Profile & Project Images

All images live in `public/assets/images/`. Replace the files **using the exact same filenames** (or update the paths in the source files listed below) and rebuild.

| File | Used in | Recommended size |
|---|---|---|
| `public/assets/images/profile.jpg` | `src/components/Hero.jsx` | ~800×900px, portrait |
| `public/assets/images/project-1.jpg` | `src/data/projects.js` | ~900×600px, landscape |
| `public/assets/images/project-2.jpg` | `src/data/projects.js` | ~900×600px |
| `public/assets/images/project-3.jpg` | `src/data/projects.js` | ~900×600px |
| `public/assets/images/project-4.jpg` | `src/data/projects.js` | ~900×600px |
| `public/assets/images/project-5.jpg` | `src/data/projects.js` | ~900×600px |
| `public/assets/images/favicon.png` | `index.html` | 64×64px (square) |

To rename a file, also update the matching `image` path inside `src/data/projects.js`.

To replace your CV, drop your real PDF in as `public/assets/cv/Abubakar-CV.pdf` (same filename), or update `cvPath` in `src/data/siteConfig.js` if you rename it.

---

## 7. Replacing Facebook and LinkedIn URLs

Open `src/data/siteConfig.js` and update:

```js
social: {
  facebook: "https://facebook.com/your-page",
  linkedin: "https://linkedin.com/in/your-profile",
  whatsapp: `https://wa.me/${whatsappNumber}`,
},
```

These links are used automatically across the Navbar, Contact section and Footer.

---

## 8. Replacing Project URLs

Open `src/data/projects.js` and update the `url` field for each project:

```js
{
  id: "peshawari-chappal-store",
  name: "Peshawari Chappal Store",
  ...
  url: "https://your-real-live-project-url.com",
},
```

Each project's `url` is what the **"View Project"** button opens in a new tab.

---

## 9. Changing the WhatsApp Number

Open `src/data/siteConfig.js` and update:

```js
const whatsappNumber = "923365002942"; // international format, no + or leading 0
```

Use the international format **without** the leading `0` and **without** a `+` (e.g. Pakistan number `0336 5002942` becomes `923365002942`). This single value powers:

- The floating WhatsApp button
- The "Chat on WhatsApp" hero button
- The "Ask About This Project" buttons (with an auto-filled message per project)
- The Contact section and Footer WhatsApp links

Also update `whatsappDisplay` in the same file if you want the visibly printed number (in the Contact section) to look different.

---

## 10. Design System

- **Colors:** White background with a single Facebook-blue accent (`brand-500 = #1877F2`), defined in `tailwind.config.js`.
- **Fonts:** "Plus Jakarta Sans" for headings, "Inter" for body text (loaded via Google Fonts in `index.html`).
- **Components:** Reusable utility classes (`.btn-primary`, `.btn-secondary`, `.btn-whatsapp`, `.card`, `.section`, `.section-py`) are defined in `src/index.css` under `@layer components`.

---

## 11. Notes

- This is a **frontend-only** project — no server, database, or authentication of any kind.
- Contact form emails are sent client-side via EmailJS's public API; no credentials are ever hardcoded, only referenced from environment variables.
- Built for accessibility: semantic HTML, labeled form fields, visible focus states, `aria-label`s on icon-only buttons, and a keyboard-friendly mobile menu.
