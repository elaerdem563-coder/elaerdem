import { Blocks, Cpu, Palette, Workflow } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";

const MISSIONS: Array<{
  icon: ReactNode;
  title: string;
  text: string;
  tags: string[];
  color: string;
}> = [
  {
    icon: <Cpu size={30} strokeWidth={3} />,
    title: "AI Product Builder",
    text: "Canlı ürünlerde LLM entegrasyonları, özetleme akışları, kullanıcı geri bildirimiyle iyileştirme ve ürün mantığı kurma.",
    tags: ["AI", "LLM", "Product"],
    color: "#1765f5",
  },
  {
    icon: <Blocks size={30} strokeWidth={3} />,
    title: "Full-Stack / Web Development",
    text: "Modern web arayüzleri, backend servisleri, veritabanı kurgusu ve uçtan uca ürün geliştirme deneyimi.",
    tags: ["Next.js", "React", "Backend"],
    color: "#e83f45",
  },
  {
    icon: <Workflow size={30} strokeWidth={3} />,
    title: "Automation & Bots",
    text: "Tekrarlı işleri hızlandıran otomasyonlar, API bağlantıları, bot akışları ve veri odaklı yardımcı sistemler.",
    tags: ["Python", "API", "Bots"],
    color: "#f5c82f",
  },
  {
    icon: <Palette size={30} strokeWidth={3} />,
    title: "Product Design / UI Thinking",
    text: "Kullanıcı ihtiyacını hızlı prototiplere dönüştürme, arayüz kararlarını test etme ve okunabilir deneyimler tasarlama.",
    tags: ["UI/UX", "Prototype", "Feedback"],
    color: "#26b463",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="page-band section-block">
      <div className="page-inner">
        <SectionHead
          eyebrow="04 / EXPERIENCE"
          title="Experience Log"
          desc="Canlı ürün geliştirme, kullanıcı geri bildirimiyle iyileştirme, backend/web sistemleri, otomasyon ve yapay zeka entegrasyonları."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {MISSIONS.map((mission, index) => {
            const style = { "--card-accent": mission.color } as CSSProperties;
            return (
              <Reveal key={mission.title} delay={index * 110}>
                <article className="game-card flex h-full min-h-[320px] flex-col overflow-hidden bg-[#fffaf0]" style={style}>
                  <div className="relative z-10 flex items-center justify-between border-b-[4px] border-[#14110c] px-4 py-3" style={{ backgroundColor: mission.color }}>
                    <span className="font-pixel text-[9px] text-[#14110c]">MISSION</span>
                    <span className="h-3 w-3 border-2 border-[#14110c] bg-[#fffaf0]" />
                  </div>
                  <div className="relative z-10 flex flex-1 flex-col p-5">
                    <span className="grid h-16 w-16 place-items-center border-[4px] border-[#14110c] bg-[#fffaf0] shadow-[4px_4px_0_0_#14110c]" style={{ color: mission.color }}>
                      {mission.icon}
                    </span>
                    <h3 className="mt-5 font-pixel text-[14px] leading-6 text-[#14110c]">{mission.title}</h3>
                    <p className="mt-4 flex-1 text-[14px] font-semibold leading-7 text-[#4a4238]">{mission.text}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {mission.tags.map((tag) => (
                        <span key={tag} className="pixel-tag px-2 py-1.5 font-pixel text-[8px]">
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
