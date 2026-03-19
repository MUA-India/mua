"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const PortalCTA = () => {
  const t = useTranslations("Landing");
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="px-6 py-24 bg-black border-t border-white/5" id="mua-portal" ref={ref as any}>
      <div className={`max-w-[1200px] mx-auto bg-primary rounded-3xl p-12 md:p-24 overflow-hidden relative group ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/20 transition-colors duration-700"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <h2 className="text-black text-5xl md:text-7xl font-black leading-tight uppercase font-display">
               {t("PortalCTA.title")}
            </h2>
            <p className="text-black/80 text-xl font-light leading-relaxed">
              {t("PortalCTA.description")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full bg-black text-white hover:bg-black/80 font-black px-10 py-7 text-lg h-auto hover:scale-105 transition-transform">
                {t("PortalCTA.primaryCta")}
              </Button>
              <Button variant="ghost" size="lg" className="rounded-full text-black hover:bg-black/5 font-bold px-10 py-7 text-lg h-auto hover:scale-105 transition-transform">
                {t("PortalCTA.secondaryCta")}
              </Button>
            </div>
          </div>
          <div className="bg-black p-12 rounded-2xl shadow-2xl space-y-8">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm border-l-4 border-primary pl-4">Platform Benefits</h3>
            {[
              { icon: "schedule", text: "Smart Calendar Management" },
              { icon: "payments", text: "Secure Payment Processing" },
              { icon: "analytics", text: "Detailed Analytics Dashboard" }
            ].map((benefit, index) => (
              <div key={index} className="flex gap-6 items-center border-b border-white/10 pb-6 last:border-0 last:pb-0 group/item hover:pl-2 transition-all">
                <span className="material-symbols-outlined text-primary text-3xl group-hover/item:scale-110 transition-transform">{benefit.icon}</span>
                <span className="text-white text-lg font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
