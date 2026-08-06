import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import StatusPill from "@/components/StatusPill";
import {
  L, inr, mandiPrices, mspTable, pricePredictions, bestMarkets, priceTrends, trendMonths,
} from "@/lib/crops";

const th = "border border-linestrong bg-brand px-3 py-2 text-left text-sm font-bold text-white";
const td = "border border-line px-3 py-2 text-base text-ink";

function Delta({ value, suffix = "" }) {
  const up = value > 0;
  const flat = value === 0;
  const cls = flat
    ? "border-line bg-surface text-inksoft"
    : up
      ? "border-ok bg-okbg text-ok"
      : "border-bad bg-badbg text-bad";
  return (
    <span className={`inline-flex items-center gap-1 border-2 px-2 py-0.5 text-sm font-bold ${cls}`}>
      <span aria-hidden="true">{flat ? "—" : up ? "▲" : "▼"}</span>
      {up ? "+" : ""}{value}{suffix}
    </span>
  );
}

function TrendChart({ series, lang }) {
  const w = 520, h = 190, pad = 34;
  const d = series.data;
  const max = Math.max(...d), min = Math.min(...d);
  const range = max - min || 1;
  const pts = d.map((v, i) => ({
    x: pad + (i * (w - pad - 14)) / (d.length - 1),
    y: h - pad - ((v - min) / range) * (h - 2 * pad),
    v,
  }));
  const line = pts.map((p) => `${p.x},${p.y}`).join(" ");
  const areaPath = `M${pts[0].x},${h - pad} L${line.split(" ").join(" L")} L${pts[pts.length - 1].x},${h - pad} Z`;
  const months = trendMonths[lang] || trendMonths.en;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" role="img"
      aria-label={`${L(series.label, lang)} ${series.unit}: ${d.join(", ")}`}>
      {[0, 0.5, 1].map((g) => (
        <line key={g} x1={pad} x2={w - 14} y1={pad + g * (h - 2 * pad)} y2={pad + g * (h - 2 * pad)}
          stroke="var(--c-line)" strokeWidth="1" />
      ))}
      <path d={areaPath} fill="var(--c-brand-soft)" />
      <polyline points={line} fill="none" stroke="var(--c-brand)" strokeWidth="3" />
      {pts.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="4" fill="var(--c-brand)" />
          <text x={p.x} y={p.y - 9} textAnchor="middle" fontSize="10" fill="var(--c-ink)" fontWeight="bold">{p.v}</text>
          <text x={p.x} y={h - 12} textAnchor="middle" fontSize="10" fill="var(--c-ink-soft)">{months[i]}</text>
        </g>
      ))}
      <text x={4} y={pad - 8} fontSize="10" fill="var(--c-ink-soft)">{series.unit}</text>
    </svg>
  );
}

export default function Market({ t, lang }) {
  const [trend, setTrend] = useState("wheat");
  const series = priceTrends[trend];

  return (
    <section id="market" aria-labelledby="market-title" className="border-b-2 border-line bg-page">
      <div className="mx-auto max-w-6xl px-3 py-10">
        <SectionHeading id="market-title" number="01" title={t.market.heading} sub={t.market.sub} />

        {/* LIVE MANDI PRICES */}
        <h3 className="mb-1 text-xl font-bold text-brand">{t.market.liveTitle}</h3>
        <p className="mb-3 text-base text-inksoft">{t.market.liveSub}</p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {mandiPrices.map((m) => {
            const diff = m.today - m.yest;
            const pct = ((diff / m.yest) * 100).toFixed(1);
            return (
              <li key={L(m.crop, "en")} className="border-2 border-line bg-surface p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-lg font-bold text-ink">{L(m.crop, lang)}</p>
                    <p className="text-sm text-inksoft">{L(m.market, lang)}</p>
                  </div>
                  <Delta value={Number(pct)} suffix="%" />
                </div>
                <p className="mt-3 text-3xl font-bold text-brand">{inr(m.today)}</p>
                <p className="text-sm text-inksoft">{t.market.yesterday}: {inr(m.yest)}</p>
                <p className="mt-2 text-base font-semibold text-ink">
                  {t.market.change}: {diff >= 0 ? "+" : ""}{inr(diff).replace("₹", "₹ ")}
                </p>
              </li>
            );
          })}
        </ul>

        {/* MSP TABLE */}
        <div className="mt-10">
          <h3 className="mb-1 text-xl font-bold text-brand">{t.market.mspTitle}</h3>
          <p className="mb-3 text-base text-inksoft">{t.market.mspSub}</p>
          <div className="overflow-x-auto border-2 border-line">
            <table className="w-full border-collapse bg-page">
              <caption className="sr-only">{t.market.mspTitle}</caption>
              <thead>
                <tr>
                  <th scope="col" className={th}>{t.market.crop}</th>
                  <th scope="col" className={th}>{t.market.mspCol}</th>
                  <th scope="col" className={th}>{t.market.mandiCol}</th>
                  <th scope="col" className={th}>{t.market.diffCol}</th>
                  <th scope="col" className={th}>{t.market.trend}</th>
                </tr>
              </thead>
              <tbody>
                {mspTable.map((r) => {
                  const diff = r.mandi - r.msp;
                  return (
                    <tr key={L(r.crop, "en")} className="even:bg-surface">
                      <th scope="row" className={`${td} text-left font-bold`}>{L(r.crop, lang)}</th>
                      <td className={td}>{inr(r.msp)}</td>
                      <td className={td}>{inr(r.mandi)}</td>
                      <td className={td}>{diff >= 0 ? "+" : "−"}{inr(Math.abs(diff))}</td>
                      <td className={td}>
                        <StatusPill level={diff >= 0 ? "ok" : "bad"} label={diff >= 0 ? t.market.above : t.market.below} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* AI PRICE PREDICTION */}
        <div className="mt-10">
          <h3 className="mb-1 text-xl font-bold text-brand">{t.market.predTitle}</h3>
          <p className="mb-3 text-base text-inksoft">{t.market.predSub}</p>
          <ul className="grid gap-3 lg:grid-cols-3">
            {pricePredictions.map((p) => (
              <li key={L(p.crop, "en")} className="border-2 border-line border-l-8 bg-surface p-4"
                style={{ borderLeftColor: p.change >= 0 ? "var(--c-ok)" : "var(--c-bad)" }}>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-lg font-bold text-ink">{L(p.crop, lang)}</p>
                  <Delta value={p.change} suffix="%" />
                </div>
                <p className="mt-2 text-base text-ink">{L(p.text, lang)}</p>
                <div className="mt-3">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-inksoft">{t.market.confidence}</span>
                    <span className="text-brand">{p.confidence}%</span>
                  </div>
                  <div className="mt-1 h-2.5 w-full border border-linestrong bg-page">
                    <div className="h-full bg-ok" style={{ width: `${p.confidence}%` }} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* BEST SELLING MARKET */}
        <div className="mt-10">
          <h3 className="mb-1 text-xl font-bold text-brand">{t.market.bestTitle}</h3>
          <p className="mb-3 text-base text-inksoft">{t.market.bestSub}</p>
          <ul className="grid gap-3 lg:grid-cols-3">
            {bestMarkets.map((m) => {
              const revenue = m.price * m.qty;
              const net = revenue - m.transport;
              return (
                <li key={L(m.name, "en")} className={`border-2 bg-page p-4 ${m.best ? "border-brand" : "border-line"}`}>
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-lg font-bold text-ink">{L(m.name, lang)}</p>
                    {m.best && <StatusPill level="ok" label={t.market.recommended} />}
                  </div>
                  <dl className="mt-2">
                    <div className="flex justify-between border-b border-line py-1.5">
                      <dt className="text-base text-inksoft">{t.market.distance}</dt>
                      <dd className="text-base font-semibold text-ink">{m.distance} {t.market.km}</dd>
                    </div>
                    <div className="flex justify-between border-b border-line py-1.5">
                      <dt className="text-base text-inksoft">{t.market.sellingPrice}</dt>
                      <dd className="text-base font-semibold text-ink">{inr(m.price)}</dd>
                    </div>
                    <div className="flex justify-between border-b border-line py-1.5">
                      <dt className="text-base text-inksoft">{t.market.expProfit}</dt>
                      <dd className="text-base font-semibold text-ink">{inr(revenue)}</dd>
                    </div>
                    <div className="flex justify-between border-b border-line py-1.5">
                      <dt className="text-base text-inksoft">{t.market.transport}</dt>
                      <dd className="text-base font-semibold text-bad">− {inr(m.transport)}</dd>
                    </div>
                    <div className="flex justify-between py-2">
                      <dt className="text-base font-bold text-ink">{t.market.netProfit}</dt>
                      <dd className="text-xl font-bold text-brand">{inr(net)}</dd>
                    </div>
                  </dl>
                </li>
              );
            })}
          </ul>
        </div>

        {/* PRICE TREND CHARTS */}
        <div className="mt-10">
          <h3 className="mb-1 text-xl font-bold text-brand">{t.market.trendTitle}</h3>
          <p className="mb-3 text-base text-inksoft">{t.market.trendSub}</p>

          <div className="mb-3 flex flex-wrap gap-2" role="group" aria-label={t.market.trendTitle}>
            {Object.entries(priceTrends).map(([key, s]) => {
              const on = trend === key;
              return (
                <button key={key} type="button" onClick={() => setTrend(key)} aria-pressed={on}
                  className={`border-2 px-4 py-2.5 text-base font-bold ${on ? "border-brand bg-brand text-white" : "border-line bg-page text-ink hover:border-brand"}`}>
                  {L(s.label, lang)}
                </button>
              );
            })}
          </div>

          <div className="border-2 border-line bg-surface p-4">
            <p className="mb-2 text-base font-bold text-ink">
              {L(series.label, lang)} — {series.unit}
            </p>
            <TrendChart series={series} lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}
