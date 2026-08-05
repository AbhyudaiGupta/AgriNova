export default function SectionHeading({ id, title, sub, number }) {
  return (
    <div className="mb-6 border-b-2 border-line pb-3">
      <h2 id={id} className="flex flex-wrap items-baseline gap-2 text-2xl font-bold text-brand sm:text-3xl">
        {number && (
          <span className="border border-brand px-2 py-0.5 text-sm font-bold text-brand">
            {number}
          </span>
        )}
        {title}
      </h2>
      {sub && <p className="mt-2 max-w-3xl text-base text-inksoft sm:text-lg">{sub}</p>}
    </div>
  );
}
