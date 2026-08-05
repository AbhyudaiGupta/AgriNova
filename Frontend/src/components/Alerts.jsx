import { useState } from "react";
import { alertList } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import StatusPill from "@/components/StatusPill";

const leftBorder = {
  ok: "var(--c-ok)",
  warn: "var(--c-warn)",
  bad: "var(--c-bad)",
};

export default function Alerts({ t }) {
  const [filter, setFilter] = useState("all");

  const filters = [
    { key: "all", label: t.alerts.filterAll },
    { key: "bad", label: t.alerts.filterBad },
    { key: "warn", label: t.alerts.filterWarn },
    { key: "ok", label: t.alerts.filterOk },
  ];

  const shown = alertList.filter((a) => filter === "all" || a.level === filter);
  const count = (l) => alertList.filter((a) => a.level === l).length;

  return (
    <section id="alerts" aria-labelledby="alerts-title" className="border-b-2 border-line bg-surface">
      <div className="mx-auto max-w-6xl px-3 py-10">
        <SectionHeading id="alerts-title" number="04" title={t.alerts.heading} sub={t.alerts.sub} />

        <div className="mb-4 flex flex-wrap items-center gap-2 no-print">
          {filters.map((f) => {
            const isActive = filter === f.key;
            const n = f.key === "all" ? alertList.length : count(f.key);
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                aria-pressed={isActive}
                className={`border-2 px-4 py-2.5 text-base font-bold ${
                  isActive
                    ? "border-brand bg-brand text-white"
                    : "border-line bg-page text-ink hover:border-brand"
                }`}
              >
                {f.label} ({n})
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => window.print()}
            className="ml-auto border-2 border-line bg-page px-4 py-2.5 text-base font-bold text-link hover:border-brand"
          >
            🖶 {t.alerts.printBtn}
          </button>
        </div>

        <ol className="space-y-3" aria-live="polite">
          {shown.map(({ id, level }, index) => {
            const item = t.alerts.items[id];
            const time = t.alerts.timeAgo[id];
            return (
              <li
                key={id}
                className="border-2 border-line border-l-8 bg-page p-4"
                style={{ borderLeftColor: leftBorder[level] }}
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="flex items-start gap-2 text-lg font-bold text-ink">
                    <span className="text-inksoft">{index + 1}.</span>
                    {item.title}
                  </h3>
                  <StatusPill
                    level={level}
                    label={
                      level === "ok"
                        ? t.alerts.filterOk
                        : level === "warn"
                          ? t.alerts.filterWarn
                          : t.alerts.filterBad
                    }
                  />
                </div>

                <p className="mt-2 text-base text-ink">
                  <strong className="text-brand">{t.alerts.action}:</strong> {item.action}
                </p>
                <p className="mt-2 text-sm text-inksoft">
                  {t.alerts.time}: {time}
                </p>
              </li>
            );
          })}

          {shown.length === 0 && (
            <li className="border-2 border-line bg-page p-6 text-center text-base text-inksoft">
              {t.alerts.none}
            </li>
          )}
        </ol>
      </div>
    </section>
  );
}
