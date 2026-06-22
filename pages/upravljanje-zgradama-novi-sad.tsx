import type { NextPage } from 'next'
import CityLandingPage from '../src/components/sections/CityLandingPage'

const content = {
  sr: {
    back: 'Nazad na početnu', cta: 'Počnite besplatno',
    title: 'Upravljanje zgradama u Novom Sadu — MojUlaz softver',
    badge: 'Novi Sad',
    h1: 'Upravljanje stambenim zgradama', h1highlight: 'u Novom Sadu',
    intro: [
      'Novi Sad je jedan od najbrže rastućih gradova u Srbiji. Sa titulom Evropske prestonice kulture i rastućim IT sektorom, grad privlači mlade profesionalce koji podižu standarde stanovanja — uključujući i očekivanja od upravljanja zgradama.',
      'Od stambenih blokova na Limanu i Novom Naselju iz 70-ih i 80-ih godina, preko modernih kompleksa na Grbavici i Telepu, do novih naselja u Veterniku i Futogu — Novi Sad ima raznovrstan stambeni fond koji zahteva profesionalan pristup.',
      'MojUlaz je platforma za upravljanje stambenim zajednicama koja donosi digitalizaciju u novosadske zgrade — od prijave kvarova i obaveštenja do finansijske transparentnosti i online glasanja stanara.',
    ],
    challengesTitle: 'Izazovi upravljanja zgradama u Novom Sadu',
    challenges: [
      { title: 'Brz rast i nova gradnja', desc: 'Novi Sad doživljava građevinski bum. Novi stambeni kompleksi rastu na Grbavici, Telepu i u prigradskim naseljima. Investitori i upravnici novih zgrada traže moderna digitalna rešenja od prvog dana.' },
      { title: 'IT populacija sa visokim očekivanjima', desc: 'Novi Sad je IT centar Srbije. Stanari koji rade u tehnološkim kompanijama očekuju da upravljanje zgradom bude digitalno — ne preko papira na ulazu ili Viber grupe sa 150 članova.' },
      { title: 'Starije zgrade bez sistema', desc: 'Stambeni blokovi na Limanu, Detelinari i Novom Naselju, građeni pre 40–50 godina, često nemaju nikakav organizovan sistem za upravljanje. Predsednici skupštine vode sve na papiru ili u glavi.' },
    ],
    solutionsTitle: 'Kako MojUlaz pomaže upravnicima u Novom Sadu',
    solutions: [
      { title: 'Digitalna prijava kvarova', desc: 'Stanar fotografiše curenje, kvar lifta ili oštećenje zajedničkog prostora i prijavi ga za 30 sekundi. Upravnik odmah vidi problem, dodeljuje tehničara i prati rešavanje. Bez poziva i Viber poruka.' },
      { title: 'Obaveštenja koja stižu svima', desc: 'Radovi na vodovodnoj mreži, zakazano održavanje lifta, isključenje struje — jedno obaveštenje i svi stanari ga prime na telefon. Sa potvrdom ko je pročitao.' },
      { title: 'Transparentne finansije', desc: 'Fond zgrade, mesečne uplate i svi rashodi — vidljivi svakom stanaru u realnom vremenu. Posebno važno za nove zgrade gde se tek gradi poverenje između stanara i upravljača.' },
      { title: 'Online glasanje', desc: 'Odluka o renoviranju hodnika, zameni interfona ili izboru dobavljača — stanari glasaju iz aplikacije. Rezultati odmah, bez organizovanja fizičke skupštine u zajedničkom prostoru.' },
      { title: 'Dokumentacija na jednom mestu', desc: 'Ugovori sa JKP Novosadska toplana, zapisnici skupština, garancije za lift — sve centralno čuvano i pretraživo. Dostupno i novim stanarima i prilikom promene upravnika.' },
      { title: 'Mobilna aplikacija za stanare', desc: 'Stanari koriste besplatnu aplikaciju na iOS-u i Android-u. Upravnici koriste admin panel. Sve sinhronizovano, sve u realnom vremenu.' },
    ],
    areasTitle: 'Stambene zajednice po novosadskim naseljima',
    areasIntro: 'MojUlaz se koristi u raznovrsnim novosadskim naseljima — od gustih stambenih blokova do novih kompleksa na periferiji grada.',
    areas: [
      { title: 'Liman I–IV', desc: 'Jedni od najgušće naseljenih delova Novog Sada sa zgradama od 50–150 stanova. Stariji fond zahteva česte popravke, a transparentno praćenje kvarova je ključno.' },
      { title: 'Grbavica', desc: 'Mešavina starijih zgrada i potpuno novih stambenih kompleksa. Novi stanari dolaze iz IT sektora i očekuju digitalan pristup upravljanju zgradom.' },
      { title: 'Novo Naselje', desc: 'Veliki stambeni blokovi iz 80-ih sa po 100+ stanova. Izazov je komunikacija sa velikim brojem stanara — MojUlaz push notifikacije rešavaju taj problem.' },
      { title: 'Detelinara', desc: 'Starije zgrade sa aktivnim predsednicima skupštine koji traže alat za bolju organizaciju. Glasanje i finansije su najtraženije funkcionalnosti.' },
      { title: 'Telep i Veternik', desc: 'Brzo rastuća naselja sa novim zgradama. Investitori i prvi upravnici biraju MojUlaz kao sistem od prvog dana — pre nego što se stvore loše navike sa Viber grupama.' },
      { title: 'Petrovaradin i Sremska Kamenica', desc: 'Mirna naselja sa manjim zgradama. Predsednici skupštine cene jednostavnost MojUlaza — bez komplikovanih podešavanja, sve radi iz kutije.' },
    ],
    faqTitle: 'Često postavljana pitanja — Novi Sad',
    faq: [
      { q: 'Da li MojUlaz koriste zgrade u Novom Sadu?', a: 'Da. MojUlaz se koristi u novosadskim naseljima od Limana i Grbavice do Novog Naselja i Telepa. Broj korisnika u Novom Sadu konstantno raste.' },
      { q: 'Da li MojUlaz radi za starije zgrade na Limanu?', a: 'Apsolutno. MojUlaz je dizajniran da bude jednostavan za sve uzraste i tipove zgrada. Starije zgrade sa čestim kvarovima posebno imaju korist od sistema za prijavu i praćenje.' },
      { q: 'Kako upravnik u Novom Sadu počinje sa korišćenjem?', a: 'Registrujete se, dodate zgradu i dobijate kod za ulaz. Stanari preuzmu aplikaciju i ukucaju kod. Ceo proces traje manje od 10 minuta.' },
      { q: 'Koliko košta MojUlaz?', a: '2.190 RSD + PDV po zgradi godišnje (2.628 RSD sa PDV-om). Sve funkcionalnosti su uključene. Prvih 30 dana je besplatno, bez kreditne kartice.' },
      { q: 'Da li podržavate nove zgrade koje tek počinju sa radom?', a: 'Da. MojUlaz je idealan za nove zgrade — postavite sistem pre nego što se stvore loše navike. Stanari od prvog dana koriste aplikaciju umesto Viber grupa.' },
    ],
    linksTitle: 'Istražite MojUlaz',
    links: [
      { href: '/upravljanje-zgradama-beograd', label: 'Beograd' },
      { href: '/upravljanje-zgradama-nis', label: 'Niš' },
      { href: '/upravljanje-zgradama-kragujevac', label: 'Kragujevac' },
      { href: '/upravnici-zgrada', label: 'Softver za upravnike' },
    ],
    ctaTitle: 'Modernizujte upravljanje zgradom u Novom Sadu',
    ctaSub: 'Besplatno 30 dana, bez kreditne kartice. Podešavanje za 10 minuta.',
    ctaBtn: 'Registrujte se besplatno →',
    copy: '© 2026 MojUlaz. Sva prava zadržana.', privacy: 'Politika privatnosti', terms: 'Uslovi korišćenja',
  },
  en: {
    back: 'Back to home', cta: 'Start for free',
    title: 'Building management in Novi Sad — MojUlaz software',
    badge: 'Novi Sad',
    h1: 'Residential building management', h1highlight: 'in Novi Sad',
    intro: [
      'Novi Sad is one of the fastest-growing cities in Serbia. As a European Capital of Culture with a booming IT sector, the city attracts young professionals who raise the standards of living — including expectations for building management.',
      'From residential blocks in Liman and Novo Naselje built in the 70s and 80s, to modern complexes in Grbavica and Telep, to new developments in Veternik and Futog — Novi Sad has a diverse housing stock that needs professional management.',
      'MojUlaz is a residential community management platform that brings digitalization to Novi Sad buildings — from issue reporting and announcements to financial transparency and online resident voting.',
    ],
    challengesTitle: 'Building management challenges in Novi Sad',
    challenges: [
      { title: 'Rapid growth and new construction', desc: 'Novi Sad is experiencing a construction boom. New residential complexes are springing up in Grbavica, Telep and suburban areas. Investors and managers of new buildings need modern digital solutions from day one.' },
      { title: 'IT population with high expectations', desc: 'Novi Sad is Serbia\'s IT hub. Residents working in tech companies expect building management to be digital — not through paper notices on the door or a Viber group with 150 members.' },
      { title: 'Older buildings without systems', desc: 'Residential blocks in Liman, Detelinara and Novo Naselje, built 40–50 years ago, often have no organized management system. Assembly presidents manage everything on paper or from memory.' },
    ],
    solutionsTitle: 'How MojUlaz helps Novi Sad managers',
    solutions: [
      { title: 'Digital issue reporting', desc: 'Residents photograph a leak, lift malfunction or common area damage and report it in 30 seconds. The manager sees the problem immediately, assigns a technician and tracks the resolution.' },
      { title: 'Announcements that reach everyone', desc: 'Water main works, scheduled lift maintenance, power outage — one announcement and every resident gets it on their phone. With read receipts.' },
      { title: 'Transparent finances', desc: 'Building fund, monthly payments and all expenses — visible to every resident in real time. Especially important for new buildings where trust between residents and management is still being built.' },
      { title: 'Online voting', desc: 'Decisions about hallway renovation, intercom replacement or supplier selection — residents vote in the app. Instant results without organizing a physical meeting in the common room.' },
      { title: 'Documents in one place', desc: 'Contracts with utility companies, meeting minutes, lift warranties — all centrally stored and searchable. Available to new residents and during manager transitions.' },
      { title: 'Mobile app for residents', desc: 'Residents use the free app on iOS and Android. Managers use the admin panel. Everything synchronized, everything in real time.' },
    ],
    areasTitle: 'Residential communities across Novi Sad neighbourhoods',
    areasIntro: 'MojUlaz is used across diverse Novi Sad neighbourhoods — from dense residential blocks to new developments on the city\'s outskirts.',
    areas: [
      { title: 'Liman I–IV', desc: 'Among the most densely populated parts of Novi Sad with buildings of 50–150 apartments. The older stock requires frequent repairs, and transparent issue tracking is key.' },
      { title: 'Grbavica', desc: 'A mix of older buildings and brand-new residential complexes. New residents from the IT sector expect a digital approach to building management.' },
      { title: 'Novo Naselje', desc: 'Large residential blocks from the 80s with 100+ apartments. Communication with so many residents is the challenge — MojUlaz push notifications solve that.' },
      { title: 'Detelinara', desc: 'Older buildings with active assembly presidents looking for a better organizational tool. Voting and finances are the most requested features.' },
      { title: 'Telep & Veternik', desc: 'Fast-growing areas with new buildings. Investors and first-time managers choose MojUlaz as their system from day one — before bad Viber-group habits form.' },
      { title: 'Petrovaradin & Sr. Kamenica', desc: 'Quiet neighbourhoods with smaller buildings. Assembly presidents appreciate MojUlaz\'s simplicity — no complicated setup, everything works out of the box.' },
    ],
    faqTitle: 'Frequently asked questions — Novi Sad',
    faq: [
      { q: 'Do Novi Sad buildings use MojUlaz?', a: 'Yes. MojUlaz is used across Novi Sad neighbourhoods from Liman and Grbavica to Novo Naselje and Telep. The number of users in Novi Sad is constantly growing.' },
      { q: 'Does MojUlaz work for older Liman buildings?', a: 'Absolutely. MojUlaz is designed to be simple for all ages and building types. Older buildings with frequent issues especially benefit from the reporting and tracking system.' },
      { q: 'How does a Novi Sad manager get started?', a: 'Register, add your building and get a building entry code. Residents download the app and enter the code. The whole process takes under 10 minutes.' },
      { q: 'How much does MojUlaz cost?', a: '2,190 RSD plus VAT per building per year (2,628 RSD including VAT). All features included. The first 30 days are free, no credit card required.' },
      { q: 'Do you support brand-new buildings?', a: 'Yes. MojUlaz is ideal for new buildings — set up the system before bad habits form. Residents use the app from day one instead of Viber groups.' },
    ],
    linksTitle: 'Explore MojUlaz',
    links: [
      { href: '/upravljanje-zgradama-beograd', label: 'Belgrade' },
      { href: '/upravljanje-zgradama-nis', label: 'Niš' },
      { href: '/upravljanje-zgradama-kragujevac', label: 'Kragujevac' },
      { href: '/upravnici-zgrada', label: 'Manager software' },
    ],
    ctaTitle: 'Modernize building management in Novi Sad',
    ctaSub: 'Free for 30 days, no credit card. Set up in 10 minutes.',
    ctaBtn: 'Register for free →',
    copy: '© 2026 MojUlaz. All rights reserved.', privacy: 'Privacy policy', terms: 'Terms of service',
  },
}

const Page: NextPage = () => (
  <CityLandingPage
    content={content}
    metaDesc="Softver za upravljanje stambenim zgradama u Novom Sadu. Prijava kvarova, obaveštenja, finansije i glasanje — sve na jednom mestu. Besplatno 30 dana."
    canonicalPath="/upravljanje-zgradama-novi-sad/"
    ogTitle="Upravljanje zgradama u Novom Sadu — MojUlaz"
    ogDesc="Softver za upravnike zgrada u Novom Sadu. Od Limana do Grbavice — digitalno upravljanje stambenom zajednicom."
  />
)

export default Page
