import { Shell, Reveal } from "./primitives.jsx";
import ToptalBadge from "./ToptalBadge.jsx";
import { profile, intro } from "../data/content.js";

export default function Opening() {
  return (
    <div id="top">
      <Shell>
        <div className="grid items-start gap-12 pt-16 pb-16 sm:pt-28 sm:pb-24 lg:grid-cols-[minmax(0,1fr)_212px] lg:gap-16">
          <div>
            <Reveal>
              <p className="label">
                {profile.role} · {profile.location}
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-7 max-w-[17ch] font-serif text-[2.6rem] leading-[1.04] font-normal tracking-[-0.022em] text-balance sm:text-[4rem] lg:text-[4.6rem]">
                {intro.lead}
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-11 max-w-[64ch] space-y-5 border-t border-rule pt-10">
                {intro.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="font-serif text-[1.08rem] leading-[1.78] text-ink/85"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={140}
            className="justify-self-start lg:mt-2 lg:justify-self-end"
          >
            <ToptalBadge variant="light" />
          </Reveal>
        </div>
      </Shell>
    </div>
  );
}
