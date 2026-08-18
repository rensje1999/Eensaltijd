function HomeAbout() {
  return (
    <section style={ha.wrap}>
      <div style={ha.row}>
        <div style={ha.copyBlock}>
          <div style={ha.eyebrow}>◆ &nbsp; Over Eens & Altijd</div>
          <h2 style={ha.title}>Een planner.<br/><em style={ha.italic}>Van eerste idee tot laatste dans.</em></h2>
          <p style={ha.body}>
            Daar is die dan, die prachtige ring, die volmondige JA! en het
            begin van een magisch nieuw hoofdstuk in jullie leven samen.
            Jullie gaan trouwen!
            <br/><br/>
            Maar laten we eerlijk zijn: tussen die eerste
            sprankelende ideeen en het moment dat de DJ de laatste plaat
            instart op de dansvloer, komt er veel op jullie af.
            <br/><br/>
            <strong>Geen zorgen!</strong> Vanaf nu hoeven jullie dit niet alleen meer te doen!
          </p>
          <GoldButton href="over.html" variant="dark" style={{ marginTop: 12 }}>Lees meer over mij</GoldButton>
        </div>
        <div style={{ position: 'relative' }}>
          <PhotoTile aspect="4 / 5" photo="assets/elise-werkplek.jpg" />
          <div style={ha.glassCard}>
            <div style={ha.glassHead}>Ontmoet de vrouw achter Eens &amp; Altijd</div>
            <p style={ha.glassQuote}>Samen op zoek naar de sfeer die bij jullie past</p>
          </div>
        </div>
      </div>

      <div style={{ ...ha.row, marginTop: 96, gridTemplateColumns: '1fr 1.1fr' }}>
        <PhotoTile aspect="4 / 5" photo="assets/bruid-boeket.png" />
        <div style={ha.copyBlock}>
          <div style={ha.eyebrow}>◆ &nbsp; Mijn aanpak</div>
          <h2 style={ha.title}>Ik luister eerst.<br/><em style={ha.italic}>Plannen doen we samen!</em></h2>
          <p style={ha.body}>
            Geen pakket dat ik over jullie heen leg. Eerst een rustig
            kopje koffie drinken en dromen over wat jullie willen. Daarna
            pas de planning, de leveranciers en het draaiboek.
          </p>
          <p style={ha.body}>
            Jullie unieke verhaal. Een sprookje in jullie eigen ritme...
          </p>
          <div style={ha.scriptLine}>Beloofd.</div>
          <GoldButton href="aanbod.html" variant="dark" style={{ marginTop: 16 }}>Bekijk mijn aanbod</GoldButton>
        </div>
      </div>
    </section>
  );
}

const ha = {
  wrap: { padding: '120px 56px', background: 'var(--ivory)', maxWidth: 1320, margin: '0 auto' },
  row: {
    display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64,
    alignItems: 'center',
  },
  copyBlock: {
    background: 'var(--pearl)',
    borderRadius: 'var(--r-lg)', padding: '56px 56px',
  },
  eyebrow: {
    fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500,
    letterSpacing: '0.24em', textTransform: 'uppercase',
    color: 'var(--gold-500)', marginBottom: 22,
  },
  title: {
    fontFamily: 'var(--font-display)', fontWeight: 400,
    fontSize: 'clamp(36px, 3.5vw, 52px)', lineHeight: 1.05,
    color: 'var(--ink)', margin: '0 0 24px', letterSpacing: '-0.005em',
  },
  italic: { fontStyle: 'italic', color: 'var(--gold-500)' },
  body: {
    fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7,
    color: 'var(--ink-soft)', margin: '0 0 16px', maxWidth: 460,
  },
  scriptLine: {
    fontFamily: 'var(--font-script)', fontSize: 56, color: 'var(--gold-500)',
    lineHeight: 1, margin: '8px 0 0',
  },
  glassCard: {
    position: 'absolute', right: -48, bottom: -34, width: 285,
    padding: '26px 26px 22px', borderRadius: 'var(--r-md)',
    background: 'linear-gradient(150deg, rgba(140,150,113,0.62) 0%, rgba(116,126,89,0.58) 45%, rgba(92,101,68,0.54) 100%)',
    backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
    boxShadow: 'var(--shadow-3)', border: '1px solid rgba(251,247,239,0.5)',
  },
  glassHead: {
    fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 19,
    lineHeight: 1.25, letterSpacing: '0.05em', textTransform: 'uppercase',
    color: 'var(--ivory)', marginBottom: 12,
  },
  glassQuote: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 17,
    lineHeight: 1.45, color: 'rgba(251,247,239,0.92)', margin: 0,
  },
  glassScript: {
    fontFamily: 'var(--font-script)', fontSize: 30, lineHeight: 1.2,
    color: 'var(--gold-600)',
  },
};

/* ---- Service cards (Bronze/Silver/Gold mini) ---------------------- */
function HomeServicesPreview() {
  const items = [
    { name: 'Volledig', sub: '12+ maanden', body: 'De volledige bruiloft uit handen — locatie, leveranciers, draaiboek en regie.' },
    { name: 'Samen plannen', sub: '6 maanden', body: 'Jullie zijn op weg, ik vul aan waar het schuurt.' },
    { name: 'Dagcoördinatie', sub: 'De dag zelf', body: 'Ik regel, jullie genieten van het allereerste moment tot de laatste dans.' },
  ];
  return (
    <section style={hsp.wrap}>
      <div style={hsp.head}>
        <div style={{
          fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500,
          letterSpacing: '0.24em', textTransform: 'uppercase',
          color: 'var(--gold-500)', marginBottom: 18,
        }}>Mijn diensten</div>
        <h2 style={hsp.title}>Drie manieren om <em style={{ fontStyle:'italic', color:'var(--gold-500)' }}>samen</em> te werken.</h2>
        <div style={hsp.scriptLine}>op jullie eigen tempo</div>
      </div>
      <div style={hsp.grid}>
        {items.map((it, i) => (
          <article key={i} style={hsp.card}>
            <div style={hsp.cardEye}>{it.sub}</div>
            <h3 style={hsp.cardTitle}>{it.name}</h3>
            <p style={hsp.cardBody}>{it.body}</p>
            <div style={hsp.divider} />
            <a href="aanbod.html" style={hsp.more}>Lees meer →</a>
          </article>
        ))}
      </div>
    </section>
  );
}

const hsp = {
  wrap: { padding: '0 56px 120px', background: 'var(--ivory)', maxWidth: 1320, margin: '0 auto' },
  head: { textAlign: 'center', marginBottom: 56, maxWidth: 880, marginLeft: 'auto', marginRight: 'auto' },
  title: {
    fontFamily: 'var(--font-display)', fontWeight: 400,
    fontSize: 'clamp(40px, 4.5vw, 64px)', lineHeight: 1.05,
    color: 'var(--ink)', margin: 0, letterSpacing: '-0.005em',
  },
  scriptLine: {
    fontFamily: 'var(--font-script)', fontSize: 40, color: 'var(--gold-500)',
    marginTop: 8, lineHeight: 1,
  },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
  },
  card: {
    background: 'var(--tulle)', border: '1px solid var(--hairline)',
    borderRadius: 'var(--r-md)', padding: 32,
    display: 'flex', flexDirection: 'column', minHeight: 280,
  },
  cardEye: {
    fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: 'var(--gold-500)', marginBottom: 14,
  },
  cardTitle: {
    fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 28,
    lineHeight: 1.15, color: 'var(--ink)', margin: '0 0 14px',
  },
  cardBody: {
    fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.65,
    color: 'var(--ink-soft)', margin: 0, flex: 1,
  },
  divider: { height: 1, background: 'var(--hairline)', margin: '24px 0 18px' },
  more: { fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, color: 'var(--gold-500)', textDecoration: 'none' },
};

/* ---- Photo gallery (matching the right-side grid in screenshot) ----*/
function HomeGallery() {
  const tones = ['rose', 'sage', 'burgundy', 'gold', 'pearl', 'rose'];
  return (
    <section style={hg.wrap}>
      <div style={hg.head}>
        <Eyebrow>Verhalen in beelden</Eyebrow>
        <h2 style={hg.title}>Echte momenten,<br/><em style={{ fontStyle:'italic', color:'var(--gold-500)' }}>echte koppels.</em></h2>
      </div>
      <div style={hg.grid}>
        {tones.map((t, i) => (
          <PhotoTile key={i} tone={t} aspect={i % 3 === 1 ? '3 / 4' : '4 / 5'} />
        ))}
      </div>
    </section>
  );
}

const hg = {
  wrap: { padding: '0 56px 120px', maxWidth: 1320, margin: '0 auto' },
  head: { display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, gap: 32 },
  title: {
    fontFamily: 'var(--font-display)', fontWeight: 400,
    fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05,
    color: 'var(--ink)', margin: 0, letterSpacing: '-0.005em',
  },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
  },
};

/* ---- Testimonial strip ------------------------------------------- */
function HomeTestimonial() {
  const reviews = [
    {
      quote: '"Alles liep zoals het moest lopen."',
      body: 'Tijdens de bruiloft van mijn zusje heeft Elise door keihard werk een prachtig resultaat geleverd. Door haar inzet heeft het bruidspaar een zorgeloze dag kunnen genieten!',
      name: 'Dennis, broer van de bruid',
      where: '',
    },
    {
      quote: '"Sommige dagen vergeet je nooit."',
      body: 'Je merkt aan alles dat de weddingplanner met ontzettend veel passie en oog voor detail de bruiloft georganiseerd heeft.',
      name: 'Sophie, kennis van de bruid',
      where: '',
    },
  ];
  const [i, setI] = React.useState(0);
  const go = (n) => setI((n + reviews.length) % reviews.length);
  const r = reviews[i];
  return (
    <section style={ht.wrap}>
      <div style={ht.eyebrow}>Verhalen</div>
      <div style={ht.script}>{r.quote}</div>
      <p style={ht.body}>{r.body}</p>
      <div style={ht.attribution}>
        <span style={ht.names}>{r.name}</span>
        {r.where && <span style={ht.dot}>·</span>}
        <span style={ht.where}>{r.where}</span>
      </div>
      <div style={ht.nav}>
        <button onClick={() => go(i - 1)} style={ht.navBtn} aria-label="Vorige">‹</button>
        <div style={ht.dots}>
          {reviews.map((_, d) => (
            <span key={d} onClick={() => setI(d)} style={{ ...ht.navDot, ...(d === i ? ht.navDotOn : {}) }} />
          ))}
        </div>
        <button onClick={() => go(i + 1)} style={ht.navBtn} aria-label="Volgende">›</button>
      </div>
    </section>
  );
}
const ht = {
  wrap: { padding: '120px 56px', background: 'var(--pearl)', textAlign: 'center', borderRadius: 'var(--r-lg)', margin: '0 32px 40px', maxWidth: 1320, marginLeft: 'auto', marginRight: 'auto' },
  eyebrow: {
    fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500,
    letterSpacing: '0.24em', textTransform: 'uppercase',
    color: 'var(--gold-500)', marginBottom: 28,
  },
  script: {
    fontFamily: 'var(--font-script)', fontSize: 'clamp(48px, 6vw, 88px)',
    color: 'var(--gold-500)', lineHeight: 1.05, margin: '0 0 28px',
  },
  body: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic',
    fontSize: 22, lineHeight: 1.5, color: 'var(--ink)',
    margin: '0 auto 32px', maxWidth: 600,
  },
  attribution: {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    fontFamily: 'var(--font-body)', fontSize: 13,
  },
  names: { color: 'var(--ink)', fontWeight: 500 },
  dot: { color: 'var(--gold-400)' },
  where: { color: 'var(--ink-mute)' },
  nav: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginTop: 40 },
  navBtn: {
    width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--hairline)',
    background: 'transparent', color: 'var(--ink)', fontSize: 18, cursor: 'pointer',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  },
  dots: { display: 'flex', gap: 8 },
  navDot: { width: 8, height: 8, borderRadius: '50%', background: 'var(--hairline)', cursor: 'pointer' },
  navDotOn: { background: 'var(--gold-400)' },
};

window.HomeAbout = HomeAbout;
window.HomeServicesPreview = HomeServicesPreview;
window.HomeGallery = HomeGallery;
window.HomeTestimonial = HomeTestimonial;
