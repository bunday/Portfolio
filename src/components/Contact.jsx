import { Shell, Reveal } from "./primitives.jsx";
import ToptalBadge from "./ToptalBadge.jsx";
import { contact, profile } from "../data/content.js";

const MAILTO = `mailto:${profile.email}`;

// No Toptal row here: the badge alongside carries that link.
const LINKS = [
  { href: profile.github, label: "GitHub", handle: "github.com/bunday" },
  { href: profile.linkedin, label: "LinkedIn", handle: "zadat-olayinka" },
  { href: profile.cvUrl, label: "CV", handle: "PDF" },
];

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-rule pt-16 pb-12 sm:pt-24">
      <Shell>
        <div className="grid gap-10 md:grid-cols-[9rem_1fr] md:gap-10">
          <h2 className="label pt-1">Work with me</h2>

          <div>
            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_212px] lg:gap-14">
              <div>
                <Reveal>
                  <p className="max-w-[42ch] font-serif text-[1.6rem] leading-[1.3] tracking-[-0.015em] text-balance sm:text-[2.1rem]">
                    {contact.statement}
                  </p>
                </Reveal>

                <Reveal delay={80}>
                  <a
                    href={MAILTO}
                    className="mt-8 inline-block font-serif text-xl break-all text-accent underline decoration-accent/30 underline-offset-[6px] transition-colors hover:decoration-accent sm:text-2xl"
                  >
                    {profile.email}
                  </a>
                </Reveal>
              </div>

              <Reveal delay={120} className="justify-self-start lg:justify-self-end">
                <ToptalBadge />
              </Reveal>
            </div>

            <Reveal delay={140}>
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-6 border-t border-rule pt-8">
                <img
                  src="/images/avatar.jpg"
                  alt={profile.name}
                  width="56"
                  height="56"
                  loading="lazy"
                  className="h-14 w-14 shrink-0 rounded-full object-cover grayscale"
                />

                <ul className="grid flex-1 gap-x-6 gap-y-5 sm:grid-cols-3">
                  {LINKS.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <span className="label block group-hover:text-accent">
                          {link.label}
                        </span>
                        <span className="mt-1 block font-serif text-[0.98rem] text-muted transition-colors group-hover:text-ink">
                          {link.handle}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

          </div>
        </div>
      </Shell>
    </footer>
  );
}
