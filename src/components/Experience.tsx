import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import type { CSSProperties } from "react";

const JOBS = [
  {
    role: "Kurucu Ortak & Yazılım Geliştirici",
    org: "KatipÖzet",
    period: "2023 — Günümüz",
    desc: "AI destekli hukuki özetleme platformunun ürün ve teknik geliştirmesini yürütüyorum. OCR, LLM tabanlı özetleme ve hukuki hesaplama araçları.",
    tags: ["Ürün", "Full-stack", "AI/LLM"],
    color: "#2f6df6",
  },
  {
    role: "Freelance Yazılım Geliştirici",
    org: "Bağımsız",
    period: "2022 — Günümüz",
    desc: "Web ve yapay zeka odaklı projeler geliştiriyorum: Miandela, Ucuz Uçak ve çeşitli arayüz/otomasyon çalışmaları.",
    tags: ["React", "Next.js", "Otomasyon"],
    color: "#e8453c",
  },
  {
    role: "Pilotaj Eğitimi / Operasyonel",
    org: "Özyeğin Üniversitesi",
    period: "Devam ediyor",
    desc: "Havacılık disiplini, kriz yönetimi ve operasyonel karar verme üzerine uygulamalı eğitim.",
    tags: ["Havacılık", "CRM", "Karar"],
    color: "#2fa457",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-4 lg:px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <SectionHead
          eyebrow="04 / EXPERIENCE"
          title="Deneyim"
          desc="Ürettiğim ürünler ve üzerinde çalıştığım roller."
        />
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {JOBS.map((j, i) => {
            const bar: CSSProperties = { backgroundColor: j.color };
            return (
              <Reveal key={j.role} delay={i * 140}>
                <div className="game-card h-full flex flex-col">
                  <div className="h-2" style={bar} />
                  <div className="p-4 flex flex-col flex-1">
                    <span className="font-pixel text-[9px] text-[#17140f]/45">{j.period}</span>
                    <h3 className="font-bold text-[#17140f] mt-2">{j.role}</h3>
                    <p className="text-[12px] font-semibold text-[#2f6df6] mt-1">{j.org}</p>
                    <p className="text-[13px] text-[#17140f]/70 mt-2 leading-relaxed flex-1">{j.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {j.tags.map((t) => (
                        <span key={t} className="pixel-tag px-2 py-1 text-[9px] font-bold">{t}</span>
                      ))}
                    </div>
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
