import { ArrowUp, Download, Mail } from "lucide-react";
import type { ReactNode } from "react";
import PixelButton from "@/components/PixelButton";

export default function Footer() {
  return (
    <footer id="contact" className="page-band section-block pb-8">
      <div className="page-inner">
        <div className="pixel-border overflow-hidden bg-[#14110c] text-[#fffaf0]">
          <div className="grid gap-8 p-6 md:grid-cols-[1fr_auto] md:items-end lg:p-9">
            <div>
              <span className="font-pixel text-[10px] text-[#f5c82f]">07 / CONTACT</span>
              <h2 className="mt-4 font-pixel text-[30px] leading-tight sm:text-[44px]">İletişim</h2>
              <p className="mt-5 max-w-2xl text-[16px] font-semibold leading-8 text-[#fffaf0]/76">
                Yeni projeler, iş birlikleri ve fırsatlar için benimle iletişime geçebilirsiniz.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Social href="https://www.linkedin.com/in/ela-erdem/" label="LinkedIn">
                <LinkedInIcon />
              </Social>
              <Social href="https://github.com/elaerdem563-coder" label="GitHub">
                <GitHubIcon />
              </Social>
              <Social href="mailto:elaerdem563@gmail.com" label="Email">
                <Mail size={22} strokeWidth={3} />
              </Social>
            </div>
          </div>

          <div className="grid gap-4 border-t-[4px] border-[#fffaf0] bg-[#fffaf0] p-5 text-[#14110c] md:grid-cols-[1fr_auto_auto] md:items-center">
            <p className="font-pixel text-[12px] leading-6">
              <span className="text-[#e83f45]">Kodla.</span>{" "}
              <span className="text-[#1765f5]">Üret.</span>{" "}
              <span className="text-[#26b463]">Keşfet.</span>
            </p>
            <PixelButton
              href="https://www.linkedin.com/in/ela-erdem/"
              target="_blank"
              rel="noreferrer"
              variant="blue"
              size="sm"
            >
              CV İndir <Download size={15} strokeWidth={3} />
            </PixelButton>
            <PixelButton href="#home" variant="light" size="sm">
              Back to top <ArrowUp size={15} strokeWidth={3} />
            </PixelButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8h4V24h-4V8zM8 8h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.7-.03-3.9-2.38-3.9-2.38 0-2.74 1.86-2.74 3.78V24H8V8z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      aria-label={label}
      className="grid h-14 w-14 place-items-center border-[3px] border-[#fffaf0] bg-[#fffaf0] text-[#14110c] shadow-[4px_4px_0_0_#f5c82f] transition-transform duration-150 hover:-translate-y-1 hover:text-[#1765f5]"
    >
      {children}
    </a>
  );
}
