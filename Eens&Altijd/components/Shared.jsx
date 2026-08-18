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
  return (
    <nav style={{
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
        <img src="assets/logo.png" alt="Eens & Altijd" style={{ height: 144, width: 'auto' }} />
      </a>

      <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
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
        <a href="contact.html" style={{
          fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
          background: 'var(--sage-deep)', color: 'var(--ivory)',
          border: '1px solid var(--sage-deep)', padding: '11px 24px', borderRadius: 999,
          cursor: 'pointer', letterSpacing: '0.01em', textDecoration: 'none',
        }}>Plan een kennismaking</a>
      ) : (
        <div style={{ visibility: 'hidden', pointerEvents: 'none', fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, padding: '11px 24px' }}>Plan een kennismaking</div>
      )}
    </nav>
  );
}

/* ---- Footer (burgundy block, like the reference) -------------------- */
function SiteFooter() {
  return (
    <footer style={footerCSS.wrap}>
      <div style={footerCSS.panel}>
        <div style={footerCSS.grain} />
        <div style={footerCSS.inner}>
          <div style={footerCSS.brandCol}>
            <div style={footerCSS.brand}>
              <img src="assets/logo-white.png" alt="Eens & Altijd" style={{ height: 224, width: 'auto', maxWidth: '100%' }} />
            </div>
            <div style={footerCSS.script}>Zorgeloos stralen in jullie sprookje.</div>
            <p style={footerCSS.tagline}>
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
            <a style={footerCSS.colLink} href="#">Instagram</a>
          </div>

          <div>
            <div style={footerCSS.colHead}>Contact</div>
            <div style={footerCSS.contactRow}>
              <span style={footerCSS.icon}>✿</span>
              <a style={{ ...footerCSS.colLink, ...footerCSS.emailLink }} href="mailto:eensenaltijd@gmail.com">eensenaltijd@gmail.com</a>
            </div>
            <div style={footerCSS.contactRow}>
              <span style={footerCSS.icon}>✆</span>
              <span style={footerCSS.colLinkPlain}>+31 6 50 53 71 18</span>
              <a href="https://wa.me/31650537118" target="_blank" rel="noopener" style={footerCSS.waBtn} aria-label="Stuur een WhatsApp-bericht">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z"/><path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.34-1.4a9.83 9.83 0 0 0 4.7 1.2h.01c5.43 0 9.85-4.42 9.85-9.86A9.8 9.8 0 0 0 12.04 2zm0 17.96h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.17.83.85-3.09-.2-.32a8.15 8.15 0 0 1-1.25-4.35c0-4.52 3.68-8.2 8.2-8.2 2.2 0 4.26.86 5.81 2.41a8.15 8.15 0 0 1 2.4 5.8c0 4.52-3.67 8.2-8.19 8.2z"/></svg>
              </a>
            </div>
            <div style={footerCSS.contactRow}>
              <span style={footerCSS.icon}>◆</span>
              <span style={footerCSS.colLinkPlain}>Enschede · Nederland</span>
            </div>
          </div>
        </div>

        <div style={footerCSS.divider} />
        <div style={footerCSS.fine}>
          <span>© {new Date().getFullYear()} Eens &amp; Altijd · Alle rechten voorbehouden</span>
          <span style={{ display: 'flex', gap: 28 }}>
            <a href="privacy.html" style={footerCSS.fineLink}>Privacy</a>
            <a href="voorwaarden.html" style={footerCSS.fineLink}>Voorwaarden</a>
            <a href="#" style={footerCSS.fineLink}>Cookiebeleid</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

const footerCSS = {
  wrap: { background: 'var(--ivory)', padding: '0 32px 32px' },
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
function Eyebrow({ children, color = 'var(--gold-500)' }) {
  return (
    <div style={{
      fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500,
      letterSpacing: '0.24em', textTransform: 'uppercase',
      color, marginBottom: 18,
    }}>{children}</div>
  );
}

/* ---- Tulle / soft photographic placeholder ----------------------- */
function PhotoTile({ aspect = '4 / 5', tone = 'rose', caption, style, slotId, slotSrc, photo, overlay }) {
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
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: aspect, borderRadius: 'var(--r-md)', ...style }}>
        <image-slot id={slotId} src={slotSrc} shape="rect" placeholder={caption || 'Sleep een foto hierheen'} style={{ width: '100%', height: '100%' }}></image-slot>
      </div>
    );
  }
  return (
    <div style={{
      position: 'relative', overflow: 'hidden',
      aspectRatio: aspect, borderRadius: 'var(--r-md)',
      background: photo ? `url("${photo}") center/cover no-repeat` : (tones[tone] || tones.rose),
      ...style,
    }}>
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
      border: '1px solid var(--gold-400)',
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
