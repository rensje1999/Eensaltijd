const HERO_PHOTOS = [
  { src: 'assets/hero-sluier.png', pos: 'center' },
  { src: 'assets/hero-dans.png', pos: 'center 22%' },
  { src: 'assets/hero-cabrio.png', pos: '55% center' },
  { src: 'assets/koppel-zonsondergang.png', pos: 'center 8%' },
];

function HomeHero() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setI(n => (n + 1) % HERO_PHOTOS.length), 6000);
    return () => clearInterval(id);
  }, []);
  return (
    <section style={hh.wrap}>
      {HERO_PHOTOS.map((p, n) => (
        <div key={p.src} style={{ ...hh.bg, backgroundImage: `url("${p.src}")`, backgroundPosition: p.pos, opacity: n === i ? 1 : 0 }} />
      ))}
      <div style={hh.scrim} />
      <div style={hh.grain} />
      <div style={hh.inner}>
        <h1 style={hh.headline}>
          Eens in het echt.<br/>
          <em style={hh.italic}>Altijd in jullie hart.</em>
        </h1>
        <div style={hh.script}>Zorgeloos stralen in jullie eigen sprookje</div>
        <div style={hh.actions}>
          <GoldButton href="aanbod.html" variant="beige">Bekijk mijn aanbod</GoldButton>
          <GoldButton href="contact.html" variant="primary" style={{ background: 'var(--sage-deep)', color: 'var(--ivory)', border: '1px solid var(--sage-deep)', boxShadow: 'none' }}>Plan een kennismaking</GoldButton>
        </div>
        <div style={hh.dots}>
          {HERO_PHOTOS.map((p, n) => (
            <span key={p.src} onClick={() => setI(n)} style={{ ...hh.dot, ...(n === i ? hh.dotOn : {}), cursor: 'pointer' }} />
          ))}
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
    background: '#241c13',
    color: 'var(--on-dark)',
  },
  bg: {
    position: 'absolute', top: 0, bottom: 0, left: '24%', right: '-4%',
    backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
    transition: 'opacity 1.6s cubic-bezier(0.4, 0, 0.2, 1)',
    WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 14%)',
    maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 14%)',
  },
  scrim: { position: 'absolute', inset: 0, background: 'var(--hero-scrim, linear-gradient(180deg, rgba(43,33,23,0.30) 0%, rgba(43,33,23,0.50) 60%, rgba(43,33,23,0.70) 100%))' },
  grain: { position: 'absolute', inset: 0, backgroundImage: 'var(--grain)', opacity: 0.4, mixBlendMode: 'overlay' },
  inner: {
    position: 'relative', zIndex: 2,
    width: '100%', maxWidth: 1280, margin: '0 auto',
    padding: '120px 72px 56px',
  },
  eyebrow: {
    fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500,
    letterSpacing: '0.24em', textTransform: 'uppercase',
    color: 'var(--gold-200)', marginBottom: 28,
  },
  headline: {
    fontFamily: 'var(--font-display)', fontWeight: 400,
    fontSize: 'clamp(56px, 7.5vw, 108px)',
    lineHeight: 1.02, letterSpacing: '-0.01em',
    color: 'var(--ivory)', margin: 0, maxWidth: 900,
  },
  italic: { fontStyle: 'italic', color: '#c2cba1', textShadow: '0 2px 12px rgba(43,33,23,0.45)' },
  script: {
    fontFamily: 'var(--font-script)', fontSize: 'clamp(40px, 4.5vw, 60px)',
    color: 'var(--gold-200)', marginTop: 20, lineHeight: 1,
  },
  actions: {
    display: 'flex', gap: 14, marginTop: 44, flexWrap: 'wrap',
  },
  foot: {
    marginTop: 120,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    paddingTop: 28, borderTop: '1px solid rgba(245,236,214,0.18)',
  },
  dots: { display: 'flex', gap: 8, marginTop: 56 },
  dot: {
    width: 24, height: 2, background: 'rgba(245,236,214,0.3)',
    transition: 'all .4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  dotOn: { background: 'var(--gold-200)', width: 36 },
  footScript: {
    fontFamily: 'var(--font-script)', fontSize: 28,
    color: 'var(--gold-200)',
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
