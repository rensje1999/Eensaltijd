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
        <a href="contact.html" className="r-nav-cta r-sparkle-btn" style={{
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
          display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
          width: '80%', maxWidth: 320, boxSizing: 'border-box',
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

/* ---- Footer (centered, minimalist) ----------------------------------- */
function SiteFooter() {
  const items = [
    { label: 'Home', href: 'index.html' },
    { label: 'Aanbod', href: 'aanbod.html' },
    { label: 'Over mij', href: 'over.html' },
    { label: 'Contact', href: 'contact.html' },
  ];
  return (
    <footer style={footerCSS.wrap}>
      <img src="assets/logo.png" alt="Eens &amp; Altijd — weddingplanner in Twente" loading="lazy" decoding="async" style={footerCSS.logo} />
      <nav className="r-footer-nav" style={footerCSS.nav}>
        {items.map((it, i) => (
          <React.Fragment key={it.label}>
            {i > 0 && <span className="r-footer-dot" style={footerCSS.dot}>•</span>}
            <a href={it.href} style={footerCSS.navLink}>{it.label}</a>
          </React.Fragment>
        ))}
      </nav>
      <p style={footerCSS.slogan}>Eens in het echt. <em>Altijd in jullie hart.</em></p>
      <div style={footerCSS.divider} />
      <div className="r-fine" style={footerCSS.fine}>
        <span style={{ display: 'flex', gap: 18, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span>© {new Date().getFullYear()} Eens &amp; Altijd</span>
          <span>KvK 42113689</span>
          <span>BTW NL005504212B65</span>
        </span>
        <span className="r-fine-links" style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="privacy.html" style={footerCSS.fineLink}>Privacy</a>
          <a href="voorwaarden.html" style={footerCSS.fineLink}>Voorwaarden</a>
          <a href="cookiebeleid.html" style={footerCSS.fineLink}>Cookiebeleid</a>
          <a href="disclaimer.html" style={footerCSS.fineLink}>Disclaimer</a>
        </span>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a href="https://wa.me/31650537118" target="_blank" rel="noopener" aria-label="Stuur een WhatsApp-bericht" style={waFloat.btn} className="r-glow-hover">
      <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true"><path d="M16.004 3C9.377 3 4 8.377 4 15.004c0 2.386.694 4.612 1.897 6.478L4.6 26.6l5.234-1.253a11.94 11.94 0 0 0 6.17 1.658c6.627 0 12.004-5.377 12.004-12.001C28.008 8.377 22.631 3 16.004 3zm7.06 17.006c-.3.845-1.502 1.577-2.086 1.667-.535.082-1.203.117-1.94-.123-.446-.147-1.018-.34-1.75-.667-3.077-1.328-5.086-4.416-5.24-4.622-.155-.206-1.24-1.65-1.24-3.146 0-1.495.784-2.23 1.06-2.533.278-.303.605-.379.807-.379.202 0 .404.002.58.011.186.009.436-.07.681.52.253.61.86 2.096.936 2.248.076.152.126.33.025.532-.1.202-.15.328-.303.505-.152.177-.32.395-.457.53-.152.152-.31.317-.133.622.177.303.788 1.298 1.69 2.104 1.163 1.037 2.144 1.36 2.454 1.512.31.152.49.126.674-.076.184-.202.782-.909.99-1.222.21-.31.42-.26.71-.156.29.101 1.826.86 2.14 1.017.31.152.518.227.593.354.076.126.076.732-.224 1.577z"/></svg>
    </a>
  );
}

const waFloat = {
  btn: {
    position: 'fixed', bottom: 24, right: 24, zIndex: 40,
    width: 56, height: 56, borderRadius: '999px',
    background: 'var(--sage-deep)', color: 'var(--ivory)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 8px 20px rgba(43,33,23,0.25)', textDecoration: 'none',
  },
};

const footerCSS = {
  wrap: {
    background: 'var(--pearl)', padding: '72px 32px 40px',
    display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
  },
  logo: { height: 64, width: 'auto', marginBottom: 28 },
  nav: { display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 28 },
  navLink: { fontFamily: 'var(--font-body)', fontSize: 14, letterSpacing: '0.03em', color: 'var(--ink)', textDecoration: 'none' },
  dot: { color: 'var(--gold-400)', fontSize: 10 },
  slogan: { fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(20px, 2.2vw, 26px)', color: 'var(--gold-600)', margin: '0 0 36px', lineHeight: 1.4 },
  divider: { width: '100%', maxWidth: 480, height: 1, background: 'var(--hairline)', marginBottom: 24 },
  fine: {
    display: 'flex', flexDirection: 'column', gap: 12,
    fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--ink-mute)',
  },
  fineLink: { color: 'var(--ink-mute)', textDecoration: 'none' },
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
window.WhatsAppFloat = WhatsAppFloat;
window.Eyebrow = Eyebrow;
window.PhotoTile = PhotoTile;
window.GoldButton = GoldButton;
