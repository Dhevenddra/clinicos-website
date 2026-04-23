# clinicos-website

> The story of ClinicOS — origin, build, stack, and screenshots. Single-scroll.
> Lives at **clinicos-story.vercel.app**.

---

### &nbsp;&nbsp;Stack

`Next.js 15` · `React 19` · `TypeScript` · `Tailwind v4` · `Framer Motion` · `Lenis` · `Shiki` · `MDX`

### &nbsp;&nbsp;Run

```bash
npm install
npm run dev
# → http://localhost:3000
```

### &nbsp;&nbsp;Structure

```
app/          layout · page · sections · components
content/      typed data for sections (timeline, tour, decisions, stack)
lib/          small helpers
public/       static assets, including /shots screenshots
```

### &nbsp;&nbsp;Content

The site narrates seven sections: **Hero** · **Problem** · **Build** · **Feature tour** · **Design system** · **Under the hood** · **Footer**. Layout and content slots are locked in `WIREFRAMES.md`; the broader plan is in `PLAN.md`.

### &nbsp;&nbsp;Deploy

Vercel, static where possible. One environment, no secrets.

---

_Built to document a weekend-and-evenings project. Not a product site._
