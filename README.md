# Peter (Xinpei Ye) Portfolio

A clean, professional personal portfolio website built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Project Structure

```txt
src/
  app/
    about/page.tsx
    contact/page.tsx
    projects/page.tsx
    page.tsx
    layout.tsx
    globals.css
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    projects/
      ProjectCard.tsx
    ui/
      Section.tsx
  data/
    site.ts
    projects.ts
  types/
    project.ts
public/
  resume/
    peter-xinpei-ye-resume.pdf
```

## Customize Content

Update these files first:

- `src/data/site.ts`
  - Name, subtitle, intro text
  - Email / LinkedIn / GitHub
  - Resume path if changed
- `src/data/projects.ts`
  - Replace placeholder projects with your real projects
  - Update GitHub and Live Demo URLs
- `src/app/about/page.tsx`
  - Replace education and profile placeholder text

## Run Locally (Exact Steps)

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open:
   - [http://localhost:3000](http://localhost:3000)

## Production Check (Exact Steps)

1. Run lint:
   ```bash
   npm run lint
   ```
2. Run production build:
   ```bash
   npm run build
   ```
3. (Optional) Run production server:
   ```bash
   npm run start
   ```

## Deploy to Netlify (Exact Steps)

### Option A: Netlify UI (recommended)

1. Push this repository to GitHub.
2. In Netlify, click **Add new site** > **Import an existing project**.
3. Select your GitHub repo.
4. Netlify should auto-detect Next.js settings.
5. Confirm and deploy.

If prompted manually, use:
- Build command: `npm run build`
- Publish directory: `.next`

### Option B: Netlify CLI

1. Install Netlify CLI (global):
   ```bash
   npm install -g netlify-cli
   ```
2. Log in:
   ```bash
   netlify login
   ```
3. Deploy draft preview:
   ```bash
   netlify deploy
   ```
4. Deploy production:
   ```bash
   netlify deploy --prod
   ```

## Notes

- The resume file is currently a placeholder at:
  - `public/resume/peter-xinpei-ye-resume.pdf`
- Replace it with your real PDF and keep the same filename/path to avoid code changes.
