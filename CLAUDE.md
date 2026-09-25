# LandingPage - Dra. Flávia Marques Ribeiro (Fonoaudiologia)

React + Vite + Tailwind CSS project for Dra. Flávia Marques Ribeiro (Fonoaudióloga em Guarulhos - SP).

## Development Server

Run `cmd /c npm run dev -- --port 5175` to start Vite on port 5175.

## Project Structure

- `src/App.tsx` - Main page rendering all CRO blocks.
- `src/components/` - Section components (Navbar, Hero, TrustBar, PainPoints, Services, About, Testimonials, Location, FAQ, FinalCTA, FloatingWhatsApp).
- `src/components/ClarityAnalytics.tsx` - Microsoft Clarity tracking snippet integration.

## Telemetry & CRO (Microsoft Clarity)

- Integrated via `ClarityAnalytics` component.
- Primary conversion target: WhatsApp booking (`(11) 2922-0093`).

## Design & Tailwind v4 Build Guidelines

- **Tailwind v4 Theme Tokens**: Declare all custom brand colors in `@theme` in `src/index.css` (or use explicit hex `bg-[#4a0f1d]`). Never use un-mapped utility classes.
- **Image Text Contrast**: Text overlay on images must have explicit dark gradient overlays (`bg-black/60`) ensuring WCAG 4.5:1 contrast.
- **Media Sanitization**: Real photos must be clean, cropped, and presented without raw UI prints or technical labels.
- **Build Verification**: Always verify compiled CSS via `npm run build` before deployment.
