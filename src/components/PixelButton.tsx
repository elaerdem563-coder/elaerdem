import type { AnchorHTMLAttributes, ReactNode } from "react";

type PixelButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "blue" | "red" | "yellow" | "light" | "dark";
  size?: "sm" | "md" | "lg";
};

const variants = {
  blue: "bg-[#1765f5] text-white",
  red: "bg-[#fffaf0] text-[#e83f45]",
  yellow: "bg-[#f5c82f] text-[#14110c]",
  light: "bg-[#fffaf0] text-[#14110c]",
  dark: "bg-[#14110c] text-[#fffaf0]",
};

const sizes = {
  sm: "px-3 py-2 text-[10px]",
  md: "px-5 py-3 text-[11px] sm:text-[12px]",
  lg: "px-6 py-4 text-[12px] sm:text-[13px]",
};

export default function PixelButton({
  children,
  variant = "blue",
  size = "md",
  className = "",
  ...props
}: PixelButtonProps) {
  return (
    <a
      className={`pixel-btn font-pixel uppercase leading-none ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
