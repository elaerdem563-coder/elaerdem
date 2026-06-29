import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import type { CSSProperties } from "react";

const EDU = [
  { n: "01", icon: "✈️", title: "Özyeğin Üniversitesi", field: "Pilotaj / Aviation", status: "Devam ediyor", color: "#2f6df6" },
  { n: "02", icon: "💻", title: "Bilgisayar Mühendisliği", field: "Software / AI", status: "Devam ediyor", color: "#2fa457" },
  { n: "03", icon: "💼", title: "İstanbul Üniversitesi", field: "İşletme / Business Administration", status: "Mezun", color: "#f4c534" },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 px-4 lg:px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <SectionHead
          eyebrow="03 / TRAINING LOG"
          title="Eğitim Yolculuğum"
          desc="Pilotaj disipliniyle analitik düşünmeyi, bilgisayar mühendisliğiyle teknik üretimi, işletme eğitimiyle ürün ve kullanıcı odağını birleştiriyorum."
        />
        <div className="mt-8 relative pl-8">
          <span className="absolute left-3 top-2 bottom-2 w-1 bg-[#17140f]" />
          <div className="flex flex-col gap-5">
            {EDU.map((e, i) => {
              const dot: CSSProperties = { backgroundColor: e.color };
              const tag: CSSProperties = { color: e.color };
              return (
                <Reveal key={e.n} delay={i * 150}>
                  <div className="relative">
                    <span className="absolute -left-[1.45rem] top-5 w-4 h-4 border-[3px] border-[#17140f]" style={dot} />
                    <div className="pixel-box p-4 flex items-center gap-4">
                      <span className="w-12 h-12 grid place-items-center bg-[#eaf3ff] border-[3px] border-[#17140f] text-xl shrink-0">{e.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-pixel text-[9px] text-[#17140f]/45">LV.{e.n}</span>
                          <h3 className="font-bold text-[#17140f]">{e.title}</h3>
                        </div>
                        <p className="text-[13px] text-[#17140f]/70 mt-1">{e.field}</p>
                      </div>
                      <span className="pixel-tag px-2.5 py-1 text-[10px] font-bold shrink-0" style={tag}>{e.status}</span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
