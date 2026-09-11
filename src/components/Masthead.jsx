import { useEffect, useState } from "react";
import { Shell, useTheme } from "./primitives.jsx";
import { profile } from "../data/content.js";

// Nav sheds items as the masthead narrows, so the name and Contact always fit.
const NAV = [
  { href: "#building", label: "Building" },
  { href: "#shipping", label: "Shipping", hide: "max-[399px]:hidden" },
  { href: "#ai", label: "AI", hide: "hidden sm:inline" },
  { href: "#teaching", label: "Teaching", hide: "hidden sm:inline" },
  { href: "#otherwise", label: "Otherwise", hide: "hidden lg:inline" },
  { href: "#contact", label: "Contact" },
];

function ThemeIcon({ dark }) {
  return dark ? (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
      <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M8 0v2M8 14v2M0 8h2M14 8h2M2.3 2.3l1.4 1.4M12.3 12.3l1.4 1.4M13.7 2.3l-1.4 1.4M3.7 12.3l-1.4 1.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
      <path d="M13.5 10.4A6 6 0 0 1 5.6 2.5a6 6 0 1 0 7.9 7.9Z" />
    </svg>
  );
}

export default function Masthead() {
  const [dark, toggleTheme] = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper transition-colors duration-300 ${
        scrolled ? "border-b border-rule" : "border-b border-transparent"
      }`}
    >
      <Shell>
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#top"
            className="label shrink-0 text-[0.625rem] text-ink hover:text-accent sm:text-[0.6875rem]"
          >
            {profile.name}
          </a>

          <div className="flex items-center gap-4 sm:gap-6">
            <nav className="flex items-center gap-4 sm:gap-6">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`label text-[0.625rem] hover:text-accent sm:text-[0.6875rem] ${
                    item.hide ?? ""
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
              className="cursor-pointer text-faint transition-colors hover:text-accent"
            >
              <ThemeIcon dark={dark} />
            </button>
          </div>
        </div>
      </Shell>
    </header>
  );
}
