import { useEffect, useState } from "react";
import { dict } from "@/lib/i18n";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Dashboard from "@/components/Dashboard";
import Alerts from "@/components/Alerts";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HelpDialog from "@/components/HelpDialog";

const FONT_SIZES = ["15px", "17px", "19px", "21px"];

function readStored(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v === null ? fallback : JSON.parse(v);
  } catch {
    return fallback;
  }
}

export default function App() {
  const [lang, setLang] = useState(() => readStored("agri.lang", "en"));
  const [fontStep, setFontStep] = useState(() => readStored("agri.font", 0));
  const [contrast, setContrast] = useState(() => readStored("agri.hc", false));
  const [helpOpen, setHelpOpen] = useState(false);

  const t = dict[lang];

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
      />

      <main id="main">
        <Hero t={t} />
        <About t={t} />
        <Services t={t} />
        <Dashboard t={t} lang={lang} />
        <Alerts t={t} />
        <Contact t={t} />
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
