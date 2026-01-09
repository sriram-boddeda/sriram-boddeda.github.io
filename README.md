# Sriram Boddeda Portfolio

This repository contains the code for my personal software developer portfolio built with **Next.js** and **TailwindCSS**.

![Screenshot of the site](./public/screenshot.png)

## Editing Your Portfolio

All profile information and project data live in [`data/portfolioData.json`](./data/portfolioData.json). Update this file to customize the site:

- `about` section for your name, bio and profile image.
- `projects`, `experiences`, `education` and `technicalSkills` arrays to showcase your work.
- Upload images or your resume in the `public` directory and reference them in the JSON.

After editing run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview your changes.

## Deployment

Create a production build with:

```bash
npm run build
```

The app can be deployed to platforms such as [Vercel](https://vercel.com) or any static hosting provider.

## Customizing the Design

Global colors and theme settings are defined in [`app/globals.css`](./app/globals.css). Tailwind configuration resides in [`tailwind.config.ts`](./tailwind.config.ts).

## SEO + Analytics

- Sitemap and robots are served as static files from `public/`:
	- `public/sitemap.xml` → `/sitemap.xml`
	- `public/robots.txt` → `/robots.txt`

### Google Analytics (optional)

Set an environment variable to enable GA4 pageview tracking:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Feel free to tweak the styles and components to match your own brand!

