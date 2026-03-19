"use client";

import { useTranslations } from "next-intl";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Testimonials = () => {
  const t = useTranslations("Landing");
  const { ref, isVisible } = useScrollReveal(0.1);

  const users = ["item1", "item2", "item3"];

  return (
    <section className="px-6 py-24 bg-black border-t border-white/5" ref={ref as any}>
      <div className="max-w-[1200px] mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-primary text-5xl md:text-6xl font-black uppercase mb-4 font-display italic animate-glow-pulse">{t("Testimonials.title")}</h2>
          <div className={`h-1.5 bg-primary mx-auto ${isVisible ? 'animate-line-grow' : 'w-0'}`}></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {users.map((user, index) => (
            <div 
              key={user} 
              className={`bg-[#111] p-10 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-500 flex flex-col justify-between min-h-[400px] hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200 + 200}ms` }}
            >
              <div className="space-y-6">
                <span className="material-symbols-outlined text-primary text-4xl">format_quote</span>
                <p className="text-white text-lg leading-relaxed font-light italic">
                   {t(`Testimonials.${user}.text`)}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-black text-black">
                  {t(`Testimonials.${user}.author`).charAt(0)}
                </div>
                <div>
                  <p className="text-white font-bold text-sm uppercase tracking-wide">{t(`Testimonials.${user}.author`)}</p>
                  <p className="text-primary text-xs font-black uppercase tracking-tighter">{t(`Testimonials.${user}.role`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
