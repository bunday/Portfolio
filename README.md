# zadatolayinka.dev

Personal site: [zadatolayinka.dev](https://zadatolayinka.dev/).

## Stack

- React 19 + Vite
- Tailwind CSS v4 (configured in `src/styles.css`, not a JS config file)
- Newsreader + IBM Plex Mono, served from Google Fonts
- Deployed on Netlify

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the production build
```

## What this site is (and isn't)

It is deliberately **not** a CV. No employment history, no per-employer product
breakdowns, no borrowed metrics. Those belong in the PDF. The site covers what
gets built, how it gets shipped, what working with AI has actually taught, and
who gets taught in return.

Sections: `intro` → `building` → `shipping` → `ai` → `teaching` → contact.

## Editing content

All copy lives in [`src/data/content.js`](src/data/content.js). The components
read from it and contain no prose of their own, so adding a project means
adding an object, not touching a component.

Each entry in `building` looks like:

```js
{
  title: "Project name",
  blurb: "One line, shown collapsed.",
  note: "Live · SaaS",          // right-hand column in the index
  detail: "The paragraph revealed when the row is expanded.",
  // `detail` also takes an array of strings when an entry needs more room.
  stack: ["Bun", "TypeScript"],
  href: "https://example.com",  // optional, omit if nothing is live
  hrefLabel: "example.com",
}
```

## Design notes

- Two type families only. Serif carries all prose; mono is reserved for labels,
  metadata and figures.
- Colour is defined once as CSS custom properties on `:root` and `.dark` in
  `src/styles.css`, then mapped into Tailwind via `@theme inline`. Change a
  colour there and it changes everywhere. The one deliberate exception is the
  Toptal badge, which keeps its own brand colours and its own font, because it's a
  credential, so it's allowed to look like itself.
- `ToptalBadge` ships both of Toptal's supplied treatments: `variant="light"`
  (white with cyan tints) in the hero, and the default dark blue in the footer.
  Both render only while `profile.toptalUrl` is set.
- Dark mode is class-based and persisted to `localStorage`, with the initial
  class set by an inline script in `index.html` so there's no flash on load.
- Motion is limited to a short fade-up on first reveal, and is disabled outright
  under `prefers-reduced-motion`.

## Updating the CV link

`profile.cvUrl` must be a **delivery** URL (`res.cloudinary.com/...`), not the
`asset.cloudinary.com/...` share link Cloudinary's console offers. That one
serves an HTML viewer page, not the PDF. In the Media Library use *Copy URL*
rather than *Share*.

## License

Copyright (c) 2020-present Zadat Olayinka. All rights reserved.

The code, design and articles in this repository are intellectual property of
the individual mentioned above (unless otherwise stated) and as such CANNOT be
copied, modified, sublicensed or redistributed without permission from the
author.
