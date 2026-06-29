"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#home", label: "Ana Sayfa" },
  { href: "#projects", label: "Projeler" },
  { href: "#education", label: "Eğitim" },
  { href: "#experience", label: "Deneyim" },
  { href: "#certificates", label: "Sertifikalar" },
  { href: "#skills", label: "Yetenekler" },
  { href: "#contact", label: "İletişim" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 rounded-t-[14px] border-b-[4px] border-[#17140f] transition-all duration-200 ${
        scrolled ? "bg-[#f3eddd]/95 backdrop-blur" : "bg-[#f3eddd]"
      }`}
    >
      <div className="h-1.5 w-full flex rounded-t-[12px] overflow-hidden">
        <span className="flex-1 bg-[#e8453c]" />
        <span className="flex-1 bg-[#f4c534]" />
        <span className="flex-1 bg-[#2fa457]" />
        <span className="flex-1 bg-[#2f6df6]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-6 h-16 flex items-center justify-between gap-3">
        <a href="#home" onClick={(e) => go(e, "#home")} className="flex items-center gap-2.5 shrink-0">
          <span className="w-8 h-8 grid place-items-center bg-[#e8453c] border-[3px] border-[#17140f] shadow-[3px_3px_0_0_#17140f]">
            <Heart light />
          </span>
          <span className="leading-none">
            <span className="block font-pixel text-[13px] tracking-tight">ELA ERDEM</span>
            <span className="block text-[9px] tracking-[0.22em] text-[#17140f]/55 mt-1">CODE • CREATE • PLAY</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              className={`nav-link text-[10px] font-bold uppercase tracking-widest ${
                active === l.href ? "nav-active text-[#17140f]" : "text-[#17140f]/65 hover:text-[#17140f]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <span className="pixel-tag px-2.5 py-1.5 text-[10px] font-pixel">
            <span className="w-2.5 h-2.5 bg-[#f4c534] border-2 border-[#17140f]" /> XP 3200
          </span>
          <a
            href="https://www.linkedin.com/in/ela-erdem/"
            target="_blank"
            rel="noreferrer"
            className="pixel-btn bg-[#2f6df6] text-white px-3 py-2 text-[10px] font-bold uppercase tracking-widest"
          >
            CV İndir
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden pixel-box-sm w-9 h-9 grid place-items-center text-lg"
          aria-label="Menü"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open ? (
        <div className="lg:hidden bg-[#f3eddd] border-t-[3px] border-[#17140f] px-4 py-4 flex flex-col gap-3">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              className={`text-xs font-bold uppercase tracking-widest ${
                active === l.href ? "text-[#2f6df6]" : "text-[#17140f]/80"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/ela-erdem/"
            target="_blank"
            rel="noreferrer"
            className="pixel-btn bg-[#2f6df6] text-white px-3 py-2 text-[10px] font-bold uppercase tracking-widest w-max"
          >
            CV İndir
          </a>
        </div>
      ) : null}
    </header>
  );
}

function Heart({ light = false }: { light?: boolean }) {
  return (
    <svg width="16" height="14" viewBox="0 0 7 6" shapeRendering="crispEdges" fill={light ? "#fffdf6" : "#e8453c"}>
      <rect x="1" y="0" width="2" height="1" />
      <rect x="4" y="0" width="2" height="1" />
      <rect x="0" y="1" width="7" height="2" />
      <rect x="1" y="3" width="5" height="1" />
      <rect x="2" y="4" width="3" height="1" />
      <rect x="3" y="5" width="1" height="1" />
    </svg>
  );
}
