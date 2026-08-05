import { useMemo, useState } from "react";
import { locations, readSensors } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import StatusPill, { levelBar } from "@/components/StatusPill";
import { ClockIcon } from "@/components/Icons";

export default function Dashboard({ t, lang }) {
  const [shift, setShift] = useState(0);
  const [pumpOn, setPumpOn] = useState(false);
  const [updated, setUpdated] = useState(() => new Date());

  const sensors = useMemo(() => readSensors(shift), [shift]);

  const timeText = updated.toLocaleString(lang === "hi" ? "hi-IN" : "en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const statusText = (l) => t.dashboard.status[l];

  const selectCls =
    "w-full border-2 border-line bg-page px-3 py-2.5 text-base text-ink";

  return (
    <section id="dashboard" aria-labelledby="dashboard-title" className="border-b-2 border-line bg-page">
      <div className="mx-auto max-w-6xl px-3 py-10">
        <SectionHeading
          id="dashboard-title"
          number="03"
          title={t.dashboard.heading}
          sub={t.dashboard.sub}
        />

        <div className="grid gap-3 border-2 border-line bg-surface p-4 md:grid-cols-4">
          <div>
            <label htmlFor="sel-state" className="mb-1 block text-sm font-bold text-ink">
              {t.dashboard.stateLabel}
            </label>
            <select id="sel-state" className={selectCls} defaultValue={locations.states[0]}>
              {locations.states.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="sel-district" className="mb-1 block text-sm font-bold text-ink">
              {t.dashboard.districtLabel}
            </label>
            <select id="sel-district" className={selectCls} defaultValue={locations.districts[0]}>
              {locations.districts.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="sel-village" className="mb-1 block text-sm font-bold text-ink">
              {t.dashboard.villageLabel}
            </label>
            <select id="sel-village" className={selectCls} defaultValue={locations.villages[0]}>
              {locations.villages.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button
              type="button"
              onClick={() => {
                setShift((s) => s + 1);
                setUpdated(new Date());
              }}
              className="w-full border-2 border-brand bg-brand px-4 py-2.5 text-base font-bold text-white hover:bg-branddark"
            >
              ↻ {t.dashboard.refresh}
            </button>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm">
          <p className="flex items-center gap-2 text-inksoft">
            <ClockIcon className="h-4 w-4" />
            <span aria-live="polite">
              {t.dashboard.updated}: <strong className="text-ink">{timeText}</strong>
            </span>
            <span className="hidden sm:inline">· Sensor ID: AGS-UP-0412</span>
          </p>
          <p className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-ink">{t.dashboard.legend}:</span>
            <StatusPill level="ok" label={t.dashboard.legendOk} />
            <StatusPill level="warn" label={t.dashboard.legendWarn} />
            <StatusPill level="bad" label={t.dashboard.legendBad} />
          </p>
        </div>

        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sensors.map((s) => {
            const info = t.dashboard.sensors[s.id];

            if (s.id === "pump") {
              return (
                <li key={s.id} className="border-2 border-line bg-surface p-4">
                  <p className="text-base font-bold text-ink">{info.label}</p>
                  <p className="mt-2 flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-brand">
                      {pumpOn ? t.dashboard.status.on : t.dashboard.status.off}
                    </span>
                    <StatusPill
                      level={pumpOn ? "ok" : "warn"}
                      label={pumpOn ? t.dashboard.status.ok : t.dashboard.status.warn}
                    />
                  </p>
                  <button
                    type="button"
                    onClick={() => setPumpOn((v) => !v)}
                    aria-pressed={pumpOn}
                    className={`mt-3 w-full border-2 px-4 py-3 text-base font-bold ${
                      pumpOn
                        ? "border-bad bg-badbg text-bad"
                        : "border-brand bg-brand text-white hover:bg-branddark"
                    }`}
                  >
                    {pumpOn ? t.dashboard.pumpOff : t.dashboard.pumpOn}
                  </button>
                  <p className="mt-2 text-sm text-inksoft">{t.dashboard.pumpNote}</p>
                </li>
              );
            }

            return (
              <li key={s.id} className="border-2 border-line bg-surface p-4">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-base font-bold text-ink">{info.label}</p>
                  <StatusPill level={s.level} label={statusText(s.level)} />
                </div>

                <p className="mt-2 text-3xl font-bold text-brand">
                  {s.value}
                  <span className="ml-1 text-lg font-semibold text-inksoft">{s.unit}</span>
                </p>

                <div
                  className="mt-3 h-3 w-full border border-linestrong bg-page"
                  role="img"
                  aria-label={`${info.label}: ${s.value} ${s.unit} — ${statusText(s.level)}`}
                >
                  <div
                    className={`h-full ${levelBar[s.level]}`}
                    style={{ width: `${Math.max(4, Math.min(100, s.pct))}%` }}
                  />
                </div>

                <p className="mt-2 text-base text-inksoft">{info.note}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
