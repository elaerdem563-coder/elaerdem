import Reveal from "@/components/Reveal";

const ITEMS = [
  { icon: "👥", v: "1000+", l: "Kullanıcı" },
  { icon: "💬", v: "30.000+", l: "Özet" },
  { icon: "✅", v: "3", l: "Canlı Ürün" },
  { icon: "📚", v: "Sürekli", l: "Öğrenme" },
];

export default function Stats() {
  return (
    <section className="px-4 lg:px-6 py-4">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="pixel-box grid grid-cols-2 md:grid-cols-4">
            {ITEMS.map((it, i) => (
              <div
                key={it.l}
                className={`flex items-center gap-3 px-4 py-5 ${i > 0 ? "border-t-[3px] md:border-t-0 md:border-l-[3px] border-[#17140f]" : ""}`}
              >
                <span className="text-2xl">{it.icon}</span>
                <div className="leading-tight">
                  <div className="font-pixel text-[13px]">{it.v}</div>
                  <div className="text-[11px] text-[#17140f]/60 mt-1">{it.l}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
