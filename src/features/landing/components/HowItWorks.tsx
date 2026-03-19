"use client";

import { useTranslations } from "next-intl";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const HowItWorks = () => {
  const t = useTranslations("Landing");
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="px-6 py-24 bg-black border-t border-white/5" id="how-it-works" ref={ref as any}>
      <div className={`max-w-[1200px] mx-auto text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <h2 className="text-primary text-4xl md:text-5xl font-black mb-4 uppercase font-display">{t("HowItWorks.title")}</h2>
        <div className={`h-1.5 bg-primary mx-auto mb-8 ${isVisible ? 'animate-line-grow' : 'w-0'}`}></div>
        <p className="text-white/80 text-xl max-w-2xl mx-auto font-light">{t("HowItWorks.subtitle")}</p>
      </div>
      <div className="max-w-5xl mx-auto relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/30 hidden md:block"></div>
        <div className="space-y-12">
          {[1, 2, 3, 4].map((step) => (
            <div 
              key={step} 
              className={`flex flex-col md:flex-row items-center gap-8 ${step % 2 === 0 ? 'md:flex-row-reverse' : ''} ${isVisible ? (step % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right') : 'opacity-0'}`}
              style={{ animationDelay: `${step * 150}ms` }}
            >
              <div className={`flex-1 text-center md:text-${step % 2 === 0 ? 'left' : 'right'} ${step % 2 === 0 ? '' : 'hidden md:block'}`}>
                <h3 className="text-white text-2xl font-bold mb-2 uppercase font-display">{t(`HowItWorks.step${step}.title`)}</h3>
                <p className="text-white/60">{t(`HowItWorks.step${step}.description`)}</p>
              </div>
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-black font-black z-10 shrink-0 shadow-lg shadow-primary/30 hover:scale-110 transition-transform">
                {step}
              </div>
              <div className={`flex-1 md:hidden text-center`}>
                <h3 className="text-white text-2xl font-bold mb-2 uppercase font-display">{t(`HowItWorks.step${step}.title`)}</h3>
              </div>
              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
