import { useState } from "react";
import { EmblemIcon } from "@/components/Icons";

// Navigation routes shared by header and router.
export const NAV = [
  { id: "home", key: "home" },
  { id: "about", key: "about" },
  { id: "services", key: "services" },
  { id: "dashboard", key: "dashboard" },
  { id: "alerts", key: "alerts" },
  { id: "contact", key: "contact" },
];

export default function Header({
  t,
  lang,
  setLang,
  fontStep,
  setFontStep,
  contrast,
  setContrast,
  onHelp,
  active,
}) {
  const [open, setOpen] = useState(false);

  const stripBtn =
    "px-2 py-1 border border-white/40 text-white hover:bg-white hover:text-strip focus:bg-white focus:text-strip";

  return (
    <header className="no-print">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:bg-brand focus:px-4 focus:py-3 focus:text-base focus:font-bold focus:text-white"
      >
        {t.strip.skip}
      </a>

      <div className="flex h-1.5 w-full" aria-hidden="true">
        <div className="w-1/3 bg-[#ff9933]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#138808]" />
      </div>

      <div className="bg-strip text-white border-b-2 border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-3 py-2 text-sm sm:flex-row sm:items-center sm:justify-between sm:text-[0.85rem]">
          <p className="font-medium">
            <span lang={lang}>{t.strip.govt}</span>
            <span className="mx-2 hidden text-white/50 sm:inline">|</span>
            <span className="block sm:inline">{t.strip.ministry}</span>
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <a href="#/contact" className="underline underline-offset-2 hover:no-underline">
              {t.strip.screenReader}
            </a>

            <span className="hidden text-white/40 sm:inline" aria-hidden="true">|</span>

            <div className="flex items-center gap-1" role="group" aria-label={t.strip.fontSize}>
              <button type="button" className={stripBtn} onClick={() => setFontStep(Math.max(-1, fontStep - 1))} aria-label={t.strip.decrease} title={t.strip.decrease}>
                A<span aria-hidden="true">-</span>
              </button>
              <button type="button" className={stripBtn} onClick={() => setFontStep(0)} aria-label={t.strip.normal} title={t.strip.normal}>
                A
              </button>
              <button type="button" className={stripBtn} onClick={() => setFontStep(Math.min(2, fontStep + 1))} aria-label={t.strip.increase} title={t.strip.increase}>
                A<span aria-hidden="true">+</span>
              </button>
              <button
                type="button"
                className={stripBtn}
                onClick={() => setContrast(!contrast)}
                aria-pressed={contrast}
                aria-label={contrast ? t.strip.contrastOff : t.strip.contrastOn}
                title={t.strip.contrast}
              >
                <span aria-hidden="true">◐</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 border-b-4 border-brand bg-page">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-3 py-3">
          <a href="#/home" className="flex items-center gap-3 text-ink no-underline">
            <EmblemIcon className="h-11 w-11 shrink-0 text-brand" />
            <span className="leading-tight">
              <span className="block text-xl font-bold tracking-tight text-brand sm:text-2xl">
                {t.brand.name}
              </span>
              <span className="hidden text-xs text-inksoft sm:block sm:text-sm">
                {t.brand.sub} ·{" "}
                <span className="font-semibold text-accent">{t.brand.pilot}</span>
              </span>
            </span>
          </a>

          <div className="flex items-center gap-2">
            <div
              className="flex overflow-hidden border-2 border-brand"
              role="group"
              aria-label={t.strip.language}
            >
              <button
                type="button"
                lang="en"
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                aria-label="English"
                className={`px-2.5 py-2.5 text-sm font-bold sm:px-3 ${lang === "en" ? "bg-brand text-white" : "bg-page text-brand"}`}
              >
                <span className="sm:hidden">ENG</span>
                <span className="hidden sm:inline">English</span>
              </button>
              <button
                type="button"
                lang="hi"
                onClick={() => setLang("hi")}
                aria-pressed={lang === "hi"}
                aria-label="हिंदी"
                className={`border-l-2 border-brand px-2.5 py-2.5 text-sm font-bold sm:px-3 ${lang === "hi" ? "bg-brand text-white" : "bg-page text-brand"}`}
              >
                हिंदी
              </button>
            </div>

            <button
              type="button"
              onClick={onHelp}
              className="hidden border-2 border-accent bg-page px-3 py-2 text-sm font-bold text-accent hover:bg-accent hover:text-white sm:inline-block"
            >
              ? {t.nav.help}
            </button>

            <button
              type="button"
              className="border-2 border-brand bg-page px-3 py-2.5 text-sm font-bold text-brand md:hidden"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="main-nav"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            >
              <span aria-hidden="true">{open ? "✕" : "☰"}</span>
              <span className="ml-1 hidden sm:inline">{t.nav.menu}</span>
            </button>
          </div>
        </div>

        <nav
          id="main-nav"
          aria-label={t.nav.menu}
          className={`${open ? "block" : "hidden"} border-t border-line bg-brand md:block`}
        >
          <ul className="mx-auto flex max-w-6xl flex-col md:flex-row">
            {NAV.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id} className="border-b border-white/20 md:border-b-0 md:border-r md:border-white/25">
                  <a
                    href={`#/${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block px-5 py-3 text-base font-semibold no-underline md:text-[0.95rem] ${
                      isActive
                        ? "bg-white text-brand underline underline-offset-4 md:bg-white md:text-brand"
                        : "text-white hover:bg-white/15"
                    }`}
                  >
                    {t.nav[item.key]}
                  </a>
                </li>
              );
            })}
            <li className="border-b border-white/20 md:hidden">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onHelp();
                }}
                className="block w-full px-5 py-3 text-left text-base font-semibold text-white hover:bg-white/15"
              >
                ? {t.nav.help}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
