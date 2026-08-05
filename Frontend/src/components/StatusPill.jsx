const styles = {
  ok: "border-ok bg-okbg text-ok",
  warn: "border-warn bg-warnbg text-warn",
  bad: "border-bad bg-badbg text-bad",
};

const marks = {
  ok: "●",
  warn: "▲",
  bad: "■",
};

export default function StatusPill({ level, label, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 border-2 px-2 py-0.5 text-sm font-bold ${styles[level]} ${className}`}
    >
      <span aria-hidden="true">{marks[level]}</span>
      {label}
    </span>
  );
}

export const levelBar = {
  ok: "bg-ok",
  warn: "bg-warn",
  bad: "bg-bad",
};

export const levelBorder = {
  ok: "border-l-ok",
  warn: "border-l-warn",
  bad: "border-l-bad",
};
