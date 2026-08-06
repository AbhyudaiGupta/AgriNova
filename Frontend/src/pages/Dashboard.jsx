import { useMemo, useState } from "react";
import { locations, readSensors, moistureTrend, npkData, waterUse } from "@/lib/data";
import { L, inr, mandiPrices } from "@/lib/crops";
import SectionHeading from "@/components/SectionHeading";
import StatusPill, { levelBar } from "@/components/StatusPill";
import { ClockIcon, TankIcon, FanIcon } from "@/components/Icons";

const levelColor = { ok: "var(--c-ok)", warn: "var(--c-warn)", bad: "var(--c-bad)" };

function Gauge({ pct, label, level }) {
  const r = 40;
  const c = 2 * Math.PI * r;
  const filled = (Math.max(0, Math.min(100, pct)) / 100) * c;
  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 100 60" className="w-36" role="img" aria-label={`${label}: ${pct}%`}>
        <path
          d="M10 55 A40 40 0 0 1 90 55"
          fill="none"
          stroke="var(--c-line)"
          strokeWidth="11"
          strokeLinecap="round"
        />
        <path
          d="M10 55 A40 40 0 0 1 90 55"
          fill="none"
          stroke={levelColor[level]}
          strokeWidth="11"
          strokeLinecap="round"
          strokeDasharray={`${filled} ${c}`}
        />
      </svg>
      <span className="mt-1 text-2xl font-bold text-brand">{Math.round(pct)}%</span>
      <span className="text-sm text-inksoft">{label}</span>
    </div>
  );
}

function BarChart({ title, data, max }) {
  return (
    <div className="border-2 border-line bg-surface p-4">
      <h3 className="text-base font-bold text-ink">{title}</h3>
      <div className="mt-3 flex h-40 items-end gap-3">
        {data.map((d) => (
          <div key={d.label} className="flex flex-1 flex-col items-center">
            <span className="text-sm font-bold text-ink">{d.value}</span>
            <div className="mt-1 h-24 w-full border border-linestrong bg-page">
              <div className="w-full" style={{ height: `${(d.value / max) * 100}%`, background: d.color }} />
            </div>
            <span className="mt-1 text-sm text-inksoft">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LineChart({ title, points, labels }) {
  const w = 320;
  const h = 120;
  const pad = 12;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const coords = points.map((p, i) => ({
    x: pad + (i * (w - 2 * pad)) / (points.length - 1),
    y: h - pad - ((p - min) / range) * (h - 2 * pad),
  }));
  const pts = coords.map((c) => `${c.x},${c.y}`).join(" ");

  return (
    <div className="border-2 border-line bg-surface p-4">
      <h3 className="text-base font-bold text-ink">{title}</h3>
      <svg viewBox={`0 0 ${w} ${h}`} className="mt-2 w-full" role="img" aria-label={title}>
        <polyline points={pts} fill="none" stroke="var(--c-brand)" strokeWidth="3" />
        {coords.map((c, i) => (
          <circle key={i} cx={c.x} cy={c.y} r="3.5" fill="var(--c-brand)" />
        ))}
      </svg>
      <div className="mt-1 flex justify-between text-xs text-inksoft">
        {labels.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  );
}

export default function Dashboard({ t, lang }) {
  const [shift, setShift] = useState(0);
  const [pumpOn, setPumpOn] = useState(false);
  const [updated, setUpdated] = useState(() => new Date());

  const sensors = useMemo(() => readSensors(shift), [shift]);
  const byId = Object.fromEntries(sensors.map((s) => [s.id, s]));

  const timeText = updated.toLocaleString(lang === "hi" ? "hi-IN" : "en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const statusText = (l) => t.dashboard.status[l];
  const selectCls = "w-full border-2 border-line bg-page px-3 py-2.5 text-base text-ink";

  // cards that render as progress-bar boxes
  const progressIds = ["temperature", "humidity", "ph", "nitrogen", "phosphorus", "potassium", "rain"];
  const gaugeIds = ["moisture", "tank"];

  return (
    <section id="dashboard" aria-labelledby="dashboard-title" className="border-b-2 border-line bg-page">
      <div className="mx-auto max-w-6xl px-3 py-10">
        <SectionHeading id="dashboard-title" number="01" title={t.dashboard.heading} sub={t.dashboard.sub} />

        <div className="grid gap-3 border-2 border-line bg-surface p-4 md:grid-cols-4">
          <div>
            <label htmlFor="sel-state" className="mb-1 block text-sm font-bold text-ink">{t.dashboard.stateLabel}</label>
            <select id="sel-state" className={selectCls} defaultValue={locations.states[0]}>
              {locations.states.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="sel-district" className="mb-1 block text-sm font-bold text-ink">{t.dashboard.districtLabel}</label>
            <select id="sel-district" className={selectCls} defaultValue={locations.districts[0]}>
              {locations.districts.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="sel-village" className="mb-1 block text-sm font-bold text-ink">{t.dashboard.villageLabel}</label>
            <select id="sel-village" className={selectCls} defaultValue={locations.villages[0]}>
              {locations.villages.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="flex items-end">
            <button
              type="button"
              onClick={() => { setShift((s) => s + 1); setUpdated(new Date()); }}
              className="w-full border-2 border-brand bg-brand px-4 py-2.5 text-base font-bold text-white hover:bg-branddark"
            >
              ↻ {t.dashboard.refresh}
            </button>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm">
          <p className="flex items-center gap-2 text-inksoft">
            <ClockIcon className="h-4 w-4" />
            <span aria-live="polite">{t.dashboard.updated}: <strong className="text-ink">{timeText}</strong></span>
            <span className="hidden sm:inline">· Sensor ID: AGN-UP-0412</span>
          </p>
          <p className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-ink">{t.dashboard.legend}:</span>
            <StatusPill level="ok" label={t.dashboard.legendOk} />
            <StatusPill level="warn" label={t.dashboard.legendWarn} />
            <StatusPill level="bad" label={t.dashboard.legendBad} />
          </p>
        </div>

        {/* GAUGES: moisture + tank */}
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {gaugeIds.map((id) => {
            const s = byId[id];
            const info = t.dashboard.sensors[id];
            return (
              <div key={id} className="border-2 border-line bg-surface p-4">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-base font-bold text-ink">{info.label}</p>
                  <StatusPill level={s.level} label={statusText(s.level)} />
                </div>
                <div className="mt-2 flex items-center justify-center">
                  <Gauge pct={s.pct} level={s.level} label={`${s.value} ${s.unit}`} />
                </div>
                <p className="mt-2 text-center text-base text-inksoft">{info.note}</p>
              </div>
            );
          })}
        </div>

        {/* PUMP control */}
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="border-2 border-line bg-surface p-4">
            <div className="flex items-center gap-2 text-base font-bold text-ink">
              <FanIcon className="h-5 w-5 text-brand" />
              {t.dashboard.sensors.pump.label}
            </div>
            <p className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-brand">
                {pumpOn ? t.dashboard.status.on : t.dashboard.status.off}
              </span>
              <StatusPill level={pumpOn ? "ok" : "warn"} label={pumpOn ? t.dashboard.status.ok : t.dashboard.status.warn} />
            </p>
            <button
              type="button"
              onClick={() => setPumpOn((v) => !v)}
              aria-pressed={pumpOn}
              className={`mt-3 w-full border-2 px-4 py-3 text-base font-bold ${pumpOn ? "border-bad bg-badbg text-bad" : "border-brand bg-brand text-white hover:bg-branddark"}`}
            >
              {pumpOn ? t.dashboard.pumpOff : t.dashboard.pumpOn}
            </button>
            <p className="mt-2 text-sm text-inksoft">{t.dashboard.pumpNote}</p>
          </div>

          {/* Tank quick view */}
          <div className="border-2 border-line bg-surface p-4">
            <div className="flex items-center gap-2 text-base font-bold text-ink">
              <TankIcon className="h-5 w-5 text-brand" />
              {t.dashboard.tankLabel}
            </div>
            <p className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-brand">{byId.tank.value}%</span>
              <StatusPill level={byId.tank.level} label={statusText(byId.tank.level)} />
            </p>
            <div className="mt-3 h-3 w-full border border-linestrong bg-page">
              <div className={`h-full ${levelBar[byId.tank.level]}`} style={{ width: `${byId.tank.pct}%` }} />
            </div>
            <p className="mt-2 text-sm text-inksoft">{t.dashboard.sensors.tank.note}</p>
          </div>
        </div>

        {/* PROGRESS BOXES */}
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {progressIds.map((id) => {
            const s = byId[id];
            const info = t.dashboard.sensors[id];
            return (
              <li key={id} className="border-2 border-line bg-surface p-4">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-base font-bold text-ink">{info.label}</p>
                  <StatusPill level={s.level} label={statusText(s.level)} />
                </div>
                <p className="mt-2 text-3xl font-bold text-brand">
                  {s.value}
                  <span className="ml-1 text-lg font-semibold text-inksoft">{s.unit}</span>
                </p>
                <div className="mt-3 h-3 w-full border border-linestrong bg-page" role="img" aria-label={`${info.label}: ${s.value} ${s.unit} — ${statusText(s.level)}`}>
                  <div className={`h-full ${levelBar[s.level]}`} style={{ width: `${Math.max(4, Math.min(100, s.pct))}%` }} />
                </div>
                <p className="mt-2 text-base text-inksoft">{info.note}</p>
              </li>
            );
          })}
        </ul>

        {/* GROUNDWATER + SCORES */}
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border-2 border-line bg-surface p-4">
            <div className="flex items-start justify-between gap-2">
              <p className="text-base font-bold text-ink">{t.dash.groundLevel}</p>
              <StatusPill level="warn" label={statusText("warn")} />
            </div>
            <p className="mt-2 text-3xl font-bold text-brand">18.4<span className="ml-1 text-lg font-semibold text-inksoft">m</span></p>
            <div className="mt-3 h-3 w-full border border-linestrong bg-page">
              <div className="h-full bg-warn" style={{ width: "62%" }} />
            </div>
            <p className="mt-2 text-base text-inksoft">{t.dash.groundNote}</p>
          </div>

          <div className="border-2 border-line bg-surface p-4">
            <div className="flex items-start justify-between gap-2">
              <p className="text-base font-bold text-ink">{t.dash.groundQuality}</p>
              <StatusPill level="warn" label={t.dash.quality.medium} />
            </div>
            <p className="mt-2 text-3xl font-bold text-brand">1.2<span className="ml-1 text-lg font-semibold text-inksoft">dS/m</span></p>
            <div className="mt-3 h-3 w-full border border-linestrong bg-page">
              <div className="h-full bg-warn" style={{ width: "48%" }} />
            </div>
            <p className="mt-2 text-base text-inksoft">{t.dash.qualityNote}</p>
          </div>

          <div className="border-2 border-line bg-surface p-4">
            <div className="flex items-start justify-between gap-2">
              <p className="text-base font-bold text-ink">{t.dash.soilScore}</p>
              <StatusPill level="warn" label="78/100" />
            </div>
            <p className="mt-2 text-3xl font-bold text-brand">78<span className="ml-1 text-lg font-semibold text-inksoft">/100</span></p>
            <div className="mt-3 h-3 w-full border border-linestrong bg-page">
              <div className="h-full bg-warn" style={{ width: "78%" }} />
            </div>
            <p className="mt-2 text-base text-inksoft">{t.dash.soilNote}</p>
          </div>

          <div className="border-2 border-line bg-surface p-4">
            <div className="flex items-start justify-between gap-2">
              <p className="text-base font-bold text-ink">{t.dash.aiScore}</p>
              <StatusPill level="ok" label="92%" />
            </div>
            <p className="mt-2 text-3xl font-bold text-brand">92<span className="ml-1 text-lg font-semibold text-inksoft">%</span></p>
            <div className="mt-3 h-3 w-full border border-linestrong bg-page">
              <div className="h-full bg-ok" style={{ width: "92%" }} />
            </div>
            <p className="mt-2 text-base text-inksoft">{t.dash.aiNote}</p>
          </div>
        </div>

        {/* PROFIT PREDICTION + MARKET WIDGET */}
        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          <div className="border-2 border-brand bg-brandsoft p-4">
            <h3 className="text-base font-bold text-brand">{t.dash.profitTitle}</h3>
            <p className="mt-1 text-sm text-inksoft">{t.dash.profitNote}</p>
            <p className="mt-3 text-sm font-bold text-ink">{t.dash.profitValue}</p>
            <p className="text-4xl font-bold text-brand">{inr(25550)}</p>
            <dl className="mt-3 grid grid-cols-2 gap-2 text-base">
              <div className="border border-line bg-page px-3 py-2">
                <dt className="text-sm text-inksoft">{t.report.totalCost}</dt>
                <dd className="font-bold text-ink">{inr(24500)}</dd>
              </div>
              <div className="border border-line bg-page px-3 py-2">
                <dt className="text-sm text-inksoft">{t.report.revenue}</dt>
                <dd className="font-bold text-ink">{inr(50050)}</dd>
              </div>
            </dl>
            <a href="#/crop-advisor" className="mt-3 inline-block border-2 border-brand bg-brand px-5 py-2.5 text-base font-bold text-white no-underline hover:bg-branddark">
              {t.navExtra.advisor} →
            </a>
          </div>

          <div className="border-2 border-line bg-surface p-4">
            <h3 className="text-base font-bold text-brand">{t.dash.marketWidget}</h3>
            <p className="mt-1 text-sm text-inksoft">{t.dash.marketNote}</p>
            <ul className="mt-3 divide-y divide-line border-2 border-line bg-page">
              {mandiPrices.slice(0, 4).map((m) => {
                const diff = m.today - m.yest;
                const up = diff > 0;
                return (
                  <li key={L(m.crop, "en")} className="flex items-center justify-between gap-2 px-3 py-2">
                    <span className="text-base font-semibold text-ink">{L(m.crop, lang)}</span>
                    <span className="flex items-center gap-2">
                      <span className="text-base font-bold text-brand">{inr(m.today)}</span>
                      <span className={`border-2 px-1.5 text-sm font-bold ${diff === 0 ? "border-line bg-surface text-inksoft" : up ? "border-ok bg-okbg text-ok" : "border-bad bg-badbg text-bad"}`}>
                        <span aria-hidden="true">{diff === 0 ? "—" : up ? "▲" : "▼"}</span> {Math.abs(diff)}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
            <a href="#/market" className="mt-3 inline-block border-2 border-brand bg-page px-5 py-2.5 text-base font-bold text-brand no-underline hover:bg-brandsoft">
              {t.dash.viewMarket}
            </a>
          </div>
        </div>

        {/* CHARTS */}
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <BarChart title={t.dashboard.npkTitle} data={npkData} max={320} />
          <LineChart title={t.dashboard.trendTitle} points={moistureTrend} labels={t.dashboard.trendDays} />
        </div>

        {/* WATER CONSUMPTION ANALYTICS */}
        <div className="mt-4 border-2 border-line bg-surface p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-bold text-ink">{t.dash.waterTitle}</h3>
              <p className="text-sm text-inksoft">{t.dash.waterNote}</p>
            </div>
            <StatusPill level="ok" label={`${t.dash.waterSaved}: 18%`} />
          </div>
          <div className="mt-3 flex h-40 items-end gap-2">
            {waterUse.map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center">
                <span className="text-xs font-bold text-ink">{v}</span>
                <div className="mt-1 h-28 w-full border border-linestrong bg-page">
                  <div className="w-full bg-link" style={{ height: `${(v / 3600) * 100}%` }} />
                </div>
                <span className="mt-1 text-xs text-inksoft">{t.dashboard.trendDays[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
