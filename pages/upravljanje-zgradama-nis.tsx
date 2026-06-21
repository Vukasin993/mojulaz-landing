import type { NextPage } from 'next'
import CityLandingPage from '../src/components/sections/CityLandingPage'

const content = {
  sr: {
    back: 'Nazad na početnu', cta: 'Počnite besplatno',
    title: 'Upravljanje zgradama u Nišu — MojUlaz softver',
    badge: 'Niš',
    h1: 'Upravljanje stambenim zgradama', h1highlight: 'u Nišu',
    intro: [
      'Niš je treći grad Srbije po veličini i centar južne Srbije sa preko 260.000 stanovnika. Kao univerzitetski grad sa rastućom ekonomijom, Niš ima sve više stambenih zgrada kojima je potrebno profesionalno upravljanje — od centara na Medijani do novih naselja na Paliluli.',
      'Upravnici u Nišu se suočavaju sa specifičnim izazovom: stariji stambeni fond zahteva učestalo održavanje, dok stanari — posebno mlađa populacija oko univerziteta — očekuju digitalna rešenja umesto papira i Viber grupa.',
      'MojUlaz donosi moderan softver za upravljanje stambenim zajednicama u Niš. Prijava kvarova, obaveštenja, finansije, dokumentacija i glasanje stanara — sve na jednom mestu, dostupno sa telefona.',
    ],
    challengesTitle: 'Izazovi upravljanja zgradama u Nišu',
    challenges: [
      { title: 'Stariji stambeni fond', desc: 'Većina niških zgrada je građena 60-ih do 80-ih godina. Česti kvarovi na vodoinstalacijama, krovovima i fasadama zahtevaju organizovan sistem za prijavu i praćenje. Papir i Viber to ne mogu da podrže.' },
      { title: 'Nedostatak profesionalnih upravnika', desc: 'U Nišu je upravljanje zgradama često prepušteno predsednicima skupštine stanara koji to rade volonterski. Bez pravih alata, posao postaje preopterećujuć — i kvalitet upravljanja opada.' },
      { title: 'Mlada populacija, stara rešenja', desc: 'Niš je univerzitetski grad. Studenti i mladi profesionalci žive u zgradama gde se obaveštenja lepe na ulaz, a skupštine traju satima. Očekuju bolje — i zaslužuju bolje.' },
    ],
    solutionsTitle: 'Kako MojUlaz pomaže upravnicima u Nišu',
    solutions: [
      { title: 'Prijava kvarova sa fotografijom', desc: 'Curi krov posle kiše? Stanar fotografiše problem, doda opis i prijavi kvar za 30 sekundi. Upravnik odmah vidi, dodeljuje majstora i svi prate status. Nema više zaboravljenih kvarova.' },
      { title: 'Obaveštenja umesto papira na ulazu', desc: 'Zakazana dezinsekcija, remont lifta ili neplaćena komunalija — obaveštenje stiže na telefon svakom stanaru. Sa potvrdom ko je pročitao. Bez štampanja i lepljenja.' },
      { title: 'Finansijska transparentnost', desc: 'Fond zgrade vidljiv svim stanarima. Ko je uplatio, ko duguje, na šta se troši. Mesečni i godišnji pregled. Stanari veruju upravi jer vide svaki dinar.' },
      { title: 'Glasanje iz aplikacije', desc: 'Popravka fasade, zamena cevi, novi kućni red — pokrenite anketu i stanari glasaju sa telefona. Rezultati odmah. Bez organizovanja skupštine u podrumu ili na parkingu.' },
      { title: 'Dokumentacija uvek dostupna', desc: 'Ugovori sa majstorima, zapisnici skupština, garancije — sve na jednom mestu. Posebno korisno kad se promeni predsednik skupštine i treba predati dokumentaciju.' },
      { title: 'Besplatna aplikacija za stanare', desc: 'Stanari preuzmu aplikaciju na iOS-u ili Android-u, ukucaju kod zgrade i odmah imaju pristup. Upravnici koriste admin panel za upravljanje svim zgradama.' },
    ],
    areasTitle: 'Stambene zajednice po niškim opštinama',
    areasIntro: 'Niš ima raznovrsne stambene zajednice — od centra grada sa gustom gradnjom do perifernih naselja sa novijim zgradama.',
    areas: [
      { title: 'Medijana', desc: 'Centralna niška opština sa najvećom koncentracijom stambenih zgrada. Od starijih zgrada u užem centru do blokova iz 70-ih i 80-ih — sve zahteva organizovano upravljanje i transparentne finansije.' },
      { title: 'Palilula', desc: 'Najveća niška opština sa mešavinom stare i nove gradnje. Novi stambeni kompleksi rastu, a upravnici traže digitalna rešenja za upravljanje od prvog dana.' },
      { title: 'Pantelej', desc: 'Pretežno stambena opština sa zgradama iz socijalističkog perioda. Česti kvarovi na instalacijama zahtevaju pouzdan sistem za prijavu i praćenje.' },
      { title: 'Niška Banja', desc: 'Prigradsko naselje sa manjim stambenim zgradama. Predsednici skupštine ovde cene jednostavnost — MojUlaz im omogućava da profesionalno upravljaju bez tehničkog znanja.' },
      { title: 'Crveni Krst', desc: 'Opština sa rastućom stambenom gradnjom. Nove zgrade koje koriste MojUlaz od početka izbegavaju probleme sa Viber grupama i neorganizovanom dokumentacijom.' },
      { title: 'Bulevar zona', desc: 'Oblast oko Bulevara Nemanjića sa modernim zgradama i mešovitom populacijom. Stanari očekuju digitalan pristup — obaveštenja na telefon, ne na papiru.' },
    ],
    faqTitle: 'Često postavljana pitanja — Niš',
    faq: [
      { q: 'Da li MojUlaz koriste zgrade u Nišu?', a: 'Da. MojUlaz se koristi u stambenim zgradama širom Niša, od centra Medijane do novih naselja na Paliluli. Broj korisnika u Nišu raste iz meseca u mesec.' },
      { q: 'Koliko košta MojUlaz za niškog upravnika?', a: '2.190 RSD po zgradi godišnje. Sve funkcionalnosti su uključene od prvog dana. Probni period od 30 dana je potpuno besplatan, bez kreditne kartice.' },
      { q: 'Da li MojUlaz radi i za predsednike skupštine?', a: 'Apsolutno. MojUlaz je dizajniran i za profesionalne upravnike i za predsednike skupštine koji to rade volonterski. Interfejs je jednostavan i ne zahteva tehničko znanje.' },
      { q: 'Kako početi sa korišćenjem u Nišu?', a: 'Registrujte se na app.moj-ulaz.com, dodajte zgradu i podelite kod sa stanarima. Stanari preuzmu aplikaciju i ukucaju kod. Podešavanje traje manje od 10 minuta.' },
      { q: 'Da li stariji stanari mogu da koriste aplikaciju?', a: 'Da. Aplikacija je dizajnirana da bude jednostavna za sve uzraste. Instalacija traje manje od minut, a interfejs je na srpskom jeziku sa intuitivnom navigacijom.' },
      { q: 'Da li mogu da upravljam više zgrada u Nišu?', a: 'Da. Iz jednog naloga upravljate neograničenim brojem zgrada. Svaka ima sopstvenu ploču, stanare, finansije i istoriju kvarova.' },
    ],
    linksTitle: 'Istražite MojUlaz',
    links: [
      { href: '/upravljanje-zgradama-beograd', label: 'Beograd' },
      { href: '/upravljanje-zgradama-novi-sad', label: 'Novi Sad' },
      { href: '/upravljanje-zgradama-kragujevac', label: 'Kragujevac' },
      { href: '/upravnici-zgrada', label: 'Softver za upravnike' },
    ],
    ctaTitle: 'Digitalizujte upravljanje zgradom u Nišu',
    ctaSub: 'Besplatno 30 dana, bez kreditne kartice. Podešavanje za 10 minuta.',
    ctaBtn: 'Registrujte se besplatno →',
    copy: '© 2026 MojUlaz. Sva prava zadržana.', privacy: 'Politika privatnosti', terms: 'Uslovi korišćenja',
  },
  en: {
    back: 'Back to home', cta: 'Start for free',
    title: 'Building management in Niš — MojUlaz software',
    badge: 'Niš',
    h1: 'Residential building management', h1highlight: 'in Niš',
    intro: [
      'Niš is Serbia\'s third-largest city and the centre of southern Serbia with over 260,000 residents. As a university city with a growing economy, Niš has an increasing number of residential buildings that need professional management — from the centre of Medijana to new developments in Palilula.',
      'Managers in Niš face a specific challenge: the older housing stock requires frequent maintenance, while residents — especially the younger university population — expect digital solutions instead of paper and Viber groups.',
      'MojUlaz brings modern residential community management software to Niš. Issue reporting, announcements, finances, documentation and resident voting — all in one place, accessible from your phone.',
    ],
    challengesTitle: 'Building management challenges in Niš',
    challenges: [
      { title: 'Older housing stock', desc: 'Most Niš buildings were built in the 60s–80s. Frequent plumbing, roof and facade issues require an organized reporting and tracking system. Paper and Viber can\'t support that.' },
      { title: 'Lack of professional managers', desc: 'In Niš, building management is often left to volunteer assembly presidents. Without proper tools, the job becomes overwhelming — and management quality drops.' },
      { title: 'Young population, old solutions', desc: 'Niš is a university city. Students and young professionals live in buildings where announcements are posted on doors and meetings last for hours. They expect better — and they deserve better.' },
    ],
    solutionsTitle: 'How MojUlaz helps managers in Niš',
    solutions: [
      { title: 'Issue reporting with photos', desc: 'Roof leaking after rain? A resident photographs the problem, adds a description and reports it in 30 seconds. The manager sees it immediately, assigns a contractor and everyone tracks the status.' },
      { title: 'Announcements instead of door notices', desc: 'Scheduled pest control, lift maintenance or unpaid utility bill — the announcement reaches every resident\'s phone. With read receipts. No printing and taping.' },
      { title: 'Financial transparency', desc: 'Building fund visible to all residents. Who paid, who owes, what the money is spent on. Monthly and annual overview. Residents trust management because they see every dinar.' },
      { title: 'In-app voting', desc: 'Facade repair, pipe replacement, new house rules — start a poll and residents vote from their phones. Instant results. No organizing a meeting in the basement or parking lot.' },
      { title: 'Documentation always accessible', desc: 'Contractor agreements, meeting minutes, warranties — all in one place. Especially useful when the assembly president changes and documentation needs to be handed over.' },
      { title: 'Free app for residents', desc: 'Residents download the app on iOS or Android, enter the building code and immediately have access. Managers use the admin panel to manage all buildings.' },
    ],
    areasTitle: 'Residential communities across Niš municipalities',
    areasIntro: 'Niš has diverse residential communities — from the densely built city centre to suburban areas with newer buildings.',
    areas: [
      { title: 'Medijana', desc: 'The central Niš municipality with the highest concentration of residential buildings. From older city-centre buildings to 70s and 80s blocks — all need organized management and transparent finances.' },
      { title: 'Palilula', desc: 'The largest Niš municipality with a mix of old and new construction. New residential complexes are growing, and managers seek digital solutions from day one.' },
      { title: 'Pantelej', desc: 'A predominantly residential municipality with socialist-era buildings. Frequent installation issues require a reliable reporting and tracking system.' },
      { title: 'Niška Banja', desc: 'A suburban area with smaller residential buildings. Assembly presidents here value simplicity — MojUlaz lets them manage professionally without technical knowledge.' },
      { title: 'Crveni Krst', desc: 'A municipality with growing residential construction. New buildings using MojUlaz from the start avoid problems with Viber groups and disorganized documentation.' },
      { title: 'Bulevar zone', desc: 'The area around Bulevar Nemanjića with modern buildings and a mixed population. Residents expect a digital approach — announcements on their phone, not on paper.' },
    ],
    faqTitle: 'Frequently asked questions — Niš',
    faq: [
      { q: 'Do Niš buildings use MojUlaz?', a: 'Yes. MojUlaz is used in residential buildings across Niš, from the Medijana centre to new developments in Palilula. The number of Niš users grows every month.' },
      { q: 'How much does MojUlaz cost for a Niš manager?', a: '2,190 RSD per building per year. All features are included from day one. The 30-day trial is completely free, no credit card required.' },
      { q: 'Does MojUlaz work for volunteer assembly presidents?', a: 'Absolutely. MojUlaz is designed for both professional managers and volunteer assembly presidents. The interface is simple and requires no technical knowledge.' },
      { q: 'How do I get started in Niš?', a: 'Register at app.moj-ulaz.com, add your building and share the code with residents. Residents download the app and enter the code. Setup takes under 10 minutes.' },
      { q: 'Can older residents use the app?', a: 'Yes. The app is designed to be simple for all ages. Installation takes less than a minute and the interface is intuitive with clear navigation.' },
      { q: 'Can I manage multiple buildings in Niš?', a: 'Yes. From one account you manage an unlimited number of buildings. Each has its own dashboard, residents, finances and issue history.' },
    ],
    linksTitle: 'Explore MojUlaz',
    links: [
      { href: '/upravljanje-zgradama-beograd', label: 'Belgrade' },
      { href: '/upravljanje-zgradama-novi-sad', label: 'Novi Sad' },
      { href: '/upravljanje-zgradama-kragujevac', label: 'Kragujevac' },
      { href: '/upravnici-zgrada', label: 'Manager software' },
    ],
    ctaTitle: 'Digitalize building management in Niš',
    ctaSub: 'Free for 30 days, no credit card. Set up in 10 minutes.',
    ctaBtn: 'Register for free →',
    copy: '© 2026 MojUlaz. All rights reserved.', privacy: 'Privacy policy', terms: 'Terms of service',
  },
}

const Page: NextPage = () => (
  <CityLandingPage
    content={content}
    metaDesc="Softver za upravljanje stambenim zgradama u Nišu. Prijava kvarova, obaveštenja, finansije i glasanje stanara — sve na jednom mestu. Besplatno 30 dana."
    canonicalPath="/upravljanje-zgradama-nis/"
    ogTitle="Upravljanje zgradama u Nišu — MojUlaz"
    ogDesc="Softver za upravnike zgrada u Nišu. Od Medijane do Palilule — digitalno upravljanje stambenom zajednicom."
  />
)

export default Page
