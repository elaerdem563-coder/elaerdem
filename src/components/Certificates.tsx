import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import type { CSSProperties } from "react";

const CERTS = [
  { icon: "🏆", title: "TÜBİTAK Proje Yarışması", sub: "İkincilik Ödülü · 2016–2017", color: "#f4c534" },
  { icon: "🗣️", title: "Havacılık İngilizcesi", sub: "SHGM Onaylı · İleri Düzey", color: "#2f6df6" },
  { icon: "🛩️", title: "Aletli Uçuş (IFR)", sub: "Uçuş Eğitimi", color: "#2fa457" },
  { icon: "👥", title: "Crew Resource Mgmt", sub: "CRM Sertifikası", color: "#e8453c" },
];

export default function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-24 px-4 lg:px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <SectionHead
          eyebrow="05 / ACHIEVEMENTS"
          title="Sertifikalar & Ödüller"
          desc="Kazandığım rozetler ve başarılar."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {CERTS.map((c, i) => {
            const ring: CSSProperties = { backgroundColor: c.color };
            return (
              <Reveal key={c.title} delay={i * 120} className="pop">
                <div className="pixel-box p-5 text-center h-full flex flex-col items-center">
                  <span className="w-14 h-14 grid place-items-center border-[3px] border-[#17140f] text-2xl" style={ring}>{c.icon}</span>
                  <h3 className="font-bold text-[#17140f] mt-3 text-sm leading-snug">{c.title}</h3>
                  <p className="text-[11px] text-[#17140f]/60 mt-1">{c.sub}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
