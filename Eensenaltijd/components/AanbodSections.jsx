function AanbodHero() {
  return (
    <section className="r-pad" style={ah.wrap}>
      <div style={ah.tulle} />
      <div style={ah.inner}>
        <div style={ah.eyebrow}><span style={{ color: 'var(--brass)' }}>✦</span> &nbsp; Mijn aanbod</div>
        <h1 style={ah.title}>
          Drie pakketten.<br/>
          <em style={ah.italic}>Eén belofte.</em>
        </h1>
        <div style={ah.script}>Zorgeloos stralen in jullie eigen sprookje</div>
        <p style={ah.body}>
          Of jullie nu alles uit handen willen geven of alleen op de dag
          zelf rust willen — kies het pakket dat bij jullie past. Alle
          pakketten beginnen met een vrijblijvende kennismaking. Ook kunnen
          de pakketten worden aangepast naar jullie smaak.
        </p>
      </div>
    </section>
  );
}
const ah = {
  wrap: { position: 'relative', overflow: 'hidden', padding: '112px 56px 96px', textAlign: 'center', margin: '12px 32px 0', borderRadius: 'var(--r-lg)' },
  tulle: {
    position: 'absolute', inset: 0, pointerEvents: 'none',
    background:
      'linear-gradient(180deg, rgba(251,247,239,0.62), rgba(251,247,239,0.78)),' +
      'url("assets/aanbod-bloemen.png") center 45%/cover no-repeat',
  },
  inner: { position: 'relative', maxWidth: 880, margin: '0 auto' },
  eyebrow: {
    fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500,
    letterSpacing: '0.24em', textTransform: 'uppercase',
    color: 'var(--gold-500)', marginBottom: 24,
  },
  title: {
    fontFamily: 'var(--font-display)', fontWeight: 400,
    fontSize: 'clamp(48px, 6.5vw, 92px)', lineHeight: 1.08,
    color: 'var(--ink)', margin: 0, letterSpacing: '-0.01em',
  },
  italic: { fontStyle: 'italic', color: 'var(--gold-500)' },
  script: { fontFamily: 'var(--font-script)', fontSize: 'clamp(36px, 4vw, 56px)', color: 'var(--gold-500)', marginTop: 12, lineHeight: 1.15, paddingBottom: 4 },
  body: {
    fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65,
    color: 'var(--ink-soft)', maxWidth: 560, margin: '36px auto 0',
  },
};

function PricingTiers() {
  const Check = () => (
    <span style={{
      width: 18, color: 'var(--brass)', fontSize: 12, lineHeight: 1.6,
      display: 'inline-flex', alignItems: 'flex-start', justifyContent: 'center',
      marginRight: 12, flexShrink: 0,
    }}>✦</span>
  );
  const tiers = [
    {
      name: 'Brons',
      tag: 'Trouwambtenaar',
      price: '',
      sub: 'De ceremonie · op de dag zelf',
      bg: 'linear-gradient(135deg, #f5f7f0, #e4e8d8 55%, #c9d1b3)', border: '#c9d1b3', text: 'var(--ink)', muted: 'rgba(43,33,23,0.65)',
      btn: 'dark',
      featured: false,
      features: [
        'Persoonlijke aandacht en betrokkenheid',
        'Eén intakegesprek',
        'Unieke speech op maat',
      ],
    },
    {
      name: 'Zilver',
      tag: 'Ceremoniemeester',
      price: '',
      sub: 'De laatste 3 maanden · dagcoördinatie',
      bg: 'linear-gradient(135deg, #eef1e6, #cfd9b8 55%, #a8b48c)', border: '#a8b48c', text: 'var(--ink)', muted: 'rgba(43,33,23,0.65)',
      btn: 'light',
      featured: false,
      features: [
        '3 maanden begeleiding richting de dag',
        'Aanspreekpunt op de grote dag',
        'Volledige dagcoördinatie',
        'Draaiboek-check',
        'Puntjes op de i-gesprek',
        'Leveranciers-afstemming',
        'Onzichtbaar oplossen van problemen',
      ],
    },
    {
      name: 'Goud',
      tag: 'Full-service weddingplanner',
      price: '',
      sub: 'De complete organisatie · 12+ maanden',
      bg: 'linear-gradient(135deg, #e2e7d5, #b3bd93 55%, #747e59)', border: '#747e59', text: 'var(--ink)', muted: 'rgba(43,33,23,0.7)',
      btn: 'light',
      featured: true,
      includes: 'Dit pakket kan in combinatie met de andere twee pakketten',
      groups: [
        { head: 'De volledige planning', items: [
          '12+ maanden volledige organisatie',
          'Locatie- en leverancierselectie',
          'Budgetadvies en contractonderhandeling',
          'Ontwerp- en planningsgesprekken',
          'Inclusief het maken van een compleet draaiboek vanaf nul',
        ] },
        { head: 'Op de dag zelf', items: [
          'Warm overdragen van het draaiboek aan de ceremoniemeester',
          'Niet aanwezig op de dag zelf',
        ] },
      ],
      features: [],
    },
  ];
  const order = ['Zilver', 'Goud', 'Brons'];
  const sortedTiers = [...tiers].sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));
  const accents = { Brons: 'var(--sage-light, #9db89b)', Zilver: 'var(--gold-400)', Goud: 'var(--sage-deep, #747e59)' };
  return (
    <section className="r-pad" style={pt.wrap}>
      <div className="r-pricing-grid" style={pt.grid}>        {sortedTiers.map((t) => (
          <article key={t.name} className="r-pricing-card" style={pt.card}>
            <div style={{ ...pt.accentBar, background: accents[t.name] }} />
            <div style={pt.cardInner}>
              <div style={{ ...pt.eyebrow, color: accents[t.name] }}>{t.tag}</div>
              <div style={{ ...pt.sub, marginTop: 6 }}>{t.sub}</div>
              {t.includes && (
                <div style={pt.includes}><span style={{ color: 'var(--gold-500)' }}>✦</span> {t.includes}</div>
              )}
              <details className="r-pricing-details" open style={pt.details}>
                <summary className="r-pricing-summary" style={pt.summary}>
                  <span>Bekijk wat is inbegrepen</span>
                  <span className="r-pricing-chevron" style={pt.chevron}>⌄</span>
                </summary>
                <div style={pt.divider} />
                <ul style={pt.list}>
                  {t.groups
                    ? t.groups.map((g, gi) => (
                        <React.Fragment key={gi}>
                          <li style={{ ...pt.groupHead, marginTop: gi ? 16 : 0 }}>{g.head}</li>
                          {g.items.map((f, j) => (
                            <li key={j} style={pt.feat}>
                              <Check />
                              <span>{f}</span>
                            </li>
                          ))}
                        </React.Fragment>
                      ))
                    : t.features.map((f, j) => (
                        <li key={j} style={pt.feat}>
                          <Check />
                          <span>{f}</span>
                        </li>
                      ))}
                </ul>
                <a href="contact.html" style={pt.btn}>
                  Plan een kennismaking <span style={{ marginLeft: 10 }}>→</span>
                </a>
              </details>
            </div>
          </article>
        ))}
      </div>
      <div className="r-pricing-custom" style={pt.custom}>
        <p style={pt.customText}>
          Willen jullie pakketten combineren — bijvoorbeeld trouwambtenaar én
          weddingplanner? Vraag gerust naar de mogelijkheden voor een op maat
          gemaakt totaalconcept.
        </p>
        <a href="contact.html" style={pt.customLink}>Neem contact op voor de mogelijkheden <span style={{ marginLeft: 8 }}>→</span></a>
      </div>
    </section>
  );
}
const pt = {
  wrap: { padding: '32px 24px 96px', maxWidth: 1320, margin: '0 auto', position: 'relative', zIndex: 2 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignItems: 'stretch' },
  card: {
    borderRadius: 'var(--r-lg)', background: 'var(--pearl)',
    border: '1px solid var(--hairline)', overflow: 'hidden',
    display: 'flex', flexDirection: 'column', height: '100%',
  },
  accentBar: { height: 5, width: '100%' },
  cardInner: { padding: '28px 24px 24px', display: 'flex', flexDirection: 'column', flex: 1 },
  details: { display: 'flex', flexDirection: 'column', flex: 1 },
  summary: { display: 'none', cursor: 'pointer', listStyle: 'none', alignItems: 'center', justifyContent: 'space-between', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, color: 'var(--gold-600)', padding: '14px 0 0' },
  chevron: { transition: 'transform 0.25s ease', fontSize: 16 },
  eyebrow: {
    fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, fontSize: 22,
    letterSpacing: '0.01em', marginBottom: 0,
  },
  badge: {
    position: 'absolute', top: 0, left: 0, right: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 500,
    letterSpacing: '0.24em', textTransform: 'uppercase',
    color: 'var(--ink)', background: 'rgba(255,255,255,0.5)',
    borderBottom: '1px solid var(--gold-500)', padding: '9px 0',
  },
  groupHead: {
    fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 500,
    letterSpacing: '0.2em', textTransform: 'uppercase',
    color: 'var(--gold-600)', marginBottom: 10,
  },
  custom: {
    position: 'relative', zIndex: 3,
    marginTop: 40, padding: '28px 40px',
    border: '1px solid var(--hairline)', borderRadius: 'var(--r-md)',
    background: 'var(--pearl)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    gap: 10, flexWrap: 'wrap', textAlign: 'center',
  },
  customText: {
    fontFamily: 'var(--font-display)', fontSize: 19, fontStyle: 'italic',
    color: 'var(--ink)', margin: 0,
  },
  customLink: {
    fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
    color: 'var(--gold-500)', textDecoration: 'none', letterSpacing: '0.01em',
  },
  name: {
    fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 40,
    lineHeight: 1.1, margin: 0, letterSpacing: '-0.005em',
  },
  price: {
    fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 36,
    margin: '20px 0 4px', letterSpacing: '-0.005em',
  },
  sub: { fontFamily: 'var(--font-body)', fontSize: 13, letterSpacing: '0.02em', color: 'var(--ink-soft)' },
  includes: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontFamily: 'var(--font-body)', fontSize: 10.5, fontWeight: 500,
    letterSpacing: '0.18em', textTransform: 'uppercase',
    color: 'var(--gold-600)', background: 'rgba(255,255,255,0.6)',
    border: '1px solid var(--gold-400)', borderRadius: 999,
    padding: '7px 15px', marginTop: 18, alignSelf: 'flex-start',
  },
  divider: { height: 1, margin: '20px 0 18px', background: 'var(--hairline)' },
  list: { listStyle: 'none', padding: 0, margin: '0 0 24px', flexGrow: 1 },
  feat: {
    display: 'flex', alignItems: 'flex-start',
    fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.5,
    marginBottom: 9, color: 'var(--ink-soft)',
  },
  btn: {
    display: 'inline-flex', alignItems: 'center',
    fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
    padding: '13px 22px', borderRadius: 999, textDecoration: 'none',
    background: 'var(--ink)', color: 'var(--ivory)',
    alignSelf: 'flex-start', marginTop: 'auto',
  },
};

function CelebrantAddon() {
  return (
    <section style={ca.wrap}>
      <div style={ca.grid}>
      <div style={ca.card}>
        <div style={ca.star}>✦</div>
        <h3 style={ca.title}>Zelf plannen,<br/>maar niet alleen?</h3>
        <p style={ca.body}>Zelf enthousiast over het plannen van je eigen bruiloft, maar niet weten welke stappen je moet nemen? Ik bied mijzelf ook aan als wedding coach. Hierbij begeleid ik jullie tijdens het plannen van jullie eigen droomdag.</p>
        <a href="contact.html" style={ca.btn}>Vraag de Wedding coach aan <span style={{ marginLeft: 10 }}>→</span></a>
      </div>
      </div>
    </section>
  );
}
const ca = {
  wrap: { padding: '0 56px 96px', maxWidth: 1320, margin: '0 auto' },
  grid: { display: 'grid', gridTemplateColumns: '1fr', gap: 20, maxWidth: 720, margin: '0 auto', alignItems: 'stretch' },
  card: {
    textAlign: 'center', margin: 0,
    padding: '48px 40px', borderRadius: 'var(--r-lg)',
    border: '1px solid var(--brass)', background: 'var(--pearl)',
    display: 'flex', flexDirection: 'column', alignItems: 'center',
  },
  star: { color: 'var(--brass)', fontSize: 20, marginBottom: 16 },
  title: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(22px, 2.4vw, 28px)', lineHeight: 1.3, color: 'var(--ink)', margin: '0 0 16px' },
  body: { fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: 460, margin: '0 auto 28px', flex: 1 },
  btn: {
    display: 'inline-flex', alignItems: 'center',
    fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
    padding: '13px 24px', borderRadius: 999, textDecoration: 'none',
    background: 'var(--ink)', color: 'var(--ivory)',
  },
};

function ProcessTimeline() {
  const steps = [
    { n: '01', t: 'Kennismaking', b: 'Een rustige koffie. Ik luister naar jullie verhaal en wat jullie voor ogen hebben.' },
    { n: '02', t: 'Voorstel', b: 'Een persoonlijk voorstel — geen pakket dat ik over jullie heen leg.' },
    { n: '03', t: 'Plannen', b: 'Stap voor stap: locatie, leveranciers, stijl, budget en draaiboek.' },
    { n: '04', t: 'De dag zelf', b: 'Ik regel alles op de achtergrond. Jullie hoeven alleen maar jullie sprookje te beleven.' },
  ];
  return (
    <section className="r-panel" style={pp.wrap}>
      <div style={pp.head}>
        <Eyebrow>Mijn aanpak</Eyebrow>
        <h2 style={pp.title}>Vier stappen.<br/><em style={{ fontStyle:'italic', color:'var(--gold-500)' }}>Een gerust gevoel.</em></h2>
      </div>
      <div className="r-4col" style={pp.row}>
        {steps.map(s => (
          <div key={s.n} style={pp.step}>
            <div style={pp.num}>{s.n}</div>
            <div style={pp.line} />
            <h4 style={pp.t}>{s.t}</h4>
            <p style={pp.b}>{s.b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
const pp = {
  wrap: { padding: '96px 56px', background: 'var(--pearl)', borderRadius: 'var(--r-lg)', margin: '0 32px 40px', maxWidth: 1320, marginLeft: 'auto', marginRight: 'auto' },
  head: { textAlign: 'center', marginBottom: 64, display: 'flex', flexDirection: 'column', alignItems: 'center' },
  title: { fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05, color: 'var(--ink)', margin: 0, letterSpacing: '-0.005em' },
  row: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, maxWidth: 1100, margin: '0 auto' },
  step: { },
  num: { fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 48, color: 'var(--gold-400)', fontStyle: 'italic', lineHeight: 1 },
  line: { width: 40, height: 1, background: 'var(--gold-400)', margin: '20px 0' },
  t: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 24, color: 'var(--ink)', margin: '0 0 10px' },
  b: { fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)', margin: 0 },
};

function FAQ() {
  const items = [
    { q: 'Werk jij door heel Nederland?', a: 'Mijn werkgebied bevindt zich voornamelijk in Overijssel, met een sterke focus op Enschede, Hengelo, Almelo, Oldenzaal en de omliggende regio. Dromen jullie van een sfeervolle bruiloft op een prachtige locatie in Overijssel? Dan sta ik voor jullie klaar om samen het mooiste hoofdstuk van jullie liefdesverhaal te schrijven.' },
    { q: 'Hoeveel bruiloften neem jij per jaar aan?', a: 'Om de magie, rust en exclusiviteit te bewaren, neem ik maximaal 5 bruiloften per jaar aan. Zo ben ik er echt voor jullie, houd ik de nodige ruimte over voor het onverwachte en krijgt elk uniek liefdesverhaal mijn aandacht en liefde.' },
    { q: 'Hoe ver van tevoren moeten we boeken?', a: 'Voor de volledige organisatie van jullie droomdag (het Goud-pakket) adviseer ik om minimaal <b>12 maanden van tevoren</b> te beginnen. Zo hebben we alle tijd om elk detail perfect vorm te geven. Zoeken jullie een professionele ceremoniemeester voor dagcoördinatie of een trouwambtenaar? Dan is <b>3 tot 6 maanden van tevoren</b> voldoende om het sprookje compleet te maken.' },
    { q: 'Werk jij met vaste leveranciers?', a: 'Ik heb een netwerk waar ik mee samenwerk, maar ik pas mij altijd aan bij jullie stijl en budget. Eigen leveranciers zijn welkom.' },
  ];
  return (
    <section className="r-pad" style={fq.wrap}>
      <div style={fq.head}>
        <Eyebrow>Veelgestelde vragen</Eyebrow>
        <h2 style={fq.title}>Goed om te weten.</h2>
      </div>
      <div style={fq.list}>
        {items.map((it, i) => (
          <details key={i} style={fq.item}>
            <summary style={fq.q}>
              <span>{it.q}</span>
              <span style={fq.plus}>+</span>
            </summary>
            <p style={fq.a} dangerouslySetInnerHTML={{ __html: it.a }}></p>
          </details>
        ))}
      </div>
    </section>
  );
}
const fq = {
  wrap: { padding: '120px 56px', maxWidth: 880, margin: '0 auto' },
  head: { textAlign: 'center', marginBottom: 56, display: 'flex', flexDirection: 'column', alignItems: 'center' },
  title: { fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05, color: 'var(--ink)', margin: 0, letterSpacing: '-0.005em' },
  list: { display: 'flex', flexDirection: 'column' },
  item: { borderTop: '1px solid var(--hairline)', padding: '24px 0' },
  q: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22,
    color: 'var(--ink)', cursor: 'pointer', listStyle: 'none',
  },
  plus: { color: 'var(--gold-500)', fontSize: 24, fontWeight: 300 },
  a: { fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: 'var(--ink-soft)', margin: '14px 0 0', maxWidth: 700 },
};

window.AanbodHero = AanbodHero;
window.CelebrantAddon = CelebrantAddon;
window.PricingTiers = PricingTiers;
window.ProcessTimeline = ProcessTimeline;
window.FAQ = FAQ;
