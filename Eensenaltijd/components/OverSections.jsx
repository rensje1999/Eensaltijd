function OverHero() {
  return (
    <section className="r-2col r-pad" style={oh.wrap}>
      <div style={oh.left}>
        <div style={oh.eyebrow}><span style={{ color: 'var(--brass)' }}>✦</span> &nbsp; Over mij</div>
        <h1 style={oh.title}>Hallo, ik ben<br/><em style={oh.italic}>Elise.</em></h1>
        <div style={oh.script}>De vrouw achter Eens &amp; Altijd</div>
        <p className="dropcap" style={oh.body}>
          Achter Eens &amp; Altijd sta ik: een organisator in hart en nieren,
          een creatieve geest en jullie rustpunt in de aanloop naar het
          mooiste hoofdstuk van jullie verhaal.
        </p>
        <p style={oh.body}>
          Ik geloof dat een bruiloft mag voelen als een sprookje — jullie
          eigen happily ever after. Geen enkel verhaal is hetzelfde, en dat
          is precies wat dit werk zo bijzonder maakt.
        </p>
        <GoldButton href="contact.html" variant="dark" style={{ marginTop: 16 }}>Laat ons kennismaken</GoldButton>
      </div>
      <div style={oh.right}>
        <PhotoTile aspect="4 / 5" photo="assets/elise-portret.jpg" arch />
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
    <section className="r-pad" style={os.wrap}>
      <div className="r-2col r-pad-block" style={os.block}>
        <div style={os.col}>
          <PhotoTile aspect="4 / 5" photo="assets/elise-balanceren.jpg" arch />
        </div>
        <div style={os.col}>
          <Eyebrow color="var(--ivory)">Mijn verhaal</Eyebrow>
          <h2 style={os.title}>Waar organisatie<br/><em style={{fontStyle:'italic', color:'var(--gold-200)'}}>en magie samenkomen.</em></h2>
          <div style={os.chapter}>Er was eens…</div>
          <p style={os.body}>
            <em>.. het besef dat echte magie in de kleinste details zit.</em>
          </p>
          <p style={os.body}>
            Mijn passie voor dit vak ontstond vanuit een simpel gevoel: de
            mooiste momenten in het leven ontstaan niet zomaar, ze worden met
            liefde en precisie gecre&euml;erd.
          </p>
          <p style={os.body}>
            Het bewaren van overzicht en het volledig ontzorgen van mensen is
            voor mij een tweede natuur. Waar anderen keuzestress of chaos
            ervaren, breng ik van nature de rust, structuur en harmonie.
          </p>
          <div style={os.chapter}>De magie ontdekt</div>
          <p style={os.body}>
            In mijn vrije tijd vind je mij in de sportschool of ben ik creatief
            bezig. Die energie en mijn oog voor stijl en sfeer neem ik mee naar
            jullie trouwdag. Want een bruiloft hoort geen lijst met to-do&rsquo;s
            te zijn; het hoort te voelen als een betoverend hoofdstuk uit jullie
            eigen boek.
          </p>
          <div style={os.chapter}>Het &lsquo;voor altijd&rsquo;</div>
          <p style={os.body}>
            Elk sprookje begint met &lsquo;Er was eens…&rsquo; en eindigt met
            &lsquo;… en ze leefden nog lang en gelukkig&rsquo;. Eens &amp; Altijd
            is de brug tussen die twee. Ik neem de zorgen uit handen, zodat
            jullie alleen maar hoeven te stralen — vanaf het eerste idee tot de
            allerlaatste dans.
          </p>
          <div style={os.scriptLine}>Met liefde &amp; aandacht,</div>
          <div style={os.signOff}>Elise <span style={{ color: 'var(--brass)' }}>✦</span></div>
        </div>
      </div>
    </section>
  );
}
const os = {
  wrap: { padding: '0 56px 96px', maxWidth: 1320, margin: '0 auto' },
  block: { background: 'var(--blush)', borderRadius: 'var(--r-lg)', padding: '72px 64px', display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 64, alignItems: 'center' },
  col: { },
  title: { fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05, color: 'var(--ivory)', margin: '0 0 24px', letterSpacing: '-0.005em' },
  body: { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'rgba(251,247,239,0.8)', margin: '0 0 26px', maxWidth: 480 },
  scriptLine: { fontFamily: 'var(--font-script)', fontSize: 56, color: 'var(--gold-200)', lineHeight: 1.1, marginTop: 24 },
  chapter: {
    fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: 'var(--brass-soft)', margin: '0 0 10px',
  },
  signOff: {
    fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: '0.04em',
    color: 'var(--ivory)', marginTop: 4,
    display: 'flex', alignItems: 'center', gap: 10,
  },
};

function StarDivider({ space = 96 }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18,
      maxWidth: 420, margin: `0 auto`, padding: `${space / 2}px 0`,
    }}>
      <span style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, var(--hairline))' }} />
      <span style={{ color: 'var(--brass)', fontSize: 13 }}>✦</span>
      <span style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, var(--hairline))' }} />
    </div>
  );
}

function OverValues() {
  const v = [
    { n: '01', t: 'Zuiver &amp; eerlijk', b: 'Geen mooie praatjes, maar een heldere spiegel. Ik geef altijd eerlijk advies over wat haalbaar is binnen jullie droom.' },
    { n: '02', t: 'Oprechte aandacht', b: 'Maximaal 5 bruiloften per jaar. Zo krijgen jullie alle tijd, liefde en toewijding die een eigen sprookje verdient.' },
    { n: '03', t: 'Rust in de details', b: 'Achter de schermen weef ik alle losse details naadloos aan elkaar, zodat alles op de dag zelf moeiteloos verloopt.' },
    { n: '04', t: 'De stille kracht', b: 'Op de trouwdag ben ik een vertrouwd baken van rust op de achtergrond voor jullie en de gasten, zodat jullie alleen hoeven te genieten.' },
  ];
  return (
    <section className="r-pad" style={ov.wrap}>
      <div style={ov.head}>
        <Eyebrow>Waar ik voor sta</Eyebrow>
        <h2 style={ov.title}>Vier beloftes.</h2>
      </div>
      <div className="r-4col" style={ov.grid}>
        {v.map((x, i) => (
          <div key={i} style={ov.card}>
            <div style={ov.num}><span style={{ color: 'var(--brass)' }}>✦</span></div>
            <h3 style={ov.t} dangerouslySetInnerHTML={{ __html: x.t }}></h3>
            <p style={ov.b}>{x.b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
const ov = {
  wrap: { padding: '0 56px 40px', maxWidth: 1320, margin: '0 auto' },
  head: { textAlign: 'center', marginBottom: 64, display: 'flex', flexDirection: 'column', alignItems: 'center' },
  script: { fontFamily: 'var(--font-script)', fontSize: 40, color: 'var(--gold-500)', lineHeight: 1, margin: '-4px 0 4px' },
  title: { fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05, color: 'var(--ink)', margin: 0, letterSpacing: '-0.005em' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 56, maxWidth: 1180, margin: '0 auto' },
  card: { padding: 0, textAlign: 'center' },
  num: { fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--brass)', marginBottom: 14 },
  step: {
    fontFamily: 'var(--font-body)', fontSize: 10.5, fontWeight: 500,
    letterSpacing: '0.22em', color: 'var(--ink-mute)', marginBottom: 10,
  },
  t: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 25, color: 'var(--ink)', margin: '0 0 12px' },
  b: { fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.7, color: 'var(--ink-soft)', margin: 0 },
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
window.StarDivider = StarDivider;
window.OverStory = OverStory;
window.OverValues = OverValues;
window.OverNumbers = OverNumbers;
