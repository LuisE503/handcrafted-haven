# Handcrafted Haven

Handcrafted Haven is an artisanal e-commerce web application built for CSE 341 using Next.js App Router, React, and TypeScript.

## Final Submission Links (W07)

- Application URL (Vercel): https://handcrafted-haven-beta-six.vercel.app
- Repository: https://github.com/LuisE503/handcrafted-haven
- Project Board: https://github.com/users/LuisE503/projects/2/views/1
- Group Video Demonstration: Add your video URL here

## Implemented Functionality

- Multi-page App Router flow:
	- Home page
	- Shop catalog page
	- Dynamic product detail page
	- Cart and checkout summary page
- Product catalog with mock data layer in src/lib/data.ts
- Shop search, category filtering, and sorting by featured or price
- Product detail route per item (shop/[slug])
- Add to cart from product detail page
- Cart persistence using localStorage
- Cart quantity update and remove item actions
- Checkout simulation with order summary
- Responsive layout for desktop and mobile
- Project-level metadata and navigation/footer components

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- CSS Modules + global CSS
- ESLint

## Run Locally

Prerequisites:
- Node.js 18+
- npm

Commands:

```bash
npm install
npm run dev
```

Open http://localhost:3000

Other scripts:

```bash
npm run lint
npm run build
npm run start
```

## Project Structure

```text
src/
	app/
		cart/
		shop/
			[slug]/
		globals.css
		layout.tsx
		page.tsx
	components/
		ProductCard.tsx
		ProductDetailClient.tsx
		SiteFooter.tsx
		SiteHeader.tsx
	lib/
		cart.ts
		data.ts
		types.ts
```

## Team

- Luis Escarate
- Efrain Ochoa
- Prates Baptista
