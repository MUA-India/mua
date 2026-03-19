"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher, ThemeSwitcher } from "@/components/shared";

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
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md px-6 py-4">
      <div className="max-width-[1200px] mx-auto flex items-center justify-between">
        <Link href="/" className="text-secondary font-display font-black text-3xl tracking-tighter uppercase transition-colors">
          MUA<span className="text-primary animate-pulse">.</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-10 text-black/60 text-xs font-bold uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="hover:text-primary transition-colors"
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
