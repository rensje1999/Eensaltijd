const overDeep = {
  panel: {
    position: 'relative', overflow: 'hidden',
    maxWidth: 1320, margin: '0 auto',
    borderRadius: 'var(--r-lg)',
    background: 'linear-gradient(135deg, #3f4630 0%, #56603f 45%, #747e59 100%)',
    color: 'var(--ivory)',
  },
  grain: {
    position: 'absolute', inset: 0, pointerEvents: 'none',
    backgroundImage: 'var(--grain)', opacity: 0.35, mixBlendMode: 'overlay',
  },
  rule: { width: 64, height: 1, background: 'var(--brass)', margin: '0 auto 28px' },
};

function OverFuture() {
  return (
    <section style={{ padding: '0 32px 96px' }}>
      <div style={{ ...overDeep.panel, background: 'linear-gradient(135deg, #f7f5ee 0%, #eef0e4 55%, #e3e7d6 100%)', color: 'var(--ink)', padding: '88px 72px' }}>
        <div style={overDeep.grain} />
        <div style={{ position: 'relative', maxWidth: 860, margin: '0 auto' }}>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500,
            letterSpacing: '0.24em', textTransform: 'uppercase',
            color: 'var(--gold-600)', marginBottom: 22,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{ color: 'var(--brass)' }}>✦</span> Mijn visie &amp; droom
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 400,
            fontSize: 'clamp(30px, 3.6vw, 52px)', lineHeight: 1.08,
            letterSpacing: '-0.005em', color: 'var(--ink)',
            margin: '0 0 28px', textWrap: 'pretty',
          }}>
            Het sprookje achter <em style={{ fontStyle: 'italic', color: 'var(--gold-600)' }}>Eens &amp; Altijd</em>
          </h2>
          <p style={ofu.body}>
            Ik geloof dat een bruiloft nooit een &lsquo;moeten&rsquo; mag worden,
            maar een betoverende reis hoort te zijn. Mijn droom is om voor jullie
            de rustbewaker en stille kracht op de achtergrond te zijn. Niet door
            tientallen bruiloften per jaar af te vinken, maar door met alle
            liefde en aandacht te bouwen aan één uniek meesterwerk: dat van
            júllie.
          </p>
          <p style={ofu.body}>
            Van de allereerste vonk van een idee tot het allerlaatste dansnummer
            onder de sterren — ik zorg dat alles klopt, voelt en straalt. Zodat
            jullie alleen maar hoeven te genieten van de magie van het moment.
          </p>
        </div>
      </div>
    </section>
  );
}
const ofu = {
  body: {
    fontFamily: 'var(--font-body)', fontSize: 16.5, lineHeight: 1.75,
    color: 'var(--ink-soft)', margin: '0 0 18px', maxWidth: 760,
  },
};

function OverVision() {
  return (
    <section style={{ padding: '0 32px 96px' }}>
      <div style={{ ...overDeep.panel, background: 'var(--pearl)', color: 'var(--ink)', padding: '88px 72px', textAlign: 'center' }}>
        <div style={overDeep.grain} />
        <div style={{ position: 'relative' }}>
          <div style={overDeep.rule} />
          <blockquote style={{
            fontFamily: 'var(--font-display)', fontWeight: 400,
            fontSize: 'clamp(28px, 3.3vw, 48px)', lineHeight: 1.2,
            letterSpacing: '-0.005em', color: 'var(--ink)',
            margin: '0 auto', maxWidth: 900, textWrap: 'pretty',
          }}>
            Ik geloof niet in een standaard perfecte bruiloft. Ik geloof in een
            bruiloft die <em style={{ fontStyle: 'italic', color: 'var(--gold-600)' }}>100% voelt als júllie eigen sprookje.</em>
          </blockquote>
          <div style={{ ...overDeep.rule, margin: '32px auto 0' }} />
        </div>
      </div>
    </section>
  );
}

function OverPersonal() {
  const facts = [
    { h: 'Van nature georganiseerd', b: 'Waar anderen chaos zien, zie ik een helder overzicht. Mijn notitieboeken en planningen gaan overal mee naartoe — zelfs op vakantie.' },
    { h: 'Echte sprookjeskenner', b: 'Vraag me naar een willekeurige klassieker en ik ken het verhaal uit mijn hoofd. Assepoester blijft mijn absolute favoriet; het bewijs dat magie bestaat als de details kloppen.' },
    { h: 'Balans &amp; creativiteit', b: 'Mijn beste ideeën ontstaan tijdens een workout in de sportschool of wanneer ik creatief bezig ben. Die frisse energie neem ik mee naar de organisatie van jullie droomdag.' },
  ];
  return (
    <section className="r-pad" style={op.wrap}>
      <div style={op.head}>
        <Eyebrow>Nóg even persoonlijk…</Eyebrow>
        <h2 style={op.title}>Drie dingen over Elise.</h2>
      </div>
      <div className="r-3col" style={op.grid}>
        {facts.map((f, i) => (
          <div key={i} style={op.card}>
            <div style={op.orn}><span style={{ color: 'var(--brass)' }}>✦</span></div>
            <h3 style={op.h} dangerouslySetInnerHTML={{ __html: f.h }}></h3>
            <p style={op.b}>{f.b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
const op = {
  wrap: { padding: '0 56px 40px', maxWidth: 1320, margin: '0 auto' },
  head: { textAlign: 'center', marginBottom: 56, display: 'flex', flexDirection: 'column', alignItems: 'center' },
  script: { fontFamily: 'var(--font-script)', fontSize: 40, color: 'var(--gold-500)', lineHeight: 1, margin: '-4px 0 4px' },
  title: { fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px, 3.6vw, 50px)', lineHeight: 1.06, color: 'var(--ink)', margin: 0, letterSpacing: '-0.005em' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 64, maxWidth: 1080, margin: '0 auto' },
  card: { padding: 0, textAlign: 'center' },
  orn: { fontFamily: 'var(--font-display)', fontSize: 20, marginBottom: 16 },
  h: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 25, color: 'var(--ink)', margin: '0 0 12px' },
  b: { fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.7, color: 'var(--ink-soft)', margin: 0 },
};

function OverCTA() {
  return (
    <section style={{ padding: '0 32px 40px' }}>
      <div style={{ ...overDeep.panel, padding: '96px 72px', textAlign: 'center' }}>
        <div style={overDeep.grain} />
        <div style={{ position: 'relative' }}>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500,
            letterSpacing: '0.24em', textTransform: 'uppercase',
            color: 'var(--brass-soft)', marginBottom: 22,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
          }}>
            <span style={{ color: 'var(--brass)' }}>✦</span> Jullie verhaal
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 400,
            fontSize: 'clamp(32px, 4.2vw, 60px)', lineHeight: 1.06,
            letterSpacing: '-0.005em', color: '#ffffff',
            margin: '0 auto 22px', maxWidth: 820, textWrap: 'pretty',
          }}>
            Genoeg over mij. <em style={{ fontStyle: 'italic', color: 'var(--brass-soft)' }}>Vertel me over jullie!</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7,
            color: 'rgba(251,247,239,0.86)', margin: '0 auto 40px', maxWidth: 480,
          }}>
            Een rustig kopje koffie, jullie ideeën hardop en alle ruimte voor
            vragen. Ik hoor graag waar jullie van dromen.
          </p>
          <a href="contact.html" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500,
            letterSpacing: '0.02em', textDecoration: 'none',
            padding: '15px 34px', borderRadius: 999,
            background: 'var(--ivory)', color: '#3f4630',
            border: '1px solid var(--brass)',
          }}>
            Plan een kennismaking <span style={{ fontSize: 16, lineHeight: 0 }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

window.OverVision = OverVision;
window.OverFuture = OverFuture;
window.OverPersonal = OverPersonal;
window.OverCTA = OverCTA;
