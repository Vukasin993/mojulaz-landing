import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BuildingSection from './components/sections/BuildingSection'
import PhoneScrollSection from './components/sections/PhoneScrollSection'
import Pricing from './components/sections/Pricing'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import CTABanner from './components/sections/CTABanner'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import AboutUs from './pages/AboutUs'

function LandingPage() {
  useScrollReveal()

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <BuildingSection />
        <PhoneScrollSection />
        <Pricing />
        <Testimonials />
        <Contact />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/politika-privatnosti" element={<PrivacyPolicy />} />
          <Route path="/uslovi-koriscenja" element={<TermsOfService />} />
          <Route path="/o-nama" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
