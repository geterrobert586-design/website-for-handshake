# ROBERT LEON GETER II, LLC — Professional Portfolio

A responsive one-page professional portfolio introducing Robert Leon Geter II, his operations background, current technology skills, learning projects, and an interactive maintenance work-order tracker.

## Features

- Responsive, accessible single-page navigation and portfolio sections
- Honest distinction between hands-on strengths, skills in progress, prototypes, and learning projects
- Interactive work-order demo with add, edit, delete, technician assignment, dates, statuses, and required-field validation
- Sample records, reset-to-samples control, and browser-local persistence with `localStorage`
- SEO metadata and a reduced-motion-aware visual system
- Contact and resume placeholders to replace before publishing; no invented email, social, or resume links

The work-order tracker is a browser demonstration, not a live production system. Records stay in the visitor's browser and are not sent to a server.

## Setup

This project uses Next.js App Router, React, TypeScript, Tailwind CSS, and lucide-react icons. It requires Node.js and pnpm.

1. Install dependencies with `pnpm install`.
2. Start the development server with `pnpm dev`.
3. Open the local URL shown by Next.js (normally `http://localhost:3000`).

No database, paid service, authentication, or API key is required.

## Personalize before sharing

- Update the contact placeholders in `components/portfolio-sections.tsx` with your actual email, GitHub, LinkedIn, and resume PDF details.
- Review experience descriptions and dates for accuracy.
- Update the sample tracker records in `components/work-order-demo.tsx` if you want different demo examples.

## Technologies

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Browser `localStorage` · lucide-react
