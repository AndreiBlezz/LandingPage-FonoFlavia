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
