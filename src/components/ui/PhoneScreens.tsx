/**
 * Five self-contained phone-screen components rendered inside the PhoneMockup.
 * They use inline styles only (no Tailwind) so they render correctly at any
 * size without relying on the outer page's utility classes.
 */

const T = {
  teal600: '#0d9488',
  teal700: '#0f766e',
  teal50:  '#f0fdfa',
  teal100: '#ccfbf1',
  ink:     '#0f172a',
  slate900:'#0f172a',
  slate700:'#334155',
  slate500:'#64748b',
  slate400:'#94a3b8',
  slate200:'#e2e8f0',
  slate100:'#f1f5f9',
  slate50: '#f8fafc',
  white:   '#ffffff',
  amber400:'#fbbf24',
  amber50: '#fffbeb',
  amber100:'#fef3c7',
  green50: '#f0fdf4',
  green600:'#16a34a',
  red50:   '#fef2f2',
  red500:  '#ef4444',
  indigo50:'#eef2ff',
  indigo600:'#4f46e5',
}

const s = {
  wrap: {
    width: '100%', height: '100%', background: T.white,
    fontFamily: 'Inter, system-ui, sans-serif', overflow: 'hidden', userSelect: 'none' as const,
  },
  island: { height: 28 },
  row: { display: 'flex', alignItems: 'center' as const },
  col: { display: 'flex', flexDirection: 'column' as const },
}

/* ── Screen 0: Dashboard ─────────────────── */
export function DashboardScreen() {
  return (
    <div style={s.wrap}>
      <div style={s.island} />

      {/* Header */}
      <div style={{ ...s.row, justifyContent: 'space-between', padding: '0 14px 8px' }}>
        <div>
          <div style={{ fontSize: 8, fontWeight: 800, color: T.teal600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Dobrodošli 👋
          </div>
          <div style={{ fontSize: 16, fontWeight: 900, color: T.ink, marginTop: 2 }}>
            Miroslav J.
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: T.teal50, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>
            🔔
          </div>
          <div style={{ position: 'absolute', top: -2, right: -2, width: 15, height: 15, borderRadius: '50%', background: T.teal600, color: T.white, fontSize: 8, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            3
          </div>
        </div>
      </div>

      {/* Building card */}
      <div style={{ margin: '0 12px 10px', padding: 12, borderRadius: 18, background: `linear-gradient(135deg, ${T.teal600}, ${T.teal700})`, color: T.white }}>
        <div style={{ ...s.row, gap: 8, marginBottom: 9 }}>
          <div style={{ width: 28, height: 28, background: 'rgba(255,255,255,0.2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>🏢</div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 800 }}>Zgrada br. 100</div>
            <div style={{ fontSize: 8, opacity: 0.72, marginTop: 1 }}>Bulevar Kralja Aleksandra</div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 5 }}>
          {(['32 Stana', '5 Kvarova', '1 Anketa'] as const).map((label) => {
            const [v, l] = label.split(' ')
            return (
              <div key={label} style={{ background: 'rgba(255,255,255,0.16)', borderRadius: 10, padding: '6px 4px', textAlign: 'center' }}>
                <div style={{ fontSize: 15, fontWeight: 900 }}>{v}</div>
                <div style={{ fontSize: 8, opacity: 0.75 }}>{l}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Stat tiles */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7, padding: '0 12px', marginBottom: 10 }}>
        {[
          { icon: '🔧', value: '4', label: 'Aktivna kvarova', bg: T.amber50, vc: '#d97706' },
          { icon: '💰', value: '210k', label: 'Fond (RSD)', bg: T.teal50, vc: T.teal600 },
        ].map(({ icon, value, label, bg, vc }) => (
          <div key={label} style={{ background: bg, borderRadius: 14, padding: 10, border: `1px solid ${T.slate200}` }}>
            <span style={{ fontSize: 16 }}>{icon}</span>
            <div style={{ fontSize: 15, fontWeight: 900, color: vc, marginTop: 4 }}>{value}</div>
            <div style={{ fontSize: 8, color: T.slate500, marginTop: 2 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Activity feed */}
      <div style={{ padding: '0 12px' }}>
        <div style={{ fontSize: 10, fontWeight: 800, color: T.ink, marginBottom: 7 }}>Najnovije</div>
        {[
          { icon: '🔧', text: 'Kvar u liftu prijavljen', time: '5 min' },
          { icon: '📢', text: 'Obaveštenje upravnika', time: '1h' },
          { icon: '🗳️', text: 'Glasanje otvoreno', time: '2h' },
        ].map(({ icon, text, time }) => (
          <div key={text} style={{ ...s.row, gap: 8, padding: '6px 0', borderBottom: `1px solid ${T.slate100}` }}>
            <span style={{ fontSize: 11 }}>{icon}</span>
            <span style={{ fontSize: 9, color: T.slate700, flex: 1 }}>{text}</span>
            <span style={{ fontSize: 8, color: T.slate400 }}>{time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Screen 1: Kvarovi (Maintenance) ─────── */
export function MaintenanceScreen() {
  const requests = [
    { id: '#142', title: 'Kvar u liftu', floor: '8. sprat', status: 'U toku', statusColor: T.amber400, bg: T.amber100, icon: '🔧' },
    { id: '#141', title: 'Curenje vode', floor: '3. sprat', status: 'Prijavljeno', statusColor: '#60a5fa', bg: '#eff6ff', icon: '💧' },
    { id: '#140', title: 'Grijanje ne radi', floor: '5. sprat', status: 'Rešeno ✓', statusColor: T.green600, bg: T.green50, icon: '♨️' },
  ]

  return (
    <div style={s.wrap}>
      <div style={s.island} />

      {/* Header */}
      <div style={{ ...s.row, justifyContent: 'space-between', padding: '0 14px 12px' }}>
        <div style={{ fontSize: 16, fontWeight: 900, color: T.ink }}>Kvarovi</div>
        <div style={{ width: 28, height: 28, borderRadius: 10, background: T.teal600, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: T.white, fontWeight: 700 }}>+</div>
      </div>

      {/* Stats row */}
      <div style={{ ...s.row, gap: 6, padding: '0 12px', marginBottom: 12 }}>
        {[['4', 'Aktivno'], ['1', 'Danas'], ['12', 'Rešeno']].map(([v, l]) => (
          <div key={l} style={{ flex: 1, background: T.slate50, borderRadius: 12, padding: '8px 6px', textAlign: 'center', border: `1px solid ${T.slate200}` }}>
            <div style={{ fontSize: 16, fontWeight: 900, color: T.ink }}>{v}</div>
            <div style={{ fontSize: 8, color: T.slate500 }}>{l}</div>
          </div>
        ))}
      </div>

      {/* Request list */}
      <div style={{ padding: '0 12px' }}>
        <div style={{ fontSize: 10, fontWeight: 800, color: T.ink, marginBottom: 8 }}>Aktivni zahtevi</div>
        {requests.map(({ id, title, floor, status, statusColor, bg, icon }) => (
          <div key={id} style={{ ...s.row, gap: 10, padding: '9px 10px', background: T.white, borderRadius: 14, marginBottom: 6, border: `1px solid ${T.slate100}`, boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
            <div style={{ width: 34, height: 34, borderRadius: 11, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, flexShrink: 0 }}>
              {icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.ink, marginBottom: 2 }}>{title}</div>
              <div style={{ fontSize: 8, color: T.slate500 }}>{floor} · {id}</div>
            </div>
            <div style={{ fontSize: 8, fontWeight: 700, color: statusColor, whiteSpace: 'nowrap' }}>{status}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Screen 2: Obaveštenja (Notifications) ── */
export function NotificationsScreen() {
  return (
    <div style={s.wrap}>
      <div style={s.island} />

      {/* Header */}
      <div style={{ padding: '0 14px 10px' }}>
        <div style={{ fontSize: 16, fontWeight: 900, color: T.ink }}>Obaveštenja</div>
        <div style={{ fontSize: 9, color: T.slate500, marginTop: 2 }}>Pošaljite svim stanarima</div>
      </div>

      {/* Compose card */}
      <div style={{ margin: '0 12px 10px', padding: 12, background: T.slate50, borderRadius: 16, border: `1px solid ${T.slate200}` }}>
        <div style={{ fontSize: 9, fontWeight: 700, color: T.ink, marginBottom: 6 }}>Nova poruka</div>
        <div style={{ background: T.white, borderRadius: 10, padding: '8px 10px', border: `1px solid ${T.slate200}`, marginBottom: 8 }}>
          <div style={{ fontSize: 9, color: T.slate500, marginBottom: 3 }}>Naslov</div>
          <div style={{ fontSize: 10, fontWeight: 600, color: T.ink }}>Planirano isključenje struje</div>
        </div>
        <div style={{ background: T.white, borderRadius: 10, padding: '8px 10px', border: `1px solid ${T.slate200}`, marginBottom: 8, minHeight: 50 }}>
          <div style={{ fontSize: 9, color: T.slate500, marginBottom: 3 }}>Poruka</div>
          <div style={{ fontSize: 9, color: T.ink, lineHeight: 1.45 }}>Obaveštavamo stanare da će 15. juna biti isključena struja od 10h do 14h.</div>
        </div>
        <div style={{ ...s.row, gap: 6 }}>
          <div style={{ flex: 1, padding: '8px 0', background: T.teal600, borderRadius: 10, textAlign: 'center', color: T.white, fontSize: 10, fontWeight: 700 }}>
            📤 Pošalji svima
          </div>
        </div>
      </div>

      {/* Recent */}
      <div style={{ padding: '0 12px' }}>
        <div style={{ fontSize: 10, fontWeight: 800, color: T.ink, marginBottom: 8 }}>Poslata obaveštenja</div>
        {[
          { icon: '🚰', title: 'Servis vodovodnih cevi', time: 'Juče', read: '28/32' },
          { icon: '🗳️', title: 'Poziv na skupštinu stanara', time: '3 dana', read: '32/32' },
        ].map(({ icon, title, time, read }) => (
          <div key={title} style={{ ...s.row, gap: 9, padding: '7px 0', borderBottom: `1px solid ${T.slate100}` }}>
            <span style={{ fontSize: 14 }}>{icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 9, fontWeight: 600, color: T.ink }}>{title}</div>
              <div style={{ fontSize: 8, color: T.slate400, marginTop: 1 }}>{time} · Pročitalo {read}</div>
            </div>
            <div style={{ width: 20, height: 20, borderRadius: '50%', background: T.teal50, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10 }}>✓</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Screen 3: Finansije (Finances) ──────── */
export function FinancesScreen() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun']
  const values = [68, 72, 85, 78, 90, 95]
  const max = Math.max(...values)

  return (
    <div style={s.wrap}>
      <div style={s.island} />

      {/* Header */}
      <div style={{ padding: '0 14px 10px' }}>
        <div style={{ fontSize: 16, fontWeight: 900, color: T.ink }}>Finansije</div>
      </div>

      {/* Fund balance card */}
      <div style={{ margin: '0 12px 10px', padding: 14, borderRadius: 18, background: `linear-gradient(135deg, ${T.teal600}, ${T.teal700})`, color: T.white }}>
        <div style={{ fontSize: 9, opacity: 0.75, marginBottom: 4 }}>Rezervni fond</div>
        <div style={{ fontSize: 24, fontWeight: 900, letterSpacing: '-0.5px', marginBottom: 2 }}>210.529</div>
        <div style={{ fontSize: 9, opacity: 0.75, marginBottom: 12 }}>RSD · Ažurirano danas</div>
        <div style={{ ...s.row, justifyContent: 'space-between' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 11, fontWeight: 800 }}>+18.400</div>
            <div style={{ fontSize: 8, opacity: 0.7 }}>Uplaćeno</div>
          </div>
          <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.25)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 11, fontWeight: 800 }}>-4.200</div>
            <div style={{ fontSize: 8, opacity: 0.7 }}>Rashodi</div>
          </div>
          <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.25)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 11, fontWeight: 800 }}>2/32</div>
            <div style={{ fontSize: 8, opacity: 0.7 }}>Duguju</div>
          </div>
        </div>
      </div>

      {/* Bar chart */}
      <div style={{ padding: '0 12px', marginBottom: 10 }}>
        <div style={{ fontSize: 10, fontWeight: 800, color: T.ink, marginBottom: 8 }}>Trend fonda (RSD k)</div>
        <div style={{ ...s.row, alignItems: 'flex-end', gap: 5, height: 48 }}>
          {months.map((m, i) => (
            <div key={m} style={{ flex: 1, ...s.col, alignItems: 'center', gap: 3 }}>
              <div style={{ width: '100%', background: i === months.length - 1 ? T.teal600 : T.teal100, borderRadius: '4px 4px 0 0', height: `${(values[i] / max) * 42}px`, transition: 'height 1s ease' }} />
              <div style={{ fontSize: 7, color: T.slate400 }}>{m}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent transactions */}
      <div style={{ padding: '0 12px' }}>
        <div style={{ fontSize: 10, fontWeight: 800, color: T.ink, marginBottom: 7 }}>Poslednje transakcije</div>
        {[
          { icon: '⬆️', label: 'Uplata stanarine', amount: '+4.200', color: T.green600 },
          { icon: '⬇️', label: 'Popravka lifta', amount: '-12.500', color: T.red500 },
        ].map(({ icon, label, amount, color }) => (
          <div key={label} style={{ ...s.row, gap: 9, padding: '6px 0', borderBottom: `1px solid ${T.slate100}` }}>
            <span style={{ fontSize: 12 }}>{icon}</span>
            <span style={{ flex: 1, fontSize: 9, color: T.slate700 }}>{label}</span>
            <span style={{ fontSize: 10, fontWeight: 700, color }}>{amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Screen 4: Glasanje / Ankete (Voting) ─── */
export function VotingScreen() {
  const options = [
    { label: 'Renovacija hodnika', votes: 18, pct: 56, color: T.teal600 },
    { label: 'Novi interfon sistem', votes: 9,  pct: 28, color: T.indigo600 },
    { label: 'Popravka fasade',     votes: 5,  pct: 16, color: '#f59e0b' },
  ]

  return (
    <div style={s.wrap}>
      <div style={s.island} />

      {/* Header */}
      <div style={{ padding: '0 14px 10px' }}>
        <div style={{ fontSize: 16, fontWeight: 900, color: T.ink }}>Glasanje</div>
        <div style={{ fontSize: 9, color: T.slate500, marginTop: 2 }}>Aktivna anketa</div>
      </div>

      {/* Poll card */}
      <div style={{ margin: '0 12px 10px', padding: 14, background: T.white, borderRadius: 18, border: `1px solid ${T.slate200}`, boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
        {/* Badge */}
        <div style={{ ...s.row, gap: 6, marginBottom: 10 }}>
          <div style={{ padding: '3px 8px', background: T.teal50, borderRadius: 20, fontSize: 8, fontWeight: 700, color: T.teal600 }}>🟢 Aktivno</div>
          <div style={{ fontSize: 8, color: T.slate400 }}>Ističe za 3 dana · 32 glasača</div>
        </div>

        <div style={{ fontSize: 11, fontWeight: 800, color: T.ink, marginBottom: 12, lineHeight: 1.4 }}>
          Koji projekat da realizujemo sledećeg meseca?
        </div>

        {/* Options with progress bars */}
        {options.map(({ label, votes, pct, color }, i) => (
          <div key={label} style={{ marginBottom: i < options.length - 1 ? 10 : 0 }}>
            <div style={{ ...s.row, justifyContent: 'space-between', marginBottom: 4 }}>
              <div style={{ fontSize: 9, fontWeight: 600, color: T.ink }}>{label}</div>
              <div style={{ fontSize: 9, fontWeight: 700, color }}>{votes} ({pct}%)</div>
            </div>
            <div style={{ height: 8, background: T.slate100, borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${pct}%`, background: color, borderRadius: 4, transition: 'width 1s ease' }} />
            </div>
          </div>
        ))}

        {/* CTA */}
        <div style={{ ...s.row, gap: 6, marginTop: 12 }}>
          <div style={{ flex: 1, padding: '9px 0', background: T.teal600, borderRadius: 11, textAlign: 'center', color: T.white, fontSize: 10, fontWeight: 700, cursor: 'pointer' }}>
            🗳️ Glasaj
          </div>
        </div>
      </div>

      {/* Results summary */}
      <div style={{ padding: '0 12px' }}>
        <div style={{ fontSize: 10, fontWeight: 800, color: T.ink, marginBottom: 6 }}>Ukupno glasova: 32</div>
        <div style={{ fontSize: 9, color: T.slate500, lineHeight: 1.5 }}>
          Glasanje je anonimno. Rezultati su vidljivi svim stanarima nakon zatvaranja ankete.
        </div>
      </div>
    </div>
  )
}
