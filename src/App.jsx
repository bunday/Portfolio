import Masthead from "./components/Masthead.jsx";
import Opening from "./components/Opening.jsx";
import Index from "./components/Index.jsx";
import Contact from "./components/Contact.jsx";
import { Notes, Teaching } from "./components/Notes.jsx";
import { Section } from "./components/primitives.jsx";
import { building, shipping, ai, teaching, otherwise } from "./data/content.js";

export default function App() {
  return (
    <>
      <Masthead />

      <main>
        <Opening />

        <Section id="building" label="Building">
          <p className="mb-9 max-w-[58ch] font-serif text-[1.05rem] leading-[1.75] text-muted">
            Products I've built on my own time, taken further than side projects
            usually go. Five are live and in front of real users.
          </p>
          <Index items={building} />
        </Section>

        <Section id="shipping" label="How I ship">
          <p className="mb-9 max-w-[58ch] font-serif text-[1.05rem] leading-[1.75] text-muted">
            Opinions I've arrived at by getting them wrong first.
          </p>
          <Notes items={shipping} />
        </Section>

        <Section id="ai" label="AI, in practice">
          <p className="mb-9 max-w-[58ch] font-serif text-[1.05rem] leading-[1.75] text-muted">
            What I've actually learned building with these tools, rather than
            what I'd like to be true about them.
          </p>
          <Notes items={ai} />
        </Section>

        <Section id="teaching" label="Teaching">
          <Teaching items={teaching} />
        </Section>

        <Section id="otherwise" label="Otherwise">
          <Teaching items={otherwise} />
        </Section>
      </main>

      <Contact />
    </>
  );
}
