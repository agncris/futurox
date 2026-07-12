/* ============================================================
   FUTUROX · main.js
   Vanilla: toggle idioma (ES en HTML / EN desde i18n-en.js),
   menú móvil, reveal-on-scroll, formulario. Sin dependencias.
   ============================================================ */
(function () {
  "use strict";

  var thisScript = document.currentScript;
  var STORAGE_KEY = "futurox.lang";
  var esCache = {};
  var currentLang = "es";

  // Diccionario EN — vive en i18n-en.js y se carga BAJO DEMANDA (solo si se
  // usa inglés). El ES es la versión del HTML, así que en español no se pide.
  function EN() { return window.FUTUROX_EN || {}; }

  // Ruta de i18n-en.js relativa a este propio script (robusto a subcarpetas).
  function i18nUrl() {
    try { return new URL("i18n-en.js", thisScript.src).href; }
    catch (e) { return "/i18n-en.js"; }
  }

  // Carga el diccionario EN una sola vez; cb(ok) se llama siempre (ok=false → fallback ES).
  var enState = "idle"; // idle | loading | loaded
  var enQueue = [];
  function flushEN(ok) { var q = enQueue; enQueue = []; q.forEach(function (f) { f(ok); }); }
  function loadEN(cb) {
    if (window.FUTUROX_EN) { enState = "loaded"; cb(true); return; }
    enQueue.push(cb);
    if (enState === "loading") return;
    enState = "loading";
    var s = document.createElement("script");
    s.src = i18nUrl();
    s.onload = function () { enState = "loaded"; flushEN(true); };
    s.onerror = function () { enState = "idle"; flushEN(false); };
    document.head.appendChild(s);
  }

  var ES_STATUS = {
    "form.sending": "Enviando…",
    "form.ok": "Gracias. Te respondemos dentro de 48 horas.",
    "form.error": "No se pudo enviar. Escríbenos a hola@futurox.cl o por WhatsApp."
  };

  function collect() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (!(k in esCache)) esCache[k] = el.innerHTML;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-ph");
      if (!(k in esCache)) esCache[k] = el.getAttribute("placeholder") || "";
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria");
      if (!(k in esCache)) esCache[k] = el.getAttribute("aria-label") || "";
    });
  }

  function apply(lang) {
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);
    var en = EN();
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      var v = lang === "en" ? (en[k] != null ? en[k] : esCache[k]) : esCache[k];
      if (v != null && el.innerHTML !== v) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-ph");
      var v = lang === "en" ? (en[k] != null ? en[k] : esCache[k]) : esCache[k];
      if (v != null) el.setAttribute("placeholder", v);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria");
      var v = lang === "en" ? (en[k] != null ? en[k] : esCache[k]) : esCache[k];
      if (v != null) el.setAttribute("aria-label", v);
    });
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function detectLang() {
    try {
      var s = localStorage.getItem(STORAGE_KEY);
      if (s === "es" || s === "en") return s;
    } catch (e) {}
    var nav = (navigator.language || "es").toLowerCase();
    return nav.indexOf("es") === 0 ? "es" : "en";
  }

  function initMenu() {
    var burger = document.querySelector(".nav__burger");
    var menu = document.getElementById("mobile-menu");
    if (!burger || !menu) return;
    var close = menu.querySelector(".mobile-menu__close");
    function open() { menu.classList.add("is-open"); burger.setAttribute("aria-expanded", "true"); document.body.style.overflow = "hidden"; }
    function shut() { menu.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); document.body.style.overflow = ""; }
    burger.addEventListener("click", open);
    close.addEventListener("click", shut);
    menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", shut); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && menu.classList.contains("is-open")) shut(); });
  }

  function initReveal() {
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var items = document.querySelectorAll(".reveal");
    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.1 });
    items.forEach(function (el) { io.observe(el); });
  }

  function initForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;
    var status = form.querySelector(".form__status");
    var btn = form.querySelector("button[type=submit]");
    function msg(k) { return currentLang === "en" ? EN()[k] : ES_STATUS[k]; }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form__status";
      status.textContent = msg("form.sending");
      btn.disabled = true;
      fetch(form.action, { method: "POST", body: new FormData(form), headers: { "Accept": "application/json" } })
        .then(function (res) {
          if (res.ok) { status.className = "form__status form__status--ok"; status.textContent = msg("form.ok"); form.reset(); }
          else throw new Error("HTTP " + res.status);
        })
        .catch(function () { status.className = "form__status form__status--error"; status.textContent = msg("form.error"); })
        .finally(function () { btn.disabled = false; });
    });
  }

  // Marca el toggle como "cargando" mientras se descarga el diccionario EN.
  function setToggleBusy(busy) {
    document.querySelectorAll(".lang-toggle").forEach(function (t) {
      t.classList.toggle("is-loading", busy);
      t.setAttribute("aria-busy", String(busy));
    });
    document.querySelectorAll(".lang-toggle button").forEach(function (b) { b.disabled = busy; });
  }

  // Cambia de idioma; si es inglés y aún no está el diccionario, lo carga primero.
  function setLang(lang) {
    if (lang === "en" && !window.FUTUROX_EN) {
      setToggleBusy(true);
      loadEN(function (ok) {
        setToggleBusy(false);
        apply(ok ? "en" : "es");
      });
    } else {
      apply(lang);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    collect();
    setLang(detectLang());
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
    });
    initMenu();
    initReveal();
    initForm();
  });
})();
