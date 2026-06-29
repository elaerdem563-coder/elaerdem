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
    <div className="mb-8">
      <div className="flex items-center gap-4">
        <span className="section-kicker">{eyebrow}</span>
        <span className="pixel-divider" />
      </div>
      <h2 className="mt-4 font-pixel text-[24px] leading-tight text-[#14110c] sm:text-[32px] lg:text-[42px]">
        {title}
      </h2>
      {desc ? <p className="mt-4 max-w-3xl text-[16px] font-semibold leading-8 text-[#5d5547]">{desc}</p> : null}
    </div>
  );
}
