import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { MailIcon, PhoneIcon, PinIcon, ClockIcon, CheckIcon } from "@/components/Icons";

export default function Contact({ t }) {
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [refNo, setRefNo] = useState(null);

  const fieldCls =
    "w-full border-2 border-line bg-page px-3 py-3 text-base text-ink placeholder:text-inksoft/70";
  const labelCls = "mb-1 block text-base font-bold text-ink";

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const mobile = String(data.get("mobile") || "").trim();
    const message = String(data.get("message") || "").trim();

    const next = {};
    if (!name) next.name = t.contact.required;
    if (!email) next.email = t.contact.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next.email = t.contact.invalidEmail;
    if (mobile && !/^[6-9]\d{9}$/.test(mobile)) next.mobile = t.contact.invalidMobile;
    if (!message) next.message = t.contact.required;

    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = document.getElementById(`f-${Object.keys(next)[0]}`);
      first?.focus();
      return;
    }

    setSending(true);
    window.setTimeout(() => {
      const n = String(Math.floor(100000 + Math.random() * 899999));
      setRefNo(`AGS/2026/${n}`);
      setSending(false);
      form.reset();
    }, 500);
  }

  const Err = ({ id, msg }) =>
    msg ? (
      <p id={id} className="mt-1 border-l-4 border-bad bg-badbg px-2 py-1 text-sm font-bold text-bad">
        {msg}
      </p>
    ) : null;

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-b-2 border-line bg-page">
      <div className="mx-auto max-w-6xl px-3 py-10">
        <SectionHeading id="contact-title" number="05" title={t.contact.heading} sub={t.contact.sub} />

        <div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
          <div className="border-2 border-line bg-surface p-5">
            {refNo ? (
              <div className="border-2 border-ok bg-okbg p-5" role="status">
                <h3 className="flex items-center gap-2 text-xl font-bold text-ok">
                  <CheckIcon className="h-6 w-6" />
                  {t.contact.successTitle}
                </h3>
                <p className="mt-2 text-base text-ink">{t.contact.successText}</p>
                <p className="mt-3 border-2 border-ok bg-page px-4 py-3 text-lg font-bold text-ink">
                  {t.contact.refLabel}: <span className="text-brand">{refNo}</span>
                </p>
                <button
                  type="button"
                  onClick={() => setRefNo(null)}
                  className="mt-4 border-2 border-brand bg-brand px-5 py-3 text-base font-bold text-white hover:bg-branddark"
                >
                  {t.contact.another}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="f-name" className={labelCls}>
                      {t.contact.name} <span className="text-bad">*</span>
                    </label>
                    <input
                      id="f-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder={t.contact.namePh}
                      className={fieldCls}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "e-name" : undefined}
                    />
                    <Err id="e-name" msg={errors.name} />
                  </div>

                  <div>
                    <label htmlFor="f-email" className={labelCls}>
                      {t.contact.email} <span className="text-bad">*</span>
                    </label>
                    <input
                      id="f-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder={t.contact.emailPh}
                      className={fieldCls}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "e-email" : undefined}
                    />
                    <Err id="e-email" msg={errors.email} />
                  </div>

                  <div>
                    <label htmlFor="f-mobile" className={labelCls}>
                      {t.contact.mobile}
                    </label>
                    <input
                      id="f-mobile"
                      name="mobile"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      placeholder={t.contact.mobilePh}
                      className={fieldCls}
                      aria-invalid={!!errors.mobile}
                      aria-describedby={errors.mobile ? "e-mobile" : undefined}
                    />
                    <Err id="e-mobile" msg={errors.mobile} />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="f-subject" className={labelCls}>
                      {t.contact.subject}
                    </label>
                    <select id="f-subject" name="subject" className={fieldCls}>
                      {t.contact.subjects.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="f-message" className={labelCls}>
                      {t.contact.message} <span className="text-bad">*</span>
                    </label>
                    <textarea
                      id="f-message"
                      name="message"
                      rows={5}
                      placeholder={t.contact.messagePh}
                      className={fieldCls}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "e-message" : undefined}
                    />
                    <Err id="e-message" msg={errors.message} />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-5 w-full border-2 border-brand bg-brand px-6 py-4 text-lg font-bold text-white hover:bg-branddark disabled:opacity-70 sm:w-auto"
                >
                  {sending ? t.contact.submitting : t.contact.submit}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <div className="border-2 border-line bg-page p-5">
              <h3 className="flex items-center gap-2 text-lg font-bold text-ink">
                <PinIcon className="h-5 w-5 text-brand" /> {t.contact.officeTitle}
              </h3>
              <address className="mt-2 not-italic text-base text-inksoft">
                {t.contact.office.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
            </div>

            <div className="border-2 border-line bg-page p-5">
              <h3 className="flex items-center gap-2 text-lg font-bold text-ink">
                <MailIcon className="h-5 w-5 text-brand" /> {t.contact.emailTitle}
              </h3>
              <p className="mt-2 text-base break-words text-inksoft">{t.contact.officialEmail}</p>
            </div>

            <div className="border-2 border-line bg-page p-5">
              <h3 className="flex items-center gap-2 text-lg font-bold text-ink">
                <PhoneIcon className="h-5 w-5 text-brand" /> {t.contact.phoneTitle}
              </h3>
              <p className="mt-2 text-base text-inksoft">
                <a href="tel:18001801551" className="font-bold text-link underline underline-offset-2">
                  {t.contact.phone}
                </a>
              </p>
            </div>

            <div className="border-2 border-line bg-page p-5">
              <h3 className="flex items-center gap-2 text-lg font-bold text-ink">
                <ClockIcon className="h-5 w-5 text-brand" /> {t.contact.hoursTitle}
              </h3>
              <p className="mt-2 text-base text-inksoft">{t.contact.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
