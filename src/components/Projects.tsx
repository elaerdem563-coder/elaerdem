import { Bot, FileText, Plane, Radio, Users, Zap } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";

type Project = {
  name: string;
  color: string;
  bg: string;
  icon: ReactNode;
  desc: string;
  metrics: string[];
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    name: "Katipözet",
    color: "#1765f5",
    bg: "#eaf1ff",
    icon: <FileText size={40} strokeWidth={3} />,
    desc: "Yapay zeka destekli özetleme platformu. Uzun metinleri ve belgeleri saniyeler içinde anlaşılır özetlere dönüştürür.",
    metrics: ["30.000+ özet", "1000+ kullanıcı", "Canlı ürün"],
    tags: ["AI", "Next.js", "TypeScript", "Supabase"],
  },
  {
    name: "Miandela",
    color: "#e83f45",
    bg: "#fff0f4",
    icon: <Bot size={42} strokeWidth={3} />,
    desc: "Kişiselleştirilmiş dijital içerik ve interaktif ürün deneyimleri geliştirdiğim platform.",
    metrics: ["Web ürün", "Kullanıcı odaklı", "Canlı ürün"],
    tags: ["Next.js", "React", "TypeScript", "UI/UX"],
  },
  {
    name: "Ucuz Uçak",
    color: "#f5c82f",
    bg: "#fff8d7",
    icon: <Plane size={44} strokeWidth={3} />,
    desc: "Uçuş fırsatlarını ve uygun fiyatları bulmaya yardımcı akıllı seyahat otomasyonu.",
    metrics: ["Otomasyon", "Günlük aktif", "Canlı ürün"],
    tags: ["Python", "API", "Automation", "Bot"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="page-band section-block pt-6">
      <div className="page-inner">
        <SectionHead
          eyebrow="02 / PROJECTS"
          title="Öne Çıkan Projeler"
          desc="Gerçek kullanıcılarla buluşmuş, uçtan uca geliştirdiğim canlı ürünler."
        />

        <div className="grid gap-7 lg:grid-cols-3">
          {PROJECTS.map((project, index) => {
            const style = {
              "--card-accent": project.color,
              backgroundColor: project.bg,
            } as CSSProperties;

            return (
              <Reveal key={project.name} delay={index * 130}>
                <article className="game-card flex min-h-[378px] flex-col overflow-hidden" style={style}>
                  <div className="relative z-10 h-3" style={{ backgroundColor: project.color }} />
                  <div className="relative z-10 flex items-start gap-4 p-5">
                    <span
                      className="grid h-20 w-20 shrink-0 place-items-center border-[4px] border-[#14110c] bg-[#fffaf0] shadow-[5px_5px_0_0_#14110c]"
                      style={{ color: project.color }}
                    >
                      {project.icon}
                    </span>
                    <div>
                      <span className="font-pixel text-[9px] text-[#5d5547]">LIVE QUEST</span>
                      <h3 className="mt-2 font-pixel text-[17px] leading-tight text-[#14110c]">{project.name}</h3>
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-1 flex-col px-5 pb-5">
                    <p className="min-h-[104px] border-y-[3px] border-dotted border-[#14110c]/30 py-4 text-[14px] font-semibold leading-7 text-[#3f392f]">
                      {project.desc}
                    </p>

                    <div className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                      {project.metrics.map((metric, metricIndex) => (
                        <div key={metric} className="border-[3px] border-[#14110c] bg-[#fffaf0] p-2 shadow-[3px_3px_0_0_#14110c]">
                          <div className="flex items-center gap-2">
                            {metricIndex === 0 ? <Zap size={14} /> : null}
                            {metricIndex === 1 ? <Users size={14} /> : null}
                            {metricIndex === 2 ? <Radio size={14} /> : null}
                            <span className="text-[10px] font-black leading-4 text-[#14110c]">{metric}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="pixel-tag px-2.5 py-1.5 font-pixel text-[8px]">
                          {tag}
                        </span>
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
