"use client";

import { useTranslations } from "next-intl";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Distinction = () => {
  const t = useTranslations("Landing");
  const { ref, isVisible } = useScrollReveal(0.1);

  const pillars = ["pill1", "pill2", "pill3"];
  const statsKeys = [
    { key: "artisans", color: "text-primary", label: "artisansLabel" },
    { key: "reverence", color: "text-[#E57373]", label: "reverenceLabel" },
    { key: "commissions", color: "text-primary", label: "commissionsLabel" },
    { key: "support", color: "text-[#E57373]", label: "supportLabel" },
  ];

  const icons = ["verified_user", "payments", "star"];

  return (
    <section className="bg-black py-24 px-6 border-t border-white/5" id="why-choose" ref={ref as any}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className={`space-y-12 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="space-y-6">
              <h2 className="text-white text-5xl md:text-6xl font-display font-medium leading-tight">
                {t("Distinction.title")}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-lg">
                {t("Distinction.description")}
              </p>
            </div>
            <ul className="space-y-8">
              {pillars.map((pill, index) => (
                <li 
                  key={pill} 
                  className={`flex gap-4 group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 200 + 300}ms` }}
                >
                  <span className="material-symbols-outlined text-primary mt-1 group-hover:scale-110 transition-transform">{icons[index]}</span>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1 group-hover:text-primary transition-colors">{t(`Distinction.pills.${pill}.title`)}</h4>
                    <p className="text-white/50 text-sm">{t(`Distinction.pills.${pill}.description`)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={`grid grid-cols-2 gap-6 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            {statsKeys.map((stat, index) => (
              <div 
                key={stat.key} 
                className={`bg-[#111] p-12 rounded-lg flex flex-col items-center justify-center text-center space-y-2 border border-white/5 aspect-square hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100 + 400}ms` }}
              >
                <span className={`text-4xl font-display font-bold ${stat.color}`}>{t(`Distinction.stats.${stat.key}`)}</span>
                <span className="text-white/40 text-xs uppercase tracking-widest">{t(`Distinction.stats.${stat.label}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
