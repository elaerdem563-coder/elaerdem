import { Award, BadgeCheck, Medal, Trophy } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";

const CERTS: Array<{ icon: ReactNode; title: string; sub: string; color: string }> = [
  {
    icon: <Trophy size={34} strokeWidth={3} />,
    title: "Sertifika bilgileri güncellenecek",
    sub: "Achievement slot 01",
    color: "#f5c82f",
  },
  {
    icon: <Award size={34} strokeWidth={3} />,
    title: "Yeni sertifikalar eklenecek",
    sub: "Achievement slot 02",
    color: "#1765f5",
  },
  {
    icon: <Medal size={34} strokeWidth={3} />,
    title: "Sertifika bilgileri güncellenecek",
    sub: "Achievement slot 03",
    color: "#e83f45",
  },
  {
    icon: <BadgeCheck size={34} strokeWidth={3} />,
    title: "Yeni sertifikalar eklenecek",
    sub: "Achievement slot 04",
    color: "#26b463",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="page-band section-block">
      <div className="page-inner">
        <SectionHead
          eyebrow="05 / CERTIFICATES"
          title="Achievements / Sertifikalar"
          desc="Rozet kartları sertifika bilgileri netleştikçe güncellenmeye hazır."
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {CERTS.map((cert, index) => {
            const style = { "--card-accent": cert.color } as CSSProperties;
            return (
              <Reveal key={`${cert.sub}-${index}`} delay={index * 110} className="pop">
                <article className="game-card h-full overflow-hidden bg-[#fffaf0] text-center" style={style}>
                  <div className="relative z-10 h-3" style={{ backgroundColor: cert.color }} />
                  <div className="relative z-10 flex h-full flex-col items-center p-6">
                    <span
                      className="grid h-20 w-20 place-items-center border-[4px] border-[#14110c] shadow-[5px_5px_0_0_#14110c]"
                      style={{ backgroundColor: cert.color }}
                    >
                      {cert.icon}
                    </span>
                    <span className="mt-5 font-pixel text-[9px] text-[#1765f5]">{cert.sub}</span>
                    <h3 className="mt-3 text-[15px] font-black leading-6 text-[#14110c]">{cert.title}</h3>
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
