function HomeHero() {
  return (
    <section style={hh.wrap}>
      <div style={hh.bg} />
      <div style={hh.scrim} />
      <div style={hh.grain} />
      <div style={hh.inner}>
        <h1 style={hh.headline}>
          Eens in het echt.<br/>
          <em style={hh.italic}>Altijd in jullie hart.</em>
        </h1>
        <div style={hh.script}>Zorgeloos stralen in jullie eigen sprookje</div>
        <div style={hh.actions}>
          <GoldButton href="aanbod.html" variant="primary">Bekijk mijn aanbod</GoldButton>
          <GoldButton href="contact.html" variant="light">Plan een kennismaking</GoldButton>
        </div>
      </div>
    </section>
  );
}

const hh = {
  wrap: {
    position: 'relative', overflow: 'hidden',
    minHeight: 'calc(100vh - 78px)',
    display: 'flex', alignItems: 'center',
    margin: '0 32px', borderRadius: 'var(--r-lg)',
    color: 'var(--on-dark)',
  },
  bg: {
    position: 'absolute', inset: 0,
    background: 'url("' + (window.__resources && window.__resources.heroBg || 'assets/hero-bg.png') + '") center/cover no-repeat',
  },
  scrim: { position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(43,33,23,0.30) 0%, rgba(43,33,23,0.50) 60%, rgba(43,33,23,0.70) 100%)' },
  grain: { position: 'absolute', inset: 0, backgroundImage: 'var(--grain)', opacity: 0.4, mixBlendMode: 'overlay' },
  inner: {
    position: 'relative', zIndex: 2,
    width: '100%', maxWidth: 1280, margin: '0 auto',
    padding: '120px 72px 56px',
  },
  eyebrow: {
    fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500,
    letterSpacing: '0.24em', textTransform: 'uppercase',
    color: 'var(--gold-300)', marginBottom: 28,
  },
  headline: {
    fontFamily: 'var(--font-display)', fontWeight: 400,
    fontSize: 'clamp(56px, 7.5vw, 108px)',
    lineHeight: 1.02, letterSpacing: '-0.01em',
    color: 'var(--ivory)', margin: 0, maxWidth: 900,
  },
  italic: { fontStyle: 'italic', color: 'var(--gold-300)' },
  script: {
    fontFamily: 'var(--font-script)', fontSize: 'clamp(40px, 4.5vw, 60px)',
    color: 'var(--gold-300)', marginTop: 20, lineHeight: 1,
  },
  actions: {
    display: 'flex', gap: 14, marginTop: 44, flexWrap: 'wrap',
  },
  foot: {
    marginTop: 120,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    paddingTop: 28, borderTop: '1px solid rgba(245,236,214,0.18)',
  },
  dots: { display: 'flex', gap: 8 },
  dot: {
    width: 24, height: 2, background: 'rgba(245,236,214,0.3)',
  },
  dotOn: { background: 'var(--gold-300)', width: 36 },
  footScript: {
    fontFamily: 'var(--font-script)', fontSize: 28,
    color: 'var(--gold-300)',
  },
  arrows: { display: 'flex', gap: 18 },
  arrow: {
    width: 38, height: 38, borderRadius: '50%',
    border: '1px solid rgba(245,236,214,0.4)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    color: 'var(--ivory)', fontSize: 18, cursor: 'pointer',
  },
};

window.HomeHero = HomeHero;
