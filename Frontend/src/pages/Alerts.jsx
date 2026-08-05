import { useState } from "react";
import { alertList } from "@/lib/data";
import { alertIcons } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";

const styleByPriority = {
  critical: {
    border: "var(--c-bad)",
    bg: "var(--c-bad-bg)",
    text: "var(--c-bad)",
    badge: "border-bad bg-badbg text-bad",
  },
  warning: {
    border: "var(--c-warn)",
    bg: "var(--c-warn-bg)",
    text: "var(--c-warn)",
    badge: "border-warn bg-warnbg text-warn",
  },
  info: {
    border: "var(--c-ok)",
    bg: "var(--c-ok-bg)",
    text: "var(--c-ok)",
    badge: "border-ok bg-okbg text-ok",
  },
};

export default function Alerts({ t }) {
  const [filter, setFilter] = useState("all");

  const filters = [
    { key: "all", label: t.alerts.filterAll },
    { key: "critical", label: t.alerts.filterCritical },
    { key: "warning", label: t.alerts.filterWarning },
    { key: "info", label: t.alerts.filterInfo },
  ];

  const shown = alertList.filter((a) => filter === "all" || a.priority === filter);
  const count = (k) => (k === "all" ? alertList.length : alertList.filter((a) => a.priority === k).length);

  return (
    <section id="alerts" aria-labelledby="alerts-title" className="border-b-2 border-line bg-surface">
      <div className="mx-auto max-w-6xl px-3 py-10">
        <SectionHeading id="alerts-title" number="01" title={t.alerts.heading} sub={t.alerts.sub} />

        <div className="mb-4 flex flex-wrap items-center gap-2 no-print">
          {filters.map((f) => {
            const isActive = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                aria-pressed={isActive}
                className={`border-2 px-4 py-2.5 text-base font-bold ${isActive ? "border-brand bg-brand text-white" : "border-line bg-page text-ink hover:border-brand"}`}
              >
                {f.label} ({count(f.key)})
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
          {shown.map(({ id, priority }) => {
            const Icon = alertIcons[id];
            const item = t.alerts.items[id];
            const time = t.alerts.timeAgo[id];
            const pr = t.alerts.priorities[priority];
            const st = styleByPriority[priority];
            return (
              <li key={id} className="border-2 border-line bg-page p-4" style={{ borderLeft: `8px solid ${st.border}` }}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center" style={{ background: st.bg, color: st.text }}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                      <p className="mt-1 text-base text-ink">
                        <strong className="text-brand">{t.alerts.action}:</strong> {item.action}
                      </p>
                      <p className="mt-1 text-sm text-inksoft">
                        {t.alerts.time}: {time}
                      </p>
                    </div>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 border-2 px-2 py-0.5 text-sm font-bold ${st.badge}`}>
                    <span aria-hidden="true">{priority === "critical" ? "■" : priority === "warning" ? "▲" : "●"}</span>
                    {pr}
                  </span>
                </div>
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
