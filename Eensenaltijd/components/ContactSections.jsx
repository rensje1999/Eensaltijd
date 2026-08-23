function ContactHero() {
  return (
    <section className="r-pad" style={ch.wrap}>
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
  const options = [
    {
      t: 'Stuur een WhatsAppje',
      b: 'Zitten jullie op de bank te brainstormen? Stuur mij gerust een direct berichtje met jullie eerste vragen.',
      cta: 'Start WhatsApp chat',
      href: 'https://api.whatsapp.com/send?phone=31650537118',
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12.04 2.75a9.1 9.1 0 0 0-7.8 13.79l-1.1 3.98 4.1-1.07a9.1 9.1 0 1 0 4.8-16.7z"/><path d="M8.9 7.6h.9l1.1 2.5-1 1a6.3 6.3 0 0 0 3.1 3.1l1-1 2.5 1.1v.9c0 .8-.7 1.5-1.6 1.5A8.4 8.4 0 0 1 7.4 9.2c0-.9.6-1.6 1.5-1.6z"/></svg>
      ),
    },
    {
      t: 'Stuur een e-mail',
      b: 'Liever wat uitgebreider jullie ideeën delen? Stuur een mailtje met jullie verhaal en ik reageer binnen 48 uur.',
      cta: 'Stuur een mail',
      href: 'mailto:eensenaltijd@gmail.com?subject=' + encodeURIComponent('Aanvraag via de website'),
      external: false,
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M3.5 7.5 12 13l8.5-5.5"/></svg>
      ),
    },
  ];

  return (
    <section className="r-pad" style={cf.wrap}>
      <div className="r-2col" style={cf.grid}>
        <div style={cf.hubCol}>
          <Eyebrow>Kies wat bij jullie past</Eyebrow>
          <h2 style={cf.title}>Twee manieren<br/><em style={{fontStyle:'italic', color:'var(--gold-500)'}}>om hallo te zeggen.</em></h2>
          <div style={cf.hubList}>
            {options.map((o, i) => (
              <div key={i} style={cf.hubItem}>
                <div style={cf.hubIcon}>{o.icon}</div>
                <div style={cf.hubBody}>
                  <h3 style={cf.hubTitle}>{o.t}</h3>
                  <p style={cf.hubText}>{o.b}</p>
                  <a
                    href={o.href}
                    {...(o.external ? { target: '_blank', rel: 'noopener' } : {})}
                    style={cf.hubLink}
                    dangerouslySetInnerHTML={{ __html: o.cta + ' <span style="margin-left:8px">\u2192</span>' }}
                  ></a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* aside */}
        <aside className="r-sticky r-pad-block" style={cf.aside}>
          <div style={cf.asideEye}>◆ &nbsp; Of bereik mij direct</div>
          <div style={cf.asideRow}>
            <div style={cf.asideLabel}>E-mail</div>
            <a href="mailto:eensenaltijd@gmail.com" style={cf.asideValue}>eensenaltijd@gmail.com</a>
          </div>
          <div style={cf.asideRow}>
            <div style={cf.asideLabel}>WhatsApp</div>
            <div style={cf.phoneRow}>
              <a href="https://wa.me/31650537118" target="_blank" rel="noopener" style={cf.waBtn} aria-label="Stuur een WhatsApp-bericht">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z"/><path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.34-1.4a9.83 9.83 0 0 0 4.7 1.2h.01c5.43 0 9.85-4.42 9.85-9.86A9.8 9.8 0 0 0 12.04 2zm0 17.96h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.17.83.85-3.09-.2-.32a8.15 8.15 0 0 1-1.25-4.35c0-4.52 3.68-8.2 8.2-8.2 2.2 0 4.26.86 5.81 2.41a8.15 8.15 0 0 1 2.4 5.8c0 4.52-3.67 8.2-8.19 8.2z"/></svg>
              </a>
            </div>
          </div>
          <div style={cf.asideRow}>
            <div style={cf.asideLabel}>Werkgebied</div>
            <div style={cf.asideValue}>Enschede en omstreken</div>
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
  grid: { display: 'grid', gridTemplateColumns: '1.45fr 1fr', gap: 64, alignItems: 'flex-start' },
  formCol: { background: 'var(--pearl)', borderRadius: 'var(--r-lg)', padding: '56px 56px', marginTop: 32 },
  hubCol: { paddingTop: 8 },
  hubList: { display: 'flex', flexDirection: 'column', gap: 4, marginTop: 40 },
  hubItem: {
    display: 'grid', gridTemplateColumns: '54px 1fr', gap: 24,
    alignItems: 'start', padding: '32px 0',
    borderTop: '1px solid var(--hairline)',
  },
  hubIcon: {
    width: 54, height: 54, borderRadius: '50%',
    border: '1px solid var(--brass)', color: 'var(--gold-600)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  hubBody: { minWidth: 0 },
  hubTitle: {
    fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 27,
    lineHeight: 1.15, color: 'var(--ink)', margin: '4px 0 10px',
  },
  hubText: {
    fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.7,
    color: 'var(--ink-soft)', margin: '0 0 18px', maxWidth: 460,
  },
  hubLink: {
    display: 'inline-flex', alignItems: 'center',
    fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
    letterSpacing: '0.02em', textDecoration: 'none',
    color: 'var(--ink)', background: 'transparent',
    border: '1px solid var(--brass)', borderRadius: 999,
    padding: '12px 26px',
  },
  form: { display: 'flex', flexDirection: 'column', gap: 22 },
  title: { fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: 1.1, color: 'var(--ink)', margin: '0 0 16px', letterSpacing: '-0.005em' },
  row2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 },
  cta: { fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500, background: 'var(--gold-400)', color: 'var(--ivory)', border: 'none', padding: '15px 30px', borderRadius: 999, boxShadow: 'var(--shadow-gold)', alignSelf: 'flex-start', marginTop: 8, transition: 'all .25s ease' },
  fine: { fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--ink-mute)', margin: 0 },
  aside: { background: 'var(--ink)', color: 'var(--ivory)', borderRadius: 'var(--r-lg)', padding: '56px 44px', position: 'sticky', top: 100, marginTop: 32 },
  asideEye: { fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold-200)', marginBottom: 22, marginTop: 28 },
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
  script: { fontFamily: 'var(--font-script)', fontSize: 48, color: 'var(--gold-200)', marginTop: 32, lineHeight: 1 },
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
