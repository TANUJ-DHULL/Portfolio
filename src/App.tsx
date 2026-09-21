import { useEffect, useState } from "react";
import {
  Masthead,
  Practice,
  Work,
  RecordPlate,
  Colophon,
} from "./components/Sections";
import {
  EducationRecords,
  EducationTimeline,
  InstitutionsWall,
  Credentials,
} from "./components/Education";
import { sections, profile } from "../data/content";

/* Sticky index rail — the spine of the record folder. */
function IndexRail() {
  const [active, setActive] = useState<string>("practice");

  useEffect(() => {
    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter((n): n is HTMLElement => Boolean(n));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-0 flex h-screen flex-col justify-between py-16">
        <div>
          <div className="mb-14 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md border border-brass/40 font-display text-sm font-bold text-brass">
              TD
            </span>
            <span className="micro text-muted">{profile.name}</span>
          </div>

          <nav>
            <p className="micro mb-5 text-muted/50">Index</p>
            <ul className="space-y-1">
              {sections.map((s) => {
                const on = active === s.id;
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`group flex items-baseline gap-3 border-l py-2 pl-3 transition-all duration-300 ${
                        on
                          ? "border-brass text-parchment"
                          : "border-rule text-muted hover:border-brass/50 hover:text-parchment"
                      }`}
                    >
                      <span
                        className={`num text-[0.7rem] ${
                          on ? "text-brass" : "text-brass/50"
                        }`}
                      >
                        {s.index}
                      </span>
                      <span className="micro">{s.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <p className="micro max-w-[10rem] leading-[1.8] text-muted/60">
          Record folder
          <br />
          Vol. 01 — 2026
        </p>
      </div>
    </aside>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink">
      <Masthead />
      <div className="mx-auto grid max-w-[1240px] gap-0 px-6 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-14 lg:px-10">
        <IndexRail />
        <main className="min-w-0">
          <Practice />
          <Work />
          <RecordPlate />
          <EducationRecords />
          <EducationTimeline />
          <InstitutionsWall />
          <Credentials />
          <Colophon />
        </main>
      </div>
    </div>
  );
}
