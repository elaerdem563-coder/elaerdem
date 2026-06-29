export default function Footer() {
  return (
    <footer id="iletisim" className="scroll-mt-24 border-t-[3px] border-[#17140f]">
      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2">
          <svg width="18" height="16" viewBox="0 0 7 6" shapeRendering="crispEdges" fill="#e8453c">
            <rect x="1" y="0" width="2" height="1" />
            <rect x="4" y="0" width="2" height="1" />
            <rect x="0" y="1" width="7" height="2" />
            <rect x="1" y="3" width="5" height="1" />
            <rect x="2" y="4" width="3" height="1" />
            <rect x="3" y="5" width="1" height="1" />
          </svg>
          <span className="font-bold uppercase tracking-wide text-sm text-[#17140f]">Kodla. Üret. Keşfet.</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/ela-erdem/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="pixel-box-sm w-10 h-10 grid place-items-center text-[#17140f] hover:text-[#2f6df6] transition-colors"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8h4V24h-4V8zM8 8h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.7-.03-3.9-2.38-3.9-2.38 0-2.74 1.86-2.74 3.78V24H8V8z" />
            </svg>
          </a>
          <a
            href="https://github.com/elaerdem563-coder"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="pixel-box-sm w-10 h-10 grid place-items-center text-[#17140f] hover:text-[#2f6df6] transition-colors"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
            </svg>
          </a>
          <a
            href="mailto:elaerdem563@gmail.com"
            aria-label="E-mail"
            className="pixel-box-sm w-10 h-10 grid place-items-center text-[#17140f] hover:text-[#2f6df6] transition-colors"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 6 10 7L22 6" />
            </svg>
          </a>
        </div>

        <a href="#hero" className="text-[11px] font-bold uppercase tracking-widest text-[#17140f]/60 hover:text-[#17140f]">
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
}
