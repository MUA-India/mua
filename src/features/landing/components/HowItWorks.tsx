"use client";

import { useTranslations } from "next-intl";

export const HowItWorks = () => {
  const t = useTranslations("Landing.HowItWorks");

  return (
    <section className="px-6 py-24 bg-surface/30" id="how-it-works">
      <div className="max-w-[1200px] mx-auto text-center mb-16">
        <h2 className="text-primary text-4xl md:text-5xl font-black mb-4 uppercase font-display">{t("title")}</h2>
        <div className="w-24 h-1.5 bg-primary mx-auto mb-8"></div>
        <p className="text-white/80 text-xl max-w-2xl mx-auto font-light">{t("subtitle")}</p>
      </div>
      <div className="max-w-5xl mx-auto relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/30 hidden md:block"></div>
        <div className="space-y-12">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className={`flex flex-col md:flex-row items-center gap-8 ${step % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`flex-1 text-center md:text-${step % 2 === 0 ? 'left' : 'right'} ${step % 2 === 0 ? '' : 'hidden md:block'}`}>
                <h3 className="text-white text-2xl font-bold mb-2 uppercase font-display">{t(`step${step}.title`)}</h3>
                <p className="text-white/60">{t(`step${step}.description`)}</p>
              </div>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black font-black z-10 shrink-0">
                {step}
              </div>
              <div className={`flex-1 md:hidden text-center`}>
                <h3 className="text-white text-2xl font-bold mb-2 uppercase font-display">{t(`step${step}.title`)}</h3>
              </div>
              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
