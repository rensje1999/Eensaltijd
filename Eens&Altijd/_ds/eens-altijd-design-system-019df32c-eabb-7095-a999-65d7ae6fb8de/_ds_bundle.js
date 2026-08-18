/* @ds-bundle: {"format":4,"namespace":"EensAltijdDesignSystem_019df3","components":[{"name":"ContactCTA","sourcePath":"ui_kits/marketing/ContactCTA.jsx"},{"name":"Footer","sourcePath":"ui_kits/marketing/Footer.jsx"},{"name":"Hero","sourcePath":"ui_kits/marketing/Hero.jsx"},{"name":"Nav","sourcePath":"ui_kits/marketing/Nav.jsx"},{"name":"Services","sourcePath":"ui_kits/marketing/Services.jsx"},{"name":"Story","sourcePath":"ui_kits/marketing/Story.jsx"},{"name":"Testimonial","sourcePath":"ui_kits/marketing/Testimonial.jsx"}],"sourceHashes":{"ui_kits/marketing/ContactCTA.jsx":"02459ac7dd31","ui_kits/marketing/Footer.jsx":"b6f666d1530d","ui_kits/marketing/Hero.jsx":"51d1c54ee964","ui_kits/marketing/Nav.jsx":"2583a738f4bb","ui_kits/marketing/Services.jsx":"cc41f3f7f46d","ui_kits/marketing/Story.jsx":"af585cddbb52","ui_kits/marketing/Testimonial.jsx":"fdede8aa9b38"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EensAltijdDesignSystem_019df3 = window.EensAltijdDesignSystem_019df3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/marketing/ContactCTA.jsx
try { (() => {
function ContactCTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: contactStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: contactStyles.panel
  }, /*#__PURE__*/React.createElement("div", {
    style: contactStyles.eyebrow
  }, "\u25C6 \xA0 Een eerste gesprek"), /*#__PURE__*/React.createElement("h2", {
    style: contactStyles.title
  }, "Vertel ons over ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--gold-500)'
    }
  }, "jullie dag"), "."), /*#__PURE__*/React.createElement("p", {
    style: contactStyles.body
  }, "Een vrijblijvende koffie. We luisteren, jullie dromen hardop. Daarna kijken we samen of we passen."), /*#__PURE__*/React.createElement("form", {
    style: contactStyles.form,
    onSubmit: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Jullie namen",
    style: contactStyles.input
  }), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "E-mailadres",
    style: contactStyles.input
  }), /*#__PURE__*/React.createElement("button", {
    style: contactStyles.cta
  }, "Plan een kennismaking")), /*#__PURE__*/React.createElement("div", {
    style: contactStyles.fine
  }, "Of mail ons direct \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: contactStyles.link
  }, "hallo@eensaltijd.nl"))));
}
const contactStyles = {
  wrap: {
    padding: '64px 48px 96px',
    background: 'var(--ivory)'
  },
  panel: {
    maxWidth: 1100,
    margin: '0 auto',
    background: 'var(--pearl)',
    borderRadius: 20,
    padding: '72px 56px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  eyebrow: {
    fontFamily: 'var(--font-body)',
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--gold-500)',
    marginBottom: 24
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 'clamp(40px, 5vw, 64px)',
    lineHeight: 1.05,
    color: 'var(--ink)',
    margin: '0 0 18px',
    letterSpacing: '-0.005em'
  },
  body: {
    fontFamily: 'var(--font-body)',
    fontSize: 17,
    lineHeight: 1.6,
    color: 'var(--ink-soft)',
    margin: '0 auto 36px',
    maxWidth: 440
  },
  form: {
    display: 'flex',
    gap: 10,
    maxWidth: 580,
    margin: '0 auto',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  input: {
    flex: '1 1 180px',
    minWidth: 180,
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    background: 'var(--ivory)',
    border: '1px solid var(--hairline)',
    borderRadius: 999,
    padding: '13px 20px',
    color: 'var(--ink)',
    outline: 'none'
  },
  cta: {
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    fontWeight: 500,
    background: 'var(--gold-400)',
    color: 'var(--ivory)',
    border: 'none',
    padding: '13px 28px',
    borderRadius: 999,
    cursor: 'pointer',
    boxShadow: 'var(--shadow-gold)'
  },
  fine: {
    marginTop: 28,
    fontFamily: 'var(--font-body)',
    fontSize: 13,
    color: 'var(--ink-mute)'
  },
  link: {
    color: 'var(--gold-500)'
  }
};
window.ContactCTA = ContactCTA;
Object.assign(__ds_scope, { ContactCTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/ContactCTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Footer.jsx
try { (() => {
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: footerStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.brandCol
  }, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.brand
  }, "Eens", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      margin: '0 4px'
    }
  }, "&"), "Altijd"), /*#__PURE__*/React.createElement("div", {
    style: footerStyles.script
  }, "Zorgeloos stralen.")), /*#__PURE__*/React.createElement("div", {
    style: footerStyles.cols
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.colHead
  }, "Diensten"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.colLink,
    href: "#"
  }, "Volledig"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.colLink,
    href: "#"
  }, "Samen plannen"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.colLink,
    href: "#"
  }, "Dagco\xF6rdinatie")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.colHead
  }, "Eens & Altijd"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.colLink,
    href: "#"
  }, "Onze aanpak"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.colLink,
    href: "#"
  }, "Verhalen"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.colLink,
    href: "#"
  }, "Over ons")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.colHead
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.colLink,
    href: "#"
  }, "hallo@eensaltijd.nl"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.colLink,
    href: "#"
  }, "Instagram"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.colLink,
    href: "#"
  }, "Pinterest")))), /*#__PURE__*/React.createElement("div", {
    style: footerStyles.divider
  }), /*#__PURE__*/React.createElement("div", {
    style: footerStyles.fine
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " Eens & Altijd"), /*#__PURE__*/React.createElement("span", null, "KvK 00000000 \xB7 gevestigd in Utrecht")));
}
const footerStyles = {
  wrap: {
    background: 'var(--ivory)',
    padding: '96px 48px 48px',
    borderTop: '1px solid var(--hairline-soft)'
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1.4fr 2fr',
    gap: 64
  },
  brandCol: {},
  brand: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 44,
    background: 'var(--grad-gold)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
    letterSpacing: '-0.01em',
    marginBottom: 12
  },
  script: {
    fontFamily: 'var(--font-script)',
    fontSize: 36,
    color: 'var(--gold-500)'
  },
  cols: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 32
  },
  colHead: {
    fontFamily: 'var(--font-body)',
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--gold-500)',
    marginBottom: 18
  },
  colLink: {
    display: 'block',
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    color: 'var(--ink-soft)',
    marginBottom: 10
  },
  divider: {
    height: 1,
    background: 'var(--hairline-soft)',
    maxWidth: 1200,
    margin: '64px auto 24px'
  },
  fine: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'var(--font-body)',
    fontSize: 12,
    color: 'var(--ink-mute)'
  }
};
window.Footer = Footer;
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: heroStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.tulle
  }), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.eyebrow
  }, "\u25C6 \xA0 Bruiloftsplanning \xB7 Nederland & Belgi\xEB"), /*#__PURE__*/React.createElement("h1", {
    style: heroStyles.headline
  }, "Lang ", /*#__PURE__*/React.createElement("em", {
    style: heroStyles.italic
  }, "&"), " gelukkig", /*#__PURE__*/React.createElement("br", null), "\u2014 ", /*#__PURE__*/React.createElement("em", {
    style: heroStyles.italic
  }, "jullie verhaal.")), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.script
  }, "Zorgeloos stralen in jullie eigen sprookje"), /*#__PURE__*/React.createElement("p", {
    style: heroStyles.body
  }, "Wij schrijven mee aan jullie hoofdstuk. Van het allereerste \u201Cja\u201D tot de laatste dans bij kaarslicht \u2014 alles op zijn plek, zodat jullie alleen maar hoeven te beleven."), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.actions
  }, /*#__PURE__*/React.createElement("button", {
    style: heroStyles.primary
  }, "Plan een kennismaking"), /*#__PURE__*/React.createElement("button", {
    style: heroStyles.secondary
  }, "Onze diensten"))));
}
const heroStyles = {
  wrap: {
    position: 'relative',
    overflow: 'hidden',
    padding: '96px 48px 120px',
    background: 'var(--ivory)'
  },
  tulle: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    opacity: 0.5,
    background: 'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(232,200,192,0.35), transparent 60%),' + 'radial-gradient(ellipse 70% 60% at 10% 90%, rgba(212,184,106,0.25), transparent 60%),' + 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(251,247,239,1), transparent 70%)'
  },
  inner: {
    position: 'relative',
    maxWidth: 1100,
    margin: '0 auto',
    textAlign: 'center'
  },
  eyebrow: {
    fontFamily: 'var(--font-body)',
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--gold-500)',
    marginBottom: 28
  },
  headline: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 'clamp(56px, 8vw, 104px)',
    lineHeight: 1.02,
    letterSpacing: '-0.01em',
    color: 'var(--ink)',
    margin: 0
  },
  italic: {
    fontStyle: 'italic',
    color: 'var(--gold-500)'
  },
  script: {
    fontFamily: 'var(--font-script)',
    fontSize: 'clamp(40px, 5vw, 60px)',
    color: 'var(--gold-500)',
    marginTop: 18,
    lineHeight: 1
  },
  body: {
    fontFamily: 'var(--font-body)',
    fontSize: 18,
    lineHeight: 1.6,
    color: 'var(--ink-soft)',
    maxWidth: 540,
    margin: '32px auto 0'
  },
  actions: {
    display: 'flex',
    gap: 14,
    justifyContent: 'center',
    marginTop: 36
  },
  primary: {
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    fontWeight: 500,
    background: 'var(--gold-400)',
    color: 'var(--ivory)',
    border: 'none',
    padding: '14px 30px',
    borderRadius: 999,
    cursor: 'pointer',
    boxShadow: 'var(--shadow-gold)'
  },
  secondary: {
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    fontWeight: 500,
    background: 'transparent',
    color: 'var(--ink)',
    border: '1px solid var(--gold-400)',
    padding: '13px 29px',
    borderRadius: 999,
    cursor: 'pointer'
  }
};
window.Hero = Hero;
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Nav.jsx
try { (() => {
function Nav() {
  return /*#__PURE__*/React.createElement("nav", {
    style: navStyles.bar
  }, /*#__PURE__*/React.createElement("div", {
    style: navStyles.brand
  }, /*#__PURE__*/React.createElement("span", {
    style: navStyles.brandSerif
  }, "Eens", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      margin: '0 4px'
    }
  }, "&"), "Altijd")), /*#__PURE__*/React.createElement("div", {
    style: navStyles.links
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: navStyles.link
  }, "Diensten"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: navStyles.link
  }, "Onze aanpak"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: navStyles.link
  }, "Verhalen"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: navStyles.link
  }, "Over ons")), /*#__PURE__*/React.createElement("div", {
    style: navStyles.actions
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: navStyles.linkSm
  }, "Contact"), /*#__PURE__*/React.createElement("button", {
    style: navStyles.cta
  }, "Plan een kennismaking")));
}
const navStyles = {
  bar: {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '18px 48px',
    background: 'rgba(251,247,239,0.85)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--hairline-soft)'
  },
  brand: {
    display: 'flex',
    alignItems: 'baseline'
  },
  brandSerif: {
    fontFamily: 'var(--font-display)',
    fontSize: 28,
    fontWeight: 400,
    background: 'var(--grad-gold)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
    letterSpacing: '-0.005em'
  },
  links: {
    display: 'flex',
    gap: 32
  },
  link: {
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    fontWeight: 400,
    color: 'var(--ink)',
    letterSpacing: '0.02em'
  },
  linkSm: {
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    fontWeight: 400,
    color: 'var(--ink-soft)'
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: 18
  },
  cta: {
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    fontWeight: 500,
    background: 'var(--gold-400)',
    color: 'var(--ivory)',
    border: 'none',
    padding: '10px 22px',
    borderRadius: 999,
    cursor: 'pointer',
    letterSpacing: '0.01em'
  }
};
window.Nav = Nav;
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Services.jsx
try { (() => {
function Services() {
  const items = [{
    eyebrow: 'Volledig',
    title: 'Van eerste idee tot laatste dans',
    body: 'De volledige bruiloft uit handen. Locatie, leveranciers, planning, draaiboek, en de regie op de dag zelf.',
    tag: '12+ maanden'
  }, {
    eyebrow: 'Partial',
    title: 'Samen plannen',
    body: 'Jullie zijn al op weg. Wij vullen aan waar het schuurt — leveranciers, contracten, het draaiboek.',
    tag: '6 maanden'
  }, {
    eyebrow: 'Dagcoördinatie',
    title: 'Wij regelen, jullie genieten',
    body: 'Op de dag zelf alles in goede handen. Van eerste opbouw tot het uitzwaaien van de laatste gast.',
    tag: 'De dag zelf'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: servicesStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: servicesStyles.head
  }, /*#__PURE__*/React.createElement("div", {
    style: servicesStyles.eyebrow
  }, "Onze diensten"), /*#__PURE__*/React.createElement("h2", {
    style: servicesStyles.title
  }, "Drie manieren om ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--gold-500)'
    }
  }, "samen"), " te werken.")), /*#__PURE__*/React.createElement("div", {
    style: servicesStyles.grid
  }, items.map((it, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    style: servicesStyles.card
  }, /*#__PURE__*/React.createElement("div", {
    style: servicesStyles.cardEye
  }, it.eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: servicesStyles.cardTitle
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: servicesStyles.cardBody
  }, it.body), /*#__PURE__*/React.createElement("div", {
    style: servicesStyles.divider
  }), /*#__PURE__*/React.createElement("div", {
    style: servicesStyles.cardFoot
  }, /*#__PURE__*/React.createElement("span", {
    style: servicesStyles.tag
  }, it.tag), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: servicesStyles.more
  }, "Lees meer \u2192"))))));
}
const servicesStyles = {
  wrap: {
    padding: '96px 48px',
    background: 'var(--ivory)'
  },
  head: {
    maxWidth: 1100,
    margin: '0 auto 48px',
    textAlign: 'center'
  },
  eyebrow: {
    fontFamily: 'var(--font-body)',
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--gold-500)',
    marginBottom: 18
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 'clamp(40px, 5vw, 64px)',
    lineHeight: 1.1,
    color: 'var(--ink)',
    margin: 0,
    letterSpacing: '-0.005em'
  },
  grid: {
    maxWidth: 1100,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 20
  },
  card: {
    background: 'var(--tulle)',
    border: '1px solid var(--hairline)',
    borderRadius: 12,
    padding: 28,
    display: 'flex',
    flexDirection: 'column',
    minHeight: 280
  },
  cardEye: {
    fontFamily: 'var(--font-body)',
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--gold-500)',
    marginBottom: 14
  },
  cardTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 500,
    fontSize: 26,
    lineHeight: 1.2,
    color: 'var(--ink)',
    margin: '0 0 12px'
  },
  cardBody: {
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    lineHeight: 1.6,
    color: 'var(--ink-soft)',
    margin: 0,
    flex: 1
  },
  divider: {
    height: 1,
    background: 'var(--hairline)',
    margin: '20px 0 14px'
  },
  cardFoot: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  tag: {
    fontFamily: 'var(--font-body)',
    fontSize: 12,
    color: 'var(--ink-mute)',
    letterSpacing: '0.04em'
  },
  more: {
    fontFamily: 'var(--font-body)',
    fontSize: 13,
    fontWeight: 500,
    color: 'var(--gold-500)'
  }
};
window.Services = Services;
Object.assign(__ds_scope, { Services });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Story.jsx
try { (() => {
function Story() {
  return /*#__PURE__*/React.createElement("section", {
    style: storyStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: storyStyles.block
  }, /*#__PURE__*/React.createElement("div", {
    style: storyStyles.col
  }, /*#__PURE__*/React.createElement("div", {
    style: storyStyles.eyebrow
  }, "\u25C6 \xA0 Onze belofte"), /*#__PURE__*/React.createElement("h2", {
    style: storyStyles.title
  }, "We luisteren eerst.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: storyStyles.italic
  }, "Plannen daarna.")), /*#__PURE__*/React.createElement("p", {
    style: storyStyles.body
  }, "Geen pakket dat we over jullie heen leggen. Eerst een lange koffie, een eerlijk gesprek over wat jullie \xE9cht willen \u2014 en wat jullie liever niet willen. Daarna pas de planning."), /*#__PURE__*/React.createElement("p", {
    style: storyStyles.body
  }, "Sinds 2018, door heel Nederland en Belgi\xEB."), /*#__PURE__*/React.createElement("div", {
    style: storyStyles.script
  }, "Beloofd.")), /*#__PURE__*/React.createElement("div", {
    style: storyStyles.imageCol
  }, /*#__PURE__*/React.createElement("div", {
    style: storyStyles.image
  }, /*#__PURE__*/React.createElement("div", {
    style: storyStyles.imageInner
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...storyStyles.imageBlob,
      top: '20%',
      left: '15%',
      background: 'rgba(212,184,106,0.4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...storyStyles.imageBlob,
      bottom: '15%',
      right: '20%',
      background: 'rgba(232,200,192,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...storyStyles.imageBlob,
      top: '50%',
      left: '50%',
      background: 'rgba(185,194,168,0.35)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: storyStyles.imagePlaceholder
  }, "fabric \xB7 candlelight \xB7 hands"))))));
}
const storyStyles = {
  wrap: {
    padding: '64px 48px',
    background: 'var(--ivory)'
  },
  block: {
    maxWidth: 1200,
    margin: '0 auto',
    background: 'var(--blush)',
    borderRadius: 20,
    padding: '64px 56px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 48,
    alignItems: 'center'
  },
  col: {},
  eyebrow: {
    fontFamily: 'var(--font-body)',
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: '#7a3a3a',
    marginBottom: 24
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 56,
    lineHeight: 1.05,
    letterSpacing: '-0.005em',
    color: 'var(--ink)',
    margin: '0 0 24px'
  },
  italic: {
    fontStyle: 'italic',
    color: 'var(--gold-500)'
  },
  body: {
    fontFamily: 'var(--font-body)',
    fontSize: 16,
    lineHeight: 1.7,
    color: 'var(--ink-soft)',
    margin: '0 0 16px',
    maxWidth: 440
  },
  script: {
    fontFamily: 'var(--font-script)',
    fontSize: 56,
    color: 'var(--gold-500)',
    marginTop: 8,
    lineHeight: 1
  },
  imageCol: {},
  image: {
    aspectRatio: '4 / 5',
    borderRadius: 12,
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #efe6d5, #e8c8c0 40%, #d4b86a 100%)',
    position: 'relative'
  },
  imageInner: {
    position: 'absolute',
    inset: 0
  },
  imageBlob: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: '50%',
    filter: 'blur(40px)'
  },
  imagePlaceholder: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-script)',
    fontSize: 36,
    color: 'rgba(43,33,23,0.35)'
  }
};
window.Story = Story;
Object.assign(__ds_scope, { Story });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Story.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Testimonial.jsx
try { (() => {
function Testimonial() {
  return /*#__PURE__*/React.createElement("section", {
    style: testimonialStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: testimonialStyles.eyebrow
  }, "Verhalen"), /*#__PURE__*/React.createElement("div", {
    style: testimonialStyles.script
  }, "\"Wij hoefden alleen maar te trouwen.\""), /*#__PURE__*/React.createElement("p", {
    style: testimonialStyles.body
  }, "Onze planner wist precies wanneer we iets moesten beslissen, en wanneer ze het ons even uit handen kon nemen. De dag zelf hebben we met niemand anders dan elkaar gepraat \u2014 alles liep gewoon."), /*#__PURE__*/React.createElement("div", {
    style: testimonialStyles.attribution
  }, /*#__PURE__*/React.createElement("span", {
    style: testimonialStyles.names
  }, "Sophie & Daan"), /*#__PURE__*/React.createElement("span", {
    style: testimonialStyles.dot
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: testimonialStyles.where
  }, "Kasteel De Hooge Vuursche \xB7 juni 2024")));
}
const testimonialStyles = {
  wrap: {
    padding: '96px 48px',
    background: 'var(--ivory)',
    maxWidth: 760,
    margin: '0 auto',
    textAlign: 'center'
  },
  eyebrow: {
    fontFamily: 'var(--font-body)',
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--gold-500)',
    marginBottom: 28
  },
  script: {
    fontFamily: 'var(--font-script)',
    fontSize: 'clamp(48px, 6vw, 84px)',
    color: 'var(--gold-500)',
    lineHeight: 1.05,
    margin: '0 0 28px'
  },
  body: {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: 22,
    lineHeight: 1.5,
    color: 'var(--ink)',
    margin: '0 auto 32px',
    maxWidth: 560
  },
  attribution: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    fontFamily: 'var(--font-body)',
    fontSize: 13
  },
  names: {
    color: 'var(--ink)',
    fontWeight: 500
  },
  dot: {
    color: 'var(--gold-400)'
  },
  where: {
    color: 'var(--ink-mute)'
  }
};
window.Testimonial = Testimonial;
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Testimonial.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ContactCTA = __ds_scope.ContactCTA;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.Services = __ds_scope.Services;

__ds_ns.Story = __ds_scope.Story;

__ds_ns.Testimonial = __ds_scope.Testimonial;

})();
