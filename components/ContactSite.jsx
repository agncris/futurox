/* eslint-disable */
const contactSiteStyles = {
  section: { background: "var(--bone-50)", padding: "144px 96px 120px" },
  inner: { maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 96, alignItems: "start" },
  eyebrow: {
    fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 500,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "var(--ink-500)", marginBottom: 24,
  },
  title: {
    fontFamily: "var(--font-display)", fontStyle: "italic",
    fontSize: "clamp(64px, 8vw, 132px)", lineHeight: 0.95,
    letterSpacing: "-0.025em",
    color: "var(--ink-900)", margin: 0,
    textWrap: "balance",
  },
  copy: {
    marginTop: 40,
    fontFamily: "var(--font-sans)", fontSize: 20, lineHeight: 1.55,
    color: "var(--ink-500)", maxWidth: 480,
  },
  meta: { marginTop: 56, display: "flex", flexDirection: "column", gap: 12 },
  metaRow: {
    display: "flex", gap: 24, alignItems: "baseline",
    paddingBottom: 12, borderBottom: "1px solid var(--border)",
  },
  metaLabel: {
    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "var(--ink-500)", width: 84, flexShrink: 0,
  },
  metaValue: {
    fontFamily: "var(--font-sans)", fontSize: 17, color: "var(--ink-900)",
  },
  form: { display: "flex", flexDirection: "column", gap: 18, background: "var(--paper)", border: "1px solid var(--border)", borderRadius: 20, padding: 32 },
  fieldRow: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 },
  field: { display: "flex", flexDirection: "column", gap: 6 },
  label: {
    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "var(--ink-500)",
  },
  input: {
    fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--ink-900)",
    padding: "13px 14px", background: "var(--bone-50)",
    border: "1px solid var(--border)", borderRadius: 10,
    outline: "none",
    transition: "border-color 240ms var(--ease), box-shadow 240ms var(--ease)",
  },
  inputFocus: { borderColor: "var(--ink-900)", boxShadow: "0 0 0 3px var(--coral-100)" },
  textarea: { minHeight: 110, resize: "vertical" },
  done: {
    padding: "40px 32px",
    background: "var(--paper)",
    border: "1px solid var(--border)",
    borderRadius: 20,
    display: "flex", gap: 24, alignItems: "flex-start",
  },
  doneArc: { flexShrink: 0, color: "var(--coral-500)" },
  doneTitle: { fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 36, color: "var(--ink-900)", margin: 0, lineHeight: 1.1 },
  doneCopy: { fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.55, color: "var(--ink-500)", marginTop: 12 },
};

const FieldSite = ({ label, type = "text", as = "input", ...rest }) => {
  const [focus, setFocus] = React.useState(false);
  const Tag = as;
  return (
    <div style={contactSiteStyles.field}>
      <label style={contactSiteStyles.label}>{label}</label>
      <Tag
        type={type}
        style={{
          ...contactSiteStyles.input,
          ...(as === "textarea" ? contactSiteStyles.textarea : {}),
          ...(focus ? contactSiteStyles.inputFocus : {}),
        }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...rest}
      />
    </div>
  );
};

const ContactSite = () => {
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState(null);

  // POST to FormSubmit's AJAX endpoint — messages land in hola@futurox.cl.
  // First send from any new origin triggers a one-time confirmation email
  // to that inbox (standard FormSubmit verification). If the AJAX call
  // fails for any reason we fall back to a mailto: link so the message
  // still gets through.
  const onSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name_org = fd.get("name_org") || "";
    const email    = fd.get("email")    || "";
    const message  = fd.get("message")  || "";
    setSending(true);
    setError(null);
    try {
      const res = await fetch("https://formsubmit.co/ajax/hola@futurox.cl", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          "Tu\u0301 y tu organizacio\u0301n": name_org,
          "Email": email,
          "\u00bfQue\u0301 decisio\u0301n tienes pendiente?": message,
          "_subject": `FUTUROX · nueva consulta de ${name_org}`,
          "_template": "table",
          "_captcha": "false",
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSent(true);
    } catch (err) {
      // Soft fallback — open user's email client with the message prefilled.
      const subject = encodeURIComponent(`FUTUROX · consulta de ${name_org}`);
      const body = encodeURIComponent(`De: ${name_org}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:hola@futurox.cl?subject=${subject}&body=${body}`;
      setError("Abriendo tu cliente de email…");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" style={contactSiteStyles.section}>
      <div style={contactSiteStyles.inner} data-site="contact-inner">
        <div>
          <div style={contactSiteStyles.eyebrow}>Conversemos</div>
          <h2 style={contactSiteStyles.title}>
            ¿Qué decisión<br/>tienes <span style={{ color: "var(--coral-500)" }}>pendiente</span>?
          </h2>
          <p style={contactSiteStyles.copy}>
            Cuéntanos en una línea. Te respondemos con la propuesta de un primer encuentro
            — sin venta, sin compromiso.
          </p>
          <div style={contactSiteStyles.meta}>
            <div style={contactSiteStyles.metaRow}>
              <span style={contactSiteStyles.metaLabel}>Email</span>
              <span style={contactSiteStyles.metaValue}>hola@futurox.cl</span>
            </div>
            <div style={contactSiteStyles.metaRow}>
              <span style={contactSiteStyles.metaLabel}>Teléfono</span>
              <span style={contactSiteStyles.metaValue}>+56 9 5108 7502</span>
            </div>
            <div style={contactSiteStyles.metaRow}>
              <span style={contactSiteStyles.metaLabel}>Dirección</span>
              <span style={contactSiteStyles.metaValue}>10 Norte 882, Viña del Mar</span>
            </div>
            <div style={{ ...contactSiteStyles.metaRow, borderBottom: 0 }}>
              <span style={contactSiteStyles.metaLabel}>Horario</span>
              <span style={contactSiteStyles.metaValue}>Lun a Vie · 09:00–18:30 CLT</span>
            </div>
          </div>
        </div>

        {sent ? (
          <div style={contactSiteStyles.done}>
            <div style={contactSiteStyles.doneArc}><ArcMark size={64} stroke={1.5} filled /></div>
            <div>
              <h3 style={contactSiteStyles.doneTitle}>Gracias.<br/>Lo leeremos hoy.</h3>
              <p style={contactSiteStyles.doneCopy}>
                Te escribimos en las próximas 48 horas con dos o tres preguntas
                y una fecha tentativa para conversar.
              </p>
            </div>
          </div>
        ) : (
          <form style={contactSiteStyles.form} onSubmit={onSubmit}>
            <FieldSite label="Tú y tu organización" name="name_org" required
                       placeholder="Cristian Pérez, Banco XYZ" />
            <FieldSite label="Email" type="email" name="email" required
                       placeholder="tu@empresa.cl" />
            <FieldSite label="¿Qué decisión tienes pendiente?" as="textarea" name="message"
                       placeholder="Una o dos líneas. Lo justo para entender." />
            {error ? (
              <div style={{
                fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--ink-500)",
                padding: "4px 2px",
              }}>{error}</div>
            ) : null}
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}>
              <Button variant="primary" withArrow type="submit" disabled={sending}>
                {sending ? "Enviando…" : "Enviar mensaje"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

Object.assign(window, { ContactSite });
