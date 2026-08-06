import SectionHeading from "@/components/SectionHeading";
import StatusPill from "@/components/StatusPill";
import { CheckIcon } from "@/components/Icons";
import { L, inr, getCrop, bestMarkets, crops } from "@/lib/crops";

const th = "border border-linestrong bg-brand px-3 py-2 text-left text-sm font-bold text-white";
const td = "border border-line px-3 py-2 text-base text-ink";

function Row({ k, v, strong }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-line py-2 last:border-b-0">
      <dt className="text-base text-inksoft">{k}</dt>
      <dd className={`text-right text-base ${strong ? "text-lg font-bold text-brand" : "font-semibold text-ink"}`}>{v}</dd>
    </div>
  );
}

export default function Guide({ t, lang, selectedCrop, onSelectCrop }) {
  /* ---------- Empty state ---------- */
  if (!selectedCrop) {
    return (
      <section id="guide" aria-labelledby="guide-title" className="border-b-2 border-line bg-surface">
        <div className="mx-auto max-w-6xl px-3 py-10">
          <SectionHeading id="guide-title" number="01" title={t.guide.heading} sub={t.guide.sub} />
          <div className="border-2 border-dashed border-linestrong bg-page p-10 text-center">
            <p className="text-5xl" aria-hidden="true">🌱</p>
            <h3 className="mt-3 text-xl font-bold text-ink">{t.guide.noCrop}</h3>
            <p className="mt-1 text-base text-inksoft">{t.guide.noCropText}</p>
            <a href="#/crop-advisor" className="mt-5 inline-block border-2 border-brand bg-brand px-6 py-4 text-lg font-bold text-white no-underline hover:bg-branddark">
              {t.guide.goAdvisor}
            </a>
          </div>
        </div>
      </section>
    );
  }

  const c = getCrop(selectedCrop);
  const cb = c.costBreak;
  const today = new Date();
  const reportNo = `AGN/RPT/2026/${String(1000 + crops.findIndex((x) => x.id === c.id) * 37 + 11)}`;
  const dateText = today.toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", {
    day: "2-digit", month: "long", year: "numeric",
  });
  const bestMandi = bestMarkets.find((m) => m.best);

  return (
    <section id="guide" aria-labelledby="guide-title" className="border-b-2 border-line bg-surface">
      <div className="mx-auto max-w-6xl px-3 py-10">
        <SectionHeading id="guide-title" number="01" title={t.guide.heading} sub={t.guide.sub} />

        {/* ---------- CROP OVERVIEW ---------- */}
        <div className="border-2 border-brand bg-page">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-line bg-brandsoft px-4 py-3">
            <h3 className="text-xl font-bold text-brand">{t.guide.overviewTitle}</h3>
            <a href="#/crop-advisor" className="border-2 border-brand bg-page px-4 py-2 text-base font-bold text-brand no-underline hover:bg-brandsoft no-print">
              ↻ {t.guide.changeCrop}
            </a>
          </div>
          <div className="grid gap-4 p-4 md:grid-cols-[auto_1fr]">
            <div className="flex h-24 w-24 items-center justify-center border-2 border-linestrong text-5xl"
              style={{ background: c.tint }} role="img" aria-label={L(c.name, lang)}>
              {c.emoji}
            </div>
            <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { k: t.guide.selectedCrop, v: L(c.name, lang) },
                { k: t.guide.growth, v: L(c.duration, lang) },
                { k: t.guide.waterReq, v: L(c.water, lang) },
                { k: t.guide.profitPot, v: inr(c.profit) },
                { k: t.guide.expYield, v: `${c.yieldQ} ${t.advisor.qtlAcre}` },
              ].map((x) => (
                <div key={x.k} className="border-2 border-line bg-surface px-3 py-3">
                  <dt className="text-sm text-inksoft">{x.k}</dt>
                  <dd className="mt-1 text-base font-bold text-brand">{x.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* ---------- TIMELINE ---------- */}
        <div className="mt-10">
          <h3 className="mb-1 text-xl font-bold text-brand">{t.guide.timelineTitle}</h3>
          <p className="mb-3 text-base text-inksoft">{t.guide.timelineSub}</p>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.guide.stages.map((s, i) => (
              <li key={s.t} className="relative border-2 border-line bg-page p-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-brand bg-brand text-base font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="text-xs font-bold tracking-wide text-inksoft">
                    {lang === "hi" ? `चरण ${i + 1}` : `Stage ${i + 1}`}
                  </p>
                </div>
                <h4 className="mt-2 text-base font-bold text-ink">{s.t}</h4>
                <p className="mt-1 text-sm text-inksoft">{s.d}</p>
                {i < t.guide.stages.length - 1 && (
                  <span className="absolute -bottom-3 left-1/2 z-10 -translate-x-1/2 text-lg text-brand lg:hidden" aria-hidden="true">↓</span>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* ---------- FERTILIZER SCHEDULE ---------- */}
        <div className="mt-10">
          <h3 className="mb-3 text-xl font-bold text-brand">{t.guide.fertTitle}</h3>
          <div className="overflow-x-auto border-2 border-line">
            <table className="w-full border-collapse bg-page">
              <caption className="sr-only">{t.guide.fertTitle}</caption>
              <thead>
                <tr>
                  <th scope="col" className={th}>{t.guide.fertWeek}</th>
                  <th scope="col" className={th}>{t.guide.fertName}</th>
                  <th scope="col" className={th}>{t.guide.fertQty}</th>
                  <th scope="col" className={th}>{t.guide.fertPurpose}</th>
                </tr>
              </thead>
              <tbody>
                {c.fert.map((r, i) => (
                  <tr key={i} className="even:bg-surface">
                    <th scope="row" className={`${td} text-left font-bold`}>{L(r.w, lang)}</th>
                    <td className={td}>{L(r.f, lang)}</td>
                    <td className={td}>{L(r.q, lang)}</td>
                    <td className={td}>{L(r.p, lang)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ---------- IRRIGATION SCHEDULE ---------- */}
        <div className="mt-10">
          <h3 className="mb-3 text-xl font-bold text-brand">{t.guide.irrTitle}</h3>
          <div className="overflow-x-auto border-2 border-line">
            <table className="w-full border-collapse bg-page">
              <caption className="sr-only">{t.guide.irrTitle}</caption>
              <thead>
                <tr>
                  <th scope="col" className={th}>{t.guide.irrWeek}</th>
                  <th scope="col" className={th}>{t.guide.irrWater}</th>
                  <th scope="col" className={th}>{t.guide.irrMethod}</th>
                  <th scope="col" className={th}>{t.guide.irrRemind}</th>
                </tr>
              </thead>
              <tbody>
                {c.irr.map((r, i) => (
                  <tr key={i} className="even:bg-surface">
                    <th scope="row" className={`${td} text-left font-bold`}>{L(r.w, lang)}</th>
                    <td className={td}>{L(r.v, lang)}</td>
                    <td className={td}>{L(r.m, lang)}</td>
                    <td className={td}>{L(r.r, lang)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ---------- DISEASE PREVENTION ---------- */}
        <div className="mt-10">
          <h3 className="mb-3 text-xl font-bold text-brand">{t.guide.disTitle}</h3>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {c.diseases.map((d) => (
              <li key={L(d.n, "en")} className="border-2 border-line bg-page">
                <p className="border-b border-line bg-badbg px-4 py-2 text-base font-bold text-bad">
                  {L(d.n, lang)}
                </p>
                <dl className="p-4">
                  <dt className="text-sm font-bold text-inksoft">{t.guide.disSymptom}</dt>
                  <dd className="mb-2 text-base text-ink">{L(d.s, lang)}</dd>
                  <dt className="text-sm font-bold text-inksoft">{t.guide.disPrevent}</dt>
                  <dd className="mb-2 text-base text-ink">{L(d.p, lang)}</dd>
                  <dt className="text-sm font-bold text-inksoft">{t.guide.disPesticide}</dt>
                  <dd className="border-l-4 border-accent bg-surface px-3 py-2 text-base text-ink">{L(d.m, lang)}</dd>
                </dl>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- HARVEST GUIDE ---------- */}
        <div className="mt-10">
          <h3 className="mb-3 text-xl font-bold text-brand">{t.guide.harvestTitle}</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="border-2 border-line bg-page p-4">
              <p className="text-sm font-bold text-inksoft">{t.guide.harvestDate}</p>
              <p className="mt-1 text-lg font-bold text-brand">{L(c.harvest, lang)}</p>
            </div>
            <div className="border-2 border-line bg-page p-4">
              <p className="text-sm font-bold text-inksoft">{t.guide.storage}</p>
              <p className="mt-1 text-base text-ink">{L(c.storage, lang)}</p>
            </div>
            <div className="border-2 border-line bg-page p-4">
              <p className="text-sm font-bold text-inksoft">{t.guide.transportTip}</p>
              <p className="mt-1 text-base text-ink">{L(c.transport, lang)}</p>
            </div>
            <div className="border-2 border-line bg-page p-4">
              <p className="text-sm font-bold text-inksoft">{t.guide.nearbyMarkets}</p>
              <ul className="mt-1 space-y-1">
                {bestMarkets.map((m) => (
                  <li key={L(m.name, "en")} className="text-base text-ink">
                    {L(m.name, lang)} — {m.distance} {t.market.km}
                  </li>
                ))}
              </ul>
              <a href="#/market" className="mt-2 inline-block text-base font-bold text-link underline underline-offset-2">
                {t.navExtra.market} →
              </a>
            </div>
          </div>
        </div>

        {/* ---------- AI FARM REPORT ---------- */}
        <div className="mt-12 border-4 border-brand bg-page">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-line bg-brand px-4 py-3">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">{t.report.title}</h3>
              <p className="text-sm text-white/85">{t.report.sub}</p>
            </div>
            <button type="button" onClick={() => window.print()}
              className="border-2 border-white bg-white px-5 py-3 text-base font-bold text-brand hover:bg-brandsoft no-print">
              ⤓ {t.report.download}
            </button>
          </div>

          <div className="p-5">
            <div className="flex flex-wrap justify-between gap-2 border-b-2 border-line pb-3 text-sm">
              <p className="text-inksoft">{t.report.refNo}: <strong className="text-ink">{reportNo}</strong></p>
              <p className="text-inksoft">{t.report.date}: <strong className="text-ink">{dateText}</strong></p>
            </div>

            <div className="mt-4 grid gap-5 lg:grid-cols-2">
              {/* Left column */}
              <div className="space-y-5">
                <div className="border-2 border-line bg-surface p-4">
                  <h4 className="mb-2 text-base font-bold text-brand">{t.report.farmDetails}</h4>
                  <dl>
                    <Row k={t.advisor.state} v="Uttar Pradesh" />
                    <Row k={t.advisor.district} v="Varanasi" />
                    <Row k={t.advisor.village} v="Barhi Kalan" />
                    <Row k={t.advisor.area} v={`1 ${t.advisor.acres}`} />
                    <Row k={t.advisor.soilType} v={lang === "hi" ? "दोमट" : "Loam"} />
                  </dl>
                </div>

                <div className="border-2 border-line bg-surface p-4">
                  <h4 className="mb-2 text-base font-bold text-brand">{t.report.weatherSummary}</h4>
                  <dl>
                    <Row k={t.advisor.temp} v="31 °C" />
                    <Row k={t.advisor.humidity} v="58 %" />
                    <Row k={t.advisor.rain} v="72 mm" />
                  </dl>
                </div>

                <div className="border-2 border-line bg-surface p-4">
                  <h4 className="mb-2 text-base font-bold text-brand">{t.report.soilHealth}</h4>
                  <p className="text-4xl font-bold text-brand">78<span className="text-xl text-inksoft">/100</span></p>
                  <div className="mt-2 h-3 w-full border border-linestrong bg-page">
                    <div className="h-full bg-warn" style={{ width: "78%" }} />
                  </div>
                  <p className="mt-2 text-base text-inksoft">{t.dash.soilNote}</p>
                  <p className="mt-3 flex items-center gap-2 text-base">
                    <span className="font-bold text-ink">{t.report.aiConfidence}:</span>
                    <StatusPill level="ok" label="92%" />
                  </p>
                </div>

                <div className="border-2 border-line bg-surface p-4">
                  <h4 className="mb-2 text-base font-bold text-brand">{t.report.investment}</h4>
                  <dl>
                    <Row k={t.report.seedCost} v={inr(cb.seed)} />
                    <Row k={t.report.fertCost} v={inr(cb.fert)} />
                    <Row k={t.report.labourCost} v={inr(cb.labour)} />
                    <Row k={t.report.pestCost} v={inr(cb.pest)} />
                    <Row k={t.report.otherCost} v={inr(cb.other)} />
                    <Row k={t.report.totalCost} v={inr(c.cost)} strong />
                  </dl>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-5">
                <div className="border-2 border-brand bg-brandsoft p-4">
                  <h4 className="mb-2 text-base font-bold text-brand">{t.report.recommended}</h4>
                  <p className="flex items-center gap-3 text-2xl font-bold text-ink">
                    <span aria-hidden="true">{c.emoji}</span> {L(c.name, lang)}
                    <span className="text-base font-semibold text-inksoft">({L(c.variety, lang)})</span>
                  </p>
                  <p className="mt-2 text-base text-ink"><strong>{t.report.why}</strong> {L(c.why, lang)}</p>
                </div>

                <div className="border-2 border-line bg-surface p-4">
                  <h4 className="mb-2 text-base font-bold text-brand">{t.report.returns}</h4>
                  <dl>
                    <Row k={t.report.expYield} v={`${c.yieldQ} ${t.advisor.qtlAcre}`} />
                    <Row k={t.report.sellPrice} v={`${inr(c.price)} ${t.advisor.perQtl}`} />
                    <Row k={t.report.revenue} v={inr(c.revenue)} />
                    <Row k={t.report.profit} v={inr(c.profit)} strong />
                    <Row k={t.report.water} v={L(c.water, lang)} />
                    <Row k={t.report.risk} v={L(c.risk, lang)} />
                    <Row k={t.report.sowDate} v={L(c.sowing, lang)} />
                    <Row k={t.report.harvestDate} v={L(c.harvest, lang)} />
                  </dl>
                </div>

                <div className="border-2 border-line bg-surface p-4">
                  <h4 className="mb-2 text-base font-bold text-brand">{t.report.fertilizers}</h4>
                  <p className="text-base text-ink">{L(c.fertilizer, lang)}</p>
                  <h4 className="mt-3 mb-2 text-base font-bold text-brand">{t.report.pesticides}</h4>
                  <p className="text-base text-ink">{L(c.pesticide, lang)}</p>
                </div>

                <div className="border-2 border-line bg-surface p-4">
                  <h4 className="mb-2 text-base font-bold text-brand">{t.report.irrigationPlan}</h4>
                  <ul className="space-y-1">
                    {c.irr.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 border-b border-line py-1.5 text-base last:border-b-0">
                        <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-ok" />
                        <span><strong>{L(r.w, lang)}:</strong> {L(r.v, lang)} — {L(r.r, lang)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-2 border-line bg-surface p-4">
                  <h4 className="mb-2 text-base font-bold text-brand">{t.report.diseaseTips}</h4>
                  <ul className="space-y-1">
                    {c.diseases.map((d) => (
                      <li key={L(d.n, "en")} className="border-b border-line py-1.5 text-base last:border-b-0">
                        <strong>{L(d.n, lang)}:</strong> {L(d.p, lang)}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-2 border-ok bg-okbg p-4">
                  <h4 className="mb-2 text-base font-bold text-ok">{t.report.marketReco}</h4>
                  <p className="text-base text-ink">
                    {L(bestMandi.name, lang)} — {bestMandi.distance} {t.market.km} · {inr(bestMandi.price)} / {lang === "hi" ? "क्विंटल" : "quintal"}
                  </p>
                  <p className="mt-1 text-base font-bold text-ink">
                    {t.market.netProfit}: {inr(bestMandi.price * bestMandi.qty - bestMandi.transport)}
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-5 border-l-4 border-accent bg-surface px-4 py-3 text-sm text-inksoft">
              {t.report.disclaimer}
            </p>
            <p className="mt-2 text-sm text-inksoft no-print">{t.report.downloadNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
