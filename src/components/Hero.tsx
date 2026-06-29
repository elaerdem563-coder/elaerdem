"use client";

import { ArrowRight, CheckCircle2, Mail, MessageSquare, Users } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import PixelButton from "@/components/PixelButton";

export default function Hero() {
  const [hover, setHover] = useState(false);

  return (
    <section id="home" className="page-band section-block pt-8 lg:pt-10">
      <div className="page-inner grid min-h-[calc(100vh-124px)] items-center gap-10 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="relative">
          <PixelSpark className="-left-2 top-2 text-[#1765f5]" />
          <PixelSpark className="right-8 top-28 hidden text-[#f5c82f] sm:block" />

          <div className="mb-5 flex flex-wrap items-center gap-4">
            <span className="pixel-tag px-3 py-2 font-pixel text-[10px] text-[#1765f5]">PLAYER 1</span>
            <span className="flex items-center gap-1.5" aria-label="3 can">
              <Heart />
              <Heart />
              <Heart />
            </span>
          </div>

          <h1 className="hero-title font-pixel text-[52px] leading-[0.95] text-[#14110c] sm:text-[72px] lg:text-[86px] 2xl:text-[102px]">
            ELA ERDEM
          </h1>

          <p className="mt-5 max-w-4xl font-pixel text-[11px] leading-7 text-[#14110c] sm:text-[13px]">
            Software Developer / AI Projects / Interactive Products
          </p>

          <p className="mt-5 max-w-2xl text-[16px] font-semibold leading-8 text-[#3f392f] sm:text-[18px]">
            Teknolojiyi insanlara fayda sağlayan, kullanıcı odaklı ve etkileşimli ürünlere dönüştürüyorum.
            Yapay zeka destekli sistemler ve modern web uygulamaları geliştiriyorum.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PixelButton href="#projects" size="lg">
              Projelerimi Keşfet <ArrowRight size={18} strokeWidth={3} />
            </PixelButton>
            <PixelButton href="#contact" variant="red" size="lg">
              Benimle İletişime Geç <Mail size={18} strokeWidth={3} />
            </PixelButton>
          </div>

          <PixelButton href="#projects" variant="yellow" size="sm" className="anim-start mt-5">
            PRESS START <ArrowRight size={15} strokeWidth={3} />
          </PixelButton>
        </div>

        <div
          className="pixel-border overflow-hidden bg-[#fffaf0]"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="flex items-center gap-2 border-b-[4px] border-[#14110c] bg-[#1765f5] px-4 py-3">
            <span className="h-4 w-4 rounded-full border-[3px] border-[#14110c] bg-[#e83f45]" />
            <span className="h-4 w-4 rounded-full border-[3px] border-[#14110c] bg-[#f5c82f]" />
            <span className="h-4 w-4 rounded-full border-[3px] border-[#14110c] bg-[#26b463]" />
            <span className="ml-auto font-pixel text-[10px] text-white">ARCADE.EXE</span>
          </div>

          <div className="scene-grid relative h-[360px] overflow-hidden sm:h-[430px] xl:h-[468px]">
            <Cloud className="left-[18%] top-[12%]" />
            <Cloud className="right-[18%] top-[20%] scale-75 [animation-delay:600ms]" />

            <PixelSpark className="left-[7%] top-[24%] text-[#f5c82f]" />
            <PixelSpark className="right-[8%] top-[28%] text-[#e83f45] [animation-delay:800ms]" />
            <PixelSpark className="left-[58%] top-[48%] text-[#26b463] [animation-delay:1200ms]" />
            <PixelSpark className="right-[34%] top-[10%] text-[#f5c82f] [animation-delay:400ms]" />

            <div className="absolute left-[8%] top-[50%]">
              <Coin />
            </div>

            <div className="anim-qbounce absolute right-[22%] top-[42%] grid h-16 w-16 place-items-center border-[4px] border-[#14110c] bg-[#f5c82f] font-pixel text-3xl shadow-[5px_5px_0_0_#14110c]">
              ?
            </div>

            <div className="absolute right-[8%] top-[32%] h-40 w-14">
              <span className="absolute left-0 top-0 h-full w-2 bg-[#14110c]" />
              <span className="absolute right-0 top-0 h-full w-2 bg-[#14110c]" />
              {[12, 42, 72, 102, 132].map((top) => (
                <span key={top} className="absolute left-0 right-0 h-2 bg-[#1765f5]" style={{ top }} />
              ))}
            </div>

            <div className="absolute right-[18%] top-[13%] border-[3px] border-[#14110c] bg-[#fffaf0] px-4 py-3 font-pixel text-[10px] leading-5 shadow-[4px_4px_0_0_#14110c]">
              {hover ? "START HERE!" : "HOVER TO UNLOCK"}
              <span className="absolute -bottom-[13px] left-6 h-4 w-4 rotate-45 border-b-[3px] border-r-[3px] border-[#14110c] bg-[#fffaf0]" />
            </div>

            <div className={`absolute bottom-[82px] left-1/2 -translate-x-1/2 ${hover ? "translate-y-[-6px]" : ""}`}>
              <Mascot blink={hover} />
            </div>

            <div className="brick absolute bottom-10 left-0 h-10 w-full border-y-[4px] border-[#14110c]" />
            <div className="absolute bottom-0 left-0 h-10 w-full border-t-[4px] border-[#14110c] bg-[#26b463]" />
          </div>

          <div className="grid border-t-[4px] border-[#14110c] bg-[#fffaf0] sm:grid-cols-3">
            <Hud icon={<Users size={30} fill="#1765f5" className="text-[#1765f5]" />} value="1000+" label="kullanıcı" />
            <Hud
              icon={<MessageSquare size={30} fill="#f5c82f" className="text-[#14110c]" />}
              value="30.000+"
              label="özet"
            />
            <Hud icon={<CheckCircle2 size={31} fill="#26b463" className="text-[#14110c]" />} value="3" label="canlı ürün" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Hud({ icon, value, label }: { icon: ReactNode; value: string; label: string }) {
  return (
    <div className="flex items-center gap-4 border-t-[3px] border-[#14110c] px-5 py-4 first:border-t-0 sm:border-l-[3px] sm:border-t-0 sm:first:border-l-0">
      {icon}
      <div>
        <div className="font-pixel text-[15px] text-[#14110c]">{value}</div>
        <div className="mt-1 text-[12px] font-bold text-[#5d5547]">{label}</div>
      </div>
    </div>
  );
}

function Heart() {
  return (
    <svg width="24" height="21" viewBox="0 0 7 6" shapeRendering="crispEdges" fill="#e83f45" aria-hidden="true">
      <rect x="1" y="0" width="2" height="1" />
      <rect x="4" y="0" width="2" height="1" />
      <rect x="0" y="1" width="7" height="2" />
      <rect x="1" y="3" width="5" height="1" />
      <rect x="2" y="4" width="3" height="1" />
      <rect x="3" y="5" width="1" height="1" />
    </svg>
  );
}

function PixelSpark({ className = "" }: { className?: string }) {
  return (
    <span className={`anim-sparkle pointer-events-none absolute font-pixel text-2xl ${className}`} aria-hidden="true">
      ✦
    </span>
  );
}

function Cloud({ className = "" }: { className?: string }) {
  return (
    <div className={`anim-cloud absolute ${className}`} aria-hidden="true">
      <div className="relative h-8 w-24">
        <span className="absolute bottom-0 left-1 h-5 w-16 border-[3px] border-[#14110c] bg-white" />
        <span className="absolute bottom-2 left-6 h-6 w-8 border-[3px] border-[#14110c] bg-white" />
        <span className="absolute bottom-0 right-1 h-4 w-9 border-[3px] border-[#14110c] bg-white" />
      </div>
    </div>
  );
}

function Coin() {
  return (
    <div className="anim-coin grid h-16 w-12 place-items-center rounded-[50%] border-[4px] border-[#14110c] bg-[#f5c82f] shadow-[4px_4px_0_0_#14110c]">
      <span className="h-10 w-4 border-x-[3px] border-[#b67d08] bg-[#ffd95a]" />
    </div>
  );
}

function Mascot({ blink }: { blink: boolean }) {
  const eyeHeight = blink ? 1 : 4;
  const eyeY = blink ? 42 : 39;

  return (
    <svg
      className="anim-float transition-transform duration-200"
      width="176"
      height="178"
      viewBox="0 0 176 178"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <rect x="82" y="8" width="10" height="20" fill="#14110c" />
      <rect x="72" y="0" width="30" height="12" fill="#14110c" />
      <rect x="24" y="30" width="128" height="86" fill="#14110c" />
      <rect x="32" y="38" width="112" height="70" fill="#26b463" />
      <rect x="46" y="50" width="84" height="42" fill="#09121f" />
      <rect x="61" y={eyeY} width="16" height={eyeHeight} fill="#85f5d2" />
      <rect x="99" y={eyeY} width="16" height={eyeHeight} fill="#85f5d2" />
      <rect x="75" y="72" width="26" height="5" fill="#85f5d2" />
      <rect x="10" y="56" width="18" height="36" fill="#14110c" />
      <rect x="148" y="56" width="18" height="36" fill="#14110c" />
      <rect x="0" y="62" width="18" height="24" fill="#26b463" />
      <rect x="158" y="62" width="18" height="24" fill="#26b463" />
      <rect x="52" y="116" width="72" height="42" fill="#14110c" />
      <rect x="60" y="124" width="56" height="28" fill="#20a75a" />
      <rect x="38" y="128" width="20" height="14" fill="#14110c" />
      <rect x="118" y="128" width="20" height="14" fill="#14110c" />
      <rect x="44" y="156" width="28" height="14" fill="#14110c" />
      <rect x="104" y="156" width="28" height="14" fill="#14110c" />
      <rect x="64" y="128" width="12" height="12" fill="#fffaf0" />
      <rect x="84" y="128" width="12" height="12" fill="#fffaf0" />
      <rect x="104" y="128" width="8" height="12" fill="#fffaf0" />
    </svg>
  );
}
