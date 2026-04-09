# Handcrafted Haven

An artisanal e-commerce web application for curated, ethically sourced home goods.

This is a **CSE 341 group project** built with **Next.js 16** (App Router), **React 19**, and **TypeScript**.

## Project Overview

**Purpose**: To provide consumers with a quality-focused platform to discover and purchase handcrafted, sustainable home goods directly from artisans.

**Tech Stack**:
- Next.js App Router (Server & Client Components)
- React 19 with TypeScript
- CSS Modules & Global Styling
- ESLint for code quality

**Current Features**:
- Responsive landing page with sticky navigation
- Hero section with brand value proposition
- Featured products grid (Newest Arrivals)
- Artisanal values section (Sustainability, Quality, Artisans First)
- Styled footer with project attribution

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation & Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Landing page component
│   ├── layout.tsx        # Root layout with metadata
│   ├── globals.css       # Global styles & design system
│   └── page.module.css   # Page-specific styles
public/               # Static assets
```

## Design System

**Color Palette**:
- Primary: Terracotta (#bc6c5a)
- Secondary: Sage Green (#8a9a5b)
- Accent: Earthy Sand (#d4a373)
- Background: Off-White/Cream (#faf7f2)
- Foreground: Charcoal (#2d2d2d)

**Typography**:
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

## Roadmap (Planned)

- [ ] Product Detail Pages
- [ ] Shopping Cart & Checkout
- [ ] PostgreSQL Database Integration
- [ ] User Authentication
- [ ] Product Filters & Search
- [ ] Admin Dashboard

## Team & Attribution

This project is part of the CSE 341 course group capstone.
