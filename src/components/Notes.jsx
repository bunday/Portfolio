import { Reveal } from "./primitives.jsx";
import { ArrowOut } from "./Index.jsx";

/**
 * Prose notes: a stated position and the reasoning under it. Visually distinct
 * from the numbered index on purpose: no numbers, no expanding, nothing to click.
 */
export function Notes({ items }) {
  return (
    <ul className="border-t border-rule">
      {items.map((item, i) => (
        <Reveal
          as="li"
          key={item.title}
          delay={Math.min(i * 45, 220)}
          className="border-b border-rule py-7"
        >
          <h3 className="max-w-[46ch] font-serif text-[1.3rem] leading-snug tracking-[-0.012em] text-balance sm:text-[1.45rem]">
            {item.title}
          </h3>
          <p className="mt-3 max-w-[62ch] font-serif text-[1.02rem] leading-[1.75] text-ink/80">
            {item.body}
          </p>
        </Reveal>
      ))}
    </ul>
  );
}

export function Teaching({ items }) {
  return (
    <ul className="border-t border-rule">
      {items.map((item, i) => (
        <Reveal
          as="li"
          key={item.title}
          delay={Math.min(i * 45, 180)}
          className="border-b border-rule py-6"
        >
          <h3 className="font-serif text-xl tracking-[-0.01em]">{item.title}</h3>
          <p className="mt-2 max-w-[62ch] font-serif text-[1rem] leading-[1.72] text-ink/80">
            {item.detail}
          </p>
          {item.href && (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="label mt-4 inline-flex items-center gap-1.5 text-accent hover:underline hover:underline-offset-4"
            >
              {item.hrefLabel}
              <ArrowOut />
            </a>
          )}
        </Reveal>
      ))}
    </ul>
  );
}
