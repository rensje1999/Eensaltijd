function ContactHero() {
  return (
    <section style={ch.wrap}>
      <div style={ch.tulle} />
      <div style={ch.inner}>
        <div style={ch.eyebrow}>◆ &nbsp; Contact</div>
        <h1 style={ch.title}>Vertel mij over<br/><em style={ch.italic}>jullie dag.</em></h1>
        <div style={ch.script}>Een vrijblijvende kennismaking</div>
        <p style={ch.body}>
          Even rustig een kopje koffie samen. Ik luister, jullie dromen hardop. Daarna
          kijken we samen of we passen — zonder verplichtingen.
        </p>
      </div>
    </section>
  );
}
const ch = {
  wrap: { position: 'relative', overflow: 'hidden', padding: '112px 56px 96px', textAlign: 'center', margin: '12px 32px 0', borderRadius: 'var(--r-lg)' },
  tulle: { position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(43,33,23,0.46), rgba(43,33,23,0.66)), url("assets/contact-zonsondergang.png") center 40%/cover no-repeat' },
  inner: { position: 'relative', maxWidth: 800, margin: '0 auto' },
  eyebrow: { fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold-200)', marginBottom: 24 },
  title: { fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(48px, 6.5vw, 92px)', lineHeight: 1.02, color: 'var(--ivory)', margin: 0, letterSpacing: '-0.01em' },
  italic: { fontStyle: 'italic', color: 'var(--gold-200)' },
  script: { fontFamily: 'var(--font-script)', fontSize: 'clamp(36px, 4vw, 56px)', color: 'var(--gold-200)', marginTop: 12, lineHeight: 1.15, paddingBottom: 4 },
  body: { fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65, color: 'rgba(245,236,214,0.88)', maxWidth: 540, margin: '32px auto 0' },
};

function ContactForm() {
  const [form, setForm] = React.useState({
    names: '', email: '', phone: '', date: '', guests: '', service: 'Volledig', message: ''
  });
  const [sent, setSent] = React.useState(false);
  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }));
  const ok = form.names.trim() && form.email.trim().includes('@') && form.message.trim().length >= 5;

  return (
    <section style={cf.wrap}>
      <div style={cf.grid}>
        {/* form */}
        <div style={cf.formCol}>
          {sent ? (
            <div style={cf.thanks}>
              <div style={cf.thanksScript}>Dank jullie wel.</div>
              <p style={cf.thanksBody}>
                We hebben jullie bericht ontvangen. Binnen twee werkdagen
                horen jullie van mij — vaak sneller. Tot snel.
              </p>
              <GoldButton href="index.html" variant="dark">Terug naar home</GoldButton>
            </div>
          ) : (
            <form style={cf.form} onSubmit={e => { e.preventDefault(); if (ok) setSent(true); }}>
              <Eyebrow>Stuur mij een bericht</Eyebrow>
              <h2 style={cf.title}>Een paar vragen<br/><em style={{fontStyle:'italic', color:'var(--gold-500)'}}>om alvast te beginnen.</em></h2>

              <div style={cf.row2}>
                <Field label="Jullie namen" required value={form.names} onChange={v => set('names', v)} placeholder="Bijv. Sophie & Daan" />
                <Field label="E-mailadres" required type="email" value={form.email} onChange={v => set('email', v)} placeholder="naam@voorbeeld.nl" />
              </div>
              <div style={cf.row2}>
                <Field label="Telefoon" value={form.phone} onChange={v => set('phone', v)} placeholder="+31 6 …" />
                <Field label="Datum (indicatie)" value={form.date} onChange={v => set('date', v)} placeholder="Bijv. zomer 2026" />
              </div>
              <div style={cf.row2}>
                <Field label="Aantal gasten" value={form.guests} onChange={v => set('guests', v)} placeholder="Bijv. 80" />
                <SelectField label="Welk pakket spreekt jullie aan?" value={form.service} onChange={v => set('service', v)}
                  options={['Volledig (Goud)', 'Samen plannen (Zilver)', 'Dagcoördinatie (Brons)', 'Nog niet zeker']} />
              </div>
              <Field textarea label="Vertel mij over jullie dag" required value={form.message} onChange={v => set('message', v)} placeholder="Waar dromen jullie van? Wat is belangrijk voor jullie?" />

              <button type="submit" disabled={!ok} style={{
                ...cf.cta,
                opacity: ok ? 1 : 0.45, cursor: ok ? 'pointer' : 'not-allowed',
              }}>
                Verstuur bericht <span style={{ marginLeft: 10 }}>→</span>
              </button>
              <p style={cf.fine}>Ik reageer binnen twee werkdagen — vaak sneller.</p>
            </form>
          )}
        </div>

        {/* aside */}
        <aside style={cf.aside}>
          <div style={cf.asideEye}>◆ &nbsp; Of bereik mij direct</div>
          <div style={cf.asideRow}>
            <div style={cf.asideLabel}>E-mail</div>
            <a href="mailto:eensenaltijd@gmail.com" style={cf.asideValue}>eensenaltijd@gmail.com</a>
          </div>
          <div style={cf.asideRow}>
            <div style={cf.asideLabel}>Telefoon</div>
            <div style={cf.phoneRow}>
              <span style={cf.asideValue}>+31 6 50 53 71 18</span>
              <a href="https://wa.me/31650537118" target="_blank" rel="noopener" style={cf.waBtn} aria-label="Stuur een WhatsApp-bericht">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z"/><path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.34-1.4a9.83 9.83 0 0 0 4.7 1.2h.01c5.43 0 9.85-4.42 9.85-9.86A9.8 9.8 0 0 0 12.04 2zm0 17.96h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.17.83.85-3.09-.2-.32a8.15 8.15 0 0 1-1.25-4.35c0-4.52 3.68-8.2 8.2-8.2 2.2 0 4.26.86 5.81 2.41a8.15 8.15 0 0 1 2.4 5.8c0 4.52-3.67 8.2-8.19 8.2z"/></svg>
              </a>
            </div>
          </div>
          <div style={cf.asideRow}>
            <div style={cf.asideLabel}>Werkgebied</div>
            <div style={cf.asideValue}>Overijssel</div>
          </div>
          <div style={cf.divider} />
          <div style={cf.asideEye}>Op afspraak</div>
          <div style={cf.hours}>
            <div style={cf.hoursRow}><span>Ma — Woe</span><span>op afspraak</span></div>
            <div style={cf.hoursRow}><span>Vr — Zo</span><span>11.00 — 18.00</span></div>
          </div>
          <div style={cf.script}>Tot snel.</div>
        </aside>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, required, type = 'text', textarea }) {
  return (
    <label style={fld.wrap}>
      <span style={fld.label}>{label}{required && <span style={fld.req}> *</span>}</span>
      {textarea ? (
        <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={5} style={{ ...fld.input, ...fld.textarea }} />
      ) : (
        <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={fld.input} />
      )}
    </label>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <label style={fld.wrap}>
      <span style={fld.label}>{label}</span>
      <select value={value} onChange={e => onChange(e.target.value)} style={{ ...fld.input, appearance: 'none', backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' stroke='%239a7732' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 18px center', paddingRight: 44 }}>
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

const fld = {
  wrap: { display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 },
  label: { fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 8 },
  req: { color: 'var(--gold-500)' },
  input: { fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--ink)', background: 'var(--ivory)', border: '1px solid var(--hairline)', borderRadius: 'var(--r-sm)', padding: '14px 16px', outline: 'none', transition: 'border-color .25s ease', width: '100%', boxSizing: 'border-box' },
  textarea: { resize: 'vertical', minHeight: 130, lineHeight: 1.6, fontFamily: 'var(--font-body)' },
};

const cf = {
  wrap: { padding: '0 56px 96px', maxWidth: 1320, margin: '0 auto' },
  grid: { display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24, alignItems: 'flex-start' },
  formCol: { background: 'var(--pearl)', borderRadius: 'var(--r-lg)', padding: '56px 56px', marginTop: 32 },
  form: { display: 'flex', flexDirection: 'column', gap: 22 },
  title: { fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: 1.1, color: 'var(--ink)', margin: '0 0 16px', letterSpacing: '-0.005em' },
  row2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 },
  cta: { fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500, background: 'var(--gold-400)', color: 'var(--ivory)', border: 'none', padding: '15px 30px', borderRadius: 999, boxShadow: 'var(--shadow-gold)', alignSelf: 'flex-start', marginTop: 8, transition: 'all .25s ease' },
  fine: { fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--ink-mute)', margin: 0 },
  aside: { background: 'var(--ink)', color: 'var(--ivory)', borderRadius: 'var(--r-lg)', padding: '56px 44px', position: 'sticky', top: 100, marginTop: 32 },
  asideEye: { fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold-300)', marginBottom: 22, marginTop: 28 },
  asideRow: { marginBottom: 22 },
  phoneRow: { display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' },
  waBtn: {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: 30, height: 30, borderRadius: 999, textDecoration: 'none',
    background: '#25D366', color: '#0b2f18',
  },
  asideLabel: { fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,236,214,0.55)', marginBottom: 6 },
  asideValue: { fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--ivory)', textDecoration: 'none', lineHeight: 1.4, display: 'block' },
  divider: { height: 1, background: 'rgba(245,236,214,0.14)', margin: '8px 0 0' },
  hours: { display: 'flex', flexDirection: 'column', gap: 10, fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(245,236,214,0.8)' },
  hoursRow: { display: 'flex', justifyContent: 'space-between', gap: 24 },
  script: { fontFamily: 'var(--font-script)', fontSize: 48, color: 'var(--gold-300)', marginTop: 32, lineHeight: 1 },
  thanks: { textAlign: 'center', padding: '32px 0' },
  thanksScript: { fontFamily: 'var(--font-script)', fontSize: 88, color: 'var(--gold-500)', lineHeight: 1, marginBottom: 16 },
  thanksBody: { fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.5, color: 'var(--ink)', margin: '0 auto 32px', maxWidth: 480 },
};

// inject style for hours rows
if (typeof document !== 'undefined' && !document.getElementById('contact-extra-css')) {
  const s = document.createElement('style'); s.id = 'contact-extra-css';
  s.textContent = `.hr-row > div { display:flex; justify-content:space-between; }`;
  document.head.appendChild(s);
}

window.ContactHero = ContactHero;
window.ContactForm = ContactForm;
