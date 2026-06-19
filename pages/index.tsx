import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useScrollReveal } from '../src/hooks/useScrollReveal'
import Navbar from '../src/components/layout/Navbar'
import Footer from '../src/components/layout/Footer'
import ChatSection from '../src/components/sections/ChatSection'
import Stats from '../src/components/sections/Stats'
import BuildingSection from '../src/components/sections/BuildingSection'
import ComparisonSection from '../src/components/sections/ComparisonSection'
import Pricing from '../src/components/sections/Pricing'
import Testimonials from '../src/components/sections/Testimonials'
import Contact from '../src/components/sections/Contact'
import FAQSection from '../src/components/sections/FAQSection'
import CTABanner from '../src/components/sections/CTABanner'
import SignupModal from '../src/components/ui/SignupModal'
import CookieConsent from '../src/components/ui/CookieConsent'
import MobileCTABar from '../src/components/ui/MobileCTABar'
import { useLang } from '../src/i18n/LanguageContext'

// react-simple-maps uses browser APIs — SSR must be disabled
const PhoneScrollSection = dynamic(
  () => import('../src/components/sections/PhoneScrollSection'),
  { ssr: false, loading: () => <div style={{ minHeight: '60vh' }} /> },
)

function LandingPage() {
  useScrollReveal()

  return (
    <div className="bg-white">
      <Navbar />
      <main className="pb-24 md:pb-0">
        <ChatSection />
        <Stats />
        <BuildingSection />
        <ComparisonSection />
        <PhoneScrollSection />
        <Pricing />
        <Testimonials />
        <Contact />
        <FAQSection />
        <CTABanner />
      </main>
      <Footer />
      <SignupModal />
      <MobileCTABar />
      <CookieConsent />
    </div>
  )
}

const Home: NextPage = () => {
  const { t } = useLang()
  return (
    <>
      <Head>
        <title>{t.metaTitle}</title>
      </Head>
      <LandingPage />
    </>
  )
}

export default Home
