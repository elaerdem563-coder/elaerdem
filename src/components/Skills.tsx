import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import type { CSSProperties } from "react";

const SKILLS = [
  { name: "Python", pct: 88, color: "#2f6df6" },
  { name: "TypeScript", pct: 82, color: "#e8453c" },
  { name: "React", pct: 85, color: "#2f6df6" },
  { name: "Next.js", pct: 80, color: "#f4c534" },
  { name: "Node.js", pct: 76, color: "#2fa457" },
  { name: "AI / LLM", pct: 72, color: "#9b51e0" },
  { name: "UI / UX", pct: 74, color: "#e8453c" },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 lg:px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <SectionHead
          eyebrow="06 / SKILLS"
          title="Yeteneklerim"
          desc="Sürekli geliştirdiğim teknik cephanem."
        />
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 mt-8">
          {SKILLS.map((s, i) => {
            const fill: CSSProperties = {};
            (fill as Record<string, string>)["--pct"] = `${s.pct}%`;
            (fill as Record<string, string>)["color"] = s.color;
            return (
              <Reveal key={s.name} delay={i * 90}>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-pixel text-[10px] text-[#17140f]">{s.name}</span>
                    <span className="text-[#f4c534]">★</span>
                  </div>
                  <div className="skill-track">
                    <div className="skill-fill" style={fill} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
