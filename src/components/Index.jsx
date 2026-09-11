import { useState } from "react";
import { Reveal } from "./primitives.jsx";

export function ArrowOut() {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden="true"
      className="h-3 w-3 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
    >
      <path d="M3.5 8.5 8.5 3.5M4.25 3.5H8.5V7.75" strokeLinecap="square" />
    </svg>
  );
}

function Toggle({ open }) {
  return (
    <span
      aria-hidden="true"
      className="relative block h-3 w-3 shrink-0 text-faint transition-colors duration-300 group-hover:text-accent"
    >
      <span className="absolute top-1/2 left-0 h-px w-3 -translate-y-1/2 bg-current" />
      <span
        className={`absolute top-0 left-1/2 h-3 w-px -translate-x-1/2 bg-current transition-transform duration-300 ${
          open ? "scale-y-0" : "scale-y-100"
        }`}
      />
    </span>
  );
}

function Row({ item, number, open, onToggle }) {
  const panelId = `panel-${number}-${item.title.replace(/\W+/g, "-").toLowerCase()}`;

  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="group grid w-full cursor-pointer grid-cols-[2rem_minmax(0,1fr)] items-baseline gap-x-4 py-5 text-left sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:gap-x-6"
      >
        <span
          className={`label nums transition-colors duration-300 ${
            open ? "text-accent" : "group-hover:text-accent"
          }`}
        >
          {String(number).padStart(2, "0")}
        </span>

        <span className="min-w-0">
          {/* role=heading rather than an <h3>, which isn't valid inside a button. */}
          <span
            role="heading"
            aria-level="3"
            className="block font-serif text-[1.35rem] leading-snug tracking-[-0.01em] sm:text-2xl"
          >
            {item.title}
          </span>
          <span className="mt-1 block font-serif text-[0.95rem] leading-relaxed text-muted">
            {item.blurb}
          </span>
          {/* The note and its affordance ride under the blurb on narrow screens. */}
          <span className="mt-2.5 flex items-center gap-2.5 sm:hidden">
            <span className="label">{item.note}</span>
            <Toggle open={open} />
          </span>
        </span>

        <span className="hidden items-center gap-3 self-center sm:flex">
          <span className="label whitespace-nowrap">{item.note}</span>
          <Toggle open={open} />
        </span>
      </button>

      {/*
        0fr → 1fr animates to auto height without measuring anything, and
        `inert` keeps the collapsed copy out of the tab order and screen readers.
      */}
      <div
        id={panelId}
        role="region"
        aria-label={item.title}
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-8 sm:grid sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-x-6">
            <div className="hidden sm:block" />
            <div className="max-w-[62ch]">
              {/* `detail` takes a string, or an array when an entry needs room. */}
              <div className="space-y-4">
                {(Array.isArray(item.detail) ? item.detail : [item.detail]).map(
                  (para) => (
                    <p
                      key={para.slice(0, 24)}
                      className="font-serif text-[1.02rem] leading-[1.75] text-ink/85"
                    >
                      {para}
                    </p>
                  )
                )}
              </div>

              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {item.stack.map((tech) => (
                  <li key={tech} className="label text-muted">
                    {tech}
                  </li>
                ))}
              </ul>

              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label mt-5 inline-flex items-center gap-1.5 text-accent hover:underline hover:underline-offset-4"
                >
                  {item.hrefLabel}
                  <ArrowOut />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/** A numbered, expandable index. One row open at a time. */
export default function Index({ items, startAt = 1 }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <ul className="border-t border-rule">
      {items.map((item, i) => (
        <Reveal
          as="li"
          key={item.title}
          delay={Math.min(i * 45, 270)}
          className="border-b border-rule"
        >
          <Row
            item={item}
            number={startAt + i}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        </Reveal>
      ))}
    </ul>
  );
}
