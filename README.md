# Sairr Website

Thoughtful travel website for [Sairr](https://sairr.in) — curated experiences for seniors and families.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (base-nova)
- **Framer Motion** — scroll & entrance animations
- **Zod + React Hook Form** — contact form validation

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, trust signals, experiences preview, testimonials, FAQ |
| `/experiences` | All curated travel experiences |
| `/experiences/[slug]` | Individual experience detail (sales page) |
| `/why-sairr` | Why Sairr, how it works, safety & family benefits |
| `/about` | Founder-led about page |
| `/contact` | WhatsApp / call / email + enquiry form |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/              # Pages & routing
├── components/
│   ├── home/         # Home page sections
│   ├── experiences/  # Experience cards
│   ├── forms/        # Contact form
│   ├── layout/       # Header, Footer
│   ├── shared/       # Reusable UI (FadeIn, SectionHeading, etc.)
│   └── ui/           # shadcn components
├── data/             # Static content (experiences, FAQs, site config)
└── lib/              # SEO helpers, Zod schemas
```

## SEO

- Per-page `metadata` via `createMetadata()` helper
- `sitemap.xml` and `robots.txt` auto-generated
- JSON-LD structured data (Organization, TouristTrip)

## Images

Placeholder images use [picsum.photos](https://picsum.photos). Replace `imageSeed` values in `src/data/experiences.ts` with real Sairr photography when available.
