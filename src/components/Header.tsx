"use client";

import { Download, Menu, X } from "lucide-react";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import PixelButton from "@/components/PixelButton";

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
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-38% 0px -55% 0px", threshold: [0.08, 0.2, 0.4] }
    );

    LINKS.forEach((link) => {
      const section = document.getElementById(link.href.slice(1));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const go = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-40 page-band pt-3">
      <div
        className={`page-inner overflow-hidden border-[4px] border-[#14110c] bg-[#fffaf0]/96 shadow-[6px_6px_0_0_#14110c] backdrop-blur transition-transform duration-200 ${
          scrolled ? "translate-y-0" : ""
        }`}
      >
        <div className="grid h-2 grid-cols-6">
          <span className="bg-[#e83f45]" />
          <span className="bg-[#f5c82f]" />
          <span className="bg-[#26b463]" />
          <span className="bg-[#1765f5]" />
          <span className="bg-[#ff6fa3]" />
          <span className="bg-[#14110c]" />
        </div>

        <div className="flex min-h-[76px] items-center justify-between gap-4 px-4 py-3 sm:px-6 xl:px-8">
          <a href="#home" onClick={(event) => go(event, "#home")} className="flex shrink-0 items-center gap-3">
            <span className="grid h-11 w-11 place-items-center border-[3px] border-[#14110c] bg-[#e83f45] shadow-[3px_3px_0_0_#14110c]">
              <Heart />
            </span>
            <span className="leading-none">
              <span className="block font-pixel text-[15px] sm:text-[18px]">ELA ERDEM</span>
              <span className="mt-2 block text-[9px] font-black tracking-[0.18em]">
                <span className="text-[#1765f5]">CODE</span>
                <span className="mx-1 text-[#e83f45]">•</span>
                <span className="text-[#e83f45]">CREATE</span>
                <span className="mx-1 text-[#26b463]">•</span>
                <span className="text-[#26b463]">PLAY</span>
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-5 xl:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => go(event, link.href)}
                className={`nav-link font-pixel text-[9px] leading-none ${
                  active === link.href ? "nav-active text-[#1765f5]" : "text-[#14110c] hover:text-[#1765f5]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <span className="pixel-tag px-3 py-2 font-pixel text-[10px]">
              <span className="grid h-5 w-5 place-items-center rounded-full border-2 border-[#14110c] bg-[#f5c82f] text-[8px]">
                C
              </span>
              XP 3200
            </span>
            <PixelButton
              href="https://www.linkedin.com/in/ela-erdem/"
              target="_blank"
              rel="noreferrer"
              size="sm"
              className="min-w-[132px]"
            >
              CV İndir <Download size={15} strokeWidth={3} />
            </PixelButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="pixel-btn grid h-11 w-11 place-items-center bg-[#fffaf0] text-[#14110c] xl:hidden"
            aria-label="Menüyü aç"
          >
            {open ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
          </button>
        </div>

        {open ? (
          <div className="border-t-[3px] border-[#14110c] bg-[#f6efd9] px-4 py-4 xl:hidden">
            <nav className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => go(event, link.href)}
                  className={`border-[3px] border-[#14110c] bg-[#fffaf0] px-3 py-3 font-pixel text-[9px] shadow-[3px_3px_0_0_#14110c] ${
                    active === link.href ? "text-[#1765f5]" : "text-[#14110c]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}

function Heart() {
  return (
    <svg width="26" height="23" viewBox="0 0 7 6" shapeRendering="crispEdges" fill="#fffaf0" aria-hidden="true">
      <rect x="1" y="0" width="2" height="1" />
      <rect x="4" y="0" width="2" height="1" />
      <rect x="0" y="1" width="7" height="2" />
      <rect x="1" y="3" width="5" height="1" />
      <rect x="2" y="4" width="3" height="1" />
      <rect x="3" y="5" width="1" height="1" />
    </svg>
  );
}
