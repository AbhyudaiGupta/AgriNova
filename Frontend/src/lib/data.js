export const locations = {
  states: ["Uttar Pradesh", "Punjab", "Maharashtra", "Madhya Pradesh"],
  districts: ["Varanasi", "Ludhiana", "Nashik", "Indore"],
  villages: ["Barhi Kalan", "Rampur", "Sultanpur", "Kotwa"],
};

export const alertList = [
  { id: "nitrogen", level: "bad" },
  { id: "irrigation", level: "warn" },
  { id: "rain", level: "warn" },
  { id: "disease", level: "bad" },
  { id: "crop", level: "ok" },
  { id: "fertilizer", level: "ok" },
];

export const serviceList = [
  { id: "irrigation", code: "S-01" },
  { id: "crop", code: "S-02" },
  { id: "fertilizer", code: "S-03" },
  { id: "disease", code: "S-04" },
  { id: "weather", code: "S-05" },
  { id: "yield", code: "S-06" },
  { id: "helpdesk", code: "S-07" },
];

const round = (n, d = 0) => {
  const f = Math.pow(10, d);
  return Math.round(n * f) / f;
};

export function readSensors(shift = 0) {
  const j = (base, spread, d = 0) =>
    round(base + Math.sin(shift * 1.7 + base) * spread, d);

  const moisture = j(28, 3);
  const temp = j(31, 1.5, 1);
  const humidity = j(58, 4);
  const ph = j(6.4, 0.15, 1);
  const n = j(142, 8);
  const p = j(46, 4);
  const k = j(188, 9);
  const rain = j(72, 8);

  return [
    {
      id: "moisture",
      value: String(moisture),
      unit: "%",
      level: moisture < 32 ? "bad" : moisture < 45 ? "warn" : "ok",
      pct: Math.min(100, moisture * 1.6),
    },
    {
      id: "temperature",
      value: String(temp),
      unit: "°C",
      level: temp > 38 ? "bad" : temp > 34 ? "warn" : "ok",
      pct: Math.min(100, (temp / 45) * 100),
    },
    {
      id: "humidity",
      value: String(humidity),
      unit: "%",
      level: humidity < 30 ? "warn" : "ok",
      pct: humidity,
    },
    {
      id: "ph",
      value: String(ph),
      unit: "pH",
      level: ph < 6 || ph > 7.8 ? "warn" : "ok",
      pct: (ph / 14) * 100,
    },
    {
      id: "nitrogen",
      value: String(n),
      unit: "kg/ha",
      level: n < 160 ? "bad" : n < 220 ? "warn" : "ok",
      pct: Math.min(100, (n / 320) * 100),
    },
    {
      id: "phosphorus",
      value: String(p),
      unit: "kg/ha",
      level: p < 20 ? "bad" : p < 35 ? "warn" : "ok",
      pct: Math.min(100, (p / 80) * 100),
    },
    {
      id: "potassium",
      value: String(k),
      unit: "kg/ha",
      level: k < 120 ? "warn" : "ok",
      pct: Math.min(100, (k / 300) * 100),
    },
    {
      id: "rain",
      value: String(rain),
      unit: "%",
      level: rain > 60 ? "warn" : "ok",
      pct: rain,
    },
    { id: "pump", value: "", unit: "", level: "ok", pct: 0 },
  ];
}
