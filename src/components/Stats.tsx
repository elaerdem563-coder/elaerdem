import { BookOpen, CheckCircle2, MessageSquare, Users } from "lucide-react";
import Reveal from "@/components/Reveal";

const ITEMS = [
  { icon: Users, value: "1000+", label: "Kullanıcı", color: "#1765f5" },
  { icon: MessageSquare, value: "30.000+", label: "Özet", color: "#f5c82f" },
  { icon: CheckCircle2, value: "3", label: "Canlı Ürün", color: "#26b463" },
  { icon: BookOpen, value: "Sürekli", label: "Öğrenme", color: "#8f51e8" },
];

export default function Stats() {
  return (
    <section className="page-band py-5">
      <div className="page-inner">
        <Reveal>
          <div className="pixel-border overflow-hidden bg-[#fffaf0]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {ITEMS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-4 px-5 py-5 ${
                      index > 0 ? "border-t-[3px] border-[#14110c] sm:border-l-[3px] lg:border-t-0" : ""
                    } ${index === 2 ? "sm:border-l-0 lg:border-l-[3px]" : ""}`}
                  >
                    <span
                      className="grid h-12 w-12 place-items-center border-[3px] border-[#14110c] shadow-[3px_3px_0_0_#14110c]"
                      style={{ backgroundColor: item.color }}
                    >
                      <Icon size={26} strokeWidth={3} className="text-[#14110c]" />
                    </span>
                    <div>
                      <div className="font-pixel text-[16px] text-[#14110c]">{item.value}</div>
                      <div className="mt-1 text-[13px] font-bold text-[#5d5547]">{item.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
