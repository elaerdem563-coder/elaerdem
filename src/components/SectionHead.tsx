export default function SectionHead({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4 flex-wrap">
      <div>
        <span className="font-pixel text-[10px] text-[#2f6df6] tracking-widest">{eyebrow}</span>
        <h2 className="font-bold text-2xl sm:text-3xl text-[#17140f] mt-3">{title}</h2>
        {desc ? <p className="text-[14px] text-[#17140f]/70 mt-3 max-w-xl leading-relaxed">{desc}</p> : null}
      </div>
      <span className="hidden sm:block text-[#2f6df6] anim-sparkle text-xl">✦</span>
    </div>
  );
}
