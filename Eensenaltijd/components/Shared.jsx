/* =========================================================================
   Shared chrome — Nav + Footer + reusable bits
   ========================================================================= */

function SiteNav({ active = 'home', dark = false }) {
  const items = [
    { id: 'home', label: 'Home', href: 'index.html' },
    { id: 'aanbod', label: 'Aanbod', href: 'aanbod.html' },
    { id: 'over', label: 'Over mij', href: 'over.html' },
    { id: 'contact', label: 'Contact', href: 'contact.html' },
  ];
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  return (
    <React.Fragment>
    <nav className="r-nav" style={{
      position: 'sticky', top: 0, zIndex: 20,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 56px',
      background: dark ? 'rgba(43,33,23,0.55)' : 'rgba(251,247,239,0.82)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderBottom: dark ? '1px solid rgba(245,236,214,0.10)' : '1px solid var(--hairline-soft)',
    }}>
      <a href="index.html" style={{
        display: 'flex', alignItems: 'center', gap: 10,
        fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 400,
        letterSpacing: '-0.005em', textDecoration: 'none',
      }}>
        <img src="assets/logo.png" alt="Eens &amp; Altijd — weddingplanner in Twente" width="360" height="180" className="r-nav-logo" style={{ height: 90, width: 'auto' }} />
      </a>

      <div className="r-nav-links" style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
        {items.map(it => (
          <a key={it.id} href={it.href} style={{
            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 400,
            color: dark ? 'var(--on-dark)' : (active === it.id ? 'var(--gold-500)' : 'var(--ink)'),
            letterSpacing: '0.04em',
            textDecoration: 'none',
            position: 'relative',
            paddingBottom: 4,
            borderBottom: active === it.id ? '1px solid #747e59' : '1px solid transparent',
          }}>{it.label}</a>
        ))}
      </div>

      {active !== 'contact' ? (
        <a href="contact.html" className="r-nav-cta" style={{
          fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
          background: 'var(--sage-deep)', color: 'var(--ivory)',
          border: '1px solid var(--sage-deep)', padding: '11px 24px', borderRadius: 999,
          cursor: 'pointer', letterSpacing: '0.01em', textDecoration: 'none',
        }}>Plan een kennismaking</a>
      ) : (
        <div className="r-nav-cta" style={{ visibility: 'hidden', pointerEvents: 'none', fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, padding: '11px 24px' }}>Plan een kennismaking</div>
      )}

      <button className="r-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} style={{
        background: 'transparent', border: '1px solid ' + (dark ? 'rgba(245,236,214,0.35)' : 'var(--hairline)'),
        borderRadius: 999, width: 46, height: 46, cursor: 'pointer',
        display: 'none', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 5, padding: 0,
      }}>
        <span style={burgerBar(dark, open, 1)}></span>
        <span style={{ ...burgerBar(dark, open, 2), opacity: open ? 0 : 1 }}></span>
        <span style={burgerBar(dark, open, 3)}></span>
      </button>
    </nav>

      <div className="r-drawer" onClick={() => setOpen(false)} style={{
        position: 'fixed', inset: '0 0 0 0', zIndex: 40,
        background: 'var(--ivory)',
        display: 'none', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4,
        opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity 250ms cubic-bezier(0.4,0,0.2,1)',
      }}>
        <span style={{ fontFamily: 'var(--font-script)', fontSize: 44, color: 'var(--gold-500)', marginBottom: 18, lineHeight: 1 }}>Eens &amp; Altijd</span>
        {items.map(it => (
          <a key={it.id} href={it.href} style={{
            fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 400,
            color: active === it.id ? 'var(--gold-500)' : 'var(--ink)',
            textDecoration: 'none', padding: '14px 24px', minHeight: 44,
          }}>{it.label}</a>
        ))}
        <a href="contact.html" style={{
          marginTop: 24, fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500,
          background: 'var(--sage-deep)', color: 'var(--ivory)', textDecoration: 'none',
          padding: '16px 30px', borderRadius: 999,
        }}>Plan een kennismaking</a>
      </div>
    </React.Fragment>
  );
}

function burgerBar(dark, open, n) {
  const base = {
    display: 'block', width: 20, height: 1.5, borderRadius: 2,
    background: dark ? 'var(--ivory)' : 'var(--ink)',
    transition: 'transform 250ms cubic-bezier(0.4,0,0.2,1), opacity 200ms',
  };
  if (!open) return base;
  if (n === 1) return { ...base, transform: 'translateY(6.5px) rotate(45deg)' };
  if (n === 3) return { ...base, transform: 'translateY(-6.5px) rotate(-45deg)' };
  return base;
}

/* ---- Footer (burgundy block, like the reference) -------------------- */
function SiteFooter() {
  return (
    <footer style={footerCSS.wrap}>
      <div className="r-footer-seal" style={footerCSS.seal}>
        <img src="assets/zegel.png" alt="Lakstempel met het monogram van Eens &amp; Altijd" loading="lazy" decoding="async" style={footerCSS.sealImg} />
      </div>
      <div className="r-panel" style={footerCSS.panel}>
        <div style={footerCSS.grain} />
        <div className="r-footer-inner" style={footerCSS.inner}>
          <div style={footerCSS.brandCol}>
            <div className="r-footer-brand" style={footerCSS.brand}>
              <img src="assets/logo-white.png" alt="Eens &amp; Altijd weddingplanner" loading="lazy" decoding="async" style={{ height: 224, width: 'auto', maxWidth: '100%' }} />
            </div>
            <div className="r-footer-script" style={footerCSS.script}>Zorgeloos stralen in jullie sprookje.</div>
            <p className="r-footer-tagline" style={footerCSS.tagline}>
              Eens in het echt. Altijd in jullie hart.
            </p>
          </div>

          <div>
            <div style={footerCSS.colHead}>Navigatie</div>
            <a style={footerCSS.colLink} href="index.html">Home</a>
            <a style={footerCSS.colLink} href="aanbod.html">Aanbod</a>
            <a style={footerCSS.colLink} href="over.html">Over mij</a>
            <a style={footerCSS.colLink} href="contact.html">Contact</a>
          </div>

          <div>
            <div style={footerCSS.colHead}>Volg mij</div>
            <a style={{ ...footerCSS.colLink, display: 'inline-flex', alignItems: 'center', gap: 8 }} href="https://www.instagram.com/eensenaltijd_weddingplanner?utm_source=qr&amp;igsh=eGkxbmR0OXpwdThy" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none"/></svg>
              Instagram
            </a>
          </div>

          <div>
            <div style={footerCSS.colHead}>Contact</div>
            <div style={footerCSS.contactList}>
              <a style={footerCSS.contactItem} href="mailto:eensenaltijd@gmail.com?subject=Aanvraag%20via%20de%20website">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M3.5 7.5 12 13l8.5-5.5"/></svg>
                <span>eensenaltijd@gmail.com</span>
              </a>
              <a style={footerCSS.contactItem} href="https://wa.me/31650537118" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12.04 2.75a9.1 9.1 0 0 0-7.8 13.79l-1.1 3.98 4.1-1.07a9.1 9.1 0 1 0 4.8-16.7z"/><path d="M8.9 7.6h.9l1.1 2.5-1 1a6.3 6.3 0 0 0 3.1 3.1l1-1 2.5 1.1v.9c0 .8-.7 1.5-1.6 1.5A8.4 8.4 0 0 1 7.4 9.2c0-.9.6-1.6 1.5-1.6z"/></svg>
                <span>WhatsApp</span>
              </a>
              <div style={{ ...footerCSS.contactItem, cursor: 'default' }}>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>
                <span>Enschede &amp; heel Twente</span>
              </div>
            </div>
          </div>
        </div>

        <div style={footerCSS.divider} />
        <div className="r-fine" style={footerCSS.fine}>
          <span style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <span>© {new Date().getFullYear()} Eens &amp; Altijd</span>
            <span>KvK 42113689</span>
            <span>BTW NL005504212B65</span>
          </span>
          <span style={{ display: 'flex', gap: 28 }}>
            <a href="privacy.html" style={footerCSS.fineLink}>Privacy</a>
            <a href="voorwaarden.html" style={footerCSS.fineLink}>Voorwaarden</a>
            <a href="cookiebeleid.html" style={footerCSS.fineLink}>Cookiebeleid</a>
            <a href="disclaimer.html" style={footerCSS.fineLink}>Disclaimer</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

const footerCSS = {
  wrap: { background: 'var(--ivory)', padding: '0 32px 32px' },
  seal: {
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    padding: '8px 0 40px',
  },
  sealImg: { height: 96, width: 'auto', opacity: 0.85 },
  panel: {
    position: 'relative', overflow: 'hidden',
    maxWidth: 1320, margin: '0 auto',
    background:
      'linear-gradient(180deg, rgba(43,33,23,0.55), rgba(43,33,23,0.78)),' +
      'url("assets/header-ceremonie.png") center/cover no-repeat',
    borderRadius: 'var(--r-lg)',
    padding: '80px 72px 40px',
  },
  grain: {
    position: 'absolute', inset: 0, pointerEvents: 'none',
    backgroundImage: 'var(--grain)', opacity: 0.35, mixBlendMode: 'overlay',
  },
  inner: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'minmax(230px,1.6fr) minmax(70px,0.7fr) minmax(120px,0.8fr) minmax(170px,1.4fr)',
    gap: 40,
  },
  brandCol: { },
  brand: {
    fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 44,
    background: 'var(--grad-gold)',
    WebkitBackgroundClip: 'text', backgroundClip: 'text',
    WebkitTextFillColor: 'transparent', color: 'transparent',
    letterSpacing: '-0.01em', marginBottom: 6, whiteSpace: 'nowrap',
  },
  script: {
    fontFamily: 'var(--font-script)', fontSize: 38, color: 'var(--gold-200)',
    lineHeight: 1.3, marginBottom: 24, paddingBottom: 4, whiteSpace: 'nowrap',
  },
  tagline: {
    fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6,
    color: 'rgba(245,236,214,0.7)', maxWidth: 360, margin: 0, whiteSpace: 'nowrap',
  },
  colHead: {
    fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: 'var(--gold-200)', marginBottom: 22,
  },
  colLink: {
    display: 'block', fontFamily: 'var(--font-body)', fontSize: 14,
    color: 'rgba(245,236,214,0.78)', marginBottom: 12, minWidth: 0,
    textDecoration: 'none',
  },
  colLinkPlain: {
    fontFamily: 'var(--font-body)', fontSize: 14,
    color: 'rgba(245,236,214,0.78)', whiteSpace: 'nowrap',
  },
  contactRow: {
    display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12, minWidth: 0,
  },
  contactList: { display: 'flex', flexDirection: 'column', gap: 12 },
  contactItem: {
    display: 'flex', alignItems: 'center', gap: 10,
    fontFamily: 'var(--font-body)', fontSize: 14,
    color: 'rgba(245,236,214,0.78)', textDecoration: 'none',
  },
  emailLink: { wordBreak: 'normal', overflowWrap: 'break-word', flex: '1 1 0%', width: '100%', minWidth: 0, fontSize: 13 },
  icon: { color: 'var(--gold-200)', fontSize: 13, width: 16, textAlign: 'center', marginTop: 2, flexShrink: 0 },
  waBtn: {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: 26, height: 26, borderRadius: 999, textDecoration: 'none',
    background: '#25D366', color: '#0b2f18', flexShrink: 0,
  },
  divider: {
    height: 1, background: 'rgba(245,236,214,0.14)',
    margin: '56px 0 24px', position: 'relative',
  },
  fine: {
    position: 'relative',
    display: 'flex', justifyContent: 'space-between',
    fontFamily: 'var(--font-body)', fontSize: 12,
    color: 'rgba(245,236,214,0.55)',
  },
  fineLink: {
    color: 'rgba(245,236,214,0.55)', textDecoration: 'none',
  },
};

/* ---- Eyebrow + section header ------------------------------------ */
function Eyebrow({ children, color = 'var(--gold-500)', ornament = true }) {
  return (
    <div style={{
      fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500,
      letterSpacing: '0.24em', textTransform: 'uppercase',
      color, marginBottom: 18,
      display: 'flex', alignItems: 'center', gap: 12,
      justifyContent: 'inherit',
    }}>
      {ornament && <span style={{ color: 'var(--brass)' }}>✦</span>}
      <span>{children}</span>
    </div>
  );
}

/* ---- Tulle / soft photographic placeholder ----------------------- */
function PhotoTile({ aspect = '4 / 5', tone = 'rose', caption, style, slotId, slotSrc, photo, alt, overlay, arch }) {
  const tones = {
    rose:    'linear-gradient(135deg, #efe6d5 0%, #e8c8c0 50%, #d49a8e 100%)',
    sage:    'linear-gradient(135deg, #efe6d5 0%, #c9d4be 50%, #7d8a6b 100%)',
    gold:    'linear-gradient(135deg, #f5ecd6 0%, #e9d8a6 45%, #b8924a 100%)',
    burgundy:'linear-gradient(140deg, #efe6d5 0%, #d49a8e 35%, #6b2c30 100%)',
    pearl:   'linear-gradient(135deg, #fbf7ef 0%, #efe6d5 60%, #d9cdb3 100%)',
    candle:  'linear-gradient(160deg, #2b2117 0%, #6b2c30 50%, #b8924a 100%)',
  };
  if (slotId) {
    return (
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: aspect, borderRadius: arch ? 'var(--arch)' : 'var(--r-md)', ...style }}>
        <image-slot id={slotId} src={slotSrc} shape="rect" placeholder={caption || 'Sleep een foto hierheen'} style={{ width: '100%', height: '100%' }}></image-slot>
      </div>
    );
  }
  return (
    <div style={{
      position: 'relative', overflow: 'hidden',
      aspectRatio: aspect, borderRadius: arch ? 'var(--arch)' : 'var(--r-md)',
      background: photo ? `url("${photo}") center/cover no-repeat` : (tones[tone] || tones.rose),
      ...style,
    }}>
      {photo && <img src={photo} alt={alt || ''} loading="lazy" decoding="async" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', objectPosition: 'center', display: 'block',
      }} />}
      {!photo && <div style={{
        position: 'absolute', width: 220, height: 220, borderRadius: '50%',
        filter: 'blur(50px)', background: 'rgba(245,236,214,0.45)',
        top: '15%', left: '20%',
      }} />}
      {!photo && <div style={{
        position: 'absolute', width: 180, height: 180, borderRadius: '50%',
        filter: 'blur(40px)', background: 'rgba(212,184,106,0.4)',
        bottom: '15%', right: '15%',
      }} />}
      {!photo && <div style={{
        position: 'absolute', inset: 0,
        boxShadow: 'inset 0 0 60px rgba(43,33,23,0.18)',
      }} />}
      {overlay && (
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.5,
          background: 'linear-gradient(145deg, #8d9670 0%, #747e59 45%, #56603f 100%)',
          boxShadow: 'inset 2px 2px 10px rgba(255,255,255,0.35), inset -6px -8px 22px rgba(38,45,26,0.55)',
        }} />
      )}
      {caption && (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-script)', fontSize: 36,
          color: 'rgba(43,33,23,0.4)', textAlign: 'center', padding: 24,
        }}>{caption}</div>
      )}
    </div>
  );
}

/* ---- Buttons ----------------------------------------------------- */
function GoldButton({ children, href = '#', style, variant = 'primary' }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
    padding: '13px 28px', borderRadius: 999,
    cursor: 'pointer', textDecoration: 'none',
    letterSpacing: '0.02em',
    transition: 'all .25s ease',
  };
  const variants = {
    primary: {
      background: 'var(--gold-400)', color: 'var(--ivory)',
      boxShadow: 'var(--shadow-gold)', border: '1px solid var(--gold-400)',
    },
    beige: {
      background: '#cfc7b4', color: 'var(--ink)',
      boxShadow: 'none', border: '1px solid #cfc7b4',
    },
    ghost: {
      background: 'transparent', color: 'var(--ink)',
      border: '1px solid var(--brass)',
    },
    dark: {
      background: 'var(--ink)', color: 'var(--ivory)',
      border: '1px solid var(--ink)',
    },
    light: {
      background: 'var(--ivory)', color: 'var(--ink)',
      border: '1px solid var(--ivory)',
    },
  };
  return (
    <a href={href} style={{ ...base, ...variants[variant], ...style }}>
      {children}
      <span style={{ fontSize: 16, lineHeight: 0 }}>→</span>
    </a>
  );
}

/* ---- Page header banner (image) ---------------------------------- */
function PageHeader({ title, script, intro }) {
  return (
    <section style={phCSS.wrap}>
      <div style={phCSS.bg} />
      <div style={phCSS.scrim} />
      <div style={phCSS.grain} />
      <div style={phCSS.inner}>
        <h1 style={phCSS.title}>{title}</h1>
        {script && <div style={phCSS.script}>{script}</div>}
        {intro && <p style={phCSS.intro}>{intro}</p>}
      </div>
    </section>
  );
}
const phCSS = {
  wrap: {
    position: 'relative', overflow: 'hidden',
    margin: '12px 32px 0', borderRadius: 'var(--r-lg)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    minHeight: 420, padding: '72px 56px',
  },
  bg: { position: 'absolute', inset: 0, background: 'url("assets/header-ceremonie.png") center/cover no-repeat' },
  scrim: { position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(43,33,23,0.42), rgba(43,33,23,0.62))' },
  grain: { position: 'absolute', inset: 0, backgroundImage: 'var(--grain)', opacity: 0.35, mixBlendMode: 'overlay' },
  inner: { position: 'relative', zIndex: 2, maxWidth: 860, textAlign: 'center' },
  title: {
    fontFamily: 'var(--font-display)', fontWeight: 400,
    fontSize: 'clamp(40px, 5.5vw, 76px)', lineHeight: 1.04,
    color: 'var(--ivory)', margin: 0, letterSpacing: '-0.01em',
  },
  script: {
    fontFamily: 'var(--font-script)', fontSize: 'clamp(34px, 4vw, 52px)',
    color: 'var(--gold-200)', lineHeight: 1.15, marginTop: 12, paddingBottom: 4,
  },
  intro: {
    fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65,
    color: 'rgba(245,236,214,0.85)', maxWidth: 560, margin: '24px auto 0',
  },
};

window.PageHeader = PageHeader;
window.SiteNav = SiteNav;
window.SiteFooter = SiteFooter;
window.Eyebrow = Eyebrow;
window.PhotoTile = PhotoTile;
window.GoldButton = GoldButton;
