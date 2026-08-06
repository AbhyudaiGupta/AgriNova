/**
 * AgriNova — sample agricultural knowledge base.
 * Bilingual values are stored as { en, hi } and read with L().
 */
export const L = (v, lang) => (v && typeof v === "object" ? v[lang] ?? v.en : v);

export const inr = (n) =>
  "₹" + Number(n).toLocaleString("en-IN", { maximumFractionDigits: 0 });

/* ------------------------------------------------------------------ */
/* Top 5 AI recommended crops                                          */
/* ------------------------------------------------------------------ */
export const crops = [
  {
    id: "wheat",
    medal: "🥇",
    emoji: "🌾",
    tint: "#f4e3c4",
    name: { en: "Wheat", hi: "गेहूँ" },
    variety: { en: "HD-2967 / HD-3086", hi: "एचडी-2967 / एचडी-3086" },
    suitability: 94,
    profitability: 88,
    waterScore: 55,
    water: { en: "Medium — 450 mm", hi: "मध्यम — 450 मिमी" },
    difficulty: { en: "Easy", hi: "आसान" },
    risk: { en: "Low", hi: "कम" },
    riskLevel: "ok",
    cost: 24500,
    costBreak: { seed: 3200, fert: 6800, labour: 9500, pest: 2000, other: 3000 },
    yieldQ: 22,
    price: 2275,
    revenue: 50050,
    profit: 25550,
    duration: { en: "120 – 140 days", hi: "120 – 140 दिन" },
    seed: { en: "40 kg per acre", hi: "40 किग्रा प्रति एकड़" },
    fertilizer: { en: "Urea 110 kg, DAP 50 kg, MOP 20 kg", hi: "यूरिया 110 किग्रा, डीएपी 50 किग्रा, एमओपी 20 किग्रा" },
    pesticide: { en: "Propiconazole 25 EC (only if rust appears)", hi: "प्रोपिकोनाज़ोल 25 ईसी (रतुआ दिखने पर ही)" },
    diseaseRisk: { en: "Yellow rust — moderate", hi: "पीला रतुआ — मध्यम" },
    harvest: { en: "2nd week of April", hi: "अप्रैल का दूसरा सप्ताह" },
    sowing: { en: "5 November – 25 November", hi: "5 नवंबर – 25 नवंबर" },
    why: {
      en: "Soil pH 6.4 and loam texture suit wheat well. Winter temperature in your block is ideal and mandi price is above MSP.",
      hi: "मिट्टी का पीएच 6.4 और दोमट बनावट गेहूँ के लिए उपयुक्त है। आपके ब्लॉक का शीत तापमान आदर्श है और मंडी भाव एमएसपी से ऊपर है।",
    },
    fert: [
      { w: { en: "Week 0 (Sowing)", hi: "सप्ताह 0 (बुवाई)" }, f: { en: "DAP", hi: "डीएपी" }, q: { en: "50 kg/acre", hi: "50 किग्रा/एकड़" }, p: { en: "Root development", hi: "जड़ विकास" } },
      { w: { en: "Week 3", hi: "सप्ताह 3" }, f: { en: "Urea (1st dose)", hi: "यूरिया (पहली मात्रा)" }, q: { en: "55 kg/acre", hi: "55 किग्रा/एकड़" }, p: { en: "Tillering / leaf growth", hi: "कल्ले फूटना / पत्ती वृद्धि" } },
      { w: { en: "Week 6", hi: "सप्ताह 6" }, f: { en: "Urea (2nd dose)", hi: "यूरिया (दूसरी मात्रा)" }, q: { en: "55 kg/acre", hi: "55 किग्रा/एकड़" }, p: { en: "Stem elongation", hi: "तना बढ़ना" } },
      { w: { en: "Week 9", hi: "सप्ताह 9" }, f: { en: "MOP + Zinc", hi: "एमओपी + जिंक" }, q: { en: "20 kg + 5 kg", hi: "20 किग्रा + 5 किग्रा" }, p: { en: "Grain filling", hi: "दाना भरना" } },
    ],
    irr: [
      { w: { en: "Week 3 (CRI stage)", hi: "सप्ताह 3 (सीआरआई अवस्था)" }, v: { en: "50 mm", hi: "50 मिमी" }, m: { en: "Flood / border", hi: "क्यारी सिंचाई" }, r: { en: "Most important irrigation — do not skip", hi: "सबसे आवश्यक सिंचाई — न छोड़ें" } },
      { w: { en: "Week 6", hi: "सप्ताह 6" }, v: { en: "45 mm", hi: "45 मिमी" }, m: { en: "Flood", hi: "क्यारी" }, r: { en: "Give in the morning", hi: "सुबह के समय दें" } },
      { w: { en: "Week 9", hi: "सप्ताह 9" }, v: { en: "45 mm", hi: "45 मिमी" }, m: { en: "Flood", hi: "क्यारी" }, r: { en: "Skip if rain expected", hi: "वर्षा की संभावना हो तो छोड़ें" } },
      { w: { en: "Week 13", hi: "सप्ताह 13" }, v: { en: "40 mm", hi: "40 मिमी" }, m: { en: "Light irrigation", hi: "हल्की सिंचाई" }, r: { en: "Stop 15 days before harvest", hi: "कटाई से 15 दिन पहले बंद करें" } },
    ],
    diseases: [
      { n: { en: "Yellow Rust", hi: "पीला रतुआ" }, s: { en: "Yellow powder stripes on leaves", hi: "पत्तियों पर पीली धारियाँ और चूर्ण" }, p: { en: "Sow resistant variety, avoid excess nitrogen", hi: "रोगरोधी किस्म बोएँ, अधिक नाइट्रोजन से बचें" }, m: { en: "Propiconazole 25 EC @ 200 ml/acre", hi: "प्रोपिकोनाज़ोल 25 ईसी @ 200 मिली/एकड़" } },
      { n: { en: "Loose Smut", hi: "कंडुआ रोग" }, s: { en: "Black powder in place of grain", hi: "दाने के स्थान पर काला चूर्ण" }, p: { en: "Use treated certified seed", hi: "उपचारित प्रमाणित बीज उपयोग करें" }, m: { en: "Carboxin seed treatment 2 g/kg", hi: "कार्बोक्सिन बीज उपचार 2 ग्राम/किग्रा" } },
      { n: { en: "Aphid attack", hi: "माहू (एफिड)" }, s: { en: "Sticky leaves, small green insects", hi: "चिपचिपी पत्तियाँ, छोटे हरे कीट" }, p: { en: "Monitor weekly after January", hi: "जनवरी के बाद साप्ताहिक निरीक्षण" }, m: { en: "Imidacloprid 17.8 SL @ 40 ml/acre", hi: "इमिडाक्लोप्रिड 17.8 एसएल @ 40 मिली/एकड़" } },
    ],
    storage: { en: "Dry grain to 12% moisture. Store in clean jute bags on wooden pallets.", hi: "दाने को 12% नमी तक सुखाएँ। साफ जूट बोरों में लकड़ी के पटरों पर रखें।" },
    transport: { en: "Transport early morning. Cover trolley with tarpaulin against rain.", hi: "सुबह जल्दी ढुलाई करें। वर्षा से बचाव हेतु ट्रॉली को तिरपाल से ढकें।" },
  },
  {
    id: "soybean",
    medal: "🥈",
    emoji: "🫘",
    tint: "#dfe8cf",
    name: { en: "Soybean", hi: "सोयाबीन" },
    variety: { en: "JS-9560", hi: "जेएस-9560" },
    suitability: 87,
    profitability: 82,
    waterScore: 45,
    water: { en: "Low — 350 mm", hi: "कम — 350 मिमी" },
    difficulty: { en: "Medium", hi: "मध्यम" },
    risk: { en: "Medium", hi: "मध्यम" },
    riskLevel: "warn",
    cost: 21000,
    costBreak: { seed: 4500, fert: 4800, labour: 7700, pest: 2200, other: 1800 },
    yieldQ: 11,
    price: 4600,
    revenue: 50600,
    profit: 29600,
    duration: { en: "95 – 110 days", hi: "95 – 110 दिन" },
    seed: { en: "30 kg per acre", hi: "30 किग्रा प्रति एकड़" },
    fertilizer: { en: "DAP 55 kg, MOP 20 kg, Sulphur 8 kg", hi: "डीएपी 55 किग्रा, एमओपी 20 किग्रा, सल्फर 8 किग्रा" },
    pesticide: { en: "Chlorantraniliprole for girdle beetle", hi: "गर्डल बीटल हेतु क्लोरेंट्रानिलिप्रोल" },
    diseaseRisk: { en: "Yellow mosaic — moderate", hi: "पीला मोज़ेक — मध्यम" },
    harvest: { en: "Last week of September", hi: "सितंबर का अंतिम सप्ताह" },
    sowing: { en: "20 June – 5 July", hi: "20 जून – 5 जुलाई" },
    why: {
      en: "Needs less irrigation and fixes nitrogen in soil, which will help the next crop. Mandi price is strong this season.",
      hi: "कम सिंचाई चाहिए और मिट्टी में नाइट्रोजन बढ़ाता है, जिससे अगली फसल को लाभ होगा। इस मौसम मंडी भाव अच्छा है।",
    },
    fert: [
      { w: { en: "Week 0 (Sowing)", hi: "सप्ताह 0 (बुवाई)" }, f: { en: "DAP + Sulphur", hi: "डीएपी + सल्फर" }, q: { en: "55 kg + 8 kg", hi: "55 किग्रा + 8 किग्रा" }, p: { en: "Root and nodule growth", hi: "जड़ व ग्रंथि विकास" } },
      { w: { en: "Week 3", hi: "सप्ताह 3" }, f: { en: "MOP", hi: "एमओपी" }, q: { en: "20 kg/acre", hi: "20 किग्रा/एकड़" }, p: { en: "Plant strength", hi: "पौधे की मजबूती" } },
      { w: { en: "Week 6", hi: "सप्ताह 6" }, f: { en: "Foliar 19:19:19", hi: "पर्णीय 19:19:19" }, q: { en: "1 kg/acre spray", hi: "1 किग्रा/एकड़ छिड़काव" }, p: { en: "Flowering support", hi: "फूल आने में सहायता" } },
      { w: { en: "Week 9", hi: "सप्ताह 9" }, f: { en: "Micronutrient mix", hi: "सूक्ष्म पोषक मिश्रण" }, q: { en: "500 g/acre", hi: "500 ग्राम/एकड़" }, p: { en: "Pod filling", hi: "फली भरना" } },
    ],
    irr: [
      { w: { en: "Week 2", hi: "सप्ताह 2" }, v: { en: "35 mm", hi: "35 मिमी" }, m: { en: "Rain-fed / light", hi: "वर्षा आधारित / हल्की" }, r: { en: "Only if no rain for 8 days", hi: "8 दिन वर्षा न हो तभी" } },
      { w: { en: "Week 5", hi: "सप्ताह 5" }, v: { en: "40 mm", hi: "40 मिमी" }, m: { en: "Furrow", hi: "कूँड़ सिंचाई" }, r: { en: "Flowering stage — keep moist", hi: "फूल अवस्था — नमी बनाए रखें" } },
      { w: { en: "Week 8", hi: "सप्ताह 8" }, v: { en: "40 mm", hi: "40 मिमी" }, m: { en: "Furrow", hi: "कूँड़ सिंचाई" }, r: { en: "Pod filling — critical", hi: "फली भरना — महत्वपूर्ण" } },
      { w: { en: "Week 12", hi: "सप्ताह 12" }, v: { en: "Stop", hi: "बंद करें" }, m: { en: "—", hi: "—" }, r: { en: "Drain field before harvest", hi: "कटाई से पहले खेत सुखाएँ" } },
    ],
    diseases: [
      { n: { en: "Yellow Mosaic Virus", hi: "पीला मोज़ेक विषाणु" }, s: { en: "Bright yellow patches on leaves", hi: "पत्तियों पर चमकीले पीले धब्बे" }, p: { en: "Control whitefly, use resistant seed", hi: "सफेद मक्खी नियंत्रण, रोगरोधी बीज" }, m: { en: "Thiamethoxam 25 WG @ 40 g/acre", hi: "थायोमेथोक्सम 25 डब्ल्यूजी @ 40 ग्राम/एकड़" } },
      { n: { en: "Girdle Beetle", hi: "गर्डल बीटल" }, s: { en: "Cut rings on stem, drooping shoots", hi: "तने पर कटे छल्ले, झुकी शाखाएँ" }, p: { en: "Remove and burn affected shoots", hi: "प्रभावित शाखाएँ हटाकर जलाएँ" }, m: { en: "Chlorantraniliprole @ 60 ml/acre", hi: "क्लोरेंट्रानिलिप्रोल @ 60 मिली/एकड़" } },
    ],
    storage: { en: "Dry to 10% moisture. Avoid storing in damp rooms.", hi: "10% नमी तक सुखाएँ। नमी वाले कमरों में भंडारण न करें।" },
    transport: { en: "Use closed bags — soybean spills easily.", hi: "बंद बोरों का उपयोग करें — सोयाबीन आसानी से गिरता है।" },
  },
  {
    id: "mustard",
    medal: "🥉",
    emoji: "🌻",
    tint: "#fbeec2",
    name: { en: "Mustard", hi: "सरसों" },
    variety: { en: "Pusa Bold", hi: "पूसा बोल्ड" },
    suitability: 81,
    profitability: 79,
    waterScore: 35,
    water: { en: "Low — 300 mm", hi: "कम — 300 मिमी" },
    difficulty: { en: "Easy", hi: "आसान" },
    risk: { en: "Low", hi: "कम" },
    riskLevel: "ok",
    cost: 17500,
    costBreak: { seed: 1500, fert: 4600, labour: 7400, pest: 1600, other: 2400 },
    yieldQ: 8,
    price: 5650,
    revenue: 45200,
    profit: 27700,
    duration: { en: "110 – 130 days", hi: "110 – 130 दिन" },
    seed: { en: "2 kg per acre", hi: "2 किग्रा प्रति एकड़" },
    fertilizer: { en: "Urea 45 kg, DAP 40 kg, Sulphur 10 kg", hi: "यूरिया 45 किग्रा, डीएपी 40 किग्रा, सल्फर 10 किग्रा" },
    pesticide: { en: "Dimethoate for mustard aphid", hi: "सरसों माहू हेतु डाइमेथोएट" },
    diseaseRisk: { en: "Aphid — moderate", hi: "माहू — मध्यम" },
    harvest: { en: "1st week of March", hi: "मार्च का पहला सप्ताह" },
    sowing: { en: "10 October – 30 October", hi: "10 अक्टूबर – 30 अक्टूबर" },
    why: {
      en: "Very low water need suits your groundwater level. Oilseed prices remain high and input cost is the lowest of all five crops.",
      hi: "बहुत कम पानी की आवश्यकता आपके भूजल स्तर के अनुकूल है। तिलहन के भाव ऊँचे हैं और लागत सभी पाँच फसलों में सबसे कम है।",
    },
    fert: [
      { w: { en: "Week 0 (Sowing)", hi: "सप्ताह 0 (बुवाई)" }, f: { en: "DAP + Sulphur", hi: "डीएपी + सल्फर" }, q: { en: "40 kg + 10 kg", hi: "40 किग्रा + 10 किग्रा" }, p: { en: "Oil content and roots", hi: "तेल मात्रा व जड़" } },
      { w: { en: "Week 4", hi: "सप्ताह 4" }, f: { en: "Urea (1st dose)", hi: "यूरिया (पहली मात्रा)" }, q: { en: "25 kg/acre", hi: "25 किग्रा/एकड़" }, p: { en: "Branch growth", hi: "शाखा वृद्धि" } },
      { w: { en: "Week 7", hi: "सप्ताह 7" }, f: { en: "Urea (2nd dose)", hi: "यूरिया (दूसरी मात्रा)" }, q: { en: "20 kg/acre", hi: "20 किग्रा/एकड़" }, p: { en: "Flowering", hi: "फूल आना" } },
      { w: { en: "Week 10", hi: "सप्ताह 10" }, f: { en: "Boron spray", hi: "बोरॉन छिड़काव" }, q: { en: "200 g/acre", hi: "200 ग्राम/एकड़" }, p: { en: "Seed setting", hi: "दाना बनना" } },
    ],
    irr: [
      { w: { en: "Week 4", hi: "सप्ताह 4" }, v: { en: "40 mm", hi: "40 मिमी" }, m: { en: "Flood", hi: "क्यारी" }, r: { en: "First irrigation after sowing", hi: "बुवाई के बाद पहली सिंचाई" } },
      { w: { en: "Week 8", hi: "सप्ताह 8" }, v: { en: "40 mm", hi: "40 मिमी" }, m: { en: "Flood", hi: "क्यारी" }, r: { en: "Flowering stage", hi: "फूल अवस्था" } },
      { w: { en: "Week 12", hi: "सप्ताह 12" }, v: { en: "30 mm", hi: "30 मिमी" }, m: { en: "Light", hi: "हल्की" }, r: { en: "Pod filling", hi: "फली भरना" } },
      { w: { en: "Week 15", hi: "सप्ताह 15" }, v: { en: "Stop", hi: "बंद करें" }, m: { en: "—", hi: "—" }, r: { en: "Stop before maturity", hi: "पकने से पहले बंद करें" } },
    ],
    diseases: [
      { n: { en: "Mustard Aphid", hi: "सरसों का माहू" }, s: { en: "Curled leaves, black insects on pods", hi: "मुड़ी पत्तियाँ, फलियों पर काले कीट" }, p: { en: "Early sowing reduces attack", hi: "जल्दी बुवाई से प्रकोप कम" }, m: { en: "Dimethoate 30 EC @ 250 ml/acre", hi: "डाइमेथोएट 30 ईसी @ 250 मिली/एकड़" } },
      { n: { en: "White Rust", hi: "सफेद रतुआ" }, s: { en: "White blisters on lower leaf side", hi: "पत्ती की निचली सतह पर सफेद फफोले" }, p: { en: "Crop rotation, treated seed", hi: "फसल चक्र, उपचारित बीज" }, m: { en: "Metalaxyl + Mancozeb @ 400 g/acre", hi: "मेटालैक्सिल + मैंकोजेब @ 400 ग्राम/एकड़" } },
    ],
    storage: { en: "Keep seed at 8% moisture in airtight containers.", hi: "बीज को 8% नमी पर वायुरोधी पात्र में रखें।" },
    transport: { en: "Small volume — can be carried by tractor trolley.", hi: "कम मात्रा — ट्रैक्टर ट्रॉली से ले जाया जा सकता है।" },
  },
  {
    id: "gram",
    medal: "4️⃣",
    emoji: "🟤",
    tint: "#e6ddcb",
    name: { en: "Gram (Chana)", hi: "चना" },
    variety: { en: "JG-14", hi: "जेजी-14" },
    suitability: 76,
    profitability: 74,
    waterScore: 30,
    water: { en: "Very low — 250 mm", hi: "बहुत कम — 250 मिमी" },
    difficulty: { en: "Medium", hi: "मध्यम" },
    risk: { en: "Medium", hi: "मध्यम" },
    riskLevel: "warn",
    cost: 19000,
    costBreak: { seed: 4800, fert: 3600, labour: 7000, pest: 1800, other: 1800 },
    yieldQ: 7,
    price: 6100,
    revenue: 42700,
    profit: 23700,
    duration: { en: "100 – 120 days", hi: "100 – 120 दिन" },
    seed: { en: "30 kg per acre", hi: "30 किग्रा प्रति एकड़" },
    fertilizer: { en: "DAP 45 kg, MOP 15 kg", hi: "डीएपी 45 किग्रा, एमओपी 15 किग्रा" },
    pesticide: { en: "Emamectin for pod borer", hi: "फली छेदक हेतु इमामेक्टिन" },
    diseaseRisk: { en: "Wilt — moderate", hi: "उकठा — मध्यम" },
    harvest: { en: "Last week of March", hi: "मार्च का अंतिम सप्ताह" },
    sowing: { en: "15 October – 10 November", hi: "15 अक्टूबर – 10 नवंबर" },
    why: {
      en: "Pulse crop improves soil nitrogen and needs very little irrigation. Suitable if groundwater is limited.",
      hi: "दलहनी फसल मिट्टी में नाइट्रोजन बढ़ाती है और बहुत कम सिंचाई चाहिए। भूजल सीमित हो तो उपयुक्त।",
    },
    fert: [
      { w: { en: "Week 0 (Sowing)", hi: "सप्ताह 0 (बुवाई)" }, f: { en: "DAP", hi: "डीएपी" }, q: { en: "45 kg/acre", hi: "45 किग्रा/एकड़" }, p: { en: "Root and nodules", hi: "जड़ व ग्रंथियाँ" } },
      { w: { en: "Week 4", hi: "सप्ताह 4" }, f: { en: "MOP", hi: "एमओपी" }, q: { en: "15 kg/acre", hi: "15 किग्रा/एकड़" }, p: { en: "Branch growth", hi: "शाखा वृद्धि" } },
      { w: { en: "Week 7", hi: "सप्ताह 7" }, f: { en: "Foliar 2% urea", hi: "पर्णीय 2% यूरिया" }, q: { en: "Spray", hi: "छिड़काव" }, p: { en: "Flowering support", hi: "फूल सहायता" } },
      { w: { en: "Week 10", hi: "सप्ताह 10" }, f: { en: "Micronutrient", hi: "सूक्ष्म पोषक" }, q: { en: "500 g/acre", hi: "500 ग्राम/एकड़" }, p: { en: "Pod development", hi: "फली विकास" } },
    ],
    irr: [
      { w: { en: "Week 5", hi: "सप्ताह 5" }, v: { en: "35 mm", hi: "35 मिमी" }, m: { en: "Light flood", hi: "हल्की क्यारी" }, r: { en: "Avoid over-watering", hi: "अधिक पानी न दें" } },
      { w: { en: "Week 9", hi: "सप्ताह 9" }, v: { en: "35 mm", hi: "35 मिमी" }, m: { en: "Light flood", hi: "हल्की क्यारी" }, r: { en: "Pod formation stage", hi: "फली बनने की अवस्था" } },
      { w: { en: "Week 12", hi: "सप्ताह 12" }, v: { en: "Stop", hi: "बंद करें" }, m: { en: "—", hi: "—" }, r: { en: "Excess water causes wilt", hi: "अधिक पानी से उकठा रोग" } },
      { w: { en: "Week 14", hi: "सप्ताह 14" }, v: { en: "Stop", hi: "बंद करें" }, m: { en: "—", hi: "—" }, r: { en: "Dry field for harvest", hi: "कटाई हेतु खेत सुखाएँ" } },
    ],
    diseases: [
      { n: { en: "Fusarium Wilt", hi: "उकठा रोग" }, s: { en: "Plant dries suddenly, roots brown", hi: "पौधा अचानक सूखता है, जड़ भूरी" }, p: { en: "Crop rotation, avoid water logging", hi: "फसल चक्र, जलभराव से बचें" }, m: { en: "Trichoderma seed treatment 5 g/kg", hi: "ट्राइकोडर्मा बीज उपचार 5 ग्राम/किग्रा" } },
      { n: { en: "Pod Borer", hi: "फली छेदक" }, s: { en: "Holes in pods, grains eaten", hi: "फलियों में छेद, दाने खाए हुए" }, p: { en: "Install pheromone traps", hi: "फेरोमोन ट्रैप लगाएँ" }, m: { en: "Emamectin benzoate @ 80 g/acre", hi: "इमामेक्टिन बेंजोएट @ 80 ग्राम/एकड़" } },
    ],
    storage: { en: "Store at 9% moisture. Mix neem leaves to stop insects.", hi: "9% नमी पर रखें। कीट रोकने हेतु नीम पत्ती मिलाएँ।" },
    transport: { en: "Handle gently — grains break easily.", hi: "सावधानी से ढुलाई करें — दाने आसानी से टूटते हैं।" },
  },
  {
    id: "maize",
    medal: "5️⃣",
    emoji: "🌽",
    tint: "#f7e7b8",
    name: { en: "Maize", hi: "मक्का" },
    variety: { en: "Pioneer 3396", hi: "पायनियर 3396" },
    suitability: 72,
    profitability: 68,
    waterScore: 70,
    water: { en: "High — 550 mm", hi: "अधिक — 550 मिमी" },
    difficulty: { en: "Medium", hi: "मध्यम" },
    risk: { en: "High", hi: "अधिक" },
    riskLevel: "bad",
    cost: 26000,
    costBreak: { seed: 5200, fert: 8200, labour: 8600, pest: 2400, other: 1600 },
    yieldQ: 25,
    price: 2090,
    revenue: 52250,
    profit: 26250,
    duration: { en: "90 – 110 days", hi: "90 – 110 दिन" },
    seed: { en: "8 kg per acre", hi: "8 किग्रा प्रति एकड़" },
    fertilizer: { en: "Urea 120 kg, DAP 60 kg, MOP 25 kg", hi: "यूरिया 120 किग्रा, डीएपी 60 किग्रा, एमओपी 25 किग्रा" },
    pesticide: { en: "Spinetoram for fall armyworm", hi: "फॉल आर्मीवर्म हेतु स्पाइनेटोरम" },
    diseaseRisk: { en: "Fall armyworm — high", hi: "फॉल आर्मीवर्म — अधिक" },
    harvest: { en: "3rd week of September", hi: "सितंबर का तीसरा सप्ताह" },
    sowing: { en: "15 June – 5 July", hi: "15 जून – 5 जुलाई" },
    why: {
      en: "Gives the highest quantity per acre, but needs more water and has a higher pest risk. Choose only if irrigation is assured.",
      hi: "प्रति एकड़ सबसे अधिक मात्रा देता है, परंतु अधिक पानी चाहिए और कीट जोखिम अधिक है। सिंचाई सुनिश्चित हो तभी चुनें।",
    },
    fert: [
      { w: { en: "Week 0 (Sowing)", hi: "सप्ताह 0 (बुवाई)" }, f: { en: "DAP + MOP", hi: "डीएपी + एमओपी" }, q: { en: "60 kg + 25 kg", hi: "60 किग्रा + 25 किग्रा" }, p: { en: "Root establishment", hi: "जड़ स्थापन" } },
      { w: { en: "Week 3", hi: "सप्ताह 3" }, f: { en: "Urea (1st)", hi: "यूरिया (पहली)" }, q: { en: "60 kg/acre", hi: "60 किग्रा/एकड़" }, p: { en: "Fast leaf growth", hi: "तेज़ पत्ती वृद्धि" } },
      { w: { en: "Week 6", hi: "सप्ताह 6" }, f: { en: "Urea (2nd)", hi: "यूरिया (दूसरी)" }, q: { en: "60 kg/acre", hi: "60 किग्रा/एकड़" }, p: { en: "Cob formation", hi: "भुट्टा बनना" } },
      { w: { en: "Week 9", hi: "सप्ताह 9" }, f: { en: "Zinc sulphate", hi: "जिंक सल्फेट" }, q: { en: "10 kg/acre", hi: "10 किग्रा/एकड़" }, p: { en: "Grain quality", hi: "दाने की गुणवत्ता" } },
    ],
    irr: [
      { w: { en: "Week 2", hi: "सप्ताह 2" }, v: { en: "50 mm", hi: "50 मिमी" }, m: { en: "Furrow", hi: "कूँड़" }, r: { en: "Keep soil moist", hi: "मिट्टी नम रखें" } },
      { w: { en: "Week 5", hi: "सप्ताह 5" }, v: { en: "55 mm", hi: "55 मिमी" }, m: { en: "Furrow", hi: "कूँड़" }, r: { en: "Knee-high stage", hi: "घुटने तक ऊँचाई अवस्था" } },
      { w: { en: "Week 8", hi: "सप्ताह 8" }, v: { en: "60 mm", hi: "60 मिमी" }, m: { en: "Furrow", hi: "कूँड़" }, r: { en: "Silking — most critical", hi: "रेशा अवस्था — सबसे महत्वपूर्ण" } },
      { w: { en: "Week 11", hi: "सप्ताह 11" }, v: { en: "45 mm", hi: "45 मिमी" }, m: { en: "Light", hi: "हल्की" }, r: { en: "Grain filling", hi: "दाना भरना" } },
    ],
    diseases: [
      { n: { en: "Fall Armyworm", hi: "फॉल आर्मीवर्म" }, s: { en: "Holes in whorl, saw-dust like waste", hi: "गोभ में छेद, बुरादा जैसा मल" }, p: { en: "Scout field twice a week", hi: "सप्ताह में दो बार खेत देखें" }, m: { en: "Spinetoram 11.7 SC @ 100 ml/acre", hi: "स्पाइनेटोरम 11.7 एससी @ 100 मिली/एकड़" } },
      { n: { en: "Turcicum Leaf Blight", hi: "पत्ती झुलसा" }, s: { en: "Long grey-brown spots on leaves", hi: "पत्तियों पर लंबे भूरे धब्बे" }, p: { en: "Use resistant hybrid, rotate crop", hi: "रोगरोधी संकर, फसल चक्र" }, m: { en: "Mancozeb 75 WP @ 600 g/acre", hi: "मैंकोजेब 75 डब्ल्यूपी @ 600 ग्राम/एकड़" } },
    ],
    storage: { en: "Dry cobs fully before shelling. Store at 13% moisture.", hi: "छिलाई से पहले भुट्टे पूरी तरह सुखाएँ। 13% नमी पर रखें।" },
    transport: { en: "Bulky crop — plan tractor trips in advance.", hi: "भारी फसल — ट्रैक्टर के फेरे पहले से तय करें।" },
  },
];

export const getCrop = (id) => crops.find((c) => c.id === id) || crops[0];

/* ------------------------------------------------------------------ */
/* Market intelligence                                                 */
/* ------------------------------------------------------------------ */
export const mandiPrices = [
  { crop: { en: "Wheat", hi: "गेहूँ" }, market: { en: "Varanasi Mandi", hi: "वाराणसी मंडी" }, today: 2310, yest: 2270 },
  { crop: { en: "Rice (Paddy)", hi: "धान" }, market: { en: "Varanasi Mandi", hi: "वाराणसी मंडी" }, today: 2183, yest: 2205 },
  { crop: { en: "Soybean", hi: "सोयाबीन" }, market: { en: "Indore Mandi", hi: "इंदौर मंडी" }, today: 4640, yest: 4570 },
  { crop: { en: "Mustard", hi: "सरसों" }, market: { en: "Jaunpur Mandi", hi: "जौनपुर मंडी" }, today: 5680, yest: 5720 },
  { crop: { en: "Gram (Chana)", hi: "चना" }, market: { en: "Bhadohi Mandi", hi: "भदोही मंडी" }, today: 6120, yest: 6050 },
  { crop: { en: "Maize", hi: "मक्का" }, market: { en: "Chandauli Mandi", hi: "चंदौली मंडी" }, today: 2085, yest: 2085 },
];

export const mspTable = [
  { crop: { en: "Wheat", hi: "गेहूँ" }, msp: 2275, mandi: 2310 },
  { crop: { en: "Rice (Paddy)", hi: "धान" }, msp: 2300, mandi: 2183 },
  { crop: { en: "Soybean", hi: "सोयाबीन" }, msp: 4892, mandi: 4640 },
  { crop: { en: "Mustard", hi: "सरसों" }, msp: 5650, mandi: 5680 },
  { crop: { en: "Gram (Chana)", hi: "चना" }, msp: 5440, mandi: 6120 },
  { crop: { en: "Maize", hi: "मक्का" }, msp: 2225, mandi: 2085 },
];

export const pricePredictions = [
  {
    crop: { en: "Wheat", hi: "गेहूँ" },
    change: +8,
    text: {
      en: "Wheat prices are expected to increase by 8% over the next two weeks due to low arrivals and steady demand.",
      hi: "आवक कम और माँग स्थिर रहने से अगले दो सप्ताह में गेहूँ के भाव लगभग 8% बढ़ने की संभावना है।",
    },
    confidence: 86,
  },
  {
    crop: { en: "Mustard", hi: "सरसों" },
    change: -3,
    text: {
      en: "Mustard prices may fall by about 3% as new crop arrivals increase in nearby mandis.",
      hi: "आसपास की मंडियों में नई फसल की आवक बढ़ने से सरसों के भाव लगभग 3% घट सकते हैं।",
    },
    confidence: 74,
  },
  {
    crop: { en: "Gram (Chana)", hi: "चना" },
    change: +5,
    text: {
      en: "Gram prices are likely to rise by 5% before the festival season demand.",
      hi: "त्योहारी माँग से पहले चने के भाव लगभग 5% बढ़ने की संभावना है।",
    },
    confidence: 79,
  },
];

export const bestMarkets = [
  {
    name: { en: "Varanasi Mandi", hi: "वाराणसी मंडी" },
    distance: 18,
    price: 2310,
    qty: 22,
    transport: 2400,
    best: true,
  },
  {
    name: { en: "Jaunpur Mandi", hi: "जौनपुर मंडी" },
    distance: 46,
    price: 2345,
    qty: 22,
    transport: 5200,
    best: false,
  },
  {
    name: { en: "Bhadohi Mandi", hi: "भदोही मंडी" },
    distance: 62,
    price: 2360,
    qty: 22,
    transport: 7400,
    best: false,
  },
];

export const priceTrends = {
  wheat: { label: { en: "Wheat", hi: "गेहूँ" }, unit: "₹/qtl", data: [2180, 2205, 2240, 2225, 2260, 2285, 2310] },
  rice: { label: { en: "Rice", hi: "धान" }, unit: "₹/qtl", data: [2260, 2245, 2230, 2240, 2215, 2200, 2183] },
  soybean: { label: { en: "Soybean", hi: "सोयाबीन" }, unit: "₹/qtl", data: [4420, 4460, 4510, 4495, 4560, 4600, 4640] },
  mustard: { label: { en: "Mustard", hi: "सरसों" }, unit: "₹/qtl", data: [5820, 5790, 5760, 5740, 5710, 5720, 5680] },
};

export const trendMonths = {
  en: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
  hi: ["अग", "सित", "अक्ट", "नव", "दिस", "जन", "फर"],
};

/* ------------------------------------------------------------------ */
/* Form option lists                                                   */
/* ------------------------------------------------------------------ */
export const soilTypes = [
  { en: "Loam (दोमट)", hi: "दोमट" },
  { en: "Clay (चिकनी)", hi: "चिकनी" },
  { en: "Sandy (बलुई)", hi: "बलुई" },
  { en: "Sandy Loam (बलुई दोमट)", hi: "बलुई दोमट" },
  { en: "Black Cotton (काली)", hi: "काली मिट्टी" },
  { en: "Alluvial (जलोढ़)", hi: "जलोढ़" },
];

export const waterAvailability = [
  { en: "Good (borewell + canal)", hi: "अच्छी (बोरवेल + नहर)" },
  { en: "Medium (borewell only)", hi: "मध्यम (केवल बोरवेल)" },
  { en: "Low (rain-fed)", hi: "कम (वर्षा आधारित)" },
];

export const waterQuality = [
  { en: "Good (sweet water)", hi: "अच्छी (मीठा पानी)" },
  { en: "Medium (slightly salty)", hi: "मध्यम (हल्का खारा)" },
  { en: "Poor (salty / hard)", hi: "खराब (खारा / कठोर)" },
];

export const mandis = [
  { en: "Varanasi Mandi", hi: "वाराणसी मंडी" },
  { en: "Jaunpur Mandi", hi: "जौनपुर मंडी" },
  { en: "Bhadohi Mandi", hi: "भदोही मंडी" },
  { en: "Chandauli Mandi", hi: "चंदौली मंडी" },
];
