import { serviceList } from "@/lib/data";
import { serviceIcons } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";

export default function Services({ t }) {
  return (
    <section id="services" aria-labelledby="services-title" className="border-b-2 border-line bg-surface">
      <div className="mx-auto max-w-6xl px-3 py-10">
        <SectionHeading
          id="services-title"
          number="02"
          title={t.services.heading}
          sub={t.services.sub}
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceList.map(({ id, code }) => {
            const Icon = serviceIcons[id];
            const item = t.services.items[id];
            return (
              <li key={id} className="flex flex-col border-2 border-line bg-page">
                <div className="flex items-start gap-3 border-b border-line p-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-brand bg-brandsoft text-brand">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-wide text-inksoft">{code}</p>
                    <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                  </div>
                </div>

                <div className="flex grow flex-col justify-between p-4">
                  <p className="text-base text-ink">{item.text}</p>

                  <details className="mt-3 border-t border-line pt-3">
                    <summary className="cursor-pointer list-none text-base font-bold text-link underline underline-offset-2">
                      + {t.services.open}
                    </summary>
                    <p className="mt-2 border-l-4 border-brand bg-surface px-3 py-2 text-base text-inksoft">
                      {item.detail}
                    </p>
                  </details>
                </div>
              </li>
            );
          })}

          <li className="flex flex-col justify-center border-2 border-dashed border-linestrong bg-page p-5">
            <p className="text-base font-bold text-ink">{t.services.availability}</p>
            <p className="mt-2 text-base text-inksoft">{t.help.textSizeTip}</p>
            <a
              href="#dashboard"
              className="mt-4 inline-block border-2 border-brand bg-brand px-5 py-3 text-center text-base font-bold text-white no-underline hover:bg-branddark"
            >
              {t.hero.ctaDashboard}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
