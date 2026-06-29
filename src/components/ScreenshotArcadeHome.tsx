"use client";

import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Check,
  Download,
  FileText,
  Flag,
  Heart,
  Mail,
  MessageSquare,
  Plane,
  ShieldCheck,
  Star,
  User,
  Users,
  Zap,
} from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { useState } from "react";

const projects = [
  {
    title: "KATİPÖZET",
    color: "var(--blue)",
    icon: <FileText size={44} strokeWidth={3} />,
    desc: "Uzun videoları ve dokümanları yapay zekâ ile saniyeler içinde özetler.",
    stats: [
      ["30.000+", "ÖZET"],
      ["1000+", "KULLANICI"],
      ["CANLI", "ÜRÜN"],
    ],
    tags: ["PYTHON", "FASTAPI", "LLM", "POSTGRES"],
  },
  {
    title: "MIANDELA",
    color: "var(--red)",
    icon: <Heart size={44} strokeWidth={3} fill="var(--red)" />,
    desc: "Kişiselleştirilmiş dijital içerik ve etkileşimli ürün platformu.",
    stats: [
      ["WEB", "ÜRÜN"],
      ["KULLANICI", "ODAKLI"],
      ["CANLI", "ÜRÜN"],
    ],
    tags: ["TYPESCRIPT", "NEXT.JS", "TAILWIND", "SUPABASE"],
  },
  {
    title: "UCUZUÇAK",
    color: "var(--yellow)",
    icon: <Plane size={52} strokeWidth={3} fill="var(--yellow)" />,
    desc: "Uçuş fırsatlarını ve uygun fiyatları kolayca bulmanı sağlar.",
    stats: [
      ["1000+", "KULLANICI"],
      ["GÜNLÜK", "AKTİF"],
      ["CANLI", "ÜRÜN"],
    ],
    tags: ["PYTHON", "SCRAPY", "REACT", "POSTGRES"],
  },
];

const skills = [
  ["PYTHON", 9, "var(--blue)"],
  ["TYPESCRIPT", 8.5, "var(--red)"],
  ["REACT", 8.5, "var(--blue)"],
  ["NEXT.JS", 8, "var(--yellow)"],
  ["NODE.JS", 7.5, "var(--green)"],
  ["AI / LLM", 8, "var(--purple)"],
  ["UI / UX", 7, "var(--red)"],
] as const;

export default function ScreenshotArcadeHome() {
  return (
    <div className="arcade-page">
      <PixelHeader />
      <main className="arcade-shell" id="home">
        <HeroArcade />
        <ProjectsSection />
        <StatsHud />
        <SkillsBars />
      </main>
      <RetroFooter />
    </div>
  );
}

function PixelHeader() {
  const links = ["Ana Sayfa", "Hakkımda", "Projeler", "Yetenekler", "Deneyim", "Blog", "İletişim"];

  return (
    <header className="pixel-header">
      <a href="#home" className="brand-lockup" aria-label="Ela Erdem ana sayfa">
        <PixelHeart large />
        <span>
          <strong>ELA ERDEM</strong>
          <small>
            <b className="blue">CODE</b>
            <i>•</i>
            <b className="red">CREATE</b>
            <i>•</i>
            <b className="green">PLAY</b>
          </small>
        </span>
      </a>

      <nav className="pixel-nav" aria-label="Ana navigasyon">
        {links.map((link, index) => (
          <a
            href={index === 0 ? "#home" : index === 2 ? "#projects" : index === 3 ? "#skills" : index === 6 ? "#contact" : "#home"}
            className={index === 0 ? "active" : ""}
            key={link}
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <span className="xp-box">
          <CoinIcon small /> XP 3200
        </span>
        <a className="cv-button" href="https://www.linkedin.com/in/ela-erdem/" target="_blank" rel="noreferrer">
          CV İNDİR <Download size={24} strokeWidth={3} />
        </a>
      </div>
    </header>
  );
}

function HeroArcade() {
  return (
    <section className="hero-grid">
      <div className="hero-copy">
        <div className="player-row">
          <span>PLAYER 1</span>
          <PixelHeart />
          <PixelHeart />
          <PixelHeart />
        </div>

        <h1>ELA ERDEM</h1>
        <p className="hero-subtitle">Software Developer / AI Projects / Interactive Products</p>
        <p className="hero-desc">
          Kod yazarım, ürün geliştiririm, problemleri çözerim.
          <br />
          Teknolojiyi insanlara fayda sağlayan eğlenceli deneyimlere dönüştürürüm.
        </p>

        <div className="cursor-badge">YAKALA BENİ!</div>

        <div className="hero-actions">
          <a href="#projects" className="hero-btn blue-btn">
            PROJELERİMİ KEŞFET <ArrowRight size={28} strokeWidth={3} />
          </a>
          <a href="#contact" className="hero-btn red-btn">
            BENİMLE İLETİŞİME GEÇ <ArrowRight size={22} strokeWidth={3} />
          </a>
        </div>

        <a href="#projects" className="press-start">
          PRESS START <ArrowRight size={22} strokeWidth={3} />
        </a>

        <span className="scroll-note">
          SCROLL TO CONTINUE <ArrowDown size={15} strokeWidth={3} />
        </span>
      </div>

      <div className="hero-side">
        <AchievementsPanel />
        <StatusPanel />
        <ArcadeWindow />
        <CurrentQuestPanel />
      </div>
    </section>
  );
}

function AchievementsPanel() {
  const badges = [
    ["PROBLEM", "SOLVER", <ShieldCheck size={20} strokeWidth={3} key="shield" />],
    ["USER", "FOCUSED", <Users size={20} strokeWidth={3} key="users" />],
    ["FAST", "LEARNER", <Zap size={20} strokeWidth={3} key="zap" />],
  ];

  return (
    <aside className="side-panel achievements-panel">
      <h2>ACHIEVEMENTS</h2>
      <div className="achievement-list">
        {badges.map(([top, bottom, icon]) => (
          <span className="achievement-badge" key={`${top}-${bottom}`}>
            {icon}
            <b>{top}</b>
            <small>{bottom}</small>
          </span>
        ))}
      </div>
    </aside>
  );
}

function StatusPanel() {
  return (
    <aside className="side-panel status-panel">
      <h2>STATUS</h2>
      <div className="status-line">
        <span>LEVEL</span>
        <b>32</b>
      </div>
      <div className="status-track">
        <span />
      </div>
      <div className="status-line">
        <span>RANK</span>
        <b>DEVELOPER</b>
      </div>
    </aside>
  );
}

function ArcadeWindow() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="arcade-window" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="window-bar">
        <i className="red-dot" />
        <i className="yellow-dot" />
        <i className="green-dot" />
        <b>ARCADE.EXE</b>
      </div>
      <div className="game-scene">
        <Cloud className="cloud-a" />
        <Cloud className="cloud-b" />
        <Spark className="spark-1 blue" />
        <Spark className="spark-2 yellow" />
        <Spark className="spark-3 red" />
        <Spark className="spark-4 green" />
        <CoinIcon />
        <QuestionBlock />
        <Ladder />
        <SpeechBubble text={hovered ? "START HERE!" : "HOVER TO UNLOCK"} />
        <Robot blink={hovered} />
        <div className="brick-floor" />
      </div>
      <div className="game-hud">
        <HudItem icon={<User size={32} fill="var(--blue)" />} value="1000+" label="kullanıcı" />
        <HudItem icon={<MessageSquare size={33} fill="var(--yellow)" />} value="30.000+" label="özet" />
        <HudItem icon={<Check size={34} />} value="3" label="canlı ürün" />
      </div>
    </section>
  );
}

function CurrentQuestPanel() {
  return (
    <aside className="side-panel quest-panel">
      <div>
        <h2>CURRENT QUEST</h2>
        <p>Kullanıcı odaklı, yapay zeka destekli ürünler geliştirmek.</p>
      </div>
      <Flag size={30} strokeWidth={3} fill="var(--red)" />
      <div className="quest-track">
        <span />
      </div>
    </aside>
  );
}

function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-title-row">
        <Star size={24} fill="var(--yellow)" strokeWidth={3} />
        <h2>ÖNE ÇIKAN PROJELER</h2>
        <span />
        <Spark className="title-spark blue" />
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  color,
  icon,
  desc,
  stats,
  tags,
}: {
  title: string;
  color: string;
  icon: ReactNode;
  desc: string;
  stats: string[][];
  tags: string[];
}) {
  return (
    <article className="project-card" style={{ "--accent": color } as CSSProperties}>
      <div className="project-top" />
      <div className="project-main">
        <span className="project-icon">{icon}</span>
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
      <div className="project-stats">
        {stats.map(([value, label], index) => (
          <span key={`${value}-${label}`}>
            {index === 0 ? <MessageSquare size={18} /> : index === 1 ? <User size={18} /> : <Check size={18} />}
            <b>{value}</b>
            <small>{label}</small>
          </span>
        ))}
      </div>
      <div className="project-tags">
        {tags.map((tag) => (
          <small key={tag}>{tag}</small>
        ))}
      </div>
    </article>
  );
}

function StatsHud() {
  const items = [
    [<User size={42} fill="var(--blue)" key="u" />, "1000+", "Kullanıcı"],
    [<MessageSquare size={42} fill="var(--yellow)" key="m" />, "30.000+", "Özet Oluşturuldu"],
    [<Check size={42} key="c" />, "3", "Canlı Ürün"],
    [<span className="infinity" key="i">∞</span>, "Öğrenme", "Heyecanı"],
  ];

  return (
    <section className="stats-hud">
      {items.map(([icon, value, label]) => (
        <div className="stats-cell" key={`${value}-${label}`}>
          {icon}
          <span>
            <b>{value}</b>
            <small>{label}</small>
          </span>
        </div>
      ))}
    </section>
  );
}

function SkillsBars() {
  return (
    <section className="skills-strip" id="skills">
      <div className="skills-title">
        <span className="equalizer">
          <i />
          <i />
          <i />
        </span>
        <h2>YETENEKLERİM</h2>
        <span />
      </div>
      <div className="skills-grid">
        {skills.map(([name, level, color]) => (
          <div className="skill-item" key={name}>
            <div>
              <b>{name}</b>
              <small>LEVEL {Math.round(level * 10)}</small>
            </div>
            <div className="segments" style={{ "--skill-color": color } as CSSProperties}>
              {Array.from({ length: 10 }).map((_, index) => (
                <i className={index < Math.round(level) ? "filled" : ""} key={`${name}-${index}`} />
              ))}
              <Star size={18} fill="var(--yellow)" strokeWidth={3} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RetroFooter() {
  return (
    <footer className="retro-footer" id="contact">
      <div className="footer-motto">
        <PixelHeart />
        <span>
          <b className="blue">Kodla.</b> <b className="red">Üret.</b> <b className="green">Keşfet.</b>
        </span>
      </div>
      <div className="socials">
        <a href="https://www.linkedin.com/in/ela-erdem/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          in
        </a>
        <a href="https://github.com/elaerdem563-coder" target="_blank" rel="noreferrer" aria-label="GitHub">
          GH
        </a>
        <a href="mailto:elaerdem563@gmail.com" aria-label="Email">
          <Mail size={24} strokeWidth={3} />
        </a>
      </div>
      <span className="copyright">© 2026 Ela Erdem</span>
      <a className="back-top" href="#home">
        Back to top <ArrowUp size={22} strokeWidth={3} />
      </a>
    </footer>
  );
}

function HudItem({ icon, value, label }: { icon: ReactNode; value: string; label: string }) {
  return (
    <div>
      {icon}
      <span>
        <b>{value}</b>
        <small>{label}</small>
      </span>
    </div>
  );
}

function PixelHeart({ large = false }: { large?: boolean }) {
  return (
    <svg className={large ? "pixel-heart large" : "pixel-heart"} viewBox="0 0 7 6" shapeRendering="crispEdges" aria-hidden="true">
      <rect x="1" y="0" width="2" height="1" />
      <rect x="4" y="0" width="2" height="1" />
      <rect x="0" y="1" width="7" height="2" />
      <rect x="1" y="3" width="5" height="1" />
      <rect x="2" y="4" width="3" height="1" />
      <rect x="3" y="5" width="1" height="1" />
    </svg>
  );
}

function CoinIcon({ small = false }: { small?: boolean }) {
  return (
    <span className={small ? "coin small" : "coin"}>
      <i />
    </span>
  );
}

function Spark({ className = "" }: { className?: string }) {
  return <span className={`spark ${className}`}>✦</span>;
}

function Cloud({ className = "" }: { className?: string }) {
  return (
    <span className={`cloud ${className}`}>
      <i />
      <b />
      <em />
    </span>
  );
}

function QuestionBlock() {
  return <span className="question-block">?</span>;
}

function Ladder() {
  return (
    <span className="ladder">
      {Array.from({ length: 5 }).map((_, index) => (
        <i key={index} />
      ))}
    </span>
  );
}

function SpeechBubble({ text }: { text: string }) {
  return (
    <span className="speech">
      {text}
      <i />
    </span>
  );
}

function Robot({ blink }: { blink: boolean }) {
  return (
    <svg className="robot" viewBox="0 0 120 124" shapeRendering="crispEdges" aria-hidden="true">
      <rect x="54" y="0" width="8" height="16" fill="var(--black)" />
      <rect x="40" y="14" width="42" height="8" fill="var(--black)" />
      <rect x="14" y="24" width="92" height="62" fill="var(--black)" />
      <rect x="22" y="32" width="76" height="46" fill="var(--green)" />
      <rect x="34" y="42" width="52" height="26" fill="#081728" />
      <rect x="44" y={blink ? 54 : 48} width="10" height={blink ? 2 : 10} fill="#7effd7" />
      <rect x="66" y={blink ? 54 : 48} width="10" height={blink ? 2 : 10} fill="#7effd7" />
      <rect x="52" y="63" width="18" height="3" fill="#7effd7" />
      <rect x="0" y="42" width="16" height="28" fill="var(--black)" />
      <rect x="104" y="42" width="16" height="28" fill="var(--black)" />
      <rect x="4" y="48" width="12" height="16" fill="var(--green)" />
      <rect x="104" y="48" width="12" height="16" fill="var(--green)" />
      <rect x="36" y="84" width="50" height="28" fill="var(--black)" />
      <rect x="44" y="92" width="34" height="14" fill="var(--green)" />
      <rect x="30" y="110" width="20" height="10" fill="var(--black)" />
      <rect x="70" y="110" width="20" height="10" fill="var(--black)" />
    </svg>
  );
}
