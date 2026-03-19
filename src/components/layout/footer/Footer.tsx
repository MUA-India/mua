"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("Landing.Footer");

  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="text-secondary font-display font-black text-4xl tracking-tighter uppercase transition-colors">
              MUA<span className="text-primary animate-pulse">.</span>
            </Link>
            <p className="text-black/60 text-sm max-w-sm leading-relaxed italic">
              {t("about")}
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">{t("links.title")}</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">{t("links.home")}</Link></li>
              <li><Link href="/artists" className="hover:text-primary transition-colors">{t("links.artists")}</Link></li>
              <li><Link href="/portal" className="hover:text-primary transition-colors">{t("links.portal")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><Link href="/terms" className="hover:text-primary transition-colors">{t("links.terms")}</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">{t("links.privacy")}</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-[10px] uppercase tracking-widest">
            {t("rights")}
          </p>
          <div className="flex gap-6">
             {/* Social placeholders could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
