import { useEffect, useRef, useState } from "react";

/** Page gutter. Everything on the site sits inside this. */
export function Shell({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-5xl px-6 sm:px-10 ${className}`}>
      {children}
    </div>
  );
}

/**
 * The site's one layout idea: a narrow mono label column on the left,
 * content on the right. Collapses to stacked on small screens.
 */
export function Section({ id, label, children, className = "" }) {
  return (
    <section id={id} className={`border-t border-rule py-16 sm:py-24 ${className}`}>
      <Shell>
        <div className="grid gap-8 md:grid-cols-[9rem_1fr] md:gap-10">
          <h2 className="label pt-1 md:sticky md:top-24 md:self-start">{label}</h2>
          <div className="min-w-0">{children}</div>
        </div>
      </Shell>
    </section>
  );
}

/** Fades content up the first time it enters the viewport. */
export function Reveal({ children, delay = 0, as: Tag = "div", className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Honour reduced motion by skipping straight to the resting state.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/** Persisted light/dark switch. Initial class is set inline in index.html. */
export function useTheme() {
  const [dark, setDark] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      // Private browsing: the toggle still works for this session.
    }
  }, [dark]);

  return [dark, () => setDark((d) => !d)];
}
