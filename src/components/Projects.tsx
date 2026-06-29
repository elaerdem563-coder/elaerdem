import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import type { CSSProperties } from "react";

type Metric = { v: string; l: string };
type Project = { name: string; accent: string; icon: string; desc: string; metrics: Metric[]; tech: string[] };

const PROJECTS: Project[] = [
  {
    name: "KATİPÖZET",
    accent: "#2f6df6",
    icon: "📄",
    desc: "Uzun videoları ve dokümanları yapay zekâ ile saniyeler içinde özetler.",
    metrics: [ { v: "30.000+", l: "özet" }, { v: "1.000+", l: "kullanıcı" } ],
    tech: ["PYTHON", "FASTAPI", "LLM", "POSTGRES"],
  },
  {
    name: "MIANDELA",
    accent: "#e8453c",
    icon: "💗",
    desc: "Kişiselleştirilmiş dijital içerik ve etkileşimli ürün platformu.",
    metrics: [ { v: "5.000+", l: "içerik" }, { v: "500+", l: "kullanıcı" } ],
    tech: ["TYPESCRIPT", "NEXT.JS", "TAILWIND", "SUPABASE"],
  },
  {
    name: "UCUZ UÇAK",
    accent: "#f4c534",
    icon: "✈️",
    desc: "Uçuş fırsatlarını ve uygun fiyatları kolayca bulmayı sağlar.",
    metrics: [ { v: "1.000+", l: "kullanıcı" }, { v: "Günlük", l: "aktif" } ],
    tech: ["PYTHON", "SCRAPY", "REACT", "POSTGRES"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-4 lg:px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <SectionHead
          eyebrow="02 / PROJECTS"
          title="Öne Çıkan Projeler"
          desc="Gerçek kullanıcılarla buluşmuş, uçtan uca geliştirdiğim canlı ürünler."
        />
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {PROJECTS.map((p, i) => {
            const border: CSSProperties = { borderColor: p.accent };
            const bg: CSSProperties = { backgroundColor: p.accent };
            const text: CSSProperties = { color: p.accent };
            return (
              <Reveal key={p.name