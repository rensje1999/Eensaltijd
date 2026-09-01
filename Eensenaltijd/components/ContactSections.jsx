function ContactHero() {
  return (
    <section className="r-pad" style={ch.wrap}>
          <div style={ch.inner}>
        <h1 style={ch.title}>Vertel mij over<br/><em style={ch.italic}>jullie dag.</em></h1>
        <div style={ch.script}>Een vrijblijvende kennismaking</div>
        <p style={ch.body}>
          Even rustig een kopje koffie samen. Ik luister en jullie delen hardop
          jullie dromen en wensen. Daarna kijken we samen of we samen jullie
          bijzondere dag kunnen vormgeven — zonder verplichtingen.
        </p>
      </div>
    </section>
  );
}
const ch = {
  wrap: { position: 'relative', padding: '112px 56px 96px', textAlign: 'center' },
  inner: { position: 'relative', maxWidth: 800, margin: '0 auto' },
  eyebrow: { fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold-600)', marginBottom: 24 },
  title: { fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(48px, 6.5vw, 92px)', lineHeight: 1.02, color: 'var(--ink)', margin: 0, letterSpacing: '-0.01em' },
  italic: { fontStyle: 'italic', color: 'var(--gold-500)' },
  script: { fontFamily: 'var(--font-script)', fontSize: 'clamp(36px, 4vw, 56px)', color: 'var(--gold-500)', marginTop: 12, lineHeight: 1.15, paddingBottom: 4 },
  body: { fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: 540, margin: '32px auto 0' },
};

function ContactPlanner() {
  return (
    <section className="r-pad r-planner" style={cp.wrap}>
      <div className="r-planner-text" style={cp.textCol}>
        <h2 style={cp.script}>Hoi, ik ben Elise</h2>
        <p style={cp.body}>
          Vanaf het eerste berichtje tot jullie laatste dans ben ik degene die
          met jullie meedenkt.
        </p>
        <svg className="r-planner-arrow" style={cp.arrow} width="180" height="280" viewBox="0 0 90 140" fill="none" aria-hidden="true">
          <path d="M14 6c2 44 8 78 30 106" stroke="var(--gold-400)" strokeWidth="2" strokeLinecap="round" fill="none"/>
          <path d="M28 96c4 9 10 15 18 18" stroke="var(--gold-400)" strokeWidth="2" strokeLinecap="round" fill="none"/>
          <path d="M46 106c-6 6-12 9-18 8" stroke="var(--gold-400)" strokeWidth="2" strokeLinecap="round" fill="none"/>
        </svg>
      </div>
      <div className="r-planner-photo r-float-polaroid" style={cp.photoOuter}>
        <div style={cp.tape} />
        <div className="r-glow-hover" style={cp.polaroid}>
          <image-slot id="contact-elise-photo" shape="rect" fit="cover" placeholder="Foto van Elise" src="assets/elise-polaroid.jpg" style={cp.photoSlot}></image-slot>
        </div>
      </div>
    </section>
  );
}
const cp = {
  wrap: { maxWidth: 1100, margin: '0 auto', padding: '0 56px 96px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48 },
  textCol: { flex: '1 1 380px', position: 'relative' },
  script: { fontFamily: 'var(--font-script)', fontSize: 'clamp(42px, 5vw, 60px)', color: 'var(--gold-500)', margin: 0, lineHeight: 1.2 },
  body: { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', margin: '20px 0 0', maxWidth: 400 },
  arrow: { marginTop: 20, transform: 'scaleX(-1)' },
  photoOuter: { position: 'relative', flex: '0 1 600px', minWidth: 0, maxWidth: 'min(600px, 100%)', transform: 'rotate(3deg)' },
  // class r-float-polaroid added at usage for the floating animation
  tape: {
    position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%) rotate(-4deg)',
    width: 90, height: 30, background: 'linear-gradient(180deg, rgba(212,184,122,0.85), rgba(184,146,74,0.75))',
    opacity: 0.85, zIndex: 2, boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
  },
  polaroid: {
    background: '#fff', padding: '18px 18px 60px', borderRadius: 2,
    boxShadow: '0 22px 40px -12px rgba(43,33,23,0.28), 0 4px 10px rgba(43,33,23,0.12)',
  },
  photoSlot: { width: '100%', height: 360, display: 'block' },
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
        <aside className="r-sticky r-pad-block r-glow-hover" style={cf.aside}>
          <div style={cf.asideEye}><span className="ornament">✦</span> &nbsp; Of bereik mij direct</div>
          <div style={cf.asideRow}>
            <div style={cf.asideLabel}>E-mail</div>
            <a href="mailto:eensenaltijd@gmail.com" style={cf.asideValue}>eensenaltijd@gmail.com</a>
          </div>
          <div style={cf.asideRow}>
            <div style={cf.asideLabel}>WhatsApp</div>
            <div style={cf.phoneRow}>
              <a href="https://wa.me/31650537118" target="_blank" rel="noopener" style={cf.waBtn} aria-label="Stuur een WhatsApp-bericht" className="r-glow-hover">
                <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M16.004 3C9.377 3 4 8.377 4 15.004c0 2.386.694 4.612 1.897 6.478L4.6 26.6l5.234-1.253a11.94 11.94 0 0 0 6.17 1.658c6.627 0 12.004-5.377 12.004-12.001C28.008 8.377 22.631 3 16.004 3zm7.06 17.006c-.3.845-1.502 1.577-2.086 1.667-.535.082-1.203.117-1.94-.123-.446-.147-1.018-.34-1.75-.667-3.077-1.328-5.086-4.416-5.24-4.622-.155-.206-1.24-1.65-1.24-3.146 0-1.495.784-2.23 1.06-2.533.278-.303.605-.379.807-.379.202 0 .404.002.58.011.186.009.436-.07.681.52.253.61.86 2.096.936 2.248.076.152.126.33.025.532-.1.202-.15.328-.303.505-.152.177-.32.395-.457.53-.152.152-.31.317-.133.622.177.303.788 1.298 1.69 2.104 1.163 1.037 2.144 1.36 2.454 1.512.31.152.49.126.674-.076.184-.202.782-.909.99-1.222.21-.31.42-.26.71-.156.29.101 1.826.86 2.14 1.017.31.152.518.227.593.354.076.126.076.732-.224 1.577z"/></svg>
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
    width: 56, height: 56, borderRadius: 999, textDecoration: 'none',
    background: 'var(--sage-deep)', color: 'var(--ivory)',
    boxShadow: '0 8px 20px rgba(43,33,23,0.25)',
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
window.ContactPlanner = ContactPlanner;
window.ContactForm = ContactForm;
