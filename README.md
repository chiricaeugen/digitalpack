# DigitalPack (MVP)

Stack: React + Vite + TailwindCSS + Framer Motion + React Router  
Hosting target: Cloudflare Pages (SPA redirect via `public/_redirects`)

## Rulare locală
1) Deschide folderul în VS Code
2) Deschide Terminal (în VS Code) și rulează:
   - `npm install`
   - `npm run dev`
3) Deschide: http://localhost:5173

## Deploy pe Cloudflare Pages
- Framework preset: React (Vite)
- Build command: `npm run build`
- Build output: `dist`
- Important: fișierul `public/_redirects` este inclus pentru routing.

## Contact form
În `src/pages/Contact.jsx` există un placeholder `FORM_ACTION_URL`.
Când îți faci cont Formspree, înlocuiești cu URL-ul lor.

## Notă
Auth este mock (localStorage) doar ca să poți vedea flow-ul.
La pasul următor îl conectăm la Supabase Auth + DB real.
