# Praneeta Pradhan — Portfolio

Personal portfolio of Praneeta Pradhan, UI/UX designer and web developer.

Live site: https://praneeta-portfolio.vercel.app

## Tech stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4 (theme tokens live in `src/index.css`)
- EmailJS (contact form), react-slick (projects carousel), Vercel Analytics
- Icons: lucide-react, react-icons

## Getting started

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
npm run build     # type-check and build to dist/
npm run preview   # preview the production build
npm run lint      # run ESLint
```

## Environment variables

The contact form needs EmailJS credentials in a `.env` file at the project root:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

## Project structure

```
src/
  App.tsx              Page layout (section order)
  index.css            Theme colors, shared component classes, animations
  data/socialLinks.ts  Email, GitHub and LinkedIn links
  assets/designs/      Design portfolio images (.webp)
  components/
    Hero.tsx           ID card, About Me, Technical Skills
    Timeline.tsx       "My Journey" timeline
    Services.tsx       Services cards
    Projects.tsx       Wraps the two project sections below
    DesignProjects.tsx Design gallery, category filter and detail popup
    CodingProjects.tsx GitHub repos carousel (fetched live from the GitHub API)
    DesignProcess.tsx  Process steps
    Contact.tsx        Contact info and EmailJS form
```

## Updating content

- **Design pieces:** import the image in `DesignProjects.tsx` and add an entry to `columnA` or `columnB`. Set `featured: true` to show it under the default "Featured" filter.
- **Coding projects:** pulled automatically from the GitHub user `Praneetaa`.
- **Timeline:** edit the `events` array in `Timeline.tsx`.
- **Skills / services / process:** edit the arrays at the top of each component.

## Theming

Dark mode is the default. Light mode adds a `.light` class to `<html>` and overrides the color variables in `index.css`. The choice is saved in `localStorage`.
