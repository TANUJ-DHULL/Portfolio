import { motion, useReducedMotion } from "framer-motion";
import { education } from "../../data/education";
import {
  learningOrgs,
  certifications,
  type LearningOrg,
} from "../../data/content";
import { InstitutionMark, StatusChip } from "./Logo";
import { Reveal, SectionHead } from "./Sections";

/* ================================================================== 03
   Education records — a ruled register, not a card grid.            */

export function EducationRecords() {
  return (
    <section id="education" className="scroll-mt-8 py-20 md:py-28">
      <SectionHead
        index="03"
        kicker="Education & Institutions"
        title="The academic record behind the work."
        aside="Every entry carries an official mark where one could be verified — otherwise a text record stands in its place."
      />

      <div>
        {education.map((e, i) => (
          <Reveal key={e.id} delay={i * 0.05}>
            <article className="group relative grid gap-6 border-t border-rule py-8 transition-all duration-500 hover:bg-white/[0.025] hover:shadow-[0_18px_40px_-32px_rgba(200,162,74,0.45)] md:grid-cols-[7.5rem_minmax(0,1fr)_13rem] md:gap-8">
              <span className="absolute top-0 bottom-0 left-0 w-px origin-top scale-y-0 bg-brass transition-transform duration-500 group-hover:scale-y-100" />

              <div className="pl-4 md:pl-2">
                <InstitutionMark
                  src={e.logo}
                  alt={`${e.institution} logo`}
                  initials={e.initials}
                  shape={e.logoShape}
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-[clamp(1.45rem,2.6vw,2.1rem)] leading-tight font-semibold tracking-[-0.015em] text-parchment/90 transition-colors duration-500 group-hover:text-white">
                    {e.institution}
                  </h3>
                  <span className="micro text-brass/70">{e.category}</span>
                </div>
                <p className="mt-2 text-base text-parchment/75">{e.program}</p>
                {e.note ? (
                  <p className="mt-4 max-w-xl font-display text-[0.95rem] leading-relaxed text-muted italic">
                    {e.note}
                  </p>
                ) : null}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {e.focus.map((f) => (
                    <li
                      key={f}
                      className="num rounded-sm border border-rule px-2 py-1 text-[0.7rem] text-parchment/70"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-start gap-4 md:flex-col md:items-end md:text-right">
                <StatusChip status={e.status} placeholder={e.placeholder} />
                <span className="num text-sm text-parchment/70">{e.year}</span>
                {e.location ? (
                  <span className="micro text-muted/70">{e.location}</span>
                ) : null}
                {e.website ? (
                  <a
                    href={e.website}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="micro text-muted transition-colors hover:text-brass"
                  >
                    Website ↗
                  </a>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
        <div className="hairline" />
        <p className="mt-5 max-w-2xl text-xs leading-relaxed text-muted/70">
          School entries marked “awaiting record” are structurally complete and
          hold a place in the register — the school name, year and official logo
          are filled in from <span className="num">data/education.js</span>.
        </p>
      </div>
    </section>
  );
}

/* ================================================================== 04
   Timeline: a brass rail on desktop (horizontal), a ruled spine on
   mobile (vertical). Nodes seat the logo plaques.                   */

export function EducationTimeline() {
  const reduce = useReducedMotion();

  return (
    <section id="timeline" className="scroll-mt-8 py-20 md:py-28">
      <SectionHead
        index="04"
        kicker="Timeline"
        title="Entered in order of study."
        aside="Four entries on one rule — the newest first, the way a register reads."
      />

      <div className="relative">
        {/* mobile spine */}
        <div className="absolute top-0 bottom-0 left-[5px] w-px bg-rule lg:hidden" />
        {/* desktop rail */}
        <motion.div
          className="absolute top-[44px] right-0 left-0 hidden h-px origin-left bg-gradient-to-r from-brass/70 via-rule to-rule lg:block"
          initial={{ scaleX: reduce ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />

        <ol className="grid gap-0 lg:grid-cols-4 lg:gap-8">
          {education.map((e, i) => (
            <motion.li
              key={e.id}
              className="group relative pb-12 pl-10 last:pb-0 lg:pt-[4.5rem] lg:pr-6 lg:pb-0 lg:pl-0"
              initial={{ opacity: 0, y: reduce ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* node */}
              <span className="absolute top-[7px] left-0 grid h-3 w-3 place-items-center lg:top-[38px]">
                <span className="h-3 w-3 rounded-full border border-brass bg-ink transition-colors duration-500 group-hover:bg-brass" />
                <span className="absolute h-6 w-6 rounded-full border border-brass/25 transition-transform duration-500 group-hover:scale-125" />
              </span>

              <div className="transition-all duration-500 hover:-translate-y-[3px]">
                <InstitutionMark
                  src={e.logo}
                  alt={`${e.institution} logo`}
                  initials={e.initials}
                  shape={e.logoShape}
                  className="mb-5"
                />
                <p className="micro mb-2 text-brass/70">
                  {e.year} · {e.category}
                </p>
                <h3 className="font-display text-xl leading-tight font-semibold text-parchment/90 transition-colors duration-500 group-hover:text-white">
                  {e.institution}
                </h3>
                <p className="mt-1.5 text-sm text-parchment/70">{e.program}</p>
                <div className="mt-3">
                  <StatusChip status={e.status} placeholder={e.placeholder} />
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ================================================================== 05
   Institutions & Learning — the logo wall.                           */

function WallTile({ org }: { org: LearningOrg }) {
  return (
    <a
      href={org.website || undefined}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex h-full flex-col items-center rounded-xl border border-rule bg-plaque px-5 py-7 text-center shadow-[0_2px_0_rgba(255,255,255,0.02)_inset,0_18px_36px_-30px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-[3px] hover:border-brass/45 hover:shadow-[0_18px_44px_-26px_rgba(200,162,74,0.35)]"
    >
      <InstitutionMark
        src={org.logo}
        alt={`${org.name} logo`}
        initials={org.initials}
        shape={org.logoShape}
        className="mb-5"
      />
      <span className="font-display text-lg leading-tight font-semibold text-parchment/85 transition-colors duration-500 group-hover:text-white">
        {org.name}
      </span>
      <span className="micro mt-2 text-teal/90">{org.relation}</span>
    </a>
  );
}

export function InstitutionsWall() {
  const groups = ["Technology & Learning", "AI & Cloud Learning"];
  const fromEducation = education.map((e) => ({
    id: e.id,
    name: e.institution,
    group: "Education",
    relation: e.placeholder ? "School record" : "Attended",
    logo: e.logo,
    logoShape: e.logoShape,
    logoSource: e.logoSource,
    website: e.website,
    initials: e.initials,
  }));

  return (
    <section id="institutions" className="scroll-mt-8 py-20 md:py-28">
      <SectionHead
        index="05"
        kicker="Institutions & Learning"
        title="Where the learning happened."
        aside="Marks are shown to identify courses, workshops, labs and programmes of study only."
      />

      <div className="space-y-14">
        <div>
          <p className="micro mb-6 text-muted">Education</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {fromEducation.map((o, i) => (
              <Reveal key={o.id} delay={i * 0.04} className="h-full">
                <WallTile org={o} />
              </Reveal>
            ))}
          </div>
        </div>

        {groups.map((g) => {
          const items = learningOrgs.filter((o) => o.group === g);
          if (!items.length) return null;
          return (
            <div key={g}>
              <p className="micro mb-6 text-muted">{g}</p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {items.map((o, i) => (
                  <Reveal key={o.id} delay={i * 0.04} className="h-full">
                    <WallTile org={o} />
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-10 max-w-3xl border-t border-rule pt-5 text-xs leading-relaxed text-muted/75">
        Relationship key — <span className="text-teal">Attended</span> ·{" "}
        <span className="text-teal">Learning</span> ·{" "}
        <span className="text-teal">Workshop</span> ·{" "}
        <span className="text-teal">Certification</span> ·{" "}
        <span className="text-teal">Lab</span>. These labels denote documented
        learning activity only. Nothing on this page implies employment,
        partnership, sponsorship, endorsement or official representation by any
        organisation named. Marks are the property of their respective owners.
      </p>
    </section>
  );
}

/* ================================================================== 06
   Credentials                                                        */

export function Credentials() {
  const byId = new Map(learningOrgs.map((o) => [o.id, o]));

  return (
    <section id="credentials" className="scroll-mt-8 py-20 md:py-28">
      <SectionHead
        index="06"
        kicker="Credentials"
        title="Courses, labs and certifications."
        aside="Records awaiting a public credential link are marked and kept in the register rather than dressed up."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => {
          const org = byId.get(c.orgId);
          return (
            <Reveal key={c.id} delay={i * 0.05} className="h-full">
              <article className="group flex h-full flex-col rounded-xl border border-rule bg-plaque p-6 shadow-[0_2px_0_rgba(255,255,255,0.02)_inset,0_18px_36px_-30px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-[3px] hover:border-brass/45 hover:shadow-[0_18px_44px_-26px_rgba(200,162,74,0.35)]">
                <InstitutionMark
                  src={org?.logo}
                  alt={`${c.organization} logo`}
                  initials={org?.initials ?? c.organization.slice(0, 2)}
                  shape={org?.logoShape ?? "square"}
                  className="mb-5"
                />
                <h3 className="font-display text-xl leading-tight font-semibold text-parchment/90 transition-colors duration-500 group-hover:text-white">
                  {c.name}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{c.organization}</p>
                <p className="micro mt-3 text-teal/90">{c.type}</p>

                <div className="mt-auto flex items-center justify-between gap-4 border-t border-rule pt-6">
                  <span className="num text-sm text-parchment/70">{c.year}</span>
                  {c.credentialUrl ? (
                    <a
                      href={c.credentialUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="micro text-brass transition-colors hover:text-parchment"
                    >
                      View credential →
                    </a>
                  ) : (
                    <span className="micro text-muted/70">
                      Credential on request
                    </span>
                  )}
                </div>
                {c.placeholder ? (
                  <p className="micro mt-3 text-muted/65">
                    ◇ record awaits credential link
                  </p>
                ) : null}
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
