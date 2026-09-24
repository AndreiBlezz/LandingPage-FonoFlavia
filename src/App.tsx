import { ClarityAnalytics } from './components/ClarityAnalytics';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { PainPoints } from './components/PainPoints';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { LocationSection } from './components/LocationSection';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Microsoft Clarity Telemetry */}
      <ClarityAnalytics projectId="" />

      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <PainPoints />
        <Services />
        <About />
        <Testimonials />
        <LocationSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}
