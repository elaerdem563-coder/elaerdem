import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import type { CSSProperties } from "react";

type Metric = { v: string; l: string };
type Project = { name: string; accent: string; icon: string; desc: string; metrics: Metric[]; tech: string[] };

const PROJECTS: Project[] = [
  {
    name: "KATİPÖZET",
    accent: "#2f6df6",
    icon: "📄",
    desc: "Uzun videoları ve dokümanları yapay zekâ ile saniyeler içinde özetler.",
    metrics: [ { v: "30.000+", l: "özet" }, { v: "1.000+", l: "kullanıcı" } ],
    tech: ["PYTHON", "FASTAPI", "LLM", "POSTGRES"],
  },
  {
    name: "MIANDELA",
    accent: "#e8453c",
    icon: "💗",
    desc: "Kişiselleştirilmiş dijital içerik ve etkileşimli ürün platformu.",
    metrics: [ { v: "5.000+", l: "içerik" }, { v: "500+", l: "kullanıcı" } ],
    tech: ["TYPESCRIPT", "NEXT.JS", "TAILWIND", "SUPABASE"],
  },
  {
    name: "UCUZ UÇAK",
    accent: "#f4c534",
    icon: "✈️",
    desc: "Uçuş fırsatlarını ve uygun fiyatları kolayca bulmayı sağlar.",
    metrics: [ { v: "1.000+", l: "kullanıcı" }, { v: "Günlük", l: "aktif" } ],
    tech: ["PYTHON", "SCRAPY", "REACT", "POSTGRES"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-4 lg:px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <SectionHead
          eyebrow="02 / PROJECTS"
          title="Öne Çıkan Projeler"
          desc="Gerçek kullanıcılarla buluşmuş, uçtan uca geliştirdiğim canlı ürünler."
        />
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {PROJECTS.map((p, i) => {
            const border: CSSProperties = { borderColor: p.accent };
            const bg: CSSProperties = { backgroundColor: p.accent };
            const text: CSSProperties = { color: p.accent };
            return (
              <Reveal key={p.name} delay={i * 140}>
                <article className="game-card h-full flex flex-col" style={border}>
                  <div className="flex items-center gap-2.5 px-4 py-3 border-b-[3px] border-[#17140f]" style={bg}>
                    <span className="w-8 h-8 grid place-items-center bg-[#fffdf6] border-[3px] border-[#17140f] text-base">{p.icon}</span>
                    <h3 className="font-pixel text-[11px] text-white tracking-tight">{p.name}</h3>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <p className="text-[13px] text-[#17140f]/75 leading-relaxed">{p.desc}</p>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {p.metrics.map((m) => (
                        <div key={m.l} className="pixel-box-sm px-2 py-2 text-center">
                          <div className="font-pixel text-[10px]" style={text}>{m.v}</div>
                          <div className="text-[10px] text-[#17140f]/55 mt-1">{m.l}</div>
                        </div>
                      ))}
                      <div className="pixel-box-sm px-2 py-2 text-center">
                        <div className="font-pixel text-[10px] text-[#2fa457]">✓</div>
                        <div className="text-[10px] text-[#17140f]/55 mt-1">canlı</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {p.tech.map((t) => (
                        <span key={t} className="pixel-tag px-2 py-1 text-[8px] font-pixel">{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
