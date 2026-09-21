import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profile, focus, projects, sections } from "../../data/content";
import bookclothUrl from "../../public/images/bookcloth.jpg";
import deskUrl from "../../public/images/desk.jpg";

/* Reveal: records settle into place like a stamp coming down. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({
  index,
  title,
  kicker,
  aside,
}: {
  index: string;
  title: string;
  kicker: string;
  aside?: ReactNode;
}) {
  return (
    <Reveal>
      <div className="mb-10 flex flex-col gap-6 border-t border-rule pt-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <div className="micro flex items-center gap-3 text-brass">
            <span className="num">{index}</span>
            <span className="h-px w-8 bg-brass/50" />
            <span className="text-muted">{kicker}</span>
          </div>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,3.25rem)] leading-[1.02] font-semibold tracking-[-0.02em]">
            {title}
          </h2>
        </div>
        {aside ? (
          <div className="max-w-xs text-sm leading-relaxed text-muted">{aside}</div>
        ) : null}
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ 00 */
export function Masthead() {
  const [failed, setFailed] = useState(false);

  return (
    <header className="grain relative isolate overflow-hidden border-b border-rule">
      {/* material: dark ink-blue buckram with brass foil ruling */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(130%_110%_at_15%_0%,#1a2230_0%,#0b0d12_58%,#07080c_100%)]" />
      {!failed && (
        <img
          src={bookclothUrl}
          alt="Dark ink-blue bookcloth binding with brass foil ruling"
          onError={() => setFailed(true)}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.55] mix-blend-luminosity"
          style={{ objectFit: "cover" }}
        />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/25" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="mx-auto flex min-h-[86vh] max-w-[1240px] flex-col justify-between px-6 pt-10 pb-10 lg:px-10">
        <div className="flex items-center justify-between gap-6">
          <span className="micro text-brass">Portfolio / Record 2026</span>
          <span className="micro hidden text-muted sm:block">
            {profile.discipline}
          </span>
        </div>

        <div className="py-16">
          <h1 className="font-display font-bold tracking-[-0.03em] text-parchment">
            <span className="block text-[clamp(3.25rem,11vw,8.5rem)] leading-[0.86]">
              Tanuj
            </span>
            <span className="block pl-[0.06em] text-[clamp(3.25rem,11vw,8.5rem)] leading-[0.86] text-brass">
              Dhull
            </span>
          </h1>

          <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,32rem)_1fr] md:items-end">
            <p className="font-display text-[clamp(1.15rem,2.1vw,1.6rem)] leading-[1.35] text-parchment/90 italic">
              {profile.statement}
            </p>
            <ul className="space-y-2 md:text-right">
              <li className="micro text-teal">{profile.status}</li>
              <li className="micro text-muted">{profile.second}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-rule pt-5 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="micro text-muted transition-colors hover:text-brass"
              >
                <span className="num mr-2 text-brass/70">{s.index}</span>
                {s.label}
              </a>
            ))}
          </nav>
          <a
            href="#education"
            className="micro shrink-0 text-parchment transition-colors hover:text-brass"
          >
            The academic record ↓
          </a>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ 01 */
export function Practice() {
  return (
    <section id="practice" className="scroll-mt-8 py-20 md:py-28">
      <SectionHead
        index="01"
        kicker="Practice"
        title="What the work is made of."
        aside="Four areas, one throughline: data first, then the software that gives it a surface."
      />
      <div>
        {focus.map((f, i) => (
          <Reveal key={f.id} delay={i * 0.05}>
            <article className="group relative grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-3 border-t border-rule py-7 transition-colors duration-500 hover:bg-white/[0.02] md:grid-cols-[4rem_minmax(0,22rem)_1fr] md:gap-x-8">
              <span className="num pt-1 text-sm text-brass/80">{f.index}</span>
              <h3 className="font-display text-2xl leading-tight font-semibold tracking-[-0.01em] text-parchment transition-colors duration-500 group-hover:text-white">
                {f.title}
              </h3>
              <div className="col-start-2 md:col-start-3">
                <p className="max-w-xl text-[0.975rem] leading-relaxed text-muted">
                  {f.detail}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {f.tools.map((t) => (
                    <li
                      key={t}
                      className="num rounded-sm border border-rule px-2 py-1 text-[0.7rem] text-parchment/70"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ 02 */
export function Work() {
  return (
    <section id="work" className="scroll-mt-8 py-20 md:py-28">
      <SectionHead
        index="02"
        kicker="Selected Work"
        title="Three records, entered by hand."
        aside="Personal builds and studies. Each one was an argument with a dataset."
      />
      <div>
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.05}>
            <article className="group relative grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-4 border-t border-rule py-8 transition-colors duration-500 hover:bg-white/[0.02] md:grid-cols-[4rem_1fr_9rem] md:gap-x-8">
              <span className="num pt-2 text-sm text-brass/80">{p.index}</span>
              <div>
                <h3 className="font-display text-[clamp(1.6rem,3vw,2.35rem)] leading-[1.05] font-semibold tracking-[-0.02em] transition-colors duration-500 group-hover:text-white">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-xl text-[0.975rem] leading-relaxed text-muted">
                  {p.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <li
                      key={t}
                      className="num rounded-sm border border-rule px-2 py-1 text-[0.7rem] text-parchment/70"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-start-2 flex items-start gap-4 md:col-start-3 md:flex-col md:items-end md:text-right">
                <span className="num text-sm text-parchment/70">{p.year}</span>
                <span className="micro text-muted">{p.kind}</span>
              </div>
            </article>
          </Reveal>
        ))}
        <div className="hairline" />
      </div>
    </section>
  );
}

/* ------------------------------------------------- statement plate  */
export function RecordPlate() {
  const [failed, setFailed] = useState(false);
  return (
    <section className="grain relative isolate my-4 overflow-hidden rounded-xl border border-rule">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,#151a23_0%,#0b0d12_70%)]" />
      {!failed && (
        <img
          src={deskUrl}
          alt="A cloth-bound thesis, ledger paper and a brass ruler on a dark desk under lamplight"
          onError={() => setFailed(true)}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.5] mix-blend-luminosity"
          style={{ objectFit: "cover" }}
        />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/25" />
      <div className="relative px-6 py-16 sm:px-12 sm:py-24 lg:px-16">
        <p className="micro text-brass">Statement</p>
        <p className="mt-5 max-w-3xl font-display text-[clamp(1.45rem,3.4vw,2.6rem)] leading-[1.2] text-parchment italic">
          “This is the academic and learning journey behind Tanuj’s technical
          work.”
        </p>
        <p className="micro mt-8 text-muted">
          {profile.name} — AI → Data Science → Software → Technology
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ 07 */
export function Colophon() {
  return (
    <footer className="border-t border-rule py-16">
      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="micro text-brass">Correspondence</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-3 block font-display text-[clamp(1.9rem,5vw,3.4rem)] leading-[1.05] font-semibold tracking-[-0.02em] transition-colors hover:text-brass"
          >
            {profile.email}
          </a>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {profile.links.map((l) => (
              <li key={l.label}>
                {l.href ? (
                  <a
                    href={l.href}
                    className="micro text-muted transition-colors hover:text-brass"
                  >
                    {l.label} ↗
                  </a>
                ) : (
                  <span className="micro text-muted/50">{l.label} —</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <p className="max-w-sm text-xs leading-relaxed text-muted/70">
          Set in Fraunces, Archivo and JetBrains Mono. Institution and product
          marks are the property of their respective owners and appear only to
          identify course of study and documented learning. No employment,
          partnership, sponsorship or official representation is implied.
        </p>
      </div>
    </footer>
  );
}
