# Alexander — Personal Brand Landing Page

## Overview
A production-quality personal brand landing page for Alexander, a Lead Product Manager in enterprise SaaS. The page features a modern, minimalist design with deep indigo/slate background and pink accents.

## Project Structure

```
client/
├── public/
│   ├── avatar.jpg              # Profile avatar image
│   ├── og-thumbnail.png        # Open Graph social preview image
│   ├── favicon.ico/.png        # Favicon files
│   ├── apple-touch-icon.png    # iOS icon
│   └── agile-sdlc.pdf          # Agile SDLC map PDF
├── src/
│   ├── components/
│   │   ├── ArticleLayout.tsx   # Shared layout for article pages
│   │   ├── NavButtons.tsx      # Navigation buttons with active state
│   │   ├── Section.tsx         # Reusable section wrapper
│   │   ├── WorkGrid.tsx        # Work cards grid
│   │   ├── About.tsx           # Public Thinking section (channels + article cards)
│   │   └── Contact.tsx         # Contact section with form
│   │   └── ui/                 # Shadcn UI components
│   ├── pages/
│   │   ├── ArticleMetrics1.tsx # Episode 1: Why Most SaaS Metrics Lie to You
│   │   ├── ArticleMetrics2.tsx # Episode 2: MRR Is Not Revenue
│   │   └── ArticleMetrics3.tsx # Episode 3: Churn Is a Lagging Indicator
│   ├── config/
│   │   └── links.ts            # All external links (EDIT HERE)
│   ├── App.tsx                 # Main application component with wouter routing
│   ├── main.tsx                # Entry point with Router + QueryClient providers
│   └── index.css               # Tailwind styles and custom properties
└── index.html                  # HTML template with SEO meta tags
```

## How to Run

```bash
npm install
npm run dev
```

## Routing

The app uses wouter for client-side routing:

| Path | Component |
|------|-----------|
| `/` | Main SPA (home/work/about/contact sections) |
| `/articles/why-saas-metrics-lie` | Episode 1 article page |
| `/articles/mrr-is-not-revenue` | Episode 2 article page |
| `/articles/churn-lagging-indicator` | Episode 3 article page |

## Where to Change Things

### Links (Single Source of Truth)
Edit `client/src/config/links.ts` to update all external URLs.

### Content
- **Hero content**: Edit `client/src/App.tsx` (MainPage component)
- **Work cards**: Edit `client/src/components/WorkGrid.tsx` (workCards array)
- **Public Thinking channels**: Edit `client/src/components/About.tsx` (thinkingCards array)
- **Article series cards**: Edit `client/src/components/About.tsx` (articleCards array)
- **Article content**: Edit `client/src/pages/ArticleMetrics1/2/3.tsx`
- **Contact intro**: Edit `client/src/components/Contact.tsx`

### Avatar Image
Replace `client/public/avatar.jpg` with your profile photo.

### SEO
Edit `client/index.html` to update title, meta description, and Open Graph tags.

## Features
- Smooth fade transitions between main sections
- Active section highlighting
- Responsive design (desktop/tablet/mobile)
- Contact form sending emails via Resend API to 855.a.s.k@gmail.com
- "Key SaaS Metrics & Analytics" essay series (3 articles with prev/next navigation)
- Open Graph thumbnail for LinkedIn/Twitter previews
- Custom favicon

## Design Tokens
- Background: #2F334A (deep indigo/slate)
- Accent: #E45A86 (pink)
- Text: #EAEAF0 (off-white)
- Divider: white at 15% opacity

## Tech Stack
- Vite + React + TypeScript
- TailwindCSS
- Shadcn UI components
- wouter (client-side routing)
- React Hook Form + Zod for form validation
- Resend (email delivery)
