import { useEffect, useRef } from "react";
import { PhoneIcon } from "@/components/Icons";

export default function HelpDialog({
  t,
  open,
  onClose,
}) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-3 no-print"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="help-title"
        className="my-8 w-full max-w-2xl border-4 border-brand bg-page"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b-2 border-line bg-brand px-4 py-3">
          <h2 id="help-title" className="text-xl font-bold text-white">
            {t.help.title}
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="border-2 border-white px-3 py-1.5 text-base font-bold text-white hover:bg-white hover:text-brand"
          >
            ✕ {t.help.close}
          </button>
        </div>

        <div className="p-5">
          <ol className="space-y-3">
            {t.help.steps.map((s, i) => (
              <li key={s} className="flex items-start gap-3 border-b border-line pb-3 text-base text-ink">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center border-2 border-brand bg-brandsoft font-bold text-brand">
                  {i + 1}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ol>

          <div className="mt-5 border-2 border-accent bg-surface p-4">
            <h3 className="flex items-center gap-2 text-lg font-bold text-ink">
              <PhoneIcon className="h-5 w-5 text-accent" />
              {t.help.callTitle}
            </h3>
            <p className="mt-1 text-base text-ink">{t.help.call}</p>
            <a
              href="tel:18001801551"
              className="mt-3 inline-block border-2 border-brand bg-brand px-5 py-3 text-base font-bold text-white no-underline hover:bg-branddark"
            >
              📞 1800-180-1551
            </a>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="mt-5 w-full border-2 border-brand bg-page px-5 py-3 text-base font-bold text-brand hover:bg-brandsoft"
          >
            {t.help.close}
          </button>
        </div>
      </div>
    </div>
  );
}
