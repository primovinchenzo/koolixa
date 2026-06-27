# KOOLIXA – B2B Digital Systems & IT Operations Platform

KOOLIXA is a premium marketing website and service platform for an enterprise IT services, co-managed cybersecurity, and digital systems firm. This Next.js platform features a premium modern design system, responsive accessibility structures, and a serverless intake pipeline.

---

## 🚀 Features & Capabilities

- **Resilient Theme Engine:** Zero-flash, blocking CSS-script dark and light mode toggle.
- **Enterprise-Grade Copywriting:** Pure B2B context, clear service-level agreements (SLAs), and realistic operational capabilities (no placeholder lorem ipsum).
- **Proactive Intake Form:** Real-time form validations, dynamic submit indicators, and secure API Route handler processing.
- **Dynamic SEO & Sitemap:** Next.js Metadata API integration, dynamic `sitemap.ts` generation, and search compliance rules (`robots.txt`).
- **Validated Security Posture:** Security headers configured via `vercel.json` (X-Frame-Options, X-Content-Type-Options, etc.).
- **Automatic CI Pipeline:** GitHub actions automated workflow checks TypeScript compiler, ESLint, and production builds.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 15 (App Router, Server Components)
- **Language:** TypeScript
- **Styling:** Vanilla CSS Modules (Strict token adherence via CSS variables)
- **Deployments:** Vercel

---

## 📂 Project Architecture

```text
koolixa/
├── .github/workflows/    # CI pipelines (ESLint, compilation, build check)
├── public/               # Static assets & icons
├── src/
│   ├── app/              # Routing routes, dynamic posts, site configurations
│   │   ├── (marketing)   # Subpages (about, trust, contact, careers, why-koolixa)
│   │   ├── api/          # Route handlers (contact validation)
│   │   ├── services/     # Capability descriptions & details
│   │   ├── globals.css   # Main resets and scrollbars
│   │   └── layout.tsx    # Core fonts integration, Header, Footer
│   ├── components/
│   │   ├── common/       # ThemeToggle, ContactForm
│   │   └── layout/       # Sticky Header, pulse Footer
│   └── styles/
│       └── variables.css # Central color theme parameters
├── README.md             # Developer guidelines
└── vercel.json           # Production response headers
```

---

## 💻 Local Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-org/koolixa.git
   cd koolixa
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Establish Local Settings:**
   Copy the environment variables template (if any integration variables are added later):
   ```bash
   cp .env.example .env.local
   ```

4. **Boot Up Dev Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the local interface.

---

## 🛡️ Quality Gates & Verification

Run these local checks before committing changes:

- **Typecheck Verification:**
  ```bash
  npx tsc --noEmit
  ```
- **Lint Check Audit:**
  ```bash
  npm run lint
  ```
- **Compile Production Bundle:**
  ```bash
  npm run build
  ```

---

## 🌐 Vercel Deployment

1. **Import Project:** Connect your GitHub repository to your Vercel Dashboard.
2. **Environment Configuration:** Add any necessary API tokens.
3. **Domain Settings:** Map your domain records. Vercel handles SSL certificates and deployment branches automatically.
