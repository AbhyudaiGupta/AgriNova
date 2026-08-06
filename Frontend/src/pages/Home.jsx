import farmImg from "@/assets/farm-field.jpg";
import { homeServices, serviceList } from "@/lib/data";
import { serviceIcons, CheckIcon, PhoneIcon } from "@/components/Icons";

export default function Home({ t }) {
  return (
    <>
      {/* HERO */}
      <section id="home" aria-labelledby="hero-title" className="border-b-2 border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-3 py-8 md:grid-cols-[1.15fr_1fr] md:items-center md:py-12">
          <div className="fade-in">
            <p className="mb-3 inline-block border-l-4 border-accent bg-page px-3 py-1 text-sm font-semibold text-accent">
              {t.hero.badge}
            </p>

            <h1 id="hero-title" className="text-3xl leading-tight font-bold text-brand sm:text-4xl md:text-[2.6rem]">
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
                href="#/services"
                className="border-2 border-brand bg-brand px-6 py-4 text-center text-lg font-bold text-white no-underline hover:bg-branddark"
              >
                {t.hero.ctaServices}
              </a>
              <a
                href="#/dashboard"
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
      </section>

      {/* QUICK OVERVIEW */}
      <section aria-labelledby="overview-title" className="border-b-2 border-line bg-page">
        <div className="mx-auto max-w-6xl px-3 py-10">
          <h2 id="overview-title" className="mb-3 border-l-4 border-accent pl-3 text-2xl font-bold text-brand sm:text-3xl">
            {t.home.overviewHeading}
          </h2>
          <p className="max-w-4xl border-2 border-line bg-surface p-5 text-base text-ink sm:text-lg">
            {t.home.overviewText}
          </p>
        </div>
      </section>

      {/* TOP 4 SERVICES */}
      <section aria-labelledby="key-services-title" className="border-b-2 border-line bg-surface">
        <div className="mx-auto max-w-6xl px-3 py-10">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div className="border-b-2 border-line pb-3">
              <h2 id="key-services-title" className="text-2xl font-bold text-brand sm:text-3xl">
                {t.home.servicesHeading}
              </h2>
              <p className="mt-2 max-w-3xl text-base text-inksoft">{t.home.servicesSub}</p>
            </div>
            <a href="#/services" className="border-2 border-brand bg-brand px-5 py-3 text-base font-bold text-white no-underline hover:bg-branddark">
              {t.home.seeAll}
            </a>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homeServices.map((id) => {
              const Icon = serviceIcons[id];
              const item = t.services.items[id];
              return (
                <li key={id} className="flex flex-col border-2 border-line bg-page">
                  <div className="flex h-14 items-center gap-3 border-b border-line px-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-brand bg-brandsoft text-brand">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-base font-bold text-ink">{item.title}</h3>
                  </div>
                  <div className="flex grow flex-col justify-between p-4">
                    <p className="text-base text-ink">{item.text}</p>
                    <a href="#/services" className="mt-3 text-base font-bold text-link underline underline-offset-2">
                      {t.services.open} →
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* STATISTICS */}
      <section aria-labelledby="stats-title" className="border-b-2 border-line bg-page">
        <div className="mx-auto max-w-6xl px-3 py-10">
          <h2 id="stats-title" className="mb-6 border-b-2 border-line pb-3 text-2xl font-bold text-brand sm:text-3xl">
            {t.home.statsHeading}
          </h2>
          <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.stats.map((s) => (
              <div key={s.label} className="border-2 border-line bg-surface px-4 py-5 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-3xl font-bold text-brand">{s.value}</span>
                  <span className="block text-base text-inksoft">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section aria-labelledby="cta-title" className="border-t-4 border-brand bg-brand">
        <div className="mx-auto max-w-6xl px-3 py-12 text-center">
          <h2 id="cta-title" className="text-2xl font-bold text-white sm:text-3xl">
            {t.home.ctaHeading}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-base text-white/90">{t.home.ctaText}</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#/crop-advisor" className="border-2 border-white bg-white px-6 py-4 text-lg font-bold text-brand no-underline hover:bg-brandsoft">
              {t.navExtra.advisor}
            </a>
            <a href="#/services" className="border-2 border-white px-6 py-4 text-lg font-bold text-white no-underline hover:bg-white/15">
              {t.home.ctaServices}
            </a>
            <a href="#/dashboard" className="border-2 border-white px-6 py-4 text-lg font-bold text-white no-underline hover:bg-white/15">
              {t.home.ctaDashboard}
            </a>
            <a href="#/contact" className="border-2 border-white px-6 py-4 text-lg font-bold text-white no-underline hover:bg-white/15">
              {t.home.ctaContact}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
