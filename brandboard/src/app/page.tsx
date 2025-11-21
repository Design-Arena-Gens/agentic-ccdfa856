const palette = [
  {
    name: "Pure White",
    hex: "#FFFFFF",
    tone: "Pristine couture base",
  },
  {
    name: "Deep Charcoal",
    hex: "#18181A",
    tone: "Minimalist foundation",
  },
  {
    name: "Soft Gold",
    hex: "#D4B68A",
    tone: "Heritage luxe accents",
  },
  {
    name: "Ink Black",
    hex: "#050505",
    tone: "Precision linework",
  },
  {
    name: "Warm Gray",
    hex: "#B9B4AD",
    tone: "Tailor's neutral",
  },
  {
    name: "Technical Silver",
    hex: "#D8DCE1",
    tone: "Fashion-tech sheen",
  },
];

const textures = [
  {
    title: "Matte Atelier Paper",
    description: "Soft-touch stock for couture documentation.",
    className: "texture-card",
  },
  {
    title: "Gold Foil Emboss",
    description: "Soft gold foil for crests and certificates.",
    className: "foil-gleam",
  },
  {
    title: "Technical Grid",
    description: "Precision overlays grounding digital craftsmanship.",
    className: "pattern-grid",
  },
  {
    title: "Micro Pattern Lines",
    description: "Subtle linear rhythm echoing stitchwork guides.",
    className: "pattern-micro",
  },
  {
    title: "Couture Stitch Trace",
    description: "Abstract CAD curves referencing bespoke cuts.",
    className: "pattern-cad",
  },
];

const patternNotes = [
  "Ultra-thin vector lines inspired by CAD pattern drafting.",
  "Modular panels that expand across print and digital touchpoints.",
  "Balanced negative space preserving minimal luxury.",
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-16 sm:px-10 lg:px-16">
      <header className="flex flex-col gap-6 rounded-[36px] border border-white/50 bg-white/80 p-12 shadow-[0_30px_80px_rgba(0,0,0,0.08)] backdrop-blur-lg">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="uppercase tracking-[0.45em] text-xs text-neutral-500">
              Brand Identity System
            </p>
            <h1
              className="text-5xl font-medium tracking-[0.4em] text-black sm:text-6xl"
              style={{ fontFamily: "var(--serif)" }}
            >
              ITAFCOUTURE
            </h1>
            <p className="mt-3 max-w-xl text-sm text-neutral-600 sm:text-base">
              Couture-grade sewing intelligence balanced with minimal, precision-crafted aesthetics for the modern digital maison.
            </p>
          </div>
          <div className="flex flex-col items-start gap-1 lg:items-end">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Established 2024 — Digital Couture Division
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Luxury Fashion-Tech Atelier
            </span>
          </div>
        </div>
      </header>

      <section className="grid gap-10 lg:grid-cols-[2fr,1fr] lg:items-center">
        <div className="rounded-[28px] border border-black/5 bg-white p-10 shadow-[0_24px_60px_rgba(0,0,0,0.06)]">
          <h2 className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Primary Wordmark
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex items-baseline gap-3">
              <span
                className="text-[3rem] font-medium leading-none text-black sm:text-[4.2rem]"
                style={{ fontFamily: "var(--serif)" }}
              >
                ITAF
              </span>
              <span className="h-[1px] flex-1 bg-neutral-300" />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="text-[3.6rem] tracking-[0.35em] text-black sm:text-[4.6rem]"
                style={{
                  fontFamily:
                    "'Playfair Display', 'Didot', 'Bodoni MT', serif",
                  fontWeight: 400,
                }}
              >
                C
              </span>
              <span
                className="text-[2.75rem] tracking-[0.6em] text-neutral-900 sm:text-[3.4rem]"
                style={{
                  fontFamily:
                    "'Work Sans', 'SF Pro Display', 'Helvetica Neue', sans-serif",
                  letterSpacing: "0.55em",
                }}
              >
                OUTURE
              </span>
            </div>
            <p className="max-w-xl text-sm text-neutral-600">
              Ultra-thin hairlines juxtaposed with couture contrast stems. The sans-serif extension carries the maison into modern digital contexts while preserving editorial gravitas.
            </p>
          </div>
        </div>
        <div className="relative flex aspect-square items-center justify-center rounded-[28px] border border-black/5 bg-white p-10 shadow-[0_24px_60px_rgba(0,0,0,0.06)]">
          <div className="absolute inset-8 rounded-full border border-neutral-200/60 pattern-micro opacity-80" />
          <div className="absolute inset-0 rounded-[28px]">
            <div className="absolute inset-[18%] rounded-full border border-neutral-200/60 foil-gleam opacity-90" />
          </div>
          <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-black/10 bg-white/40 backdrop-blur">
            <span
              className="text-[3rem] tracking-[0.2em] text-neutral-900"
              style={{
                fontFamily:
                  "'Playfair Display', 'Didot', 'Bodoni MT', serif",
                fontWeight: 500,
              }}
            >
              I
            </span>
            <span
              className="text-[3rem] -ml-1 tracking-[0.2em] text-neutral-900"
              style={{
                fontFamily:
                  "'Work Sans', 'SF Pro Display', 'Helvetica Neue', sans-serif",
                fontWeight: 300,
              }}
            >
              C
            </span>
          </div>
          <p className="absolute bottom-6 left-1/2 w-4/5 -translate-x-1/2 text-center text-xs uppercase tracking-[0.3em] text-neutral-500">
            Monogram — Couture Geometry
          </p>
        </div>
      </section>

      <section className="rounded-[32px] border border-black/5 bg-white/80 p-10 shadow-[0_20px_55px_rgba(0,0,0,0.08)] backdrop-blur">
        <h2 className="text-xs uppercase tracking-[0.45em] text-neutral-500">
          Color Architecture
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {palette.map((swatch) => (
            <div
              key={swatch.name}
              className="group flex flex-col gap-3 rounded-3xl border border-white/60 bg-white/70 p-4 text-neutral-700 luxury-transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]"
            >
              <div
                className="h-24 rounded-2xl border border-black/5"
                style={{ backgroundColor: swatch.hex }}
              />
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                  {swatch.name}
                </span>
                <span className="font-medium text-neutral-900">
                  {swatch.hex}
                </span>
                <span className="text-xs text-neutral-500">
                  {swatch.tone}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-[32px] border border-black/5 bg-white/80 p-10 shadow-[0_24px_60px_rgba(0,0,0,0.08)] backdrop-blur">
          <h2 className="text-xs uppercase tracking-[0.45em] text-neutral-500">
            Typography System
          </h2>
          <div className="mt-8 flex flex-col gap-8">
            <div>
              <p className="text-[0.8rem] uppercase tracking-[0.45em] text-neutral-500">
                Couture Serif
              </p>
              <p
                className="mt-4 text-4xl font-medium text-neutral-900"
                style={{ fontFamily: "var(--serif)" }}
              >
                ITAFCOUTURE – Timeless Form, Tailored Intelligence.
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
                Stack: Playfair Display / Didot / Bodoni
              </p>
            </div>
            <div>
              <p className="text-[0.8rem] uppercase tracking-[0.45em] text-neutral-500">
                Modern Sans
              </p>
              <p
                className="mt-4 text-base leading-7 text-neutral-700"
                style={{ fontFamily: "var(--sans)" }}
              >
                Crafted for interface clarity and garment specification legibility. Aligns directly with SF Pro and Helvetica Neue standards for seamless platform integration.
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
                Stack: Work Sans / SF Pro / Helvetica Neue
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-[32px] border border-black/5 bg-white/80 p-10 shadow-[0_24px_60px_rgba(0,0,0,0.08)] backdrop-blur">
          <h2 className="text-xs uppercase tracking-[0.45em] text-neutral-500">
            Voice & Tone
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-neutral-500">
                Keywords
              </span>
              <p className="mt-3 text-sm text-neutral-700">
                Timeless, Architectural, Tailored Precision, Digital Atelier, Couture Intelligence.
              </p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-neutral-500">
                Application
              </span>
              <p className="mt-3 text-sm leading-7 text-neutral-700">
                Combine serif headlines with sans-serif detail layers for a hierarchy echoing atelier documentation. Maintain generous spacing and focus on precision microcopy for product specs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[32px] border border-black/5 bg-white/80 p-10 shadow-[0_24px_60px_rgba(0,0,0,0.08)] backdrop-blur">
        <h2 className="text-xs uppercase tracking-[0.45em] text-neutral-500">
          Textures & Materiality
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {textures.map((texture) => (
            <div
              key={texture.title}
              className={`group flex flex-col items-start gap-3 rounded-3xl border border-black/10 p-6 luxury-transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(0,0,0,0.12)] ${texture.className}`}
            >
              <span className="text-xs uppercase tracking-[0.5em] text-neutral-500">
                {texture.title}
              </span>
              <p className="text-sm text-neutral-700">{texture.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1.5fr,1fr]">
        <div className="rounded-[32px] border border-black/5 bg-white/80 p-10 shadow-[0_24px_60px_rgba(0,0,0,0.08)] backdrop-blur">
          <h2 className="text-xs uppercase tracking-[0.45em] text-neutral-500">
            Brand Pattern Language
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="flex aspect-video flex-col justify-between rounded-3xl border border-black/10 p-6 pattern-grid luxury-transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.12)]">
              <span className="text-xs uppercase tracking-[0.45em] text-neutral-600">
                Grid Blueprint
              </span>
              <p className="text-xs text-black/70">
                Modular scaffolding for lookbooks and measurement overlays.
              </p>
            </div>
            <div className="flex aspect-video flex-col justify-between rounded-3xl border border-black/10 p-6 pattern-micro luxury-transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.12)]">
              <span className="text-xs uppercase tracking-[0.45em] text-neutral-600">
                Micro Stitch Lines
              </span>
              <p className="text-xs text-black/70">
                Subtle linework for packaging, apparel tags, and UI accents.
              </p>
            </div>
            <div className="flex aspect-video flex-col justify-between rounded-3xl border border-black/10 p-6 pattern-cad luxury-transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.12)] md:col-span-2">
              <span className="text-xs uppercase tracking-[0.45em] text-neutral-600">
                CAD Curve Motifs
              </span>
              <p className="text-xs text-black/70">
                Abstract seamlines evoking bespoke garment engineering.
              </p>
            </div>
          </div>
          <ul className="mt-6 space-y-2 text-xs text-neutral-600">
            {patternNotes.map((note) => (
              <li key={note} className="flex items-start gap-2">
                <span className="mt-[5px] h-1 w-6 bg-neutral-500/60" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[32px] border border-black/5 bg-white/80 p-10 shadow-[0_24px_60px_rgba(0,0,0,0.08)] backdrop-blur">
          <h2 className="text-xs uppercase tracking-[0.45em] text-neutral-500">
            Imagery Direction
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            <div className="relative flex aspect-[3/4] items-end overflow-hidden rounded-3xl border border-black/5 editorial-overlay luxury-transition hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(0,0,0,0.16)]">
              <div className="w-full bg-black/55 p-6">
                <p className="text-xs uppercase tracking-[0.45em] text-white/70">
                  Black & White Editorial
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Sculptural garments, sharp contrast lighting, intimate tailoring focus.
                </p>
              </div>
            </div>
            <div className="relative flex aspect-[3/4] items-end overflow-hidden rounded-3xl border border-black/5 technical-overlay luxury-transition hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(0,0,0,0.16)]">
              <div className="w-full bg-black/55 p-6">
                <p className="text-xs uppercase tracking-[0.45em] text-white/70">
                  Technical Garment Close-ups
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Macro stitch detail, fabric engineering textures, grayscale analytical framing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
