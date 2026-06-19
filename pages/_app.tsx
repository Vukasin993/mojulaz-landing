import type { AppProps } from 'next/app'
import '../src/index.css'
import { LanguageProvider } from '../src/i18n/LanguageContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  )
}
