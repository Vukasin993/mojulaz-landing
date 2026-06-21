import type { NextPage } from 'next'
import CityLandingPage from '../src/components/sections/CityLandingPage'

const content = {
  sr: {
    back: 'Nazad na početnu', cta: 'Počnite besplatno',
    title: 'Upravljanje zgradama u Beogradu — MojUlaz softver',
    badge: 'Beograd',
    h1: 'Upravljanje stambenim zgradama', h1highlight: 'u Beogradu',
    intro: [
      'Beograd ima preko 120.000 stambenih zgrada i više od 600.000 stanova. Od masivnih blokova Novog Beograda sa po 200+ stanova do starijih zgrada na Vračaru i Starom Gradu sa po 10–20 stanova — svaka zahteva profesionalno upravljanje.',
      'Upravnici u Beogradu se suočavaju sa specifičnim izazovima: velike zgrade sa stotinama stanara, visok promet zakupaca, komplikovana komunikacija i rastuća očekivanja stanara koji žele digitalna rešenja.',
      'MojUlaz je softver za upravljanje stambenim zajednicama koji zamenjuje Viber grupe, papir i Excel tabele jednom platformom — i već ga koristi preko 500 zgrada u Srbiji, od kojih je značajan deo upravo u Beogradu.',
    ],
    challengesTitle: 'Izazovi upravljanja zgradama u Beogradu',
    challenges: [
      { title: 'Velike zgrade, mnogo stanara', desc: 'Na Novom Beogradu zgrade često imaju 100–300 stanova. Upravnik ne može lično da obiđe sve stanare. Viber grupe sa 200 članova postaju neupotrebljive — poruke se gube, niko ne čita obaveštenja, a kvarovi se zaboravljaju.' },
      { title: 'Visok promet stanara', desc: 'Beograd ima veliki procenat izdavanja stanova. Zakupci se menjaju, kontakt podaci zastarevaju, a upravnici gube pregled ko živi gde. Potreban je centralizovan sistem sa ažurnim podacima.' },
      { title: 'Stare i nove zgrade', desc: 'Od zgrada iz 60-ih i 70-ih na Novom Beogradu do novih stambenih kompleksa na Waterfront-u i u Borči — svaka ima drugačije potrebe za održavanjem, ali svakoj treba transparentan sistem za komunikaciju i finansije.' },
    ],
    solutionsTitle: 'Kako MojUlaz pomaže upravnicima u Beogradu',
    solutions: [
      { title: 'Prijava kvarova bez Viber haosa', desc: 'Stanar fotografiše kvar i prijavi ga za 30 sekundi. Upravnik dobija notifikaciju, dodeljuje tehničara i prati status. Bez poziva u 7 ujutru, bez izgubljenih poruka u Viber grupi.' },
      { title: 'Obaveštenja koja svi vide', desc: 'Push notifikacija stiže svakom stanaru na telefon. Upravnik vidi ko je pročitao, a ko nije. Za zgrade sa 200 stanova — jedini način da poruka zaista stigne do svih.' },
      { title: 'Finansije vidljive svima', desc: 'Stanje fonda, uplate stanara i rashodi u realnom vremenu. Stanari vide na šta se novac troši bez čekanja na mesečni izveštaj. Manje sporova na skupštinama.' },
      { title: 'Glasanje bez skupštine', desc: 'Kada treba doneti odluku o popravci krova ili ugradnji lifta — pokrenite anketu. Stanari glasaju sa telefona, rezultati za par minuta. Bez tročasovnih sastanaka sa 30% prisutnih.' },
      { title: 'Centralna dokumentacija', desc: 'Ugovori sa održavačima, zapisnici skupština, tehnička dokumentacija — sve na jednom mestu, pretraživo i dostupno. Posebno korisno za zgrade sa čestom promenom upravnika.' },
      { title: 'Upravljanje više zgrada', desc: 'Agencije u Beogradu koje upravljaju 20, 50 ili 100 zgrada — sve iz jednog naloga. Svaka zgrada ima sopstvenu ploču, stanare i istoriju.' },
    ],
    areasTitle: 'Stambene zajednice po beogradskim opštinama',
    areasIntro: 'MojUlaz je prilagođen specifičnostima različitih beogradskih opština — od masivnih blokova do manjih stambenih zajednica.',
    areas: [
      { title: 'Novi Beograd', desc: 'Najveća koncentracija velikih stambenih blokova u Srbiji. Zgrade sa 100–300 stanova zahtevaju robustan digitalni sistem za komunikaciju, prijavu kvarova i upravljanje fondom.' },
      { title: 'Vračar i Stari Grad', desc: 'Manje zgrade, 10–30 stanova, ali stariji fond sa čestim potrebama za održavanjem. Predsednici skupštine ovde cene jednostavnost i transparentnost.' },
      { title: 'Čukarica i Voždovac', desc: 'Mešavina starijih naselja i novih stambenih kompleksa. Upravnici koji prelaze sa papira na digitalno posebno cene postepeni onboarding.' },
      { title: 'Zemun', desc: 'Specifična kombinacija starog jezgra sa niskom gradnjom i novih višespratnica na periferiji. MojUlaz se prilagođava i malim i velikim zgradama.' },
      { title: 'Zvezdara i Palilula', desc: 'Raznovrsne stambene zajednice — od studentskih naselja do porodičnih zgrada. Prijava kvarova i transparentne finansije su najtraženije funkcije.' },
      { title: 'Savski Venac i Dorćol', desc: 'Atraktivne lokacije sa starijim fondom i visokim zakupninama. Stanari ovde očekuju moderan pristup upravljanju zgradom.' },
    ],
    faqTitle: 'Često postavljana pitanja — Beograd',
    faq: [
      { q: 'Koliko zgrada u Beogradu koristi MojUlaz?', a: 'MojUlaz koristi preko 500 zgrada u Srbiji, sa značajnim delom u Beogradu — od Novog Beograda i Vračara do Zemuna i Voždovca. Broj korisnika raste svakog meseca.' },
      { q: 'Da li MojUlaz radi za velike zgrade sa 200+ stanova?', a: 'Da. MojUlaz je dizajniran upravo za velike stambene zajednice. Push notifikacije, prijava kvarova i glasanje funkcionišu identično za 20 ili 200 stanova.' },
      { q: 'Koliko košta MojUlaz za beogradske upravnike?', a: 'MojUlaz košta 2.190 RSD po zgradi godišnje. Za agencije sa više od 75 zgrada nudimo posebne uslove. Probni period od 30 dana je besplatan.' },
      { q: 'Kako stanari u Beogradu pristupaju MojUlazu?', a: 'Stanari preuzmu besplatnu mobilnu aplikaciju (iOS/Android) i ukucaju kod zgrade koji dobiju od upravnika. Ceo proces traje par minuta.' },
      { q: 'Da li MojUlaz pomaže sa skupštinama stanara?', a: 'Da. Online glasanje zamenjuje višečasovne skupštine. Upravnik kreira anketu, stanari glasaju sa telefona, a rezultati su transparentni i čuvaju se u evidenciji.' },
      { q: 'Mogu li da upravljam zgradama u različitim opštinama?', a: 'Da. Iz jednog naloga upravljate svim zgradama — bez obzira da li su na Novom Beogradu, Vračaru ili u Zemunu. Svaka ima sopstvenu ploču.' },
    ],
    linksTitle: 'Istražite MojUlaz',
    links: [
      { href: '/upravljanje-zgradama-novi-sad', label: 'Novi Sad' },
      { href: '/upravljanje-zgradama-nis', label: 'Niš' },
      { href: '/upravljanje-zgradama-kragujevac', label: 'Kragujevac' },
      { href: '/upravnici-zgrada', label: 'Softver za upravnike' },
    ],
    ctaTitle: 'Digitalizujte upravljanje zgradom u Beogradu',
    ctaSub: 'Pridružite se stotinama zgrada u Beogradu koje već koriste MojUlaz. Besplatno 30 dana.',
    ctaBtn: 'Registrujte se besplatno →',
    copy: '© 2026 MojUlaz. Sva prava zadržana.', privacy: 'Politika privatnosti', terms: 'Uslovi korišćenja',
  },
  en: {
    back: 'Back to home', cta: 'Start for free',
    title: 'Building management in Belgrade — MojUlaz software',
    badge: 'Belgrade',
    h1: 'Residential building management', h1highlight: 'in Belgrade',
    intro: [
      'Belgrade has over 120,000 residential buildings and more than 600,000 apartments. From massive blocks in Novi Beograd with 200+ units to older buildings in Vračar and Stari Grad with 10–20 units — each requires professional management.',
      'Managers in Belgrade face specific challenges: large buildings with hundreds of residents, high tenant turnover, complicated communication and growing expectations from residents who want digital solutions.',
      'MojUlaz is building management software that replaces Viber groups, paper and Excel with a single platform — already used by over 500 buildings in Serbia, many of them in Belgrade.',
    ],
    challengesTitle: 'Building management challenges in Belgrade',
    challenges: [
      { title: 'Large buildings, many residents', desc: 'In Novi Beograd, buildings often have 100–300 apartments. A manager can\'t visit every resident personally. Viber groups with 200 members become unusable — messages get lost and issues are forgotten.' },
      { title: 'High tenant turnover', desc: 'Belgrade has a high rental rate. Tenants change, contact details go stale, and managers lose track of who lives where. A centralized system with up-to-date data is essential.' },
      { title: 'Old and new buildings', desc: 'From 1960s blocks in Novi Beograd to new complexes on the Waterfront — each has different maintenance needs, but all need transparent communication and financial tracking.' },
    ],
    solutionsTitle: 'How MojUlaz helps Belgrade managers',
    solutions: [
      { title: 'Issue reporting without Viber chaos', desc: 'Residents photograph an issue and report it in 30 seconds. The manager gets a notification, assigns a technician and tracks the status. No 7am phone calls, no lost Viber messages.' },
      { title: 'Announcements everyone sees', desc: 'A push notification reaches every resident on their phone. The manager sees who read it. For buildings with 200 flats — the only way to truly reach everyone.' },
      { title: 'Finances visible to all', desc: 'Fund balance, resident payments and expenses in real time. Residents see where money goes without waiting for a monthly report. Fewer disputes at meetings.' },
      { title: 'Voting without meetings', desc: 'When a decision is needed about roof repair or lift installation — start a poll. Residents vote from their phones, results in minutes. No three-hour meetings with 30% attendance.' },
      { title: 'Central documentation', desc: 'Maintenance contracts, meeting minutes, technical documentation — all in one place, searchable and accessible. Especially useful for buildings with frequent manager changes.' },
      { title: 'Multi-building management', desc: 'Belgrade agencies managing 20, 50 or 100 buildings — all from one account. Each building has its own dashboard, residents and history.' },
    ],
    areasTitle: 'Residential communities across Belgrade municipalities',
    areasIntro: 'MojUlaz is adapted to the specifics of different Belgrade municipalities — from massive blocks to smaller residential communities.',
    areas: [
      { title: 'Novi Beograd', desc: 'The highest concentration of large residential blocks in Serbia. Buildings with 100–300 apartments need a robust digital system for communication, issue reporting and fund management.' },
      { title: 'Vračar & Stari Grad', desc: 'Smaller buildings, 10–30 apartments, but older stock with frequent maintenance needs. Assembly presidents here value simplicity and transparency.' },
      { title: 'Čukarica & Voždovac', desc: 'A mix of older neighbourhoods and new residential complexes. Managers transitioning from paper to digital especially appreciate gradual onboarding.' },
      { title: 'Zemun', desc: 'A specific combination of the old core with low-rise buildings and new high-rises on the periphery. MojUlaz adapts to both small and large buildings.' },
      { title: 'Zvezdara & Palilula', desc: 'Diverse residential communities — from student areas to family buildings. Issue reporting and transparent finances are the most requested features.' },
      { title: 'Savski Venac & Dorćol', desc: 'Attractive locations with older building stock and high rents. Residents here expect a modern approach to building management.' },
    ],
    faqTitle: 'Frequently asked questions — Belgrade',
    faq: [
      { q: 'How many Belgrade buildings use MojUlaz?', a: 'MojUlaz is used by over 500 buildings in Serbia, with a significant share in Belgrade — from Novi Beograd and Vračar to Zemun and Voždovac. The number grows every month.' },
      { q: 'Does MojUlaz work for large 200+ unit buildings?', a: 'Yes. MojUlaz is designed precisely for large residential communities. Push notifications, issue reporting and voting work identically for 20 or 200 apartments.' },
      { q: 'How much does MojUlaz cost for Belgrade managers?', a: 'MojUlaz costs 2,190 RSD per building per year. For agencies with more than 75 buildings we offer custom terms. The 30-day trial is free.' },
      { q: 'How do Belgrade residents access MojUlaz?', a: 'Residents download the free mobile app (iOS/Android) and enter the building code provided by the manager. The whole process takes a few minutes.' },
      { q: 'Does MojUlaz help with resident meetings?', a: 'Yes. Online voting replaces multi-hour meetings. The manager creates a poll, residents vote from their phones, and results are transparent and stored on record.' },
      { q: 'Can I manage buildings across different municipalities?', a: 'Yes. From one account you manage all buildings — whether in Novi Beograd, Vračar or Zemun. Each has its own dashboard.' },
    ],
    linksTitle: 'Explore MojUlaz',
    links: [
      { href: '/upravljanje-zgradama-novi-sad', label: 'Novi Sad' },
      { href: '/upravljanje-zgradama-nis', label: 'Niš' },
      { href: '/upravljanje-zgradama-kragujevac', label: 'Kragujevac' },
      { href: '/upravnici-zgrada', label: 'Manager software' },
    ],
    ctaTitle: 'Digitalize building management in Belgrade',
    ctaSub: 'Join hundreds of Belgrade buildings already using MojUlaz. Free for 30 days.',
    ctaBtn: 'Register for free →',
    copy: '© 2026 MojUlaz. All rights reserved.', privacy: 'Privacy policy', terms: 'Terms of service',
  },
}

const Page: NextPage = () => (
  <CityLandingPage
    content={content}
    metaDesc="Softver za upravljanje stambenim zgradama u Beogradu. Prijava kvarova, obaveštenja, finansije i glasanje stanara — na jednom mestu. Besplatno 30 dana."
    canonicalPath="/upravljanje-zgradama-beograd/"
    ogTitle="Upravljanje zgradama u Beogradu — MojUlaz"
    ogDesc="Softver za upravnike zgrada u Beogradu. Zamenjuje Viber grupe jednom platformom. 500+ zgrada u Srbiji."
  />
)

export default Page
