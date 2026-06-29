import type { CSSProperties } from "react";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";

const SKILLS = [
  { name: "Python", pct: 90, color: "#1765f5" },
  { name: "TypeScript", pct: 84, color: "#e83f45" },
  { name: "React", pct: 86, color: "#1765f5" },
  { name: "Next.js", pct: 82, color: "#f5c82f" },
  { name: "Node.js", pct: 76, color: "#26b463" },
  { name: "AI / LLM", pct: 78, color: "#8f51e8" },
  { name: "UI / UX", pct: 74, color: "#e83f45" },
  { name: "Supabase / PostgreSQL", pct: 80, color: "#26b463" },
];

export default function Skills() {
  return (
    <section id="skills" className="page-band section-block">
      <div className="page-inner">
        <SectionHead
          eyebrow="06 / SKILLS"
          title="Yeteneklerim"
          desc="Ürün geliştirme, yapay zeka entegrasyonu ve modern web arayüzleri için kullandığım ana araçlar."
        />

        <div className="grid gap-x-9 gap-y-5 md:grid-cols-2 xl:grid-cols-4">
          {SKILLS.map((skill, index) => {
            const fill = {
              "--pct": `${skill.pct}%`,
              color: skill.color,
            } as CSSProperties;

            return (
              <Reveal key={skill.name} delay={index * 80}>
                <div className="border-[3px] border-[#14110c] bg-[#fffaf0] p-4 shadow-[4px_4px_0_0_#14110c]">
                  <div className="mb-3 flex min-h-8 items-center justify-between gap-3">
                    <span className="font-pixel text-[9px] leading-4 text-[#14110c]">{skill.name}</span>
                    <span className="grid h-6 w-6 place-items-center border-2 border-[#14110c] bg-[#f5c82f] text-[11px] font-black">
                      ★
                    </span>
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
