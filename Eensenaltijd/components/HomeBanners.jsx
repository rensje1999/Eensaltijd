const eaDeep = {
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

function QuoteBanner() {
  return (
    <section style={{ padding: '0 32px 120px' }}>
      <div style={{ ...eaDeep.panel, padding: '96px 72px', textAlign: 'center' }}>
        <div style={eaDeep.grain} />
        <div style={{ position: 'relative' }}>
          <div style={eaDeep.rule} />
          <blockquote style={{
            fontFamily: 'var(--font-display)', fontWeight: 400,
            fontSize: 'clamp(30px, 3.6vw, 52px)', lineHeight: 1.18,
            letterSpacing: '-0.005em', color: '#ffffff',
            margin: '0 auto', maxWidth: 900, textWrap: 'pretty',
          }}>
            Jullie hoeven op jullie trouwdag maar één ding te doen:
            <em style={{ fontStyle: 'italic', color: 'var(--brass-soft)' }}> ervan genieten.</em>
          </blockquote>
          <div style={{ ...eaDeep.rule, margin: '32px auto 0' }} />
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section style={{ padding: '0 32px 40px' }}>
      <div style={{ ...eaDeep.panel, padding: '104px 72px', textAlign: 'center' }}>
        <div style={eaDeep.grain} />
        <div style={{ position: 'relative' }}>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500,
            letterSpacing: '0.24em', textTransform: 'uppercase',
            color: 'var(--brass-soft)', marginBottom: 22,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
          }}>
            <span style={{ color: 'var(--brass)' }}>✦</span> Een eerste gesprek
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 400,
            fontSize: 'clamp(34px, 4.4vw, 64px)', lineHeight: 1.06,
            letterSpacing: '-0.005em', color: '#ffffff',
            margin: '0 auto 22px', maxWidth: 820, textWrap: 'pretty',
          }}>
            Klaar om jullie <em style={{ fontStyle: 'italic', color: 'var(--brass-soft)' }}>sprookje</em> te beginnen?
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7,
            color: 'rgba(251,247,239,0.86)', margin: '0 auto 40px', maxWidth: 500,
          }}>
            Een vrijblijvende kennismaking, een rustig kopje koffie en al jullie
            ideeën hardop. Daarna kijken we samen of we samen jullie magische
            dag kunnen gaan plannen!
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

window.QuoteBanner = QuoteBanner;
window.FinalCTA = FinalCTA;
