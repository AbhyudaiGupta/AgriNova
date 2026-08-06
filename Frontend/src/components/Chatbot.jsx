import { useEffect, useRef, useState } from "react";
import { ChatIcon } from "@/components/Icons";

/**
 * Rule based farming assistant. Keyword matching works for both
 * English and Hindi so it runs fully offline on low-end devices.
 */
const KB = [
  {
    id: "crop",
    keys: ["crop", "grow", "sow", "which crop", "फसल", "बोन", "बुवाई", "उगा"],
    en: "Based on your soil (pH 6.4, loam) and this season, Wheat (HD-2967) is the best choice — about 94% suitability and around ₹25,550 profit per acre. Mustard and Gram are good low-water options. Open the Crop Advisor page for the full top 5 list.",
    hi: "आपकी मिट्टी (पीएच 6.4, दोमट) और इस मौसम के अनुसार गेहूँ (एचडी-2967) सबसे अच्छा विकल्प है — लगभग 94% उपयुक्तता और प्रति एकड़ लगभग ₹25,550 लाभ। कम पानी हेतु सरसों और चना भी अच्छे हैं। पूरी सूची हेतु फसल सलाहकार पृष्ठ खोलें।",
  },
  {
    id: "irrigation",
    keys: ["irrigat", "water", "pani", "सिंचाई", "पानी", "कब पानी"],
    en: "Your soil moisture is 28%, which is below the required level. Irrigate tomorrow morning between 6 AM and 8 AM with about 25 mm of water. Rain chance is 72% in 6 hours — if it rains well, skip this irrigation.",
    hi: "आपकी मिट्टी में नमी 28% है, जो आवश्यक स्तर से कम है। कल सुबह 6 से 8 बजे के बीच लगभग 25 मिमी पानी दें। 6 घंटे में वर्षा की संभावना 72% है — अच्छी वर्षा हो जाए तो यह सिंचाई छोड़ दें।",
  },
  {
    id: "yellow",
    keys: ["yellow", "leaf", "leaves", "पीली", "पीला", "पत्त"],
    en: "Yellow leaves usually mean nitrogen deficiency. Your soil nitrogen is 142 kg/ha, which is low. Apply 20 kg urea per acre after the next irrigation. If the yellow colour is powdery on the leaf surface, it may be Yellow Rust — then spray Propiconazole 25 EC @ 200 ml per acre.",
    hi: "पत्तियाँ पीली होना आमतौर पर नाइट्रोजन की कमी दर्शाता है। आपकी मिट्टी में नाइट्रोजन 142 किग्रा/हे है, जो कम है। अगली सिंचाई के बाद प्रति एकड़ 20 किलो यूरिया डालें। यदि पत्ती पर पीला चूर्ण जैसा दिखे तो यह पीला रतुआ हो सकता है — तब प्रोपिकोनाज़ोल 25 ईसी @ 200 मिली प्रति एकड़ छिड़कें।",
  },
  {
    id: "urea",
    keys: ["urea", "fertiliz", "fertili", "npk", "यूरिया", "खाद", "उर्वरक"],
    en: "For wheat on 1 acre: apply 110 kg urea in two doses — 55 kg at week 3 (tillering) and 55 kg at week 6. Also give DAP 50 kg at sowing and MOP 20 kg at week 9. Always apply fertilizer on wet soil, never on dry soil.",
    hi: "1 एकड़ गेहूँ हेतु: 110 किलो यूरिया दो बार में दें — 55 किलो तीसरे सप्ताह (कल्ले फूटते समय) और 55 किलो छठे सप्ताह। बुवाई पर डीएपी 50 किलो और नौवें सप्ताह एमओपी 20 किलो दें। खाद हमेशा गीली मिट्टी में डालें, सूखी में कभी नहीं।",
  },
  {
    id: "price",
    keys: ["price", "market", "mandi", "msp", "sell", "भाव", "मंडी", "बेच", "एमएसपी", "बाज़ार", "बाजार"],
    en: "Today wheat is ₹2,310 per quintal at Varanasi Mandi, which is ₹35 above the MSP of ₹2,275. AI predicts around 8% increase in the next two weeks. Varanasi Mandi gives the best net profit after transport cost. See the Market page for full details.",
    hi: "आज वाराणसी मंडी में गेहूँ ₹2,310 प्रति क्विंटल है, जो ₹2,275 के एमएसपी से ₹35 अधिक है। एआई के अनुसार अगले दो सप्ताह में लगभग 8% वृद्धि संभव है। ढुलाई लागत के बाद वाराणसी मंडी सबसे अधिक शुद्ध लाभ देती है। पूरी जानकारी बाज़ार पृष्ठ पर देखें।",
  },
  {
    id: "profit",
    keys: ["profit", "cost", "income", "earn", "money", "लाभ", "लागत", "कमाई", "मुनाफ", "आय"],
    en: "For wheat on 1 acre: total cost is about ₹24,500 (seed ₹3,200, fertilizer ₹6,800, labour ₹9,500, pesticide ₹2,000, other ₹3,000). Expected yield is 22 quintal, revenue about ₹50,050, so expected profit is around ₹25,550.",
    hi: "1 एकड़ गेहूँ हेतु: कुल लागत लगभग ₹24,500 (बीज ₹3,200, खाद ₹6,800, मज़दूरी ₹9,500, कीटनाशक ₹2,000, अन्य ₹3,000)। अनुमानित उपज 22 क्विंटल, आय लगभग ₹50,050, अतः अनुमानित लाभ लगभग ₹25,550 है।",
  },
  {
    id: "disease",
    keys: ["disease", "pest", "insect", "rust", "रोग", "कीट", "रतुआ", "माहू", "बीमारी"],
    en: "Yellow rust risk in wheat is moderate right now. Check leaves every morning. For aphids use Imidacloprid 17.8 SL @ 40 ml per acre. Do not spray today — rain is expected within 6 hours.",
    hi: "अभी गेहूँ में पीला रतुआ का खतरा मध्यम है। हर सुबह पत्तियाँ देखें। माहू हेतु इमिडाक्लोप्रिड 17.8 एसएल @ 40 मिली प्रति एकड़ प्रयोग करें। आज छिड़काव न करें — 6 घंटे में वर्षा की संभावना है।",
  },
  {
    id: "weather",
    keys: ["weather", "rain", "temperature", "मौसम", "वर्षा", "बारिश", "तापमान"],
    en: "Right now temperature is 31°C, humidity 58% and rain chance is 72% within 6 hours. Do not spray pesticide today and keep harvested produce under cover.",
    hi: "इस समय तापमान 31°C, आर्द्रता 58% और 6 घंटे में वर्षा की संभावना 72% है। आज कीटनाशक का छिड़काव न करें और कटी फसल को ढककर रखें।",
  },
  {
    id: "soil",
    keys: ["soil", "ph", "moisture", "मिट्टी", "पीएच", "नमी"],
    en: "Your soil health score is 78 out of 100. pH is 6.4 (slightly acidic, acceptable), moisture 28% (low), N 142 kg/ha (low), P 46 kg/ha (sufficient), K 188 kg/ha (sufficient). Main action needed: add nitrogen and irrigate.",
    hi: "आपका मृदा स्वास्थ्य स्कोर 100 में से 78 है। पीएच 6.4 (हल्का अम्लीय, स्वीकार्य), नमी 28% (कम), N 142 किग्रा/हे (कम), P 46 किग्रा/हे (पर्याप्त), K 188 किग्रा/हे (पर्याप्त)। मुख्य कार्य: नाइट्रोजन डालें और सिंचाई करें।",
  },
  {
    id: "help",
    keys: ["help", "call", "officer", "सहायता", "मदद", "कॉल", "अधिकारी"],
    en: "You can call the Kisan Call Centre free on 1800-180-1551 between 6 AM and 10 PM. You can also visit your block agriculture officer or use the Contact page of this portal.",
    hi: "आप किसान कॉल सेंटर पर निःशुल्क 1800-180-1551 पर प्रातः 6 से रात 10 बजे तक कॉल कर सकते हैं। अपने ब्लॉक कृषि अधिकारी से भी मिल सकते हैं या इस पोर्टल का संपर्क पृष्ठ उपयोग करें।",
  },
];

function answerFor(text, lang) {
  const q = text.toLowerCase();
  const hit = KB.find((k) => k.keys.some((key) => q.includes(key.toLowerCase())));
  return hit ? hit[lang] || hit.en : null;
}

export default function Chatbot({ t, lang }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState([{ from: "ai", text: t.chat.greeting }]);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  // Reset the greeting when the portal language changes.
  useEffect(() => {
    setMsgs([{ from: "ai", text: t.chat.greeting }]);
  }, [t.chat.greeting]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [msgs, typing]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const ask = (text) => {
    const q = text.trim();
    if (!q) return;
    setMsgs((m) => [...m, { from: "you", text: q }]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      const a = answerFor(q, lang) || t.chat.fallback;
      setTyping(false);
      setMsgs((m) => [...m, { from: "ai", text: a }]);
    }, 600);
  };

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        className="fixed right-3 bottom-20 z-40 flex items-center gap-2 border-2 border-white bg-brand px-4 py-3 text-base font-bold text-white shadow-md hover:bg-branddark sm:bottom-3 no-print"
      >
        <ChatIcon className="h-5 w-5" />
        <span className="hidden sm:inline">{t.chat.open}</span>
        <span className="sm:hidden">AI</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end bg-black/40 p-0 sm:p-4 no-print" onClick={() => setOpen(false)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="chat-title"
            className="flex h-[85vh] w-full flex-col border-4 border-brand bg-page sm:h-[560px] sm:max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b-2 border-line bg-brand px-4 py-3">
              <h2 id="chat-title" className="flex items-center gap-2 text-lg font-bold text-white">
                <ChatIcon className="h-5 w-5" /> {t.chat.title}
              </h2>
              <button type="button" onClick={() => setOpen(false)} aria-label={t.chat.close}
                className="border-2 border-white px-3 py-1.5 text-base font-bold text-white hover:bg-white hover:text-brand">
                ✕
              </button>
            </div>

            <div ref={listRef} className="grow overflow-y-auto bg-surface p-3" aria-live="polite">
              <ul className="space-y-3">
                {msgs.map((m, i) => (
                  <li key={i} className={m.from === "you" ? "text-right" : ""}>
                    <p className="mb-1 text-xs font-bold text-inksoft">
                      {m.from === "you" ? t.chat.you : t.chat.ai}
                    </p>
                    <p className={`inline-block max-w-[92%] border-2 px-3 py-2 text-left text-base ${
                      m.from === "you"
                        ? "border-brand bg-brandsoft text-ink"
                        : "border-line bg-page text-ink"
                    }`}>
                      {m.text}
                    </p>
                  </li>
                ))}
                {typing && (
                  <li>
                    <p className="inline-block border-2 border-line bg-page px-3 py-2 text-base text-inksoft">
                      {t.chat.typing}
                    </p>
                  </li>
                )}
              </ul>
            </div>

            {/* Suggested questions — large tap targets for low literacy users */}
            <div className="border-t-2 border-line bg-page p-2">
              <ul className="flex flex-wrap gap-2">
                {t.chat.suggestions.map((s) => (
                  <li key={s}>
                    <button type="button" onClick={() => ask(s)}
                      className="border-2 border-line bg-surface px-3 py-2 text-sm font-semibold text-ink hover:border-brand">
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); ask(input); }}
              className="flex gap-2 border-t-2 border-line bg-page p-3"
            >
              <label htmlFor="chat-input" className="sr-only">{t.chat.placeholder}</label>
              <input
                id="chat-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.chat.placeholder}
                className="w-full border-2 border-line bg-page px-3 py-3 text-base text-ink"
                autoComplete="off"
              />
              <button type="submit" className="shrink-0 border-2 border-brand bg-brand px-4 py-3 text-base font-bold text-white hover:bg-branddark">
                {t.chat.send}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
