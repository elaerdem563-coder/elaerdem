import { BriefcaseBusiness, Code2, Plane } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";

const EDU: Array<{
  level: string;
  icon: ReactNode;
  title: string;
  field: string;
  status: string;
  text: string;
  color: string;
}> = [
  {
    level: "LV.01",
    icon: <Plane size={30} strokeWidth={3} />,
    title: "Özyeğin Üniversitesi",
    field: "Pilotaj / Aviation",
    status: "Devam ediyor",
    text: "Havacılık disiplini, karar verme, sorumluluk ve operasyonel düşünme odağında eğitimime devam ediyorum.",
    color: "#1765f5",
  },
  {
    level: "LV.02",
    icon: <Code2 size={30} strokeWidth={3} />,
    title: "Bilgisayar Mühendisliği",
    field: "Software Engineering",
    status: "Devam ediyor",
    text: "Yazılım geliştirme, algoritmalar, veri yapıları, backend sistemler, web teknolojileri ve yapay zeka alanlarına odaklanıyorum.",
    color: "#26b463",
  },
  {
    level: "LV.03",
    icon: <BriefcaseBusiness size={30} strokeWidth={3} />,
    title: "İstanbul Üniversitesi",
    field: "Business Administration / İşletme",
    status: "Mezun",
    text: "Ürün geliştirme, girişimcilik, iş süreçleri ve kullanıcı odaklı düşünme tarafımı destekleyen eğitim aldım.",
    color: "#f5c82f",
  },
];

export default function Education() {
  return (
    <section id="education" className="page-band section-block">
      <div className="page-inner">
        <SectionHead
          eyebrow="03 / EDUCATION"
          title="Training Log"
          desc="Pilotaj disipliniyle analitik düşünmeyi, bilgisayar mühendisliğiyle teknik üretimi, işletme eğitimiyle ürün ve kullanıcı odağını birleştiriyorum."
        />

        <div className="relative mt-10">
          <span className="absolute left-5 top-4 hidden h-[calc(100%-2rem)] w-2 bg-[#14110c] md:block" />
          <div className="grid gap-6">
            {EDU.map((item, index) => {
              const style = { "--card-accent": item.color } as CSSProperties;
              return (
                <Reveal key={item.title} delay={index * 120}>
                  <article className="relative md:pl-16">
                    <span
                      className="absolute left-0 top-8 hidden h-12 w-12 border-[4px] border-[#14110c] shadow-[4px_4px_0_0_#14110c] md:block"
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="game-card overflow-hidden bg-[#fffaf0]" style={style}>
                      <div className="relative z-10 grid gap-5 p-5 md:grid-cols-[86px_1fr_auto] md:items-center">
                        <span
                          className="grid h-20 w-20 place-items-center border-[4px] border-[#14110c] shadow-[4px_4px_0_0_#14110c]"
                          style={{ backgroundColor: item.color }}
                        >
                          {item.icon}
                        </span>
                        <div>
                          <span className="font-pixel text-[10px] text-[#1765f5]">{item.level}</span>
                          <h3 className="mt-2 font-pixel text-[18px] leading-snug text-[#14110c]">{item.title}</h3>
                          <p className="mt-1 text-[14px] font-black text-[#5d5547]">{item.field}</p>
                          <p className="mt-3 max-w-4xl text-[14px] font-semibold leading-7 text-[#4a4238]">{item.text}</p>
                        </div>
                        <span className="pixel-tag w-max px-3 py-2 font-pixel text-[9px]" style={{ color: item.color }}>
                          Durum: {item.status}
                        </span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
