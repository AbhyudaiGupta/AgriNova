import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import StatusPill from "@/components/StatusPill";
import { CheckIcon } from "@/components/Icons";
import { locations } from "@/lib/data";
import {
  crops, L, inr, soilTypes, waterAvailability, waterQuality, mandis,
} from "@/lib/crops";

const DEFAULTS = {
  state: "Uttar Pradesh", district: "Varanasi", village: "Barhi Kalan",
  area: "1", unit: "acres", soilType: 0, ph: "6.4", moisture: "28",
  n: "142", p: "46", k: "188", ground: 1, quality: 1,
  temp: "31", rain: "72", humidity: "58", mandi: 0, msp: "2275", price: "2310",
};

/* Small labelled field wrappers keep the government form look consistent */
const field = "w-full border-2 border-line bg-page px-3 py-3 text-base text-ink";
const lbl = "mb-1 block text-base font-bold text-ink";

function Fieldset({ n, title, children }) {
  return (
    <fieldset className="border-2 border-line bg-page p-4">
      <legend className="flex items-center gap-2 px-2 text-base font-bold text-brand">
        <span className="flex h-7 w-7 items-center justify-center border-2 border-brand bg-brandsoft text-sm">{n}</span>
        {title}
      </legend>
      <div className="mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
    </fieldset>
  );
}

function Score({ label, value }) {
  const level = value >= 85 ? "ok" : value >= 70 ? "warn" : "bad";
  const bar = { ok: "bg-ok", warn: "bg-warn", bad: "bg-bad" }[level];
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-bold text-ink">{label}</span>
        <span className="text-sm font-bold text-brand">{value}%</span>
      </div>
      <div className="mt-1 h-2.5 w-full border border-linestrong bg-page">
        <div className={`h-full ${bar}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function Row({ k, v, strong }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-line py-2 last:border-b-0">
      <dt className="text-base text-inksoft">{k}</dt>
      <dd className={`text-right text-base ${strong ? "font-bold text-brand" : "font-semibold text-ink"}`}>{v}</dd>
    </div>
  );
}

export default function CropAdvisor({ t, lang, selectedCrop, onSelectCrop }) {
  const [form, setForm] = useState(DEFAULTS);
  const [phase, setPhase] = useState("form"); // form | loading | result
  const [step, setStep] = useState(0);
  const resultRef = useRef(null);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // Run the six AI analysis steps, then show the ranked result.
  useEffect(() => {
    if (phase !== "loading") return;
    if (step >= t.advisor.steps.length) {
      const id = window.setTimeout(() => setPhase("result"), 400);
      return () => window.clearTimeout(id);
    }
    const id = window.setTimeout(() => setStep((s) => s + 1), 650);
    return () => window.clearTimeout(id);
  }, [phase, step, t.advisor.steps.length]);

  useEffect(() => {
    if (phase === "result") resultRef.current?.focus();
  }, [phase]);

  const analyze = (e) => {
    e.preventDefault();
    setStep(0);
    setPhase("loading");
  };

  const area = Math.max(0.1, parseFloat(form.area) || 1);
  const factor = form.unit === "hectares" ? area * 2.47 : area;

  return (
    <section id="crop-advisor" aria-labelledby="advisor-title" className="border-b-2 border-line bg-surface">
      <div className="mx-auto max-w-6xl px-3 py-10">
        <SectionHeading id="advisor-title" number="01" title={t.advisor.heading} sub={t.advisor.sub} />

        {/* ---------------- FORM ---------------- */}
        {phase === "form" && (
          <form onSubmit={analyze} className="fade-in space-y-5">
            <p className="border-l-4 border-accent bg-page px-4 py-3 text-base text-ink">{t.advisor.prefill}</p>

            <Fieldset n="1" title={t.advisor.secFarm}>
              <div>
                <label className={lbl} htmlFor="a-state">{t.advisor.state}</label>
                <select id="a-state" className={field} value={form.state} onChange={set("state")}>
                  {locations.states.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className={lbl} htmlFor="a-district">{t.advisor.district}</label>
                <select id="a-district" className={field} value={form.district} onChange={set("district")}>
                  {locations.districts.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className={lbl} htmlFor="a-village">{t.advisor.village}</label>
                <select id="a-village" className={field} value={form.village} onChange={set("village")}>
                  {locations.villages.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className={lbl} htmlFor="a-area">{t.advisor.area}</label>
                <input id="a-area" type="number" min="0.1" step="0.1" className={field} value={form.area} onChange={set("area")} />
              </div>
              <div>
                <label className={lbl} htmlFor="a-unit">{t.advisor.areaUnit}</label>
                <select id="a-unit" className={field} value={form.unit} onChange={set("unit")}>
                  <option value="acres">{t.advisor.acres}</option>
                  <option value="hectares">{t.advisor.hectares}</option>
                </select>
              </div>
            </Fieldset>

            <Fieldset n="2" title={t.advisor.secSoil}>
              <div>
                <label className={lbl} htmlFor="a-soil">{t.advisor.soilType}</label>
                <select id="a-soil" className={field} value={form.soilType} onChange={set("soilType")}>
                  {soilTypes.map((s, i) => <option key={i} value={i}>{L(s, lang)}</option>)}
                </select>
              </div>
              <div>
                <label className={lbl} htmlFor="a-ph">{t.advisor.ph}</label>
                <input id="a-ph" type="number" step="0.1" min="3" max="10" className={field} value={form.ph} onChange={set("ph")} />
              </div>
              <div>
                <label className={lbl} htmlFor="a-moist">{t.advisor.moisture}</label>
                <input id="a-moist" type="number" className={field} value={form.moisture} onChange={set("moisture")} />
              </div>
              <div>
                <label className={lbl} htmlFor="a-n">{t.advisor.n}</label>
                <input id="a-n" type="number" className={field} value={form.n} onChange={set("n")} />
              </div>
              <div>
                <label className={lbl} htmlFor="a-p">{t.advisor.p}</label>
                <input id="a-p" type="number" className={field} value={form.p} onChange={set("p")} />
              </div>
              <div>
                <label className={lbl} htmlFor="a-k">{t.advisor.k}</label>
                <input id="a-k" type="number" className={field} value={form.k} onChange={set("k")} />
              </div>
            </Fieldset>

            <Fieldset n="3" title={t.advisor.secWater}>
              <div>
                <label className={lbl} htmlFor="a-ground">{t.advisor.ground}</label>
                <select id="a-ground" className={field} value={form.ground} onChange={set("ground")}>
                  {waterAvailability.map((s, i) => <option key={i} value={i}>{L(s, lang)}</option>)}
                </select>
              </div>
              <div>
                <label className={lbl} htmlFor="a-quality">{t.advisor.quality}</label>
                <select id="a-quality" className={field} value={form.quality} onChange={set("quality")}>
                  {waterQuality.map((s, i) => <option key={i} value={i}>{L(s, lang)}</option>)}
                </select>
              </div>
            </Fieldset>

            <Fieldset n="4" title={t.advisor.secWeather}>
              <div>
                <label className={lbl} htmlFor="a-temp">{t.advisor.temp}</label>
                <input id="a-temp" type="number" className={field} value={form.temp} onChange={set("temp")} />
              </div>
              <div>
                <label className={lbl} htmlFor="a-rain">{t.advisor.rain}</label>
                <input id="a-rain" type="number" className={field} value={form.rain} onChange={set("rain")} />
              </div>
              <div>
                <label className={lbl} htmlFor="a-hum">{t.advisor.humidity}</label>
                <input id="a-hum" type="number" className={field} value={form.humidity} onChange={set("humidity")} />
              </div>
            </Fieldset>

            <Fieldset n="5" title={t.advisor.secMarket}>
              <div>
                <label className={lbl} htmlFor="a-mandi">{t.advisor.mandi}</label>
                <select id="a-mandi" className={field} value={form.mandi} onChange={set("mandi")}>
                  {mandis.map((s, i) => <option key={i} value={i}>{L(s, lang)}</option>)}
                </select>
              </div>
              <div>
                <label className={lbl} htmlFor="a-msp">{t.advisor.msp}</label>
                <input id="a-msp" type="number" className={field} value={form.msp} onChange={set("msp")} />
              </div>
              <div>
                <label className={lbl} htmlFor="a-price">{t.advisor.marketPrice}</label>
                <input id="a-price" type="number" className={field} value={form.price} onChange={set("price")} />
              </div>
            </Fieldset>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button type="submit" className="border-2 border-brand bg-brand px-8 py-4 text-lg font-bold text-white hover:bg-branddark">
                ⚙ {t.advisor.analyze}
              </button>
              <button type="button" onClick={() => setForm(DEFAULTS)} className="border-2 border-brand bg-page px-8 py-4 text-lg font-bold text-brand hover:bg-brandsoft">
                {t.advisor.reset}
              </button>
            </div>
          </form>
        )}

        {/* ---------------- LOADING ---------------- */}
        {phase === "loading" && (
          <div className="fade-in border-2 border-brand bg-page p-6" role="status" aria-live="polite">
            <h3 className="text-xl font-bold text-brand">{t.advisor.loadingTitle}</h3>
            <p className="mt-1 text-base text-inksoft">{t.advisor.loadingNote}</p>

            <div className="mt-4 h-3 w-full border border-linestrong bg-surface">
              <div
                className="h-full bg-ok transition-all duration-500"
                style={{ width: `${(step / t.advisor.steps.length) * 100}%` }}
              />
            </div>

            <ol className="mt-4 space-y-2">
              {t.advisor.steps.map((s, i) => {
                const done = i < step;
                const active = i === step;
                return (
                  <li key={s} className={`flex items-center gap-3 border-2 px-3 py-2 text-base ${done ? "border-ok bg-okbg text-ok" : active ? "border-accent bg-warnbg text-warn" : "border-line bg-surface text-inksoft"}`}>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center font-bold" aria-hidden="true">
                      {done ? "✓" : active ? "…" : i + 1}
                    </span>
                    <span className="font-semibold">{s}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        )}

        {/* ---------------- RESULT ---------------- */}
        {phase === "result" && (
          <div className="fade-in" ref={resultRef} tabIndex={-1}>
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b-2 border-line pb-3">
              <div>
                <h3 className="text-2xl font-bold text-brand">{t.advisor.resultTitle}</h3>
                <p className="mt-1 text-base text-inksoft">{t.advisor.resultSub}</p>
              </div>
              <button type="button" onClick={() => { setPhase("form"); setStep(0); }} className="border-2 border-brand bg-page px-5 py-3 text-base font-bold text-brand hover:bg-brandsoft">
                ↻ {t.advisor.again}
              </button>
            </div>

            <ol className="space-y-5">
              {crops.map((c, i) => {
                const isSel = selectedCrop === c.id;
                return (
                  <li key={c.id} className={`border-2 bg-page ${isSel ? "border-brand" : "border-line"}`}>
                    {/* Card head with crop image tile + scores */}
                    <div className="grid gap-4 border-b border-line p-4 md:grid-cols-[auto_1fr_1fr]">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-20 w-20 shrink-0 items-center justify-center border-2 border-linestrong text-4xl"
                          style={{ background: c.tint }}
                          role="img"
                          aria-label={L(c.name, lang)}
                        >
                          {c.emoji}
                        </div>
                        <div>
                          <p className="text-2xl" aria-hidden="true">{c.medal}</p>
                          <p className="text-xs font-bold text-inksoft">#{i + 1}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-ink">{L(c.name, lang)}</h4>
                        <p className="text-sm text-inksoft">{t.advisor.variety}: {L(c.variety, lang)}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <StatusPill level={c.riskLevel} label={`${t.advisor.riskLevel}: ${L(c.risk, lang)}`} />
                          <span className="inline-flex items-center border-2 border-line bg-surface px-2 py-0.5 text-sm font-bold text-ink">
                            {t.advisor.difficulty}: {L(c.difficulty, lang)}
                          </span>
                          <span className="inline-flex items-center border-2 border-line bg-surface px-2 py-0.5 text-sm font-bold text-ink">
                            {t.advisor.waterReq}: {L(c.water, lang)}
                          </span>
                        </div>
                        {isSel && (
                          <p className="mt-2 inline-flex items-center gap-1 border-2 border-ok bg-okbg px-2 py-0.5 text-sm font-bold text-ok">
                            <CheckIcon className="h-4 w-4" /> {t.advisor.selected}
                          </p>
                        )}
                      </div>

                      <div className="space-y-3 self-center">
                        <Score label={t.advisor.suitability} value={c.suitability} />
                        <Score label={t.advisor.profitability} value={c.profitability} />
                        <Score label={t.advisor.waterReq} value={c.waterScore} />
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-4">
                      <h5 className="mb-2 text-base font-bold text-brand">{t.advisor.details}</h5>
                      <div className="grid gap-x-8 md:grid-cols-2">
                        <dl>
                          <Row k={t.advisor.cost} v={inr(Math.round(c.cost * factor))} />
                          <Row k={t.advisor.yieldEst} v={`${(c.yieldQ * factor).toFixed(1)} ${t.advisor.qtlAcre}`} />
                          <Row k={t.advisor.sellPrice} v={`${inr(c.price)} ${t.advisor.perQtl}`} />
                          <Row k={t.advisor.profit} v={inr(Math.round(c.profit * factor))} strong />
                          <Row k={t.advisor.waterReq} v={L(c.water, lang)} />
                          <Row k={t.advisor.duration} v={L(c.duration, lang)} />
                        </dl>
                        <dl>
                          <Row k={t.advisor.seedQty} v={L(c.seed, lang)} />
                          <Row k={t.advisor.fertReq} v={L(c.fertilizer, lang)} />
                          <Row k={t.advisor.pestReq} v={L(c.pesticide, lang)} />
                          <Row k={t.advisor.diseaseRisk} v={L(c.diseaseRisk, lang)} />
                          <Row k={t.advisor.harvestTime} v={L(c.harvest, lang)} />
                          <Row k={t.advisor.sowingPeriod} v={L(c.sowing, lang)} />
                        </dl>
                      </div>

                      <p className="mt-3 border-l-4 border-accent bg-surface px-4 py-3 text-base text-ink">
                        <strong>{t.advisor.why}</strong> {L(c.why, lang)}
                      </p>

                      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                        <button
                          type="button"
                          onClick={() => { onSelectCrop(c.id); window.location.hash = "#/guide"; }}
                          className="border-2 border-brand bg-brand px-6 py-3 text-base font-bold text-white hover:bg-branddark"
                        >
                          {t.advisor.select}
                        </button>
                        <a href="#/market" className="border-2 border-brand bg-page px-6 py-3 text-center text-base font-bold text-brand no-underline hover:bg-brandsoft">
                          {t.navExtra.market}
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}
