"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Contact = () => {
  const t = useTranslations("Landing");
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="bg-black py-24 border-t border-white/5 relative overflow-hidden" ref={ref as any}>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.05)_0%,transparent_100%)]"></div>
      <div className={`max-w-[1200px] mx-auto px-6 text-center space-y-12 relative z-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] font-display">
            {t("Contact.title")}
          </h2>
          <p className="text-white/60 text-xl font-light leading-relaxed">
            {t("Contact.description")}
          </p>
        </div>
        <div className={`flex flex-wrap justify-center gap-6 ${isVisible ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'}`}>
          <Button size="lg" className="rounded-full bg-primary text-black hover:bg-primary/90 font-black px-12 py-8 text-xl shadow-2xl shadow-primary/30 h-auto uppercase hover:scale-105 transition-transform">
            {t("Contact.cta1")}
          </Button>
          <Button size="lg" variant="outline" className="rounded-full border-2 border-white text-white hover:bg-white hover:text-black font-bold px-12 py-8 text-xl h-auto uppercase hover:scale-105 transition-transform">
            {t("Contact.cta2")}
          </Button>
        </div>
      </div>
    </section>
  );
};
