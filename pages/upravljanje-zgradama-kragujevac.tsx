import type { NextPage } from 'next'
import CityLandingPage from '../src/components/sections/CityLandingPage'

const content = {
  sr: {
    back: 'Nazad na početnu', cta: 'Počnite besplatno',
    title: 'Upravljanje zgradama u Kragujevcu — MojUlaz softver',
    badge: 'Kragujevac',
    h1: 'Upravljanje stambenim zgradama', h1highlight: 'u Kragujevcu',
    intro: [
      'Kragujevac je četvrti grad Srbije po veličini i industrijski centar Šumadije sa preko 180.000 stanovnika. Grad sa dugom tradicijom — od Zastave i univerziteta do sve većeg broja novih stambenih kompleksa koji rastu na periferiji — Kragujevac ima specifičan stambeni fond koji zahteva organizovano upravljanje.',
      'Za razliku od Beograda gde dominiraju profesionalne agencije, u Kragujevcu upravljanje zgradama često pada na teret predsednika skupštine stanara koji to rade volonterski. Bez adekvatnih alata, komunikacija sa stanarima postaje haotična — Viber grupe sa 80 poruka dnevno, papiri na ulazu koji se ne čitaju i skupštine na koje dolazi tek svaki peti stanar.',
      'MojUlaz donosi profesionalne alate za upravljanje stambenim zajednicama u Kragujevac — platformu koja zamenjuje Viber grupe, papir i Excel jednim sistemom za prijavu kvarova, obaveštenja, finansije, dokumentaciju i glasanje stanara.',
    ],
    challengesTitle: 'Izazovi upravljanja zgradama u Kragujevcu',
    challenges: [
      { title: 'Volontersko upravljanje', desc: 'U Kragujevcu je češće nego u Beogradu da predsednik skupštine stanara vodi zgradu volonterski. Bez profesionalnih alata, posao se svodi na lično obilaženje stanara, zapisivanje u svesku i improvizaciju. MojUlaz daje profesionalne alate i onima koji to rade bez nadoknade.' },
      { title: 'Stare zgrade i česti kvarovi', desc: 'Značajan deo kragujevačkih zgrada je građen 60-ih do 80-ih godina — blokovi na Aerodromu, Bubnju i u centru. Stari krovovi, dotrajale vodoinstalacije i fasade u lošem stanju znače česte kvarove kojima treba organizovano praćenje.' },
      { title: 'Rastući novi stambeni kompleksi', desc: 'Kragujevac doživljava građevinski rast — novi kompleksi na Erdogliji, Stanovu i periferiji donose stanare koji od prvog dana očekuju moderan pristup upravljanju. Viber grupe i papiri na ulazu za njih nisu opcija.' },
    ],
    solutionsTitle: 'Kako MojUlaz pomaže upravnicima u Kragujevcu',
    solutions: [
      { title: 'Prijava kvarova umesto telefonskih poziva', desc: 'Pukla cev u podrumu? Stanar fotografiše problem, doda opis i prijavi kvar za 30 sekundi. Predsednik skupštine odmah vidi prijavu, dodeljuje majstora i svi zainteresovani prate status. Nema više poziva u 6 ujutru i zaboravljenih problema.' },
      { title: 'Obaveštenja koja zaista stižu do svih', desc: 'Zakazan remont lifta, planirano isključenje vode ili nova pravila kućnog reda — jedno obaveštenje i svaki stanar ga primi na telefon. Sa potvrdom ko je pročitao. Kraj papirima na tabli u ulazu koji niko ne čita.' },
      { title: 'Finansijska transparentnost za sve stanare', desc: 'Koliko je u fondu? Ko duguje? Na šta su potrošene poslednje uplate? Sve je vidljivo u realnom vremenu — svakom stanaru. Posebno važno u Kragujevcu gde su stanari navikli na mesečne izveštaje koji kasne ili nikad ne stignu.' },
      { title: 'Online glasanje bez skupštine u podrumu', desc: 'Treba li renovirati hodnik ili zameniti ulazna vrata? Pokrenite anketu, stanari glasaju iz aplikacije. Rezultati za par sati — bez organizovanja skupštine u podrumskoj prostoriji na koju dođe 15% stanara.' },
      { title: 'Dokumentacija koja ne zavisi od predsednika', desc: 'Ugovori sa majstorima, zapisnici skupština, računi za komunalije — sve centralno čuvano u aplikaciji. Kada se predsednik skupštine promeni, nova osoba ima pristup kompletnoj istoriji bez da traži fascikle po podrumu.' },
      { title: 'Upravljanje više zgrada iz jednog naloga', desc: 'Za profesionalne upravnike i agencije u Kragujevcu koje upravljaju sa 10, 30 ili 50 zgrada — sve iz jednog naloga. Svaka zgrada ima sopstvenu ploču sa stanarima, kvarovima, finansijama i istorijom.' },
    ],
    areasTitle: 'Stambene zajednice po kragujevačkim naseljima',
    areasIntro: 'Kragujevac ima raznovrsne stambene zajednice — od guste gradnje u centru do novih naselja na periferiji. MojUlaz se prilagođava specifičnostima svake lokacije.',
    areas: [
      { title: 'Centar i Stari Grad', desc: 'Starije zgrade u samom centru Kragujevca sa po 15–40 stanova. Česte potrebe za održavanjem fasade, krova i zajedničkih prostora. Predsednici skupštine ovde posebno cene jednostavnost aplikacije i transparentne finansije.' },
      { title: 'Aerodrom', desc: 'Jedno od najvećih stambenih naselja u Kragujevcu sa blokovima iz 70-ih i 80-ih. Zgrade sa 50–120 stanova zahtevaju robustan sistem za komunikaciju i prijavu kvarova — Viber grupe od 100 članova su neupotrebljive.' },
      { title: 'Bubanj', desc: 'Gusto naseljeno stambeno naselje sa starijim fondom i aktivnom zajednicom stanara. Česti kvarovi na instalacijama i potreba za transparentnim praćenjem troškova čine MojUlaz idealnim rešenjem.' },
      { title: 'Erdoglija', desc: 'Mešavina starijih zgrada i novijih stambenih kompleksa. Mladi vlasnici stanova ovde očekuju digitalan pristup — mobilna aplikacija za prijavu kvarova i online glasanje su najtraženije funkcije.' },
      { title: 'Stanovo i Denino brdo', desc: 'Nova stambena naselja u ekspanziji. Zgrade koje koriste MojUlaz od prvog dana postavljaju zdrav temelj za komunikaciju i organizaciju — pre nego što se stvore loše navike sa Viber grupama.' },
      { title: 'Pivara i Bresnica', desc: 'Mirna naselja sa manjim stambenim zgradama i porodičnom atmosferom. Jednostavnost MojUlaza odgovara predsednicima skupštine koji nemaju tehničko znanje ali žele da upravljaju zgradom profesionalno.' },
    ],
    faqTitle: 'Često postavljana pitanja — Kragujevac',
    faq: [
      { q: 'Da li MojUlaz koriste zgrade u Kragujevcu?', a: 'Da. MojUlaz koriste stambene zajednice širom Srbije, uključujući Kragujevac. Od centra grada i Aerodroma do novih naselja na periferiji — platforma je prilagođena zgradama svih veličina i tipova.' },
      { q: 'Da li MojUlaz radi i za predsednike skupštine koji to rade volonterski?', a: 'Apsolutno. MojUlaz je dizajniran da bude jednostavan za sve — od profesionalnih agencija do predsednika skupštine koji upravljaju jednom zgradom bez naknade. Interfejs je intuitivan i na srpskom jeziku.' },
      { q: 'Koliko košta MojUlaz za kragujevačke upravnike?', a: '2.190 RSD + PDV po zgradi godišnje (2.628 RSD sa PDV-om). Sve funkcionalnosti su uključene od prvog dana — prijava kvarova, obaveštenja, finansije, glasanje i dokumentacija. Probni period od 30 dana je potpuno besplatan.' },
      { q: 'Kako stanari u Kragujevcu počinju da koriste MojUlaz?', a: 'Upravnik ili predsednik skupštine se registruje, doda zgradu i podeli kod sa stanarima. Stanari preuzmu besplatnu mobilnu aplikaciju (iOS ili Android) i ukucaju kod. Ceo proces traje manje od 10 minuta.' },
      { q: 'Da li MojUlaz pomaže sa problemom loše posećenosti skupština?', a: 'Da. Online glasanje zamenjuje fizičke skupštine za većinu odluka. Stanari glasaju sa telefona kad im odgovara, a rezultati su transparentni. Umesto 15% prisutnih na skupštini — participacija od 60–80% preko aplikacije.' },
      { q: 'Mogu li da upravljam više zgrada u Kragujevcu iz jednog naloga?', a: 'Da. Iz jednog naloga upravljate neograničenim brojem zgrada. Svaka ima sopstvenu ploču, stanare, finansije i istoriju kvarova. Idealno za upravnike koji pokrivaju više lokacija u gradu.' },
    ],
    linksTitle: 'Istražite MojUlaz',
    links: [
      { href: '/upravljanje-zgradama-beograd', label: 'Beograd' },
      { href: '/upravljanje-zgradama-novi-sad', label: 'Novi Sad' },
      { href: '/upravljanje-zgradama-nis', label: 'Niš' },
      { href: '/upravnici-zgrada', label: 'Softver za upravnike' },
    ],
    ctaTitle: 'Digitalizujte upravljanje zgradom u Kragujevcu',
    ctaSub: 'Pridružite se stotinama zgrada u Srbiji koje već koriste MojUlaz. Besplatno 30 dana, bez kreditne kartice.',
    ctaBtn: 'Registrujte se besplatno →',
    copy: '© 2026 MojUlaz. Sva prava zadržana.', privacy: 'Politika privatnosti', terms: 'Uslovi korišćenja',
  },
  en: {
    back: 'Back to home', cta: 'Start for free',
    title: 'Building management in Kragujevac — MojUlaz software',
    badge: 'Kragujevac',
    h1: 'Residential building management', h1highlight: 'in Kragujevac',
    intro: [
      'Kragujevac is Serbia\'s fourth-largest city and the industrial heart of Šumadija with over 180,000 residents. A city with a long tradition — from the Zastava factory and the university to a growing number of new residential developments on the outskirts — Kragujevac has a diverse housing stock that requires organized management.',
      'Unlike Belgrade where professional agencies dominate, building management in Kragujevac often falls to volunteer assembly presidents. Without proper tools, communication with residents becomes chaotic — Viber groups with 80 daily messages, door notices nobody reads, and meetings attended by barely one in five residents.',
      'MojUlaz brings professional residential community management tools to Kragujevac — a platform that replaces Viber groups, paper and Excel with a single system for issue reporting, announcements, finances, documentation and resident voting.',
    ],
    challengesTitle: 'Building management challenges in Kragujevac',
    challenges: [
      { title: 'Volunteer management', desc: 'In Kragujevac, volunteer assembly presidents manage buildings more often than in Belgrade. Without professional tools, the work comes down to personally visiting residents, taking notes in a notebook and improvising. MojUlaz provides professional tools even for those doing the job without pay.' },
      { title: 'Old buildings, frequent issues', desc: 'A significant part of Kragujevac\'s buildings were built in the 60s–80s — blocks in Aerodrom, Bubanj and the centre. Aging roofs, worn plumbing and deteriorating facades mean frequent issues that need organized tracking.' },
      { title: 'Growing new developments', desc: 'Kragujevac is experiencing construction growth — new complexes in Erdoglija, Stanovo and the outskirts bring residents who expect a modern management approach from day one. Viber groups and door notices are not an option for them.' },
    ],
    solutionsTitle: 'How MojUlaz helps Kragujevac managers',
    solutions: [
      { title: 'Issue reporting instead of phone calls', desc: 'Burst pipe in the basement? A resident photographs the problem, adds a description and reports it in 30 seconds. The assembly president sees the report immediately, assigns a contractor and everyone tracks the status. No more 6am calls and forgotten problems.' },
      { title: 'Announcements that actually reach everyone', desc: 'Scheduled lift maintenance, planned water shutoff or new house rules — one announcement and every resident gets it on their phone. With read receipts. No more door notices that nobody reads.' },
      { title: 'Financial transparency for all residents', desc: 'How much is in the fund? Who owes? What were the last payments spent on? Everything visible in real time — to every resident. Especially important in Kragujevac where residents are used to monthly reports that arrive late or never.' },
      { title: 'Online voting without a basement meeting', desc: 'Should we renovate the hallway or replace the entrance door? Start a poll, residents vote in the app. Results in hours — without organizing a meeting in the basement that 15% of residents attend.' },
      { title: 'Documentation independent of the president', desc: 'Contractor agreements, meeting minutes, utility bills — all centrally stored in the app. When the assembly president changes, the new person has access to the complete history without searching through folders in the basement.' },
      { title: 'Multi-building management from one account', desc: 'For professional managers and agencies in Kragujevac managing 10, 30 or 50 buildings — all from one account. Each building has its own dashboard with residents, issues, finances and history.' },
    ],
    areasTitle: 'Residential communities across Kragujevac neighbourhoods',
    areasIntro: 'Kragujevac has diverse residential communities — from dense city-centre construction to new developments on the outskirts. MojUlaz adapts to the specifics of each location.',
    areas: [
      { title: 'Centre & Stari Grad', desc: 'Older buildings in downtown Kragujevac with 15–40 apartments. Frequent facade, roof and common area maintenance needs. Assembly presidents here especially value the app\'s simplicity and transparent finances.' },
      { title: 'Aerodrom', desc: 'One of the largest residential areas in Kragujevac with blocks from the 70s and 80s. Buildings with 50–120 apartments need a robust communication and issue reporting system — 100-member Viber groups are unusable.' },
      { title: 'Bubanj', desc: 'A densely populated residential area with older housing stock and an active resident community. Frequent installation issues and the need for transparent cost tracking make MojUlaz an ideal solution.' },
      { title: 'Erdoglija', desc: 'A mix of older buildings and newer residential complexes. Young flat owners here expect a digital approach — a mobile app for issue reporting and online voting are the most requested features.' },
      { title: 'Stanovo & Denino brdo', desc: 'Expanding new residential areas. Buildings using MojUlaz from day one lay a healthy foundation for communication and organization — before bad Viber-group habits form.' },
      { title: 'Pivara & Bresnica', desc: 'Quiet neighbourhoods with smaller residential buildings and a family atmosphere. MojUlaz\'s simplicity suits assembly presidents who lack technical knowledge but want to manage their building professionally.' },
    ],
    faqTitle: 'Frequently asked questions — Kragujevac',
    faq: [
      { q: 'Do Kragujevac buildings use MojUlaz?', a: 'Yes. MojUlaz is used by residential communities across Serbia, including Kragujevac. From the city centre and Aerodrom to new developments on the outskirts — the platform adapts to buildings of all sizes and types.' },
      { q: 'Does MojUlaz work for volunteer assembly presidents?', a: 'Absolutely. MojUlaz is designed to be simple for everyone — from professional agencies to assembly presidents managing a single building without pay. The interface is intuitive and available in Serbian.' },
      { q: 'How much does MojUlaz cost for Kragujevac managers?', a: '2,190 RSD plus VAT per building per year (2,628 RSD including VAT). All features included from day one — issue reporting, announcements, finances, voting and documentation. The 30-day trial is completely free.' },
      { q: 'How do Kragujevac residents start using MojUlaz?', a: 'The manager or assembly president registers, adds a building and shares the code with residents. Residents download the free mobile app (iOS or Android) and enter the code. The whole process takes under 10 minutes.' },
      { q: 'Does MojUlaz help with poor meeting attendance?', a: 'Yes. Online voting replaces physical meetings for most decisions. Residents vote from their phones whenever it suits them, and results are transparent. Instead of 15% attendance at a meeting — 60–80% participation via the app.' },
      { q: 'Can I manage multiple Kragujevac buildings from one account?', a: 'Yes. From one account you manage an unlimited number of buildings. Each has its own dashboard, residents, finances and issue history. Ideal for managers covering multiple locations in the city.' },
    ],
    linksTitle: 'Explore MojUlaz',
    links: [
      { href: '/upravljanje-zgradama-beograd', label: 'Belgrade' },
      { href: '/upravljanje-zgradama-novi-sad', label: 'Novi Sad' },
      { href: '/upravljanje-zgradama-nis', label: 'Niš' },
      { href: '/upravnici-zgrada', label: 'Manager software' },
    ],
    ctaTitle: 'Digitalize building management in Kragujevac',
    ctaSub: 'Join hundreds of buildings in Serbia already using MojUlaz. Free for 30 days, no credit card.',
    ctaBtn: 'Register for free →',
    copy: '© 2026 MojUlaz. All rights reserved.', privacy: 'Privacy policy', terms: 'Terms of service',
  },
}

const Page: NextPage = () => (
  <CityLandingPage
    content={content}
    metaDesc="Softver za upravljanje stambenim zgradama u Kragujevcu. Prijava kvarova, obaveštenja, finansije i glasanje stanara — sve na jednom mestu. Besplatno 30 dana."
    canonicalPath="/upravljanje-zgradama-kragujevac/"
    ogTitle="Upravljanje zgradama u Kragujevcu — MojUlaz"
    ogDesc="Softver za upravnike zgrada u Kragujevcu. Od centra do Aerodroma — digitalno upravljanje stambenom zajednicom."
  />
)

export default Page
