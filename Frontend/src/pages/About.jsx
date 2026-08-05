import SectionHeading from "@/components/SectionHeading";
import { CheckIcon } from "@/components/Icons";

function Block({ number, title, children, className = "" }) {
  return (
    <div className={`border-2 border-line bg-surface p-5 ${className}`}>
      <h3 className="flex items-center gap-2 text-xl font-bold text-ink">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-brand bg-brandsoft text-base font-bold text-brand">
          {number}
        </span>
        {title}
      </h3>
      <div className="mt-3 text-base text-ink sm:text-lg">{children}</div>
    </div>
  );
}

export default function About({ t }) {
  return (
    <section id="about" aria-labelledby="about-title" className="border-b-2 border-line bg-page">
      <div className="mx-auto max-w-6xl px-3 py-10">
        <SectionHeading id="about-title" number="01" title={t.about.heading} />

        <div className="grid gap-6 lg:grid-cols-2">
          <Block number="A" title={t.about.whatTitle}>
            <p>{t.about.whatText}</p>
            <p className="mt-3 text-inksoft">{t.about.whatText2}</p>
          </Block>

          <div className="space-y-6">
            <Block number="B" title={t.about.visionTitle}>
              <p className="border-l-4 border-accent bg-page px-4 py-3 italic">{t.about.visionText}</p>
            </Block>
            <Block number="C" title={t.about.missionTitle}>
              <p className="border-l-4 border-brand bg-page px-4 py-3">{t.about.missionText}</p>
            </Block>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Block number="D" title={t.about.objectivesTitle}>
            <ul className="space-y-2">
              {t.about.objectives.map((o) => (
                <li key={o} className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-ok" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block number="E" title={t.about.whyTitle}>
            <p className="text-inksoft">{t.about.whyText}</p>
            <ul className="mt-3 space-y-2">
              {t.about.whyPoints.map((w) => (
                <li key={w} className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-ok" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </Block>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Block number="F" title={t.about.benefitsTitle}>
            <ul className="grid gap-2 sm:grid-cols-2">
              {t.about.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 border border-line bg-page px-3 py-2">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-ok" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block number="G" title={t.about.whoTitle}>
            <ul className="space-y-3">
              {t.about.who.map((w) => (
                <li key={w.title} className="border-l-4 border-brand bg-page px-3 py-2">
                  <p className="font-bold">{w.title}</p>
                  <p className="text-inksoft">{w.text}</p>
                </li>
              ))}
            </ul>
          </Block>
        </div>

        {/* Architecture */}
        <div className="mt-12">
          <SectionHeading number="02" title={t.about.architectureTitle} sub={t.about.architectureSub} />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {t.about.architecture.map((a, i) => (
              <li key={a.title} className="relative border-2 border-line bg-surface p-4">
                <span className="inline-flex h-9 w-9 items-center justify-center border-2 border-brand bg-brand text-base font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-3 text-base font-bold text-ink">{a.title}</h3>
                <p className="mt-1 text-sm text-inksoft">{a.text}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Team */}
        <div className="mt-12">
          <SectionHeading number="03" title={t.about.teamTitle} sub={t.about.teamSub} />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.about.team.map((m) => (
              <li key={m.name} className="flex items-center gap-3 border-2 border-line bg-surface p-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-brand bg-brand text-lg font-bold text-white">
                  {m.name.charAt(0)}
                </span>
                <div>
                  <p className="text-base font-bold text-ink">{m.name}</p>
                  <p className="text-sm text-inksoft">{m.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
