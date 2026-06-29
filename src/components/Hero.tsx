"use client";

import { useState } from "react";

export default function Hero() {
  const [hover, setHover] = useState(false);

  return (
    <section id="home" className="scroll-mt-24 px-4 lg:px-6 pt-8 pb-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-8 items-center">
        <div className="reveal in">
          <div className="flex items-center gap-3">
            <span className="pixel-tag px-3 py-1 text-[10px] font-pixel text-[#2f6df6]">PLAYER 1</span>
            <span className="flex items-center gap-1"><Heart /><Heart /><Heart /></span>
          </div>
          <h1 className="font-pixel text-[#17140f] leading-[1.05] mt-4 text-5xl sm:text-6xl lg:text-7xl drop-shadow-[3px_3px_0_#9bb8f7]">
            ELA<br />ERDEM
          </h1>
          <p className="mt-4 font-pixel text-[10px] sm:text-[11px] text-[#2f6df6] leading-relaxed">
            SOFTWARE DEVELOPER / AI PROJECTS /<br className="hidden sm:block" /> INTERACTIVE PRODUCTS
          </p>
          <p className="mt-4 max-w-md text-[14px] leading-relaxed text-[#17140f]/75">
            Teknolojiyi insana fayda sağlayan, kullanıcı odaklı ve etkileşimli ürünlere dönüştürüyorum. Yapay zeka destekli sistemler ve modern web uygulamaları geliştiriyorum.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="pixel-btn bg-[#2f6df6] text-white px-5 py-3 text-[12px] font-bold uppercase tracking-wider">
              Projelerimi Keşfet
            </a>
            <a href="#contact" className="pixel-btn bg-[#fffdf6] text-[#e8453c] px-5 py-3 text-[12px] font-bold uppercase tracking-wider">
              Benimle İletişime Geç
            </a>
          </div>
          <a href="#projects" className="anim-pulse inline-block mt-4 pixel-btn bg-[#f4c534] text-[#17140f] px-4 py-2 text-[10px] font-pixel">
            &gt; PRESS START
          </a>
        </div>

        <div className="reveal in">
          <div
            className="pixel-box overflow-hidden"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="bg-[#2f6df6] border-b-[3px] border-[#17140f] px-3 py-2 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#e8453c] border-2 border-[#17140f]" />
              <span className="w-3 h-3 rounded-full bg-[#f4c534] border-2 border-[#17140f]" />
              <span className="w-3 h-3 rounded-full bg-[#2fa457] border-2 border-[#17140f]" />
              <span className="ml-auto font-pixel text-[8px] text-white">ARCADE.EXE</span>
            </div>

            <div className="scene-grid relative bg-[#eaf3ff] h-72 sm:h-80">
              <div className="anim-cloud absolute top-5 left-8">
                <span className="block w-11 h-4 bg-white border-2 border-[#17140f] rounded-full" />
              </div>
              <div className="anim-cloud absolute top-12 right-16 [animation-delay:700ms]">
                <span className="block w-8 h-3.5 bg-white border-2 border-[#17140f] rounded-full" />
              </div>

              <span className="anim-sparkle absolute top-6 left-1/2 text-[#2f6df6]">✦</span>
              <span className="anim-sparkle absolute top-16 right-10 text-[#f4c534] [animation-delay:600ms]">✦</span>
              <span className="anim-sparkle absolute top-24 left-10 text-[#e8453c] [animation-delay:1100ms]">✧</span>

              <div className="absolute top-4 right-4 pixel-box-sm px-2 py-1 font-pixel text-[8px]">
                {hover ? "START HERE!" : "HOVER TO UNLOCK"}
              </div>

              <div className="anim-qbounce absolute top-10 left-6 w-10 h-10 bg-[#f4c534] border-[3px] border-[#17140f] grid place-items-center font-pixel text-base shadow-[3px_3px_0_0_#17140f]">?</div>

              <div className="absolute top-14 left-28 anim-coin w-7 h-7 rounded-full bg-[#f4c534] border-[3px] border-[#17140f]" />

              <div className="absolute bottom-12 right-12 w-8 h-28">
                <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#17140f]" />
                <span className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#17140f]" />
                <span className="absolute left-0 right-0 top-2 h-1.5 bg-[#17140f]" />
                <span className="absolute left-0 right-0 top-10 h-1.5 bg-[#17140f]" />
                <span className="absolute left-0 right-0 top-[4.5rem] h-1.5 bg-[#17140f]" />
              </div>

              <div className="anim-float absolute bottom-12 left-12"><Mascot blink={hover} /></div>

              <div className="brick absolute bottom-6 left-0 w-full h-6 border-t-[3px] border-[#17140f]" />
              <div className="absolute bottom-0 left-0 w-full h-6 bg-[#2fa457] border-t-[3px] border-[#17140f]" />
            </div>

            <div className="grid grid-cols-3 border-t-[3px] border-[#17140f]">
              <Hud icon="👥" value="1000+" label="kullanıcı" />
              <Hud icon="💬" value="30.000+" label="özet" divider />
              <Hud icon="✅" value="3" label="canlı ürün" divider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Hud({ icon, value, label, divider = false }: { icon: string; value: string; label: string; divider?: boolean }) {
  return (
    <div className={`flex items-center gap-2 px-3 py-3 ${divider ? "border-l-[3px] border-[#17140f]" : ""}`}>
      <span className="text-lg">{icon}</span>
      <div className="leading-tight">
        <div className="font-pixel text-[10px]">{value}</div>
        <div className="text-[10px] text-[#17140f]/60 mt-1">{label}</div>
      </div>
    </div>
  );
}

function Heart() {
  return (
    <svg width="18" height="16" viewBox="0 0 7 6" shapeRendering="crispEdges" fill="#e8453c">
      <rect x="1" y="0" width="2" height="1" />
      <rect x="4" y="0" width="2" height="1" />
      <rect x="0" y="1" width="7" height="2" />
      <rect x="1" y="3" width="5" height="1" />
      <rect x="2" y="4" width="3" height="1" />
      <rect x="3" y="5" width="1" height="1" />
    </svg>
  );
}

function Mascot({ blink = false }: { blink?: boolean }) {
  const eyeH = blink ? 0.5 : 2;
  const eyeY = blink ? 5 : 4;
  return (
    <svg width="80" height="80" viewBox="0 0 16 16" shapeRendering="crispEdges">
      <rect x="7" y="0" width="0.6" height="2" fill="#17140f" />
      <rect x="6.7" y="0" width="1.2" height="0.8" fill="#e8453c" />
      <rect x="3" y="2" width="10" height="8" fill="#2fa457" stroke="#17140f" strokeWidth="0.5" />
      <rect x="5" y={eyeY} width="2" height={eyeH} fill="#17140f" />
      <rect x="9" y={eyeY} width="2" height={eyeH} fill="#17140f" />
      <rect x="5" y="7" width="6" height="1" fill="#17140f" />
      <rect x="4" y="10" width="8" height="4" fill="#2f6df6" stroke="#17140f" strokeWidth="0.5" />
      <rect x="2" y="11" width="2" height="2" fill="#2f6df6" stroke="#17140f" strokeWidth="0.5" />
      <rect x="12" y="11" width="2" height="2" fill="#2f6df6" stroke="#17140f" strokeWidth="0.5" />
    </svg>
  );
}
