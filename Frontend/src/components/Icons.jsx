const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: "false",
};

export function DropletIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3s6 6.5 6 10.5A6 6 0 0 1 6 13.5C6 9.5 12 3 12 3Z" />
      <path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5" />
    </svg>
  );
}

export function SeedlingIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21v-7" />
      <path d="M12 14C12 10 9 8 5 8c0 4 3 6 7 6Z" />
      <path d="M12 14c0-3.5 2.6-5.5 6.5-5.5C18.5 12 16 14 12 14Z" />
      <path d="M8 21h8" />
    </svg>
  );
}

export function FlaskIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M9 3h6" />
      <path d="M10 3v6l-5 8.5A2 2 0 0 0 6.7 21h10.6a2 2 0 0 0 1.7-3.5L14 9V3" />
      <path d="M7.5 15h9" />
    </svg>
  );
}

export function LeafBugIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 20c0-8 5-13 16-13 0 9-5 13-11 13H4Z" />
      <path d="M4 20c3-5 6-7 10-8.5" />
      <circle cx="15" cy="12" r="1.2" />
    </svg>
  );
}

export function CloudSunIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <circle cx="8" cy="8" r="3" />
      <path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.6 3.6l1 1M11.4 3.6l-1 1" />
      <path d="M11 19H7a3.5 3.5 0 1 1 .6-6.95A5 5 0 0 1 21 14.5 4.5 4.5 0 0 1 17.5 19H11Z" />
    </svg>
  );
}

export function ChartIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 20h16" />
      <rect x="5" y="12" width="3.5" height="5" />
      <rect x="10.5" y="8" width="3.5" height="9" />
      <rect x="16" y="4" width="3.5" height="13" />
    </svg>
  );
}

export function ChatIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M20 15a2 2 0 0 1-2 2H8l-4 3V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z" />
      <path d="M8 9h8M8 12.5h5" />
    </svg>
  );
}

export function PhoneIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" />
    </svg>
  );
}

export function MailIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

export function PinIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ClockIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function CheckIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function EmblemIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="7.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6;
        return (
          <line
            key={i}
            x1={24 + Math.cos(a) * 8}
            y1={24 + Math.sin(a) * 8}
            x2={24 + Math.cos(a) * 20}
            y2={24 + Math.sin(a) * 20}
            stroke="currentColor"
            strokeWidth="1.6"
          />
        );
      })}
    </svg>
  );
}

export const serviceIcons = {
  irrigation: DropletIcon,
  crop: SeedlingIcon,
  fertilizer: FlaskIcon,
  disease: LeafBugIcon,
  weather: CloudSunIcon,
  yield: ChartIcon,
  helpdesk: ChatIcon,
};
