function CookieBanner() {
  const KEY = 'ea-cookie-consent';
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    try { if (!localStorage.getItem(KEY)) setShow(true); } catch (e) { setShow(true); }
  }, []);
  const decide = (value) => {
    try { localStorage.setItem(KEY, value); } catch (e) {}
    setShow(false);
  };
  if (!show) return null;
  return (
    <div className="ea-cookie" role="dialog" aria-label="Cookievoorkeuren">
      <style>{`
        .ea-cookie{position:fixed;left:24px;bottom:24px;z-index:60;width:min(370px,calc(100vw - 48px));
          background:#F7F5EE;border:1px solid var(--brass);border-radius:var(--r-lg);
          padding:26px 26px 22px;box-shadow:0 18px 48px rgba(43,33,23,.14);
          animation:ea-cookie-in .45s cubic-bezier(.4,0,.2,1) both}
        @keyframes ea-cookie-in{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
        .ea-cookie__head{display:flex;align-items:center;gap:10px;font-family:var(--font-body);
          font-size:11px;font-weight:500;letter-spacing:.22em;text-transform:uppercase;
          color:var(--gold-600);margin-bottom:12px}
        .ea-cookie__head span{color:var(--brass)}
        .ea-cookie p{font-family:var(--font-body);font-size:13.5px;line-height:1.65;
          color:var(--ink-soft);margin:0 0 20px}
        .ea-cookie a{color:var(--gold-600);text-decoration:underline;text-underline-offset:2px}
        .ea-cookie a:hover{color:var(--gold-500)}
        .ea-cookie__row{display:flex;align-items:center;gap:16px;flex-wrap:wrap}
        .ea-cookie__btn{font-family:var(--font-body);font-size:13.5px;font-weight:500;letter-spacing:.02em;
          background:var(--sage-deep);color:var(--ivory);border:1px solid var(--sage-deep);
          border-radius:999px;padding:11px 24px;cursor:pointer;transition:filter .25s ease}
        .ea-cookie__btn:hover{filter:brightness(.94)}
        .ea-cookie__ghost{font-family:var(--font-body);font-size:13px;color:var(--ink-mute);
          background:none;border:none;padding:0;cursor:pointer;text-decoration:underline;
          text-underline-offset:3px;transition:color .25s ease}
        .ea-cookie__ghost:hover{color:var(--ink)}
        @media (max-width:640px){.ea-cookie{left:16px;right:16px;bottom:16px;width:auto;padding:22px 20px 20px}}
      `}</style>
      <div className="ea-cookie__head"><span>✦</span> Een fijne ervaring</div>
      <p>
        Wij gebruiken functionele en analytische cookies om jouw ervaring op onze
        website zo betoverend en soepel mogelijk te maken. Lees meer in ons{' '}
        <a href="cookiebeleid.html">cookiebeleid</a>.
      </p>
      <div className="ea-cookie__row">
        <button className="ea-cookie__btn" onClick={() => decide('all')}>Accepteren</button>
        <button className="ea-cookie__ghost" onClick={() => decide('essential')}>Alleen noodzakelijk</button>
      </div>
    </div>
  );
}

window.CookieBanner = CookieBanner;
