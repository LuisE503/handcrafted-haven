# W07 Delivery Guide - Handcrafted Haven

This guide helps you complete all rubric artifacts with zero missing items.

## 1) Final rubric checklist

- Application URL (Vercel): required
- Project Board URL: required
- Repository URL: required
- Group Video URL: required
- Project functionality demo: required

Use this exact checklist before submitting:

- [ ] Vercel URL opens without runtime errors
- [ ] GitHub repository URL is public and updated
- [ ] Project board URL is visible and current
- [ ] Video includes team members and functionality demo
- [ ] Video includes challenge, success, and insight

## 2) Local pre-deploy validation

If Node.js is not installed, install Node.js LTS from:
https://nodejs.org/

Then in PowerShell, run:

```powershell
node -v
npm -v
```

From project root, run:

```powershell
npm install
npm run lint
npm run build
```

If lint/build fails, fix errors first and rerun the same commands.

## 3) Push latest code to GitHub

```powershell
git status
git add .
git commit -m "feat: complete W07 final project functionality"
git push origin main
```

If you already committed, only run:

```powershell
git push origin main
```

## 4) Deploy to Vercel (step by step)

1. Go to https://vercel.com and sign in with GitHub.
2. Click Add New -> Project.
3. Import repository: LuisE503/handcrafted-haven.
4. Framework preset: Next.js (auto-detected).
5. Root directory: keep default (project root).
6. Build command: keep default `next build`.
7. Output directory: keep default `.next`.
8. Environment variables: none needed for current mock-data version.
9. Click Deploy.
10. Wait until status is Ready.
11. Open deployed URL and test these routes:
   - /
   - /shop
   - /shop/terracotta-vase
   - /cart
12. Copy deployed URL and place it in README and your Canvas submission.

## 5) Exact speaking script for your video

Use this as your spoken script. Read it naturally.

"Hello, we are Team Handcrafted Haven for CSE 341.

In this final delivery we completed a full multi-page artisanal e-commerce experience using Next.js App Router, React, and TypeScript.

First, this is our landing page. From here users can navigate to the Shop page, review our artisanal values, and access the cart.

Now in Shop, users can browse our product catalog, search by text, filter by category, and sort by featured products or by price.

Next, opening a product detail page shows complete information including description, material, origin, rating, stock, and quantity selection.

From this page, we can add a product to the cart.

Now in Cart, users can review selected items, change quantities, remove products, and see the order summary with subtotal, shipping, and total.

We also implemented a checkout simulation that clears the cart and confirms completion.

A key technical success was splitting product data into a separate data layer and creating reusable components for header, footer, and product cards.

One challenge was maintaining responsive layouts and consistent styling without a CSS framework.

One insight was that small board-linked tasks improved coordination and made progress visible across sprint checkpoints.

For project artifacts, our repository and board are updated, and this deployed Vercel URL is fully functional.

Thank you."

## 6) What to show during the video (in order)

1. Show repository URL and latest commit.
2. Show board URL and task columns.
3. Open Vercel URL homepage.
4. Navigate to Shop.
5. Demonstrate search and filters.
6. Open a product details route.
7. Add to cart.
8. Open cart and edit quantity.
9. Remove one item.
10. Complete checkout simulation.
11. Return to README and show links section.

## 7) Canvas submission template (copy/paste)

Application URL:
- <PASTE VERCEL URL>

Project Board:
- https://github.com/users/LuisE503/projects/2/views/1

Repository:
- https://github.com/LuisE503/handcrafted-haven

Group Video Demonstration:
- <PASTE VIDEO URL>

Short completion summary:
- We completed a full multi-page Next.js e-commerce flow including catalog, product details, cart persistence, quantity updates, remove item actions, and checkout summary.
- The application is deployed and renders successfully on Vercel.
- Board and repository reflect final scope and project progress.
