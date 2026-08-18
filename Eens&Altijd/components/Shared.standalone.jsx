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
        fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 400,
        background: 'var(--grad-gold)',
        WebkitBackgroundClip: 'text', backgroundClip: 'text',
        WebkitTextFillColor: 'transparent', color: 'transparent',
        letterSpacing: '-0.005em', textDecoration: 'none',
      }}>
        Eens<em style={{ fontStyle: 'italic', margin: '0 4px' }}>&amp;</em>Altijd
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
            borderBottom: active === it.id ? '1px solid var(--gold-400)' : '1px solid transparent',
          }}>{it.label}</a>
        ))}
      </div>

      {active !== 'contact' ? (
        <a href="contact.html" style={{
          fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
          background: 'var(--gold-400)', color: 'var(--ivory)',
          border: 'none', padding: '11px 24px', borderRadius: 999,
          cursor: 'pointer', letterSpacing: '0.01em', textDecoration: 'none',
          boxShadow: 'var(--shadow-gold)',
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
              Eens<em style={{ fontStyle: 'italic', margin: '0 4px' }}>&amp;</em>Altijd
            </div>
            <div style={footerCSS.script}>Zorgeloos stralen.</div>
            <p style={footerCSS.tagline}>
              Eens in het echt.<br/>Altijd in jullie hart.
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
            <a style={footerCSS.colLink} href="#">Pinterest</a>
            <a style={footerCSS.colLink} href="#">The Knot</a>
            <a style={footerCSS.colLink} href="#">ThePerfectWedding</a>
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
            <a href="#" style={footerCSS.fineLink}>Privacy</a>
            <a href="#" style={footerCSS.fineLink}>Voorwaarden</a>
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
      'url("' + (window.__resources && window.__resources.footerBg || 'assets/footer-bg.png') + '") center/cover no-repeat',
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
    gridTemplateColumns: 'minmax(230px,1.2fr) minmax(70px,0.7fr) minmax(120px,0.8fr) minmax(170px,1.4fr)',
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
    fontFamily: 'var(--font-script)', fontSize: 38, color: 'var(--gold-300)',
    lineHeight: 1.3, marginBottom: 24, paddingBottom: 4, whiteSpace: 'nowrap',
  },
  tagline: {
    fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6,
    color: 'rgba(245,236,214,0.7)', maxWidth: 260, margin: 0,
  },
  colHead: {
    fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: 'var(--gold-300)', marginBottom: 22,
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
  icon: { color: 'var(--gold-300)', fontSize: 13, width: 16, textAlign: 'center', marginTop: 2, flexShrink: 0 },
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
function PhotoTile({ aspect = '4 / 5', tone = 'rose', caption, style }) {
  const tones = {
    rose:    'linear-gradient(135deg, #efe6d5 0%, #e8c8c0 50%, #d49a8e 100%)',
    sage:    'linear-gradient(135deg, #efe6d5 0%, #c9d4be 50%, #7d8a6b 100%)',
    gold:    'linear-gradient(135deg, #f5ecd6 0%, #e9d8a6 45%, #b8924a 100%)',
    burgundy:'linear-gradient(140deg, #efe6d5 0%, #d49a8e 35%, #6b2c30 100%)',
    pearl:   'linear-gradient(135deg, #fbf7ef 0%, #efe6d5 60%, #d9cdb3 100%)',
    candle:  'linear-gradient(160deg, #2b2117 0%, #6b2c30 50%, #b8924a 100%)',
  };
  return (
    <div style={{
      position: 'relative', overflow: 'hidden',
      aspectRatio: aspect, borderRadius: 'var(--r-md)',
      background: tones[tone] || tones.rose,
      ...style,
    }}>
      <div style={{
        position: 'absolute', width: 220, height: 220, borderRadius: '50%',
        filter: 'blur(50px)', background: 'rgba(245,236,214,0.45)',
        top: '15%', left: '20%',
      }} />
      <div style={{
        position: 'absolute', width: 180, height: 180, borderRadius: '50%',
        filter: 'blur(40px)', background: 'rgba(212,184,106,0.4)',
        bottom: '15%', right: '15%',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        boxShadow: 'inset 0 0 60px rgba(43,33,23,0.18)',
      }} />
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

window.SiteNav = SiteNav;
window.SiteFooter = SiteFooter;
window.Eyebrow = Eyebrow;
window.PhotoTile = PhotoTile;
window.GoldButton = GoldButton;
