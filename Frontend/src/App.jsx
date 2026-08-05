import { useEffect, useState } from "react";
import { dict } from "@/lib/i18n";
import Header, { NAV } from "@/components/Header";
import Footer from "@/components/Footer";
import HelpDialog from "@/components/HelpDialog";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Dashboard from "@/pages/Dashboard";
import Alerts from "@/pages/Alerts";
import Contact from "@/pages/Contact";

const FONT_SIZES = ["15px", "17px", "19px", "21px"];

function readStored(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v === null ? fallback : JSON.parse(v);
  } catch {
    return fallback;
  }
}

// Map a URL hash to a page route. Falls back to home.
function parseRoute() {
  const h = window.location.hash.replace(/^#\/?/, "").toLowerCase();
  const known = NAV.map((n) => n.id);
  return known.includes(h) ? h : "home";
}

export default function App() {
  const [lang, setLang] = useState(() => readStored("agri.lang", "en"));
  const [fontStep, setFontStep] = useState(() => readStored("agri.font", 0));
  const [contrast, setContrast] = useState(() => readStored("agri.hc", false));
  const [helpOpen, setHelpOpen] = useState(false);
  const [route, setRoute] = useState(parseRoute);

  const t = dict[lang];

  useEffect(() => {
    const onHash = () => {
      setRoute(parseRoute());
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang === "hi" ? "hi" : "en";
    root.style.setProperty("--base-font", FONT_SIZES[fontStep + 1] ?? "17px");
    root.classList.toggle("hc", contrast);
    try {
      localStorage.setItem("agri.lang", JSON.stringify(lang));
      localStorage.setItem("agri.font", JSON.stringify(fontStep));
      localStorage.setItem("agri.hc", JSON.stringify(contrast));
    } catch {
      // storage may be blocked
    }
  }, [lang, fontStep, contrast]);

  const pages = {
    home: <Home t={t} />,
    about: <About t={t} />,
    services: <Services t={t} />,
    dashboard: <Dashboard t={t} lang={lang} />,
    alerts: <Alerts t={t} />,
    contact: <Contact t={t} />,
  };

  return (
    <div className="min-h-screen bg-page text-ink">
      <Header
        t={t}
        lang={lang}
        setLang={setLang}
        fontStep={fontStep}
        setFontStep={setFontStep}
        contrast={contrast}
        setContrast={setContrast}
        onHelp={() => setHelpOpen(true)}
        active={route}
      />

      <main id="main" className="fade-in">
        {pages[route]}
      </main>

      <Footer t={t} onHelp={() => setHelpOpen(true)} />

      <HelpDialog t={t} open={helpOpen} onClose={() => setHelpOpen(false)} />

      <button
        type="button"
        onClick={() => setHelpOpen(true)}
        className="fixed right-3 bottom-3 z-30 border-2 border-white bg-accent px-4 py-3 text-base font-bold text-white shadow-md sm:hidden no-print"
      >
        ? {t.nav.help}
      </button>
    </div>
  );
}
