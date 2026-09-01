function HomeCalm() {
  return (
    <section className="ea-calm">
      <style>{`
        .ea-calm{background:#F7F5EE;padding:112px 56px}
        .ea-calm__inner{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:0.85fr 1fr;gap:80px;align-items:center}
        .ea-calm__fig{margin:0}
        .ea-calm__img{display:block;width:100%;height:auto;aspect-ratio:4/5;object-fit:cover;border-radius:var(--arch)}
        .ea-calm__eyebrow{font-family:var(--font-body);font-size:12px;font-weight:500;letter-spacing:.24em;text-transform:uppercase;color:var(--ink-mute);display:flex;align-items:center;gap:12px;margin:0 0 22px}
        .ea-calm h2{font-family:var(--font-display);font-weight:400;font-size:clamp(34px,3.6vw,54px);line-height:1.06;letter-spacing:-.005em;color:var(--ink);margin:0 0 26px;text-wrap:pretty}
        .ea-calm h2 em{font-style:italic;color:var(--gold-500)}
        .ea-calm p{font-family:var(--font-body);font-size:16.5px;line-height:1.75;color:var(--ink-soft);margin:0 0 18px;max-width:480px}
        .ea-calm__list{list-style:none;padding:0;margin:32px 0 0;display:flex;flex-direction:column;gap:14px}
        .ea-calm__list li{display:flex;align-items:flex-start;gap:14px;font-family:var(--font-body);font-size:15.5px;line-height:1.6;color:var(--ink);max-width:480px}
        .ea-calm__list .ornament{font-size:13px;line-height:1.7;flex-shrink:0}
        @media (max-width:860px){
          .ea-calm{padding:72px 24px}
          .ea-calm__inner{grid-template-columns:1fr;gap:44px}
          .ea-calm__img{max-width:420px;margin:0 auto}
        }
      `}</style>
      <div className="ea-calm__inner">
        <figure className="ea-calm__fig">
          <img className="ea-calm__img" src="assets/kandelaars-tafel.jpg" loading="lazy" decoding="async" alt="Gedekte bruiloftstafel met witte rozen en gouden kandelaars in het avondlicht" />
        </figure>
        <div>
          <h2>Van <em>'waar beginnen we?'</em><br/>naar volledige rust.</h2>
          <p>
            Een bruiloft plannen begint sprankelend — en groeit ongemerkt uit
            tot honderd kleine beslissingen. Leveranciers, tijdschema's,
            contracten en ieder detail achter de schermen. Ik zorg ervoor dat
            alles op het juiste moment samenkomt en geregeld is op jullie
            bijzondere dag.
          </p>
          <p>
            Daar stap ik in. Ik neem het overzicht over en houd achter de
            schermen alle touwtjes in handen, zodat jullie kunnen doen waar
            het werkelijk om gaat: genieten van dit hoofdstuk.
          </p>
          <ul className="ea-calm__list">
            <li><span className="ornament">✦</span><span>Eén vast aanspreekpunt, van het eerste idee tot de laatste dans</span></li>
            <li><span className="ornament">✦</span><span>Een draaiboek waarin niets aan het toeval wordt overgelaten</span></li>
            <li><span className="ornament">✦</span><span>Rust op de dag zelf — jullie zijn gast op jullie eigen bruiloft</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

window.HomeCalm = HomeCalm;
