function OverHero() {
  return (
    <section style={oh.wrap}>
      <div style={oh.left}>
        <div style={oh.eyebrow}>◆ &nbsp; Over mij</div>
        <h1 style={oh.title}>Hallo, ik ben<br/><em style={oh.italic}>Elise.</em></h1>
        <div style={oh.script}>De vrouw achter Eens &amp; Altijd</div>
        <p style={oh.body}>
          Achter Eens &amp; Altijd sta ik: een organisator in hart en nieren,
          een creatieve geest en jouw rustpunt in de voorbereiding naar de
          mooiste dag van jullie leven.
        </p>
        <p style={oh.body}>
          Ik geloof dat een bruiloft moet voelen als een sprookje, jullie
          happily ever after. Geen bruiloft is hetzelfde, en dat is precies
          wat mijn werk zo fantastisch maakt!
        </p>
        <GoldButton href="contact.html" variant="dark" style={{ marginTop: 16 }}>Laat ons kennismaken</GoldButton>
      </div>
      <div style={oh.right}>
        <PhotoTile aspect="4 / 5" photo="assets/elise-portret.jpg" />
      </div>
    </section>
  );
}
const oh = {
  wrap: { padding: '96px 56px 96px', maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'center' },
  left: { },
  right: { },
  eyebrow: { fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold-500)', marginBottom: 24 },
  title: { fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: 1.02, color: 'var(--ink)', margin: 0, letterSpacing: '-0.01em' },
  italic: { fontStyle: 'italic', color: 'var(--gold-500)' },
  script: { fontFamily: 'var(--font-script)', fontSize: 'clamp(36px, 4vw, 52px)', color: 'var(--gold-500)', marginTop: 14, lineHeight: 1, marginBottom: 28 },
  body: { fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)', margin: '0 0 18px', maxWidth: 480 },
};

function OverStory() {
  return (
    <section style={os.wrap}>
      <div style={os.block}>
        <div style={os.col}>
          <PhotoTile aspect="4 / 5" photo="assets/elise-balans.png" />
        </div>
        <div style={os.col}>
          <Eyebrow color="var(--ink)">Mijn verhaal</Eyebrow>
          <h2 style={os.title}>Een planner met<br/><em style={{fontStyle:'italic', color:'var(--ink)'}}>oog voor detail.</em></h2>
          <p style={os.body}>
            Als voormalig managementassistent, doktersassistent en
            zorgprofessional combineer ik strakke organisatie met rust en
            warmte. Waar anderen stress ervaren bewaar ik mijn overzicht.
          </p>
          <p style={os.body}>
            In mijn vrije tijd vind je mij in de sportschool of ben ik
            creatief bezig — de ideale energie voor het plannen en stylen
            van jullie droomdag. Mijn doel? Zorgen dat jullie zorgeloos
            kunnen stralen in jullie eigen sprookje. Zorgen dat jullie
            genieten van het eerste idee tot jullie laatste dans.
          </p>
          <div style={os.scriptLine}>Met liefde &amp; aandacht.</div>
        </div>
      </div>
    </section>
  );
}
const os = {
  wrap: { padding: '0 56px 96px', maxWidth: 1320, margin: '0 auto' },
  block: { background: 'var(--blush)', borderRadius: 'var(--r-lg)', padding: '72px 64px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'center' },
  col: { },
  title: { fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05, color: 'var(--ivory)', margin: '0 0 24px', letterSpacing: '-0.005em' },
  body: { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'rgba(251,247,239,0.8)', margin: '0 0 16px', maxWidth: 460 },
  scriptLine: { fontFamily: 'var(--font-script)', fontSize: 56, color: 'var(--ink)', lineHeight: 1, marginTop: 16 },
};

function OverValues() {
  const v = [
    { t: 'Eerlijk', b: 'Ik zeg wat haalbaar is en wat niet. Ook als dat betekent dat een idee even moet wachten.' },
    { t: 'Persoonlijk', b: 'Maximaal 5 bruiloften per jaar — zodat ik echt de tijd kan nemen voor jullie unieke verhaal!' },
    { t: 'Georganiseerd', b: 'Achter de schermen werk ik tot in het kleinste detail, zodat het op de dag zelf vanzelf gaat.' },
    { t: 'Aanwezig', b: 'Op de dag zelf zijn we er. Niet als toeschouwer, maar als jullie steun en toeverlaat.' },
  ];
  return (
    <section style={ov.wrap}>
      <div style={ov.head}>
        <Eyebrow>Waar ik voor sta</Eyebrow>
        <h2 style={ov.title}>Vier waarden.</h2>
      </div>
      <div style={ov.grid}>
        {v.map((x, i) => (
          <div key={i} style={ov.card}>
            <div style={ov.num}>0{i+1}</div>
            <h3 style={ov.t}>{x.t}</h3>
            <p style={ov.b}>{x.b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
const ov = {
  wrap: { padding: '0 56px 120px', maxWidth: 1320, margin: '0 auto' },
  head: { textAlign: 'center', marginBottom: 56 },
  title: { fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05, color: 'var(--ink)', margin: 0, letterSpacing: '-0.005em' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 },
  card: { background: 'var(--tulle)', borderRadius: 'var(--r-md)', padding: 32, border: '1px solid var(--hairline)' },
  num: { fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 32, color: 'var(--gold-400)', marginBottom: 18 },
  t: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 24, color: 'var(--ink)', margin: '0 0 12px' },
  b: { fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)', margin: 0 },
};

function OverNumbers() {
  const stats = [
    { n: 'Sinds 2018', l: 'Door heel Nederland' },
    { n: '12 / jaar', l: 'Persoonlijke aandacht' },
    { n: '4.9 ★', l: 'Op ThePerfectWedding' },
  ];
  return (
    <section style={on.wrap}>
      <div style={on.row}>
        {stats.map((s, i) => (
          <div key={i} style={on.cell}>
            <div style={on.n}>{s.n}</div>
            <div style={on.l}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
const on = {
  wrap: { padding: '0 56px 96px', maxWidth: 1320, margin: '0 auto' },
  row: { background: 'var(--pearl)', borderRadius: 'var(--r-lg)', padding: '56px 48px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, textAlign: 'center' },
  cell: { borderRight: '1px solid var(--hairline)', padding: '0 16px' },
  n: { fontFamily: 'var(--font-display)', fontWeight: 400, fontStyle: 'italic', fontSize: 44, color: 'var(--gold-500)', marginBottom: 8, lineHeight: 1 },
  l: { fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--ink-soft)', letterSpacing: '0.04em' },
};

window.OverHero = OverHero;
window.OverStory = OverStory;
window.OverValues = OverValues;
window.OverNumbers = OverNumbers;
