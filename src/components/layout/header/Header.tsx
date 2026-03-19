"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ThemeSwitcher } from "@/components/shared";

export const Header = () => {
  const t = useTranslations("Landing.Header");

  const navLinks = [
    { href: "#about", label: "vision" },
    { href: "#how-it-works", label: "howItWorks" },
    { href: "#services", label: "services" },
    { href: "#why-choose", label: "whyMUA" },
    { href: "#mua-portal", label: "portal" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-xl px-6 py-4 animate-fade-in-down">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image 
            src="/mua-logo.png" 
            alt="MUA" 
            width={36} 
            height={36} 
            className="invert brightness-0 group-hover:scale-110 transition-transform"
          />
          <span className="text-white font-display font-black text-2xl tracking-tighter uppercase">
            MUA<span className="text-primary">.</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-10 text-white/50 text-xs font-bold uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {t(link.label)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
