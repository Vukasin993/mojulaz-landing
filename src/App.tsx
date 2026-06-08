import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import Features from './components/sections/Features'
import HowItWorks from './components/sections/HowItWorks'
import Pricing from './components/sections/Pricing'
import Testimonials from './components/sections/Testimonials'
import CTABanner from './components/sections/CTABanner'
import PrivacyPolicy from './pages/PrivacyPolicy'

function LandingPage() {
  useScrollReveal()

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/politika-privatnosti" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}
