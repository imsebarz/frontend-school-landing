import Link from "next/link";

const priceMonthly = "$150.000 COP";
const priceYearlyA = "$1.200.000 COP";
const priceYearlyB = "$1.500.000 COP";

const Brand = {
  name: "ShipFront Academy",
  tagline: "Frontend moderno + IA aplicada para construir productos que se venden.",
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-white/85">
      {children}
    </span>
  );
}

function SectionTitle({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-sm font-medium text-emerald-200/80">{kicker}</div>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      {desc ? <p className="mt-3 text-base text-white/70">{desc}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500/25 via-indigo-600/20 to-cyan-600/15 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[-10%] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      {/* Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
            <span className="text-sm font-semibold">SF</span>
          </div>
          <div className="leading-tight">
            <div className="font-semibold tracking-tight">{Brand.name}</div>
            <div className="text-xs text-white/60">{Brand.tagline}</div>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a className="hover:text-white" href="#curriculum">
            Currículo
          </a>
          <a className="hover:text-white" href="#pricing">
            Precios
          </a>
          <a className="hover:text-white" href="#faq">
            FAQ
          </a>
          <a
            className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-neutral-950 hover:bg-emerald-300"
            href="#cta"
          >
            Empezar
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-5 pb-24 pt-8 md:pt-14">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge>Suscripción</Badge>
              <Badge>Frontend</Badge>
              <Badge>IA aplicada</Badge>
              <Badge>Proyectos reales</Badge>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              Aprende a construir UIs que convierten y features con IA que sí se lanzan.
            </h1>

            <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
              Un programa por suscripción para dominar <span className="text-white">Next.js</span>,
              <span className="text-white"> TypeScript</span>, diseño de producto y <span className="text-white">integraciones de IA</span> (OpenAI y
              servicios cloud) enfocadas al frontend.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-neutral-950 hover:bg-emerald-300"
              >
                Quiero acceso (MVP)
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center rounded-full bg-white/5 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/10"
              >
                Ver currículo
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/70">
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-white">Enfoque práctico</div>
                <div className="mt-1 text-white/60">Ship fast: proyectos, no teoría eterna.</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-white">IA sin humo</div>
                <div className="mt-1 text-white/60">RAG, tool-calling, evals y costos.</div>
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm text-white/60">Incluye</div>
                <div className="mt-1 text-xl font-semibold">Ruta Frontend + AI</div>
              </div>
              <div className="rounded-2xl bg-neutral-950/60 px-4 py-2 ring-1 ring-white/10">
                <div className="text-xs text-white/60">Desde</div>
                <div className="text-sm font-semibold">{priceMonthly}/mes</div>
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-white/75">
              {[
                "Next.js (App Router), SSR/SSG, static export",
                "Componentes: Tailwind + diseño de sistemas",
                "Integraciones OpenAI: chat, tool-calling, streaming",
                "Auth, rate limits, observabilidad y seguridad",
                "Deploy: GitHub Pages / Vercel / Cloud",
                "Proyectos: landing + dashboard + feature AI",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl bg-neutral-950/50 p-4 ring-1 ring-white/10">
              <div className="text-xs text-white/60">Stack que usarás</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "Tailwind",
                  "OpenAI",
                  "Cloud",
                  "GitHub Actions",
                  "Testing",
                ].map((s) => (
                  <span key={s} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-14 grid gap-4 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 md:grid-cols-3">
          {[{
            k: "MVP-first",
            v: "Aprendes a lanzar en semanas, no meses.",
          }, {
            k: "Costo controlado",
            v: "IA con buenas prácticas de tokens y caching.",
          }, {
            k: "Frontend real",
            v: "Integraciones, edge cases y UX de producto.",
          }].map((x) => (
            <div key={x.k}>
              <div className="text-sm font-semibold">{x.k}</div>
              <div className="mt-1 text-sm text-white/65">{x.v}</div>
            </div>
          ))}
        </div>

        {/* Curriculum */}
        <section id="curriculum" className="mt-24">
          <SectionTitle
            kicker="Currículo"
            title="Frontend + IA aplicada (por módulos)"
            desc="Diseñado para que termines con un proyecto deployado, medible y listo para vender."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "M1 — Frontend moderno",
                points: [
                  "Next.js App Router, routing, metadata",
                  "State patterns, server actions (cuando aplique)",
                  "Design system: tokens, componentes, accesibilidad",
                ],
              },
              {
                title: "M2 — Integraciones Cloud",
                points: [
                  "Env vars, secrets, edge vs node runtimes",
                  "Uploads, storage, CDN, caching",
                  "Observabilidad: logs, tracing, alertas",
                ],
              },
              {
                title: "M3 — IA en el frontend (bien hecha)",
                points: [
                  "Streaming UI, tool calling",
                  "RAG básico: embeddings + retrieval",
                  "Evals, prompts, guardrails, costos",
                ],
              },
              {
                title: "M4 — Shipping & Growth",
                points: [
                  "Landing + pricing + onboarding",
                  "Analytics, experimentos y conversion",
                  "Deploy (Pages/Vercel) + CI/CD",
                ],
              },
            ].map((m) => (
              <div key={m.title} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="text-lg font-semibold">{m.title}</div>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {m.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mt-24">
          <SectionTitle
            kicker="Precios"
            title="Suscripción simple, sin letras pequeñas"
            desc="MVP: contenido + comunidad. Pagas mensual o anual."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-sm text-white/60">Mensual</div>
              <div className="mt-1 text-3xl font-semibold">{priceMonthly}</div>
              <div className="mt-1 text-sm text-white/60">Cancela cuando quieras</div>
              <a href="#cta" className="mt-6 inline-flex w-full justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-white/90">
                Empezar mensual
              </a>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                {["Acceso a módulos", "Proyectos guiados", "Actualizaciones semanales"].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20">
              <div className="inline-flex items-center gap-2">
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-400/20">
                  Mejor valor
                </span>
              </div>
              <div className="mt-3 text-sm text-white/60">Anual (promo)</div>
              <div className="mt-1 text-3xl font-semibold">{priceYearlyA}</div>
              <div className="mt-1 text-sm text-white/60">Ahorra vs mensual</div>
              <a href="#cta" className="mt-6 inline-flex w-full justify-center rounded-2xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-neutral-950 hover:bg-emerald-300">
                Empezar anual
              </a>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                {["Todo lo de mensual", "Workshops/office hours", "Plantillas + boilerplates"].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-400" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-sm text-white/60">Anual (estándar)</div>
              <div className="mt-1 text-3xl font-semibold">{priceYearlyB}</div>
              <div className="mt-1 text-sm text-white/60">Si prefieres cuota completa</div>
              <a href="#cta" className="mt-6 inline-flex w-full justify-center rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/10">
                Hablar con nosotros
              </a>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                {["Acceso completo", "Soporte por comunidad", "Roadmap público"].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/60" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-white/50">Precios MVP — los ajustamos con el producto.</p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-24">
          <SectionTitle
            kicker="FAQ"
            title="Preguntas rápidas"
            desc="Lo mínimo que necesitas saber para arrancar."
          />

          <div className="mx-auto mt-10 grid max-w-3xl gap-4">
            {[
              {
                q: "¿Para quién es?",
                a: "Para devs de frontend (junior a senior) que quieren subir de nivel en Next.js y construir features con IA sin volverse backend full-time.",
              },
              {
                q: "¿Necesito saber IA?",
                a: "No. Empezamos desde lo esencial: prompts, streaming, tool calling, RAG básico y buenas prácticas de costo/seguridad.",
              },
              {
                q: "¿Qué entrego al final?",
                a: "Un proyecto deployado (landing + feature AI) con métricas y un README listo para portafolio o producto.",
              },
              {
                q: "¿Cómo se accede?",
                a: "MVP: te damos acceso al contenido y comunidad (link privado). Luego lo convertimos en plataforma.",
              },
            ].map((f) => (
              <div key={f.q} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="text-base font-semibold">{f.q}</div>
                <div className="mt-2 text-sm text-white/70">{f.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="mt-24">
          <div className="rounded-3xl bg-gradient-to-r from-emerald-500/25 via-emerald-400/15 to-cyan-600/15 p-8 ring-1 ring-white/10 md:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">¿Listo para construir y vender?</h3>
              <p className="mt-3 text-sm text-white/80 md:text-base">
                MVP: únete a la lista. Te enviamos acceso y el primer roadmap del programa.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="mailto:imsebarz@gmail.com?subject=ShipFront%20Academy%20-%20Quiero%20acceso&body=Hola%2C%20quiero%20acceso%20al%20MVP.%20Mi%20nombre%3A%20%0A%0A"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-neutral-950 hover:bg-emerald-300"
                >
                  Enviar correo (MVP)
                </Link>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15"
                >
                  Ver precios
                </a>
              </div>
              <p className="mt-4 text-xs text-white/60">
                (CTA temporal) Luego lo cambiamos por Stripe/Typeform.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-10 text-sm text-white/60 md:flex-row">
          <div>
            © {new Date().getFullYear()} {Brand.name}. MVP.
          </div>
          <div className="flex gap-4">
            <a className="hover:text-white" href="#curriculum">
              Currículo
            </a>
            <a className="hover:text-white" href="#pricing">
              Precios
            </a>
            <a className="hover:text-white" href="#faq">
              FAQ
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
