import { serviceList } from "@/lib/data";
import { EmblemIcon } from "@/components/Icons";

export default function Footer({ t, onHelp }) {
  const linkCls = "text-white/90 underline underline-offset-2 hover:text-white hover:no-underline";

  return (
    <footer id="accessibility" className="bg-strip text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-3 py-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-start gap-3">
            <EmblemIcon className="h-12 w-12 shrink-0 text-white" />
            <div>
              <p className="text-lg font-bold">{t.brand.name}</p>
              <p className="text-sm text-white/85">{t.footer.ministry}</p>
              <p className="text-sm text-white/85">{t.footer.govt}</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-white/85">{t.footer.owned}</p>
          <p className="mt-3 max-w-md border-l-4 border-[#ff9933] pl-3 text-sm text-white/85">
            {t.footer.disclaimer}
          </p>
        </div>

        <nav aria-label={t.footer.linksTitle}>
          <h2 className="mb-3 border-b border-white/30 pb-2 text-base font-bold">
            {t.footer.linksTitle}
          </h2>
          <ul className="space-y-2 text-sm">
            {t.footer.links.map((l) => (
              <li key={l}>
                <a href="#accessibility" className={linkCls}>
                  {l}
                </a>
              </li>
            ))}
            <li>
              <button type="button" onClick={onHelp} className={linkCls}>
                {t.nav.help}
              </button>
            </li>
          </ul>
        </nav>

        <nav aria-label={t.footer.servicesTitle}>
          <h2 className="mb-3 border-b border-white/30 pb-2 text-base font-bold">
            {t.footer.servicesTitle}
          </h2>
          <ul className="space-y-2 text-sm">
            {serviceList.slice(0, 5).map((s) => (
              <li key={s.id}>
                <a href="#services" className={linkCls}>
                  {t.services.items[s.id].title}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className={linkCls}>
                {t.footer.contactTitle}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/25">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-3 py-4 text-xs text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {t.footer.updated}: 12 Feb 2026 · {t.footer.visitors}: 4,82,317
          </p>
          <p>{t.footer.bestViewed}</p>
        </div>
      </div>

      <div className="flex h-1.5 w-full" aria-hidden="true">
        <div className="w-1/3 bg-[#ff9933]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#138808]" />
      </div>
    </footer>
  );
}
