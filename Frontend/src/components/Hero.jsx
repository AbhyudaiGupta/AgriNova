import farmImg from "@/assets/farm-field.jpg";
import { CheckIcon, PhoneIcon } from "@/components/Icons";

export default function Hero({ t }) {
  return (
    <section id="home" aria-labelledby="hero-title" className="border-b-2 border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-3 py-8 md:grid-cols-[1.15fr_1fr] md:items-center md:py-12">
        <div className="fade-in">
          <p className="mb-3 inline-block border-l-4 border-accent bg-page px-3 py-1 text-sm font-semibold text-accent">
            {t.hero.badge}
          </p>

          <h1
            id="hero-title"
            className="text-3xl leading-tight font-bold text-brand sm:text-4xl md:text-[2.6rem]"
          >
            {t.hero.title}
          </h1>

          <p className="mt-2 text-lg font-semibold text-ink sm:text-xl">{t.hero.tagline}</p>

          <p className="mt-4 max-w-2xl text-base text-inksoft sm:text-lg">{t.hero.intro}</p>

          <ul className="mt-5 space-y-2">
            {t.hero.points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-base text-ink sm:text-lg">
                <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-ok" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="border-2 border-brand bg-brand px-6 py-4 text-center text-lg font-bold text-white no-underline hover:bg-branddark"
            >
              {t.hero.ctaServices}
            </a>
            <a
              href="#dashboard"
              className="border-2 border-brand bg-page px-6 py-4 text-center text-lg font-bold text-brand no-underline hover:bg-brandsoft"
            >
              {t.hero.ctaDashboard}
            </a>
          </div>

          <p className="mt-5 flex items-center gap-2 text-base text-ink">
            <PhoneIcon className="h-5 w-5 text-brand" />
            <span>
              {t.hero.helplineLabel}:{" "}
              <a href="tel:18001801551" className="font-bold text-link underline underline-offset-2">
                {t.hero.helpline}
              </a>
            </span>
          </p>
        </div>

        <figure className="fade-in m-0 border-2 border-line bg-page p-2">
          <img
            src={farmImg}
            alt={t.hero.imageAlt}
            width={880}
            height={620}
            loading="eager"
            decoding="async"
            className="block h-auto w-full"
          />
          <figcaption className="border-t border-line px-1 pt-2 text-sm text-inksoft">
            {t.hero.imageCaption}
          </figcaption>
        </figure>
      </div>

      <div className="border-t-2 border-line bg-page">
        <div className="mx-auto max-w-6xl px-3 py-5">
          <h2 className="mb-3 border-l-4 border-accent pl-3 text-lg font-bold text-brand">
            {t.notices.title}
          </h2>
          <ul className="grid gap-2 md:grid-cols-2">
            {t.notices.items.map((n, i) => (
              <li key={n} className="flex items-start gap-2 border-b border-line pb-2 text-base text-ink">
                <span className="mt-0.5 shrink-0 border border-accent px-1.5 py-0.5 text-xs font-bold text-accent">
                  {i === 0 ? t.notices.tag : `${i + 1}`}
                </span>
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
