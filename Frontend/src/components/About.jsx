import SectionHeading from "@/components/SectionHeading";
import { CheckIcon } from "@/components/Icons";

export default function About({ t }) {
  return (
    <section id="about" aria-labelledby="about-title" className="border-b-2 border-line bg-page">
      <div className="mx-auto max-w-6xl px-3 py-10">
        <SectionHeading id="about-title" number="01" title={t.about.heading} />

        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <div className="border-2 border-line bg-surface p-5">
            <h3 className="text-xl font-bold text-ink">{t.about.whatTitle}</h3>
            <p className="mt-3 text-base text-ink sm:text-lg">{t.about.whatText}</p>
            <p className="mt-3 text-base text-inksoft sm:text-lg">{t.about.whatText2}</p>

            <h3 className="mt-7 text-xl font-bold text-ink">{t.about.benefitsTitle}</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {t.about.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 border border-line bg-page px-3 py-2 text-base">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-ok" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="border-2 border-line bg-page p-5">
              <h3 className="text-xl font-bold text-ink">{t.about.whoTitle}</h3>
              <ul className="mt-3 space-y-3">
                {t.about.who.map((w) => (
                  <li key={w.title} className="border-l-4 border-brand bg-surface px-3 py-2">
                    <p className="text-base font-bold text-ink">{w.title}</p>
                    <p className="text-base text-inksoft">{w.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-2 border-line bg-page p-5">
              <h3 className="text-xl font-bold text-ink">{t.about.statsTitle}</h3>
              <dl className="mt-3 grid grid-cols-2 gap-3">
                {t.about.stats.map((s) => (
                  <div key={s.label} className="border border-line bg-surface px-3 py-3 text-center">
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <span className="block text-2xl font-bold text-brand">{s.value}</span>
                      <span className="block text-sm text-inksoft">{s.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
